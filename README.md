# Quinn's Conveyance - Hot Shot Trucking Website

A modern, responsive website for expedited freight and hot shot trucking services, inspired by professional logistics companies.

## 🚛 Features

- **Responsive Design** - Looks great on all devices
- **Modern UI** - Clean, professional appearance with blue/orange theme
- **Service Showcase** - Comprehensive hot shot trucking services
- **Developer Mode** - Built-in element editing and removal tool
- **Fast Performance** - Built with Vite for optimal loading speed

## 🛠️ Built With

- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid & Flexbox** - Modern responsive layouts
- **Inter Font** - Professional typography

## 🚀 Live Demo

Visit the live website: [https://yourusername.github.io/quinnsconveyance](https://yourusername.github.io/quinnsconveyance)

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/yourusername/quinnsconveyance.git
cd quinnsconveyance

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Developer Mode

This website includes a built-in developer mode for easy content editing:

1. Press `Ctrl + Shift + D` to activate developer mode
2. Click on any element to select it
3. Use "Remove Selected" to delete unwanted elements
4. Click "Save Changes" to download updated code
5. Press `ESC` to exit developer mode

## 📁 Project Structure

```
quinnsconveyance/
├── src/
│   ├── main.js          # Main JavaScript file
│   ├── style.css        # All styles and responsive design
│   ├── counter.js       # Utility functions
│   └── javascript.svg   # Assets
├── public/
│   └── vite.svg        # Public assets
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming:

```css
:root {
  --primary-blue: #1e40af;
  --secondary-blue: #3b82f6;
  --accent-orange: #f97316;
  --dark-blue: #1e3a8a;
  /* ... more colors */
}
```

### Services
Edit the services in `src/main.js` in the services grid section. Each service card includes:
- Icon (emoji or can be replaced with SVG)
- Title
- Description
- Learn more link

### Content
All content can be modified in the `src/main.js` file where the HTML template is defined.

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be automatically deployed on every push to main branch

### Manual Build
```bash
npm run build
# Upload the 'dist' folder to your web server
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adapted grid)
- **Mobile**: < 768px (single column, simplified navigation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the developer console for debug information
- Use the built-in developer mode for content editing

---

**Built with ❤️ for the logistics industry**