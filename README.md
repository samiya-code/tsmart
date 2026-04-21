# T-Smart - Premium Fashion Boutique

A modern, responsive e-commerce website built with HTML, CSS, and JavaScript featuring a boutique-style design with complete shopping cart functionality.

## Features

### Frontend
- **Modern Boutique Design**: Gradient backgrounds, smooth animations, and glass morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices (desktop, tablet, mobile)
- **Interactive Shopping Cart**: Add/remove items, quantity controls, real-time updates
- **Product Gallery**: Featured products with hover effects and quick-add functionality
- **Newsletter Signup**: Email validation and subscription system
- **Smooth Navigation**: Animated scrolling and mobile-friendly menu

### User Experience
- **Micro-interactions**: Hover effects, transitions, and loading animations
- **Touch Support**: Mobile-optimized touch interactions and swipe gestures
- **Notifications**: Non-intrusive notification system for user feedback
- **Search Functionality**: Product search with real-time filtering
- **Performance Optimized**: Lazy loading, debounced events, and optimized animations

## Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with gradients, animations, and flexbox/grid
- **JavaScript ES6+**: Modern JavaScript with DOM manipulation
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

## Project Structure

```
tsmart/
|-- index.html          # Main HTML file
|-- index.css           # Original CSS styles
|-- enhanced-styles.css # Enhanced boutique styles
|-- script.js           # JavaScript functionality
|-- README.md           # This file
```

## Quick Start

1. **Clone or download** the project files to your local machine
2. **Open `index.html`** in your web browser
3. **Explore the features**:
   - Navigate through different sections
   - Add products to cart
   - Test the shopping cart functionality
   - Try the newsletter signup
   - Test responsive design by resizing browser

## File Descriptions

### `index.html`
- Complete HTML structure with semantic tags
- All sections: header, hero, features, products, banners, newsletter, footer
- Shopping cart modal
- Responsive navigation menu

### `index.css`
- Base CSS styles provided by user
- Original layout and positioning
- Basic responsive design

### `enhanced-styles.css`
- Modern boutique design enhancements
- Gradient backgrounds and animations
- Interactive hover effects
- Mobile responsiveness improvements
- Shopping cart modal styling

### `script.js`
- Shopping cart functionality (add/remove/update items)
- Event listeners and user interactions
- Animation initialization
- Newsletter signup handling
- Search functionality
- Mobile touch enhancements
- Performance optimizations

## Shopping Cart Features

- **Add to Cart**: Click cart icon on any product
- **View Cart**: Click shopping bag icon in header
- **Update Quantity**: Use + and - buttons in cart modal
- **Remove Items**: Click trash icon to remove products
- **Cart Counter**: Real-time item count in header
- **Total Calculation**: Automatic price total updates

## Customization

### Colors and Branding
Edit `enhanced-styles.css` to customize:
- Primary gradients (`#667eea`, `#764ba2`)
- Accent colors (`#ff6b6b`, `#ffd700`)
- Font families and sizes

### Products
Update `script.js` in the `getProductDetails()` function:
```javascript
const products = {
    '1': {
        id: '1',
        name: 'Your Product Name',
        price: 99.99,
        image: 'path/to/your/image.jpg'
    }
    // Add more products...
};
```

### Images
Replace placeholder URLs with your actual product images:
- Hero section background
- Product images
- Banner backgrounds
- Footer payment method images

## Browser Support

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Full support

## Performance Features

- **Lazy Loading**: Images load as needed
- **Debounced Events**: Optimized scroll and resize handlers
- **CSS Animations**: Hardware-accelerated transitions
- **Minimized Reflows**: Efficient DOM manipulation

## Mobile Features

- **Touch Gestures**: Swipe support for navigation
- **Responsive Design**: Adapts to all screen sizes
- **Mobile Menu**: Hamburger menu for small screens
- **Touch-Friendly**: Larger tap targets for mobile users

## Future Enhancements

- **Backend Integration**: Connect to a real e-commerce platform
- **Payment Processing**: Integrate payment gateways
- **User Accounts**: Add login and user profiles
- **Product Filtering**: Category and price filtering
- **Wishlist**: Save favorite items
- **Reviews**: Customer review system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository or contact the development team.

---

**T-Smart** - Where Fashion Meets Technology

*Built with passion for modern e-commerce experiences*
