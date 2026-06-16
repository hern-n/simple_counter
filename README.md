# Counter Online

A simple, elegant counter application built with React. Features increment, decrement, and reset functionality with a clean green-themed UI. Deployed on Vercel.

## Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 19 |
| Bundler | Create React App |
| Testing | React Testing Library + Jest |
| Deploy | Vercel |

## Features

- **Increment/Decrement**: Large + and - buttons for easy interaction
- **Reset**: One-click reset to zero
- **Responsive**: Full-screen layout that adapts to any device
- **Green Theme**: Clean, accessible color scheme

## Usage

```bash
npm install        # Install dependencies
npm start          # Start dev server (port 3000)
npm run dev        # Alias for start
npm run build      # Production build
npm test           # Run tests
```

## Project Structure

```
counter_online/
├── src/
│   ├── App.js                 # Main component with state logic
│   ├── App.css                # Styles
│   ├── components/
│   │   ├── CounterDisplay.js  # Shows current count
│   │   ├── CounterButtons.js  # + and - buttons
│   │   └── ResetButton.js     # Reset to zero
│   └── index.js               # Entry point
├── api/                        # API routes (Vercel serverless)
├── public/                     # Static assets
└── vercel.json                 # Vercel deployment config
```

## Deploy

The project includes `vercel.json` for easy deployment. Connect to Vercel via Git for automatic deploys.

## License

MIT
