// Shopping Cart Functionality
let cart = [];
let cartCount = 0;

// DOM Elements
const cartModal = document.getElementById('cart-modal');
const cartCountElement = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const closeBtn = document.querySelector('.close');
const cartIcon = document.querySelector('.cart-icon');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateCartUI();
    initializeAnimations();
    initializeNewsletter();
});

// Event Listeners
function initializeEventListeners() {
    // Cart functionality
    document.querySelectorAll('.cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productElement = this.closest('.pro');
            const productId = productElement.dataset.id;
            addToCart(productId);
        });
    });

    // Cart modal
    cartIcon.addEventListener('click', openCartModal);
    closeBtn.addEventListener('click', closeCartModal);
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });

    // Mobile menu toggle
    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    
    if (bar) {
        bar.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Product hover effects
    document.querySelectorAll('.pro').forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        product.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Banner buttons
    document.querySelectorAll('#banner button, #sm-banner button').forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = document.getElementById('product1');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Checkout button
    document.querySelector('.checkout-btn')?.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        showNotification('Proceeding to checkout...');
        // Here you would typically redirect to a checkout page
    });
}

// Cart Functions
function addToCart(productId) {
    const product = getProductDetails(productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartUI();
        showNotification(`${product.name} added to cart!`);
        
        // Animate cart icon
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

function getProductDetails(productId) {
    const products = {
        '1': {
            id: '1',
            name: 'Premium Summer Dress',
            price: 89.99,
            image: 'https://via.placeholder.com/250x300/ffe4e1/000000?text=Premium+Dress'
        },
        '2': {
            id: '2',
            name: 'Designer Leather Bag',
            price: 159.99,
            image: 'https://via.placeholder.com/250x300/e6e6fa/000000?text=Designer+Bag'
        },
        '3': {
            id: '3',
            name: 'Casual Comfort Shoes',
            price: 79.99,
            image: 'https://via.placeholder.com/250x300/f0fff0/000000?text=Casual+Shoes'
        },
        '4': {
            id: '4',
            name: 'Luxury Smart Watch',
            price: 299.99,
            image: 'https://via.placeholder.com/250x300/fff5ee/000000?text=Luxury+Watch'
        }
    };
    
    return products[productId];
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Update cart count
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
    
    // Update cart modal
    updateCartModal();
}

function updateCartModal() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotalElement.textContent = total.toFixed(2);
}

function openCartModal() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Animations
function initializeAnimations() {
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature boxes and products
    document.querySelectorAll('.fe-box, .pro').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
        }, 300);
    }
}

// Newsletter functionality
function initializeNewsletter() {
    const emailInput = document.getElementById('email-input');
    const newsletterButton = document.querySelector('#newsletter button');
    
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Please enter your email address');
                return;
            }
            
            if (!validateEmail(email)) {
                showNotification('Please enter a valid email address');
                return;
            }
            
            // Simulate newsletter signup
            showNotification('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
            
            // Here you would typically send the email to your server
            console.log('Newsletter signup:', email);
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality (bonus feature)
function addSearchFeature() {
    const searchHTML = `
        <div class="search-container">
            <input type="text" id="search-input" placeholder="Search products...">
            <button id="search-btn"><i class="fas fa-search"></i></button>
        </div>
    `;
    
    // Add search to header
    const header = document.getElementById('header');
    const searchDiv = document.createElement('div');
    searchDiv.innerHTML = searchHTML;
    header.appendChild(searchDiv.firstElementChild);
    
    // Add search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.pro');
        
        products.forEach(product => {
            const productName = product.querySelector('h5').textContent.toLowerCase();
            const productBrand = product.querySelector('span').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productBrand.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Mobile responsiveness enhancements
function enhanceMobileExperience() {
    // Touch-friendly cart interactions
    if ('ontouchstart' in window) {
        document.querySelectorAll('.pro').forEach(product => {
            product.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            product.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Swipe gestures for mobile (optional enhancement)
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - could open cart or navigate
            console.log('Swipe left detected');
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - could close cart or go back
            console.log('Swipe right detected');
        }
    }
}

// Initialize mobile enhancements
enhanceMobileExperience();

// Performance optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            // Handle scroll-based animations
            handleScrollAnimations();
        });
    });
}

function handleScrollAnimations() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#hero');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

// Initialize performance optimizations
optimizePerformance();

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCartModal = openCartModal;
window.closeCartModal = closeCartModal;
