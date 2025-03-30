Horoscope Web Application

Project Description

This web application provides horoscope forecasts for users based on their selected zodiac sign. Users can view forecasts for 3 or 7 days ahead, including ratings for health, relationships, and career. The design emphasizes user convenience and aesthetic appeal, with interactive elements such as theme switching and dynamic content.

Features

Zodiac Sign Selection

Theme Switching

Zodiac Sign Visualization

Forecast Period Switching

Calendar Integration

Ratings Visualization

Ratings Generation

Key Indicator Display

API Integration

Share Link Button

Technologies Used

Framework: Next.js (with TypeScript support)

Styling: SCSS, CSS Modules

API Requests: Fetch/Axios for data retrieval

State Management: localStorage for storing ratings

How to Start the Project Locally

Ensure you have Node.js installed (version ≥16.x) along with npm.

Clone the project repository (if downloaded from GitHub):

git clone <repository_url>

Navigate to the project directory:

cd my-horoscope-app

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and go to http://localhost:3000 to view the application.

Visual Structure

The layout of the application follows this structure:

Dropdown menu for selecting a zodiac sign.

Icon button for toggling between light and dark themes.

Display of an image/logo corresponding to the selected zodiac sign.

Toggle switch for selecting forecast periods (3 or 7 days).

Calendar display showing daily forecasts with ratings for health, relationships, and career.

Visualization representing zodiac mood.

Randomly generated ratings that remain consistent across page reloads.

Highlighting of key indicators (best/worst rating).

Display of a random cat fact based on average rating values.

Button for copying the page link to share with others.
