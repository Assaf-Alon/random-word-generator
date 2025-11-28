# Hebrew Song Word Game

A beautiful, mobile-friendly React web application for playing the Hebrew song word game. Generate random Hebrew words and challenge players to name songs containing those words!

## Features

- 🎵 **Song Game Optimized** - 1000 most common Hebrew words perfect for finding in songs
- 🎯 **Authentic Word List** - Based on linguistic frequency data from modern Hebrew corpus
- 🎨 **Premium UI/UX** - Modern design with vibrant gradients, glassmorphism effects, and smooth animations
- 📱 **Mobile-Friendly** - Fully responsive design optimized for all screen sizes
- ✨ **Smooth Animations** - Engaging micro-interactions and transitions
- 📝 **Easy to Customize** - Words stored in CSV format for simple manual editing
- 🌙 **Dark Theme** - Beautiful dark mode design with vibrant accents
- 🚀 **GitHub Pages** - Deployed and accessible from anywhere

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd c:\Code\random-word-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. When the app loads, a random Hebrew word with its English translation will be displayed
2. Players must think of a Hebrew song that contains that word
3. Click the "Generate New Word" button to get a new word
4. The app ensures you don't see the same word twice in a row

## Deployment

This app is automatically deployed to GitHub Pages via GitHub Actions.

### Live URL
Once deployed, your app will be available at:
`https://[your-username].github.io/random-word-generator/`

### Setup GitHub Pages
1. Push this code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to `master`

### Local Development

## Customizing the Word List

The Hebrew words are stored in `public/hebrew-words.csv`. You can easily modify this file to:

- Add new words
- Edit translations
- Update categories
- Remove words you don't need

### CSV Format

The CSV file has three columns:
```csv
hebrew,english,category
שלום,hello,greetings
תודה,thank you,expressions
```

- **hebrew**: The Hebrew word
- **english**: The English translation
- **category**: Optional category for the word (e.g., greetings, nouns, verbs)

After editing the CSV file, simply refresh the app to see your changes.

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **PapaParse** - CSV parsing library
- **CSS3** - Styling with custom properties and animations
- **Google Fonts** - Heebo (Hebrew) and Inter (English)

## Project Structure

```
random-word-generator/
├── public/
│   └── hebrew-words.csv          # Word database (easily editable)
├── src/
│   ├── components/
│   │   ├── WordDisplay.jsx       # Displays Hebrew word and translation
│   │   ├── WordDisplay.css
│   │   ├── GenerateButton.jsx    # Button to generate new words
│   │   └── GenerateButton.css
│   ├── services/
│   │   └── WordService.js        # Handles CSV loading and word selection
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # App-specific styles
│   ├── index.css                 # Global styles and design tokens
│   └── main.jsx                  # React entry point
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
└── package.json                  # Project dependencies

```

## Design Features

- **Glassmorphism** - Frosted glass effect with backdrop blur
- **Vibrant Gradients** - Purple and pink color scheme
- **Smooth Animations** - Fade-in effects and floating animations
- **Responsive Typography** - Scales beautifully across all devices
- **Hover Effects** - Interactive button with glow and lift effects
- **Mobile-First** - Optimized for touch interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal and educational use.

## Contributing

Feel free to submit issues or pull requests to improve the word list or add new features!
