# CampusTech // Student Tech Store & Shopping Cart

A modern, high-performance, dark-mode **Shopping Cart Web Application** built exclusively with **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. Engineered specifically for the "Student Tech Store" theme featuring gaming laptops, hot-swappable mechanical keyboards, noise-cancelling headphones, and study ergonomics.

---

## ✨ Features Overview

### 1. 🖥️ Product Catalog & Grid (23 Curated Items)
- **Comprehensive Student Hardware Across All 5 Categories**:
  - **💻 Laptops (4 options)**: *CyberBlade 14 Pro*, *CampusBook Air 13 Ultralight*, *TitanForge 16 Studio & Game Workstation*, *FlexTab Pro 2-in-1 Touch Laptop*.
  - **⌨️ Keyboards (4 options)**: *AuraKey Pro RGB Mechanical*, *CyberCompact 65% Wireless*, *TypeMaster Ergo Split Mechanical*, *QuietTouch Slim Bluetooth*.
  - **🎧 Audio & ANC (4 options)**: *SonicPulse ANC Headphones*, *AeroPods Pro ANC Wireless Earbuds*, *StudioStream USB Condenser Microphone*, *SoundSphere 360 Bluetooth Speaker*.
  - **🖱️ Peripherals (5 options)**: *AeroGlide Ergonomic Wireless Mouse*, *NovaView 27" 4K USB-C Study Monitor*, *UltraGlide Precision Glass Mousepad*, *HyperCam 4K AI Auto-Framing Webcam*, *ApexPro Dual-Monitor Gas Spring Arm*.
  - **🎒 Accessories (6 options)**: *OmniDock 10-in-1 Thunderbolt Hub*, *BeamSync Smart Monitor Light Bar*, *ShieldGuard Waterproof Tech Backpack*, *VoltGaN 100W 4-Port Fast Charger*, *MagStand Aluminum Stand*, *ThermoGrip Smart Self-Warming Study Mug*.
- **Micro-Interactions**: Hover card 3D tilt/lift, glowing borders, image zoom, quick specs view modal, and active state transitions.
- **Search & Filters**:
  - Live real-time search bar with clear button.
  - Category pill filters with live count badges (*All Gear [23]*, *Laptops [4]*, *Keyboards [4]*, *Audio & ANC [4]*, *Peripherals [5]*, *Accessories [6]*).
  - Sorting: *Featured*, *Price: Low to High*, *Price: High to Low*, *Highest Rated*, *Alphabetical*.
- **Student Wishlist**: Heart button on every card with persistent local storage.

### 2. 🛒 Dynamic Cart Drawer
- **Slide-out Glassmorphism Sidebar**: Smooth backdrop blur and sliding drawer animations.
- **Instant Reactive Calculations**:
  - Item Subtotal calculated per row.
  - Cart Subtotal.
  - 5% Campus Educational Tax calculation.
  - Free Shipping Progress Bar (dynamic bar recalculating how much more is needed to unlock free campus delivery).
  - Grand Total dynamically updated on any addition, quantity modification, or removal.
- **Quantity Steppers**: `[-]` and `[+]` buttons with automatic remove confirmation when reaching zero.
- **Clear Cart**: Instant reset with notification.
- **State Persistence**: Cart items, quantities, coupons, and wishlist are automatically saved to `localStorage` and restored upon refresh.

### 3. 🏷️ Coupon & Student Discount Engine
Supports real-time promotional discount vouchers with validation and toast alerts:
| Promo Code | Discount Type | Criteria |
| :--- | :--- | :--- |
| `STUDENT15` | **15% OFF** entire cart | No minimum |
| `CAMPUS10` | **$10 Instant Discount** | Minimum $40 order |
| `PRODIGY20` | **20% Mega Saver** | Minimum $400 order |
| `FREESHIP` | **Free Express Shipping** | No minimum |

### 4. 🎒 Campus Express Checkout & Receipt Modal
- Interactive checkout modal asking for Student Name, `.edu` Email, Student ID Number, and Dorm / Campus location.
- Generates a simulated official student receipt with unique Order ID (`#CT-XXXXXX`), timestamp, and items breakdown.

### 5. 🎨 Design & Glassmorphism UI
- **Dark Mode Palette**: Deep space navy (`#070a13`, `#0b1120`, `#131d31`) with electric cyan (`#06b6d4`), indigo (`#6366f1`), and student magenta accents.
- **Glassmorphism**: `backdrop-filter: blur(20px)`, translucent gradients, glowing ambient background orbs, and clean border highlights.
- **Responsive**: Fully optimized for Mobile, Tablet, Laptop, and 4K Ultra-wide screens.
- **Toast Notifications**: Non-intrusive floating toasts confirming user actions.

---

## 🚀 How to Run Locally

No Node.js, backend server, or installation required!

1. Open your file explorer and navigate to `d:/clg/ai project/Shopping cart/`.
2. Double-click **`index.html`** or right-click and choose **Open with > Chrome / Firefox / Edge / Safari**.
3. Enjoy the full student tech store experience!

---

## 📁 File Structure

```
Shopping cart/
├── index.html       # Semantic HTML5 app structure, modals, drawers & templates
├── styles.css       # CSS custom properties, Glassmorphism, Grid/Flexbox, Animations
├── app.js           # Vanilla JS ES6+ state management, cart engine, filters, storage
└── README.md        # Project overview & documentation
```
