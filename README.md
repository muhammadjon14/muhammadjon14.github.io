# Muhammadjon Iskandarov - Portfolio Website

A modern, responsive portfolio website featuring dark/light mode toggle and bilingual support (English/Uzbek).

## Features

- 🌙 **Dark/Light Mode Toggle** - Switch between themes with smooth transitions
- 🌍 **Language Switching** - Toggle between English and Uzbek languages
- 📱 **Responsive Design** - Optimized for all device sizes
- ♿ **Accessibility** - WCAG compliant with keyboard navigation support
- 🍎 **Apple Font Integration** - Uses SF Pro Display for clean, readable typography
- ⚡ **Smooth Animations** - Subtle hover effects and transitions
- 💾 **Persistent Settings** - Theme and language preferences saved in localStorage

## Usage

### Theme Toggle
- Click the moon/sun icon in the top-right corner
- Keyboard shortcut: `Ctrl/Cmd + D`

### Language Switch
- Click "EN" or "UZ" buttons in the header
- Keyboard shortcut: `Ctrl/Cmd + L`

### Navigation
- All sections are accessible via keyboard navigation
- Smooth scrolling between sections
- Focus indicators for accessibility

## File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # CSS with theme variables and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Customization

### Adding New Content
1. Add new sections to `index.html`
2. Include `data-en` and `data-uz` attributes for bilingual content
3. Style new sections in `styles.css`

### Modifying Colors
- Update CSS custom properties in `:root` and `[data-theme="dark"]`
- All colors are defined as CSS variables for easy theming

### Adding New Languages
1. Add new language buttons to the header
2. Update the `switchLanguage()` method in `script.js`
3. Add corresponding `data-[lang]` attributes to content elements

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript footprint
- Lazy loading for animations
- Print-friendly styles included

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Reduced motion preferences respected
- Focus management

## License

This portfolio template is free to use and modify for personal projects.
