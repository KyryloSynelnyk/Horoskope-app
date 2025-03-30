
"use client";

import axios from "axios";
import { useState, useEffect,useMemo } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Switch,
  FormControlLabel,
  Button,
  Grid,
  Icon,
} from "@mui/material";
import styles from "./styles.module.css";
import HoroskopeChart from './HoroskopeChart';
import { ZodiacSigns, ZodiacImages, HealthIcon, RelationshipIcon, CareerIcon, getDailyForecast, getZodiacDescription } from './zodiacData.js';


export default function Home() {

  const [healthScore, setHealthScore] = useState(0);
  const [relationshipScore, setRelationshipScore] = useState(0);
  const [careerScore, setCareerScore] = useState(0);
  const [catFact, setCatFact] = useState("");
  const [selectedSign, setSelectedSign] = useState(() => localStorage.getItem('selectedSign') || ZodiacSigns[0]);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || "light");
  const [forecastDays, setForecastDays] = useState(() => Number(localStorage.getItem('forecastDays')) || 7);
  const [forecastData, setForecastData] = useState<Date[]>([]);
  const [factLink, setFactLink] = useState("");

  const datesArray = [];
  const today = new Date();
  const todayData = forecastData.find((dayData) => dayData.date.toDateString() === new Date().toDateString());

  const handleSignChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const newSign = e.target.value as string;
    setSelectedSign(newSign);
    setForecastDays(7);
    localStorage.setItem('selectedSign', newSign);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add(styles.darkMode);
    } else {
      document.body.classList.remove(styles.darkMode);
    }
  }, [theme]);

  const handleCopyLink= () => {
    if (factLink) {
      navigator.clipboard.writeText(factLink)
        .then(() => {
        })
        .catch((error) => {
          console.error("Failed to copy the link:", error);
        });
    }
  };

  const toggleForecast = () => {
    const newForecastDays = forecastDays === 3 ? 7 : 3;
    setForecastDays(newForecastDays);
    localStorage.setItem('forecastDays', String(newForecastDays));
  };

  useEffect(() => {
    const generateScores = () => {
      const date = new Date();
      const signIndex = ZodiacSigns.indexOf(selectedSign);

      const datesArray = [];

      for (let i = 0; i < forecastDays; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);

        const dailyHealth = Math.floor(Math.random() * 100);
        const dailyRelationship = Math.floor(Math.random() * 100);
        const dailyCareer = Math.floor(Math.random() * 100);

        // Store the generated scores in localStorage
        localStorage.setItem(`healthScore_${selectedSign}_${date.toDateString()}`, String(dailyHealth));
        localStorage.setItem(`relationshipScore_${selectedSign}_${date.toDateString()}`, String(dailyRelationship));
        localStorage.setItem(`careerScore_${selectedSign}_${date.toDateString()}`, String(dailyCareer));

        datesArray.push({
          date: date,
          healthScore: dailyHealth,
          relationshipScore: dailyRelationship,
          careerScore: dailyCareer,
        });
      }

      return datesArray;
    };

    const datesArray = [];

    for (let i = 0; i < forecastDays; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      const storedHealthScore = localStorage.getItem(`healthScore_${selectedSign}_${date.toDateString()}`);
      const storedRelationshipScore = localStorage.getItem(`relationshipScore_${selectedSign}_${date.toDateString()}`);
      const storedCareerScore = localStorage.getItem(`careerScore_${selectedSign}_${date.toDateString()}`);

      if (storedHealthScore && storedRelationshipScore && storedCareerScore) {
        // If the scores exist in localStorage, use them
        datesArray.push({
          date: date,
          healthScore: Number(storedHealthScore),
          relationshipScore: Number(storedRelationshipScore),
          careerScore: Number(storedCareerScore),
        });
      } else {
        const newScores = generateScores();
        datesArray.push(...newScores);
        break;
      }
    }

    setForecastData(datesArray);

  }, [forecastDays, selectedSign]);

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await axios.get("https://catfact.ninja/fact");
        setCatFact(response.data.fact);
        setFactLink(`https://catfact.ninja/fact`);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatFact();
  }, []);

  const updatedForecastData = useMemo(() => {
    return forecastData.map(day => {
      const bestScore = Math.max(day.healthScore, day.relationshipScore, day.careerScore);
      const worstScore = Math.min(day.healthScore, day.relationshipScore, day.careerScore);

      return {
        ...day,
        bestScores: {
          healthScore: day.healthScore === bestScore,
          relationshipScore: day.relationshipScore === bestScore,
          careerScore: day.careerScore === bestScore,
        },
        worstScores: {
          healthScore: day.healthScore === worstScore,
          relationshipScore: day.relationshipScore === worstScore,
          careerScore: day.careerScore === worstScore,
        },
      };
    });
  }, [forecastData]);

  return (
    <Box className={`${styles.container} ${theme === "dark" ? styles.darkMode : ""}`}>
        <Box className={styles.header}>
          <Typography variant="h4" className={styles.title}>
            Гороскоп
          </Typography>
          <Box display="flex" alignItems="center">

            <FormControlLabel
              control={<Switch checked={theme === "dark"} onChange={toggleTheme} />}
              label={theme === "light" ? "Світла тема" : "Темна тема"}
              className={styles.label}
            />
          </Box>
        </Box>

        <Box className={styles.zodiacBox}>
          <img
            src={ZodiacImages[selectedSign]}
            alt={selectedSign}
            className={styles.zodiacImage}
          />
          <Select
            value={selectedSign}
            onChange={handleSignChange}
            className={styles.select}
          >
            {ZodiacSigns.map((sign) => (
              <MenuItem key={sign} value={sign}>
                {sign}
              </MenuItem>
            ))}
          </Select>
          <FormControlLabel
            control={<Switch checked={forecastDays === 7} onChange={toggleForecast} />}
            label={forecastDays === 3 ? "3 дні" : "7 днів"}
            className={styles.label}
            id="switchLabel"
          />
        </Box>

        <Grid container spacing={2} className={styles.gridContainer}>
          {updatedForecastData.map((dayData, index) => (
            <Grid item xs={12 / forecastDays} key={index} className={styles.gridElement}>
              <Box className={styles.gridItem}>
                <Typography variant="h7">{getDailyForecast(dayData.date)}</Typography>
                <Box className={styles.forecastBox}>
                  {/* Career Score */}
                  <Box className={styles.iconWithText}>
                    <img src={CareerIcon} alt="Кар'єра" className={styles.icon} />
                    <Typography
                      variant="body2"
                      className={
                        dayData.bestScores.careerScore
                          ? styles.bestScore
                          : dayData.worstScores.careerScore
                          ? styles.worstScore
                          : ""
                      }
                    >
                      {dayData.careerScore}
                    </Typography>
                  </Box>
                  {/* Relationship Score */}
                  <Box className={styles.iconWithText}>
                    <img src={RelationshipIcon} alt="Відносини" className={styles.icon} />
                    <Typography
                      variant="body2"
                      className={
                        dayData.bestScores.relationshipScore
                          ? styles.bestScore
                          : dayData.worstScores.relationshipScore
                          ? styles.worstScore
                          : ""
                      }
                    >
                      {dayData.relationshipScore}
                    </Typography>
                  </Box>
                  {/* Health Score */}
                  <Box className={styles.iconWithText}>
                    <img src={HealthIcon} alt="Здоров'я" className={styles.icon} />
                    <Typography
                      variant="body2"
                      className={
                        dayData.bestScores.healthScore
                          ? styles.bestScore
                          : dayData.worstScores.healthScore
                          ? styles.worstScore
                          : ""
                      }
                    >
                      {dayData.healthScore}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className={styles.footerContainer}>

        {todayData && (
          <HoroskopeChart
            careerScore={todayData.careerScore}
            relationshipScore={todayData.relationshipScore}
            healthScore={todayData.healthScore}
          />
        )}

        <Box className={styles.descriptionColumn}>
          <Typography variant="body2" className={styles.descriptionText} id="healthDescription">
            <span className={styles.descriptionTitle}>Кар'єра:</span> Оцінює ваш професійний успіх та задоволеність роботою. Високий бал говорить про кар'єрний ріст та визнання, низький - про можливі труднощі та необхідність переглянути свої цілі.
          </Typography>
          <Typography variant="body2" className={styles.descriptionText} id="relationshipDescription">
            <span className={styles.descriptionTitle}>Відносини:</span> Показує гармонію та якість ваших взаємин з оточенням, будь то сім'я, друзі чи партнери. Високий бал свідчить про міцні та підтримуючі зв'язки, низький - про можливі конфлікти чи недорозуміння.
          </Typography>
          <Typography variant="body2" className={styles.descriptionText} id="careerDescription">
            <span className={styles.descriptionTitle}>Здоров'я:</span> Відображає загальне стан вашого фізичного та емоційного добробуту. Високий бал вказує на хороше здоров'я та енергійність, низький - на необхідність звернути увагу на своє здоров'я.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.mainFooter}>
         <Typography variant="body2" className={styles.fact} dangerouslySetInnerHTML={{ __html: getZodiacDescription(selectedSign, careerScore, relationshipScore, healthScore) }} />
      </Box>

      <Box className={styles.lightFooter}>
          <Typography variant="body1" className={styles.fact} id='factParagraph'>
            {catFact && `Факт про котів: ${catFact}`}
          </Typography>
          <Button variant="outlined" className={styles.shareButton} onClick={handleCopyLink}>
            Поділитися посиланням
          </Button>
      </Box>

      <Box className={styles.footer}>
        <Typography variant="body2">&copy; 2025 Гороскоп</Typography>
      </Box>
    </Box>

  );
}
