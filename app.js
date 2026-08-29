/**
 * CampusTech Student Store - Shopping Cart & Store Logic
 * Vanilla JavaScript (ES6+) - Fully Functional & Zero Dependencies
 */

(function () {
  'use strict';

  // ==========================================
  // 1. PRODUCT CATALOG DATA
  // ==========================================
  const PRODUCTS = [
    // --- Laptops ---
    {
      id: 1,
      name: "CyberBlade 14 Pro Laptop",
      category: "laptops",
      price: 1299.99,
      originalPrice: 1499.99,
      badge: "deal",
      badgeText: "Save $200",
      rating: 4.9,
      reviews: 142,
      specs: ["14\" 2.8K OLED 120Hz", "32GB RAM", "1TB Gen4 NVMe", "M-Chip / RTX 4060"],
      description: "The ultimate student powerhouse. Blazing-fast compilation times, vapor chamber cooling, and 18-hour battery for all-day campus lectures.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "💻"
    },
    {
      id: 9,
      name: "CampusBook Air 13 Ultralight",
      category: "laptops",
      price: 849.99,
      originalPrice: 949.99,
      badge: "bestseller",
      badgeText: "Best Seller",
      rating: 4.8,
      reviews: 218,
      specs: ["13.3\" 2.5K Retina Display", "16GB Unified RAM", "512GB SSD", "1.1kg Featherweight"],
      description: "Designed for lecture halls and coffee shops. Silent fanless design with up to 20 hours of real-world battery life.",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "💻"
    },
    {
      id: 10,
      name: "TitanForge 16 Studio & Game Workstation",
      category: "laptops",
      price: 1599.99,
      originalPrice: 1899.99,
      badge: "deal",
      badgeText: "Pro Gear",
      rating: 4.9,
      reviews: 95,
      specs: ["16\" QHD+ 240Hz", "Ryzen 9 8945HS", "RTX 4070 8GB", "64GB DDR5 / 2TB SSD"],
      description: "Built for AI engineering, 3D rendering, machine learning modeling, and high-FPS gaming in the dorm.",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "💻"
    },
    {
      id: 11,
      name: "FlexTab Pro 2-in-1 Touch Laptop",
      category: "laptops",
      price: 699.99,
      originalPrice: 799.99,
      badge: "new",
      badgeText: "Stylus Included",
      rating: 4.7,
      reviews: 130,
      specs: ["14\" FHD Touchscreen", "360° Foldable Hinge", "16GB RAM / 512GB SSD", "Active Stylus Pen"],
      description: "Flip into tablet mode for handwritten math notes, digital sketching, and interactive textbook highlighting.",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "💻"
    },

    // --- Keyboards ---
    {
      id: 2,
      name: "AuraKey Pro RGB Mechanical Keyboard",
      category: "keyboards",
      price: 89.99,
      originalPrice: 119.99,
      badge: "bestseller",
      badgeText: "Best Seller",
      rating: 4.8,
      reviews: 320,
      specs: ["Hot-Swappable Switches", "Tri-Mode Wireless", "PBT Keycaps", "Gasket Mounted"],
      description: "Satisfying acoustic clacks with whisper-quiet tactile switches. Programmable macros and multi-device pairing for Mac & Windows.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "⌨️"
    },
    {
      id: 12,
      name: "CyberCompact 65% Wireless Keyboard",
      category: "keyboards",
      price: 69.99,
      originalPrice: 89.99,
      badge: "deal",
      badgeText: "Desk Saver",
      rating: 4.7,
      reviews: 180,
      specs: ["65% Compact Layout", "Silent Red Linear Switches", "CNC Aluminum Base", "Per-Key RGB"],
      description: "Saves maximum desk space for textbook reading and wide mouse movements. Pre-lubed switches for buttery smooth typing.",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "⌨️"
    },
    {
      id: 13,
      name: "TypeMaster Ergo Split Mechanical Keyboard",
      category: "keyboards",
      price: 129.99,
      originalPrice: 159.99,
      badge: "new",
      badgeText: "Ergonomic Choice",
      rating: 4.9,
      reviews: 88,
      specs: ["Split Ergonomic Body", "Gateron Brown Tactile", "OLED Macro Screen", "Padded Wrist Rests"],
      description: "Recommended by posture specialists to prevent wrist fatigue and RSI during long software coding sprints.",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "⌨️"
    },
    {
      id: 14,
      name: "QuietTouch Slim Bluetooth Keyboard",
      category: "keyboards",
      price: 39.99,
      originalPrice: 49.99,
      badge: null,
      badgeText: "",
      rating: 4.6,
      reviews: 145,
      specs: ["Scissor-Switch Silent Keys", "Multi-OS Quick Switch", "Rechargeable USB-C", "5mm Ultra-Thin"],
      description: "Zero key clatter—perfect for quiet university libraries and shared dorm rooms. Slips effortlessly into any backpack sleeve.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "⌨️"
    },

    // --- Audio & ANC ---
    {
      id: 3,
      name: "SonicPulse ANC Wireless Headphones",
      category: "audio",
      price: 149.99,
      originalPrice: 199.99,
      badge: "deal",
      badgeText: "Student Choice",
      rating: 4.9,
      reviews: 215,
      specs: ["Hybrid ANC (-42dB)", "45h Battery Life", "Spatial Audio", "Multipoint Connect"],
      description: "Block noisy dorm corridors and cafe bustle. Audiophile-grade 40mm titanium drivers with plush memory foam earcups.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🎧"
    },
    {
      id: 15,
      name: "AeroPods Pro ANC Wireless Earbuds",
      category: "audio",
      price: 79.99,
      originalPrice: 99.99,
      badge: "bestseller",
      badgeText: "Popular",
      rating: 4.8,
      reviews: 310,
      specs: ["Active Noise Cancellation", "Transparency Mode", "IPX5 Sweatproof", "32h Total Playtime"],
      description: "Pocket-sized audio powerhouse for campus commutes, gym workouts, and crystal-clear Zoom lecture questions.",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🎧"
    },
    {
      id: 16,
      name: "StudioStream USB Condenser Microphone",
      category: "audio",
      price: 59.99,
      originalPrice: 79.99,
      badge: "deal",
      badgeText: "Clear Voice",
      rating: 4.7,
      reviews: 140,
      specs: ["Cardioid Pickup Pattern", "Tap-to-Mute Sensor", "Built-in Shock Mount", "Dynamic RGB Ring"],
      description: "Broadcast-quality voice clarity for online group presentations, remote job interviews, and campus streaming.",
      image: "https://images.unsplash.com/photo-1590658006821-04f4008d5717?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🎙️"
    },
    {
      id: 17,
      name: "SoundSphere 360 Bluetooth Study Speaker",
      category: "audio",
      price: 44.99,
      originalPrice: 59.99,
      badge: "new",
      badgeText: "New Arrival",
      rating: 4.8,
      reviews: 78,
      specs: ["360° Omnidirectional Audio", "IP67 Waterproof", "24h Playtime", "Dual Bass Radiators"],
      description: "Rich room-filling sound for dorm study lo-fi playlists and weekend campus hangouts with friends.",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🔊"
    },

    // --- Peripherals ---
    {
      id: 4,
      name: "AeroGlide Ergonomic Wireless Mouse",
      category: "peripherals",
      price: 49.99,
      originalPrice: 69.99,
      badge: "deal",
      badgeText: "28% Off",
      rating: 4.7,
      reviews: 98,
      specs: ["4K DPI Sensor", "Silent Micro-Switches", "Thumb Scroll Wheel", "70-Day Battery"],
      description: "Eliminate wrist fatigue during late-night coding or design assignments. Ultra-quiet clicking won't disturb roommates.",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🖱️"
    },
    {
      id: 5,
      name: "NovaView 27\" 4K USB-C Study Monitor",
      category: "peripherals",
      price: 299.99,
      originalPrice: 359.99,
      badge: "bestseller",
      badgeText: "Top Rated",
      rating: 4.9,
      reviews: 84,
      specs: ["4K UHD IPS Panel", "90W USB-C PD Charging", "HDR400", "Low Blue Light Eye Care"],
      description: "Single-cable laptop docking and charging. Split-screen coding and textbook reading with flicker-free anti-glare.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🖥️"
    },
    {
      id: 18,
      name: "UltraGlide Precision Glass Mousepad",
      category: "peripherals",
      price: 29.99,
      originalPrice: 39.99,
      badge: "new",
      badgeText: "Zero Friction",
      rating: 4.8,
      reviews: 112,
      specs: ["Micro-Etched Tempered Glass", "Anti-Slip Silicone Base", "Hydrophobic Coating", "400x350mm"],
      description: "Zero friction gliding surface that never wears out or absorbs spills. Easy to wipe clean in seconds.",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "⬛"
    },
    {
      id: 19,
      name: "HyperCam 4K AI Auto-Framing Webcam",
      category: "peripherals",
      price: 69.99,
      originalPrice: 89.99,
      badge: "deal",
      badgeText: "Top Webcam",
      rating: 4.8,
      reviews: 165,
      specs: ["4K 60FPS Sony Sensor", "AI Auto-Subject Framing", "Dual Stereo Noise-Cancelling Mics", "Physical Privacy Shutter"],
      description: "Look sharp and professional in virtual class lectures, campus group projects, and internship video interviews.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "📷"
    },
    {
      id: 20,
      name: "ApexPro Dual-Monitor Gas Spring Arm",
      category: "peripherals",
      price: 54.99,
      originalPrice: 69.99,
      badge: null,
      badgeText: "",
      rating: 4.7,
      reviews: 90,
      specs: ["Fits 17\"-32\" Monitors", "Full 360° Rotation / Tilt", "Internal Cable Routing", "Heavy Duty Clamp"],
      description: "Elevate your screens to eye level and reclaim up to 40% of your study desk space.",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🦾"
    },

    // --- Accessories ---
    {
      id: 6,
      name: "OmniDock 10-in-1 Thunderbolt Hub",
      category: "accessories",
      price: 59.99,
      originalPrice: 79.99,
      badge: "new",
      badgeText: "Essential",
      rating: 4.6,
      reviews: 110,
      specs: ["100W Power Delivery", "Dual 4K HDMI", "Gigabit Ethernet", "SD/MicroSD 4.0"],
      description: "Turn your thin laptop into a complete workstation. Connect monitors, wired campus internet, flash drives, and charging through one sleek aluminum hub.",
      image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🔌"
    },
    {
      id: 7,
      name: "BeamSync Smart Monitor Light Bar",
      category: "accessories",
      price: 39.99,
      originalPrice: 54.99,
      badge: "new",
      badgeText: "New Arrival",
      rating: 4.8,
      reviews: 67,
      specs: ["Auto-Dimming Sensor", "Zero Screen Glare", "RGB Ambient Backlight", "Touch Controls"],
      description: "Saves precious desk space in cramped dorms. Illuminates your keyboard and desk notes without reflecting glare onto your computer screen.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "💡"
    },
    {
      id: 8,
      name: "ShieldGuard Waterproof Tech Backpack",
      category: "accessories",
      price: 64.99,
      originalPrice: 89.99,
      badge: "deal",
      badgeText: "Student Deal",
      rating: 4.9,
      reviews: 175,
      specs: ["Padded 16\" Sleeve", "Anti-Theft Hidden Pocket", "Waterproof Cordura", "USB Pass-Through"],
      description: "Built for active campus life. Shockproof protection for your laptop, tablet, chargers, and textbooks in heavy rain or daily commutes.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "🎒"
    },
    {
      id: 21,
      name: "VoltGaN 100W 4-Port Fast Charger",
      category: "accessories",
      price: 45.99,
      originalPrice: 59.99,
      badge: "bestseller",
      badgeText: "Campus Staple",
      rating: 4.9,
      reviews: 230,
      specs: ["3x USB-C + 1x USB-A", "GaN III Fast Tech", "Foldable Travel Prongs", "Charges Laptop & Phone"],
      description: "Replace four bulky power adapters with one pocket-sized GaN brick. Fast charges laptop, tablet, phone, and earbuds simultaneously.",
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "⚡"
    },
    {
      id: 22,
      name: "MagStand Aluminum Multi-Angle Stand",
      category: "accessories",
      price: 24.99,
      originalPrice: 34.99,
      badge: null,
      badgeText: "",
      rating: 4.7,
      reviews: 120,
      specs: ["360° Rotating Base", "Solid CNC Aluminum", "Foldable Pocket Flat", "Silicon Anti-Scratch Pads"],
      description: "Holds tablets or smartphones in portrait or landscape for seamless second-screen referencing while studying.",
      image: "https://images.unsplash.com/photo-1586775490184-b79f0621891f?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "📱"
    },
    {
      id: 23,
      name: "ThermoGrip Smart Self-Warming Study Mug",
      category: "accessories",
      price: 34.99,
      originalPrice: 49.99,
      badge: "deal",
      badgeText: "Study Fuel",
      rating: 4.8,
      reviews: 154,
      specs: ["Constant 135°F Warmth", "Wireless Induction Base", "Spill-Resistant Lid", "Auto Sleep Mode"],
      description: "Never let your coffee or matcha go cold during 3 AM all-nighters or lengthy coding assignments.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
      fallbackIcon: "☕"
    }
  ];

  // Coupon Rules Engine
  const COUPONS = {
    STUDENT15: { type: 'percent', value: 0.15, label: '15% Student Discount', minOrder: 0 },
    CAMPUS10: { type: 'flat', value: 10.00, label: '$10 Campus Voucher', minOrder: 40 },
    PRODIGY20: { type: 'percent', value: 0.20, label: '20% Mega Student Saver', minOrder: 400 },
    FREESHIP: { type: 'freeship', value: 0, label: '100% Free Express Shipping', minOrder: 0 }
  };

  const CONSTANTS = {
    FREE_SHIPPING_THRESHOLD: 99.00,
    SHIPPING_COST: 9.99,
    TAX_RATE: 0.05 // 5% campus educational tax
  };

  // ==========================================
  // 2. APPLICATION STATE
  // ==========================================
  const state = {
    products: [...PRODUCTS],
    cart: [], // [{ id: 1, quantity: 2 }]
    wishlist: new Set(),
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    appliedCoupon: null
  };

  // ==========================================
  // 3. DOM ELEMENT REFERENCES
  // ==========================================
  const DOM = {
    // Header & Navigation
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    wishlistToggleBtn: document.getElementById('wishlistToggleBtn'),
    wishlistCount: document.getElementById('wishlistCount'),
    cartOpenBtn: document.getElementById('cartOpenBtn'),
    headerCartCount: document.getElementById('headerCartCount'),
    headerCartTotal: document.getElementById('headerCartTotal'),
    promoCopyTag: document.getElementById('promoCopyTag'),

    // Controls & Products Grid
    categoryFilters: document.getElementById('categoryFilters'),
    sortBySelect: document.getElementById('sortBySelect'),
    productGrid: document.getElementById('productGrid'),
    productsCountLabel: document.getElementById('productsCountLabel'),
    activeFilterTags: document.getElementById('activeFilterTags'),
    noProductsFound: document.getElementById('noProductsFound'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Cart Drawer
    cartDrawerOverlay: document.getElementById('cartDrawerOverlay'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    cartItemsSubtitle: document.getElementById('cartItemsSubtitle'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartFooter: document.getElementById('cartFooter'),
    shippingText: document.getElementById('shippingText'),
    shippingIcon: document.getElementById('shippingIcon'),
    shippingProgressBar: document.getElementById('shippingProgressBar'),

    // Cart Summary
    couponInput: document.getElementById('couponInput'),
    applyCouponBtn: document.getElementById('applyCouponBtn'),
    appliedCouponPill: document.getElementById('appliedCouponPill'),
    appliedCouponText: document.getElementById('appliedCouponText'),
    removeCouponBtn: document.getElementById('removeCouponBtn'),
    summaryItemCount: document.getElementById('summaryItemCount'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    discountRow: document.getElementById('discountRow'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartTax: document.getElementById('cartTax'),
    cartShipping: document.getElementById('cartShipping'),
    cartGrandTotal: document.getElementById('cartGrandTotal'),
    proceedCheckoutBtn: document.getElementById('proceedCheckoutBtn'),
    continueShoppingBtn: document.getElementById('continueShoppingBtn'),

    // Modals
    checkoutModalOverlay: document.getElementById('checkoutModalOverlay'),
    closeCheckoutModalBtn: document.getElementById('closeCheckoutModalBtn'),
    cancelCheckoutBtn: document.getElementById('cancelCheckoutBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutItemsCount: document.getElementById('checkoutItemsCount'),
    checkoutTotalAmount: document.getElementById('checkoutTotalAmount'),
    receiptModalOverlay: document.getElementById('receiptModalOverlay'),
    receiptContent: document.getElementById('receiptContent'),
    finishOrderBtn: document.getElementById('finishOrderBtn'),
    quickViewOverlay: document.getElementById('quickViewOverlay'),
    quickViewContent: document.getElementById('quickViewContent'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // ==========================================
  // 4. STORAGE PERSISTENCE HELPERS
  // ==========================================
  function saveToStorage() {
    try {
      localStorage.setItem('campustech_cart', JSON.stringify(state.cart));
      localStorage.setItem('campustech_wishlist', JSON.stringify([...state.wishlist]));
      if (state.appliedCoupon) {
        localStorage.setItem('campustech_coupon', state.appliedCoupon.code);
      } else {
        localStorage.removeItem('campustech_coupon');
      }
    } catch (e) {
      console.warn('LocalStorage unavailable or disabled:', e);
    }
  }

  function loadFromStorage() {
    try {
      const savedCart = localStorage.getItem('campustech_cart');
      if (savedCart) state.cart = JSON.parse(savedCart);

      const savedWishlist = localStorage.getItem('campustech_wishlist');
      if (savedWishlist) state.wishlist = new Set(JSON.parse(savedWishlist));

      const savedCoupon = localStorage.getItem('campustech_coupon');
      if (savedCoupon && COUPONS[savedCoupon]) {
        state.appliedCoupon = { code: savedCoupon, ...COUPONS[savedCoupon] };
      }
    } catch (e) {
      console.warn('Error reading from localStorage:', e);
    }
  }

  // ==========================================
  // 5. TOAST NOTIFICATION SYSTEM
  // ==========================================
  function showToast(message, type = 'info', icon = '💡') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Choose icon if not custom
    let displayIcon = icon;
    if (type === 'success' && icon === '💡') displayIcon = '✅';
    if (type === 'error' && icon === '💡') displayIcon = '⚠️';
    if (type === 'warning' && icon === '💡') displayIcon = '⚡';

    toast.innerHTML = `
      <span class="toast-icon">${displayIcon}</span>
      <span class="toast-message">${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    // Auto remove after 3.2 seconds
    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 3200);
  }

  // ==========================================
  // 6. PRICE & TOTALS CALCULATION ENGINE
  // ==========================================
  function calculateTotals() {
    let subtotal = 0;
    let totalItemsCount = 0;

    state.cart.forEach(item => {
      const product = state.products.find(p => p.id === item.id);
      if (product) {
        subtotal += product.price * item.quantity;
        totalItemsCount += item.quantity;
      }
    });

    // Discount Calculation
    let discountAmount = 0;
    let freeShippingCoupon = false;

    if (state.appliedCoupon && subtotal > 0) {
      const coupon = state.appliedCoupon;
      if (subtotal >= (coupon.minOrder || 0)) {
        if (coupon.type === 'percent') {
          discountAmount = subtotal * coupon.value;
        } else if (coupon.type === 'flat') {
          discountAmount = Math.min(subtotal, coupon.value);
        } else if (coupon.type === 'freeship') {
          freeShippingCoupon = true;
        }
      } else {
        // Condition not met anymore (e.g. removed items)
        showToast(`Coupon ${coupon.code} requires minimum $${coupon.minOrder}`, 'warning', '⚠️');
        state.appliedCoupon = null;
        saveToStorage();
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discountAmount);

    // Shipping Calculation
    let isFreeShipping = discountedSubtotal >= CONSTANTS.FREE_SHIPPING_THRESHOLD || freeShippingCoupon;
    let shipping = (subtotal === 0 || isFreeShipping) ? 0 : CONSTANTS.SHIPPING_COST;

    // Tax Calculation
    const tax = discountedSubtotal * CONSTANTS.TAX_RATE;
    const grandTotal = discountedSubtotal + shipping + tax;

    return {
      subtotal,
      discountAmount,
      discountedSubtotal,
      shipping,
      tax,
      grandTotal,
      totalItemsCount,
      isFreeShipping
    };
  }

  // ==========================================
  // 7. PRODUCT RENDERING & FILTERING
  // ==========================================
  function getFilteredAndSortedProducts() {
    return state.products
      .filter(product => {
        // Category match
        const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
        
        // Search query match
        const query = state.searchQuery.trim().toLowerCase();
        const matchesSearch = !query || 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.specs.some(s => s.toLowerCase().includes(query)) ||
          product.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (state.sortBy === 'price-low') return a.price - b.price;
        if (state.sortBy === 'price-high') return b.price - a.price;
        if (state.sortBy === 'rating') return b.rating - a.rating;
        if (state.sortBy === 'name') return a.name.localeCompare(b.name);
        return a.id - b.id; // Default featured
      });
  }

  function updateCategoryCounts() {
    const counts = {
      all: state.products.length,
      laptops: 0,
      keyboards: 0,
      audio: 0,
      peripherals: 0,
      accessories: 0
    };

    state.products.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    Object.keys(counts).forEach(cat => {
      const el = document.getElementById(`count-${cat}`);
      if (el) el.textContent = counts[cat];
    });
  }

  function renderProducts() {
    updateCategoryCounts();
    const filteredProducts = getFilteredAndSortedProducts();
    
    // Update count label
    DOM.productsCountLabel.textContent = `Showing ${filteredProducts.length} of ${state.products.length} student tech items`;

    // Active filters display
    let filterPillsHTML = '';
    if (state.activeCategory !== 'all') {
      filterPillsHTML += `<span class="active-tag">Category: ${state.activeCategory.toUpperCase()}</span>`;
    }
    if (state.searchQuery) {
      filterPillsHTML += `<span class="active-tag">Search: "${state.searchQuery}"</span>`;
    }
    DOM.activeFilterTags.innerHTML = filterPillsHTML;

    // Handle Empty Search Results
    if (filteredProducts.length === 0) {
      DOM.productGrid.innerHTML = '';
      DOM.noProductsFound.style.display = 'flex';
      return;
    }

    DOM.noProductsFound.style.display = 'none';

    // Render Product Cards
    DOM.productGrid.innerHTML = filteredProducts.map(product => {
      const isFavorited = state.wishlist.has(product.id);
      
      let badgeHTML = '';
      if (product.badge === 'deal') badgeHTML = `<span class="card-badge badge-deal">${product.badgeText}</span>`;
      else if (product.badge === 'bestseller') badgeHTML = `<span class="card-badge badge-bestseller">⭐ ${product.badgeText}</span>`;
      else if (product.badge === 'new') badgeHTML = `<span class="card-badge badge-new">${product.badgeText}</span>`;

      const specsHTML = product.specs
        .slice(0, 3)
        .map(spec => `<span class="spec-tag">${spec}</span>`)
        .join('');

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-media" onclick="app.openQuickView(${product.id})">
            <div class="card-badges">
              ${badgeHTML}
            </div>
            
            <button class="wishlist-card-btn ${isFavorited ? 'favorited' : ''}" 
                    title="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}"
                    onclick="event.stopPropagation(); app.toggleWishlist(${product.id})">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80';">
            
            <button class="quick-view-btn" onclick="event.stopPropagation(); app.openQuickView(${product.id})">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Quick Specs
            </button>
          </div>

          <div class="product-body">
            <div class="product-category-meta">
              <span class="product-category">${product.category}</span>
              <div class="product-rating">
                <span>★</span>
                <span>${product.rating}</span>
                <span class="rating-count">(${product.reviews})</span>
              </div>
            </div>

            <h3 class="product-title" title="${product.name}">${product.name}</h3>
            <p class="product-description">${product.description}</p>

            <div class="product-specs">
              ${specsHTML}
            </div>

            <div class="product-footer">
              <div class="product-pricing">
                <span class="student-price-label">Student Price</span>
                <div class="product-price-row">
                  <span class="current-price">$${product.price.toFixed(2)}</span>
                  ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
              </div>

              <button class="btn-add-cart" id="addBtn-${product.id}" onclick="app.addToCart(${product.id})">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // ==========================================
  // 8. DYNAMIC CART RENDERING & UI UPDATES
  // ==========================================
  function renderCart() {
    const totals = calculateTotals();

    // 1. Update Header Badges
    DOM.headerCartCount.textContent = totals.totalItemsCount;
    DOM.headerCartTotal.textContent = `$${totals.grandTotal.toFixed(2)}`;
    DOM.cartItemsSubtitle.textContent = `${totals.totalItemsCount} item${totals.totalItemsCount === 1 ? '' : 's'} selected`;

    // 2. Free Shipping Progress Bar
    if (totals.subtotal >= CONSTANTS.FREE_SHIPPING_THRESHOLD) {
      DOM.shippingIcon.textContent = '🎉';
      DOM.shippingText.innerHTML = `You have unlocked <strong>FREE Campus Express Delivery!</strong>`;
      DOM.shippingProgressBar.style.width = '100%';
      DOM.shippingProgressBar.style.background = 'linear-gradient(90deg, #10b981, #06b6d4)';
    } else {
      const remaining = (CONSTANTS.FREE_SHIPPING_THRESHOLD - totals.subtotal).toFixed(2);
      const percent = Math.min(100, (totals.subtotal / CONSTANTS.FREE_SHIPPING_THRESHOLD) * 100);
      DOM.shippingIcon.textContent = '🚚';
      DOM.shippingText.innerHTML = `Add <strong>$${remaining}</strong> more for Free Campus Delivery!`;
      DOM.shippingProgressBar.style.width = `${percent}%`;
      DOM.shippingProgressBar.style.background = 'var(--gradient-brand)';
    }

    // 3. Render Cart Item Rows or Empty State
    if (state.cart.length === 0) {
      DOM.cartItemsList.innerHTML = `
        <div class="empty-cart-drawer">
          <div class="empty-cart-icon">🎒</div>
          <h4>Your Tech Bag is Empty</h4>
          <p>Explore laptops, mechanical keyboards, and audio with student discounts!</p>
          <button class="btn btn-primary" onclick="app.closeCart()">Start Shopping</button>
        </div>
      `;
      DOM.clearCartBtn.style.display = 'none';
      DOM.proceedCheckoutBtn.disabled = true;
      DOM.proceedCheckoutBtn.style.opacity = '0.5';
    } else {
      DOM.clearCartBtn.style.display = 'flex';
      DOM.proceedCheckoutBtn.disabled = false;
      DOM.proceedCheckoutBtn.style.opacity = '1';

      DOM.cartItemsList.innerHTML = state.cart.map(item => {
        const product = state.products.find(p => p.id === item.id);
        if (!product) return '';
        const itemTotal = (product.price * item.quantity).toFixed(2);

        return `
          <div class="cart-item" data-cart-id="${product.id}">
            <div class="cart-item-thumb">
              <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80';">
            </div>

            <div class="cart-item-details">
              <h4 class="cart-item-title">${product.name}</h4>
              <span class="cart-item-unit-price">$${product.price.toFixed(2)} each</span>
              
              <div class="cart-quantity-controls">
                <button class="qty-btn" onclick="app.updateQuantity(${product.id}, -1)" title="Decrease quantity" aria-label="Decrease quantity">−</button>
                <span class="qty-number">${item.quantity}</span>
                <button class="qty-btn" onclick="app.updateQuantity(${product.id}, 1)" title="Increase quantity" aria-label="Increase quantity">+</button>
              </div>
            </div>

            <div class="cart-item-actions">
              <button class="btn-remove-item" onclick="app.removeFromCart(${product.id})" title="Remove item" aria-label="Remove item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
              <span class="cart-item-subtotal">$${itemTotal}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // 4. Update Promo / Coupon UI
    if (state.appliedCoupon) {
      DOM.appliedCouponPill.style.display = 'flex';
      DOM.appliedCouponText.textContent = `${state.appliedCoupon.code} (${state.appliedCoupon.label})`;
      DOM.couponInput.value = '';
    } else {
      DOM.appliedCouponPill.style.display = 'none';
    }

    // 5. Update Breakdown Figures
    DOM.summaryItemCount.textContent = totals.totalItemsCount;
    DOM.cartSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;

    if (totals.discountAmount > 0) {
      DOM.discountRow.style.display = 'flex';
      DOM.cartDiscount.textContent = `-$${totals.discountAmount.toFixed(2)}`;
    } else {
      DOM.discountRow.style.display = 'none';
    }

    DOM.cartTax.textContent = `$${totals.tax.toFixed(2)}`;
    DOM.cartShipping.textContent = totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`;
    DOM.cartGrandTotal.textContent = `$${totals.grandTotal.toFixed(2)}`;
  }

  // ==========================================
  // 9. CART MUTATION HANDLERS
  // ==========================================
  function addToCart(productId, quantity = 1) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      state.cart.push({ id: productId, quantity });
    }

    saveToStorage();
    renderCart();

    // Trigger visual button feedback
    const btn = document.getElementById(`addBtn-${productId}`);
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.classList.add('added');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Added!</span>
      `;
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = originalHTML;
      }, 1200);
    }

    showToast(`Added <strong>${product.name}</strong> to your bag!`, 'success', '🛍️');
  }

  function updateQuantity(productId, delta) {
    const itemIndex = state.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    state.cart[itemIndex].quantity += delta;

    if (state.cart[itemIndex].quantity <= 0) {
      const product = state.products.find(p => p.id === productId);
      state.cart.splice(itemIndex, 1);
      showToast(`Removed <strong>${product ? product.name : 'item'}</strong> from bag`, 'info', '🗑️');
    }

    saveToStorage();
    renderCart();
  }

  function removeFromCart(productId) {
    const product = state.products.find(p => p.id === productId);
    state.cart = state.cart.filter(item => item.id !== productId);
    
    saveToStorage();
    renderCart();
    
    showToast(`Removed <strong>${product ? product.name : 'item'}</strong> from your cart.`, 'info', '🗑️');
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    saveToStorage();
    renderCart();
    showToast('Your student tech bag has been cleared.', 'info', '🧹');
  }

  function quickAddFeatured() {
    addToCart(1, 1);
    openCart();
  }

  // ==========================================
  // 10. COUPON & PROMO CODE ENGINE
  // ==========================================
  function applyCoupon(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (!cleanCode) {
      showToast('Please enter a coupon code.', 'warning', '⚠️');
      return;
    }

    const coupon = COUPONS[cleanCode];
    if (!coupon) {
      showToast(`Coupon "<strong>${cleanCode}</strong>" is invalid or expired.`, 'error', '❌');
      return;
    }

    const totals = calculateTotals();
    if (totals.subtotal < (coupon.minOrder || 0)) {
      showToast(`Coupon <strong>${cleanCode}</strong> requires a minimum order of $${coupon.minOrder.toFixed(2)}.`, 'warning', '⚠️');
      return;
    }

    state.appliedCoupon = { code: cleanCode, ...coupon };
    saveToStorage();
    renderCart();
    showToast(`Applied <strong>${cleanCode}</strong>: ${coupon.label}!`, 'success', '🎉');
  }

  function removeCoupon() {
    if (!state.appliedCoupon) return;
    const oldCode = state.appliedCoupon.code;
    state.appliedCoupon = null;
    saveToStorage();
    renderCart();
    showToast(`Removed coupon <strong>${oldCode}</strong>`, 'info', '🏷️');
  }

  function applyCodeAndOpen(code) {
    applyCoupon(code);
    openCart();
  }

  // ==========================================
  // 11. WISHLIST TOGGLE
  // ==========================================
  function toggleWishlist(productId) {
    const product = state.products.find(p => p.id === productId);
    if (state.wishlist.has(productId)) {
      state.wishlist.delete(productId);
      showToast(`Removed <strong>${product.name}</strong> from favorites`, 'info', '💔');
    } else {
      state.wishlist.add(productId);
      showToast(`Saved <strong>${product.name}</strong> to student favorites!`, 'success', '💖');
    }
    DOM.wishlistCount.textContent = state.wishlist.size;
    saveToStorage();
    renderProducts();
  }

  // ==========================================
  // 12. DRAWER & MODAL CONTROLLERS
  // ==========================================
  function openCart() {
    DOM.cartDrawerOverlay.classList.add('active');
    DOM.cartDrawerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    DOM.cartDrawerOverlay.classList.remove('active');
    DOM.cartDrawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openCheckout() {
    if (state.cart.length === 0) {
      showToast('Your bag is empty! Add tech gear first.', 'warning', '⚠️');
      return;
    }
    closeCart();
    const totals = calculateTotals();
    DOM.checkoutItemsCount.textContent = `${totals.totalItemsCount} item${totals.totalItemsCount === 1 ? '' : 's'}`;
    DOM.checkoutTotalAmount.textContent = `$${totals.grandTotal.toFixed(2)}`;
    
    DOM.checkoutModalOverlay.classList.add('active');
    DOM.checkoutModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    DOM.checkoutModalOverlay.classList.remove('active');
    DOM.checkoutModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function processOrder() {
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const dormLocation = document.getElementById('dormLocation').value;
    const totals = calculateTotals();

    const orderId = 'CT-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    // Render receipt
    DOM.receiptContent.innerHTML = `
      <div class="receipt-row"><span>Order Number:</span> <strong>#${orderId}</strong></div>
      <div class="receipt-row"><span>Student Name:</span> <strong>${studentName}</strong></div>
      <div class="receipt-row"><span>Student ID:</span> <strong>${studentId}</strong></div>
      <div class="receipt-row"><span>Campus Destination:</span> <strong>${dormLocation}</strong></div>
      <div class="receipt-row"><span>Date & Time:</span> <strong>${dateStr}</strong></div>
      <div class="divider"></div>
      <div class="receipt-row"><span>Items Ordered:</span> <strong>${totals.totalItemsCount} Units</strong></div>
      <div class="receipt-row"><span>Total Paid:</span> <strong style="color: #38bdf8; font-size: 1.1rem;">$${totals.grandTotal.toFixed(2)}</strong></div>
    `;

    closeCheckout();
    
    // Show receipt
    DOM.receiptModalOverlay.classList.add('active');
    DOM.receiptModalOverlay.setAttribute('aria-hidden', 'false');

    // Clear cart
    state.cart = [];
    saveToStorage();
    renderCart();
    showToast('Campus order placed successfully!', 'success', '🚀');
  }

  function closeReceipt() {
    DOM.receiptModalOverlay.classList.remove('active');
    DOM.receiptModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openQuickView(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    DOM.quickViewContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-wrap">
          <span class="modal-icon">${product.fallbackIcon || '⚡'}</span>
          <div>
            <h3>${product.name}</h3>
            <p class="modal-subtitle">Category: ${product.category.toUpperCase()} • Rating: ★ ${product.rating} (${product.reviews} reviews)</p>
          </div>
        </div>
        <button class="modal-close-btn" onclick="app.closeQuickView()">&times;</button>
      </div>

      <div class="quickview-layout">
        <div class="quickview-media">
          <img src="${product.image}" alt="${product.name}">
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6;">${product.description}</p>
          
          <div>
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 0.5rem;">Hardware Specifications</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${product.specs.map(s => `<span class="spec-tag" style="padding: 0.3rem 0.7rem; font-size: 0.8rem;">${s}</span>`).join('')}
            </div>
          </div>

          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">Exclusive Student Price</span>
              <div style="font-family: var(--font-mono); font-size: 1.6rem; font-weight: 800; color: #38bdf8;">$${product.price.toFixed(2)}</div>
            </div>
            <button class="btn btn-primary" onclick="app.addToCart(${product.id}); app.closeQuickView();">
              <span>Add to Bag</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    DOM.quickViewOverlay.classList.add('active');
    DOM.quickViewOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    DOM.quickViewOverlay.classList.remove('active');
    DOM.quickViewOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // ==========================================
  // 13. EVENT LISTENERS SETUP
  // ==========================================
  function setupEventListeners() {
    // Drawer open / close
    DOM.cartOpenBtn.addEventListener('click', openCart);
    DOM.cartCloseBtn.addEventListener('click', closeCart);
    DOM.continueShoppingBtn.addEventListener('click', closeCart);
    DOM.cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === DOM.cartDrawerOverlay) closeCart();
    });

    // Clear cart button
    DOM.clearCartBtn.addEventListener('click', clearCart);

    // Coupon Apply
    DOM.applyCouponBtn.addEventListener('click', () => {
      applyCoupon(DOM.couponInput.value);
    });
    DOM.couponInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCoupon(DOM.couponInput.value);
      }
    });
    DOM.removeCouponBtn.addEventListener('click', removeCoupon);

    // Copy Promo Tag from announcement
    DOM.promoCopyTag.addEventListener('click', () => {
      navigator.clipboard.writeText('STUDENT15').then(() => {
        showToast('Copied "STUDENT15" to clipboard!', 'success', '📋');
      }).catch(() => {
        applyCodeAndOpen('STUDENT15');
      });
    });

    // Category Filter Pills
    DOM.categoryFilters.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;

      DOM.categoryFilters.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });

      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      state.activeCategory = pill.dataset.category;
      renderProducts();
    });

    // Sort Dropdown
    DOM.sortBySelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });

    // Search Input with Debounce & Clear
    DOM.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      DOM.clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
      renderProducts();
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.searchQuery = '';
      DOM.clearSearchBtn.style.display = 'none';
      renderProducts();
    });

    // Reset Filters button in Empty State
    DOM.resetFiltersBtn.addEventListener('click', () => {
      state.activeCategory = 'all';
      state.searchQuery = '';
      DOM.searchInput.value = '';
      DOM.clearSearchBtn.style.display = 'none';
      DOM.categoryFilters.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.category === 'all');
        p.setAttribute('aria-selected', p.dataset.category === 'all');
      });
      DOM.sortBySelect.value = 'featured';
      state.sortBy = 'featured';
      renderProducts();
    });

    // Wishlist Header Button
    DOM.wishlistToggleBtn.addEventListener('click', () => {
      if (state.wishlist.size === 0) {
        showToast('You haven\'t added any student favorites yet!', 'info', '🤍');
      } else {
        showToast(`You have ${state.wishlist.size} saved favorite item(s)!`, 'info', '💖');
      }
    });

    // Checkout Flow
    DOM.proceedCheckoutBtn.addEventListener('click', openCheckout);
    DOM.closeCheckoutModalBtn.addEventListener('click', closeCheckout);
    DOM.cancelCheckoutBtn.addEventListener('click', () => {
      closeCheckout();
      openCart();
    });
    DOM.checkoutModalOverlay.addEventListener('click', (e) => {
      if (e.target === DOM.checkoutModalOverlay) closeCheckout();
    });

    // Receipt Modal
    DOM.finishOrderBtn.addEventListener('click', closeReceipt);
    DOM.receiptModalOverlay.addEventListener('click', (e) => {
      if (e.target === DOM.receiptModalOverlay) closeReceipt();
    });

    // Quick View Overlay Close
    DOM.quickViewOverlay.addEventListener('click', (e) => {
      if (e.target === DOM.quickViewOverlay) closeQuickView();
    });

    // Keyboard ESC listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
        closeCheckout();
        closeReceipt();
        closeQuickView();
      }
    });
  }

  // ==========================================
  // 14. APPLICATION INITIALIZATION
  // ==========================================
  function init() {
    loadFromStorage();
    DOM.wishlistCount.textContent = state.wishlist.size;
    renderProducts();
    renderCart();
    setupEventListeners();
  }

  // Expose public API for inline event handlers & global access
  window.app = {
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    quickAddFeatured,
    toggleWishlist,
    applyCoupon,
    removeCoupon,
    applyCodeAndOpen,
    openCart,
    closeCart,
    openCheckout,
    closeCheckout,
    processOrder,
    openQuickView,
    closeQuickView
  };

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
