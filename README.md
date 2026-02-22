# 📘 LearnAI Dashboard — Take Home Assignment

A modern, responsive, animated learning dashboard built using **Next.js**, **TailwindCSS v4**, **next-themes**, and **motion/react**.  
This project demonstrates UI design skills, component architecture, responsive layout patterns, and polished micro-interactions.

---

## 🔗 Links (Deliverables)

### **1. GitHub Repository**  
👉 https://github.com/JejurkarYash/margam-labs-frontend-assigment.git

### **2. Live Deployment (Mandatory)**  
👉 (https://margam-labs-frontend-assigment.vercel.app/)

---

## 📚 Project Overview

This dashboard includes:

- Fully responsive layout  
- Animated sidebar (collapsible + mobile drawer)  
- Animated topbar with theme toggle + search  
- Course listing with search filtering  
- Course details page with lesson list  
- Dark/light mode with smooth transitions  
- Clean, modern SaaS UI  

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **TailwindCSS v4**
- **next-themes**
- **motion/react** (for animations)
- **Lucide Icons**
- **TypeScript**

---

## 🚀 Features

### 🎨 Beautiful, Animated UI  
- Sidebar transitions  
- Hover and tap animations  
- Page fade-ins  
- Staggered lesson animations  
- Smooth theme transitions  

### 🌓 Dark / Light Theme  
Theme switch is animated and persistent across sessions.

### 📱 Fully Responsive  
- Mobile → Sidebar becomes drawer  
- Tablet → Auto-collapsed sidebar  
- Desktop → Full dashboard  

### 🔍 Search Functionality  
Instant client-side filtering of courses.

### 📘 Course Page  
Includes:
- Course metadata  
- Banner  
- Animated progress bar  
- What you’ll learn section  
- Lesson list  

---


---

## 🧠 How AI Tools Were Used

AI tools (including ChatGPT) were used to:

- Brainstorm layout ideas and UI structure  
- Generate color palettes and design variants  
- Help refine animation timings & micro-interactions (motion/react)  
- Assist in debugging layout issues (responsive behavior, sidebar behavior, hydration mismatch)  
- Optimize component structure & props  
- Improve clarity and UX consistency across pages  
- Draft this README  

---

## ⚠️ Challenges Faced

### 1️⃣ Sidebar responsiveness  
Ensuring the sidebar worked flawlessly in:
- Desktop (expanded)
- Tablet (collapsed automatically)
- Mobile (drawer mode with overlay)

This required managing layout states and avoiding hydration issues.

### 2️⃣ Theme toggle animation  
Smooth icon transitions required `motion/react` + `AnimatePresence` with custom animation states.

### 3️⃣ Search bar on mobile  
The desktop search bar does not fit on mobile devices.  
Solution:  
- Made search into a fullscreen overlay on small screens  
- Integrated it with the topbar cleanly

### 4️⃣ Hydration mismatch (due to window.innerWidth)  
Original approach caused render mismatch.  
Solution:  
- Used a proper `useEffect()` + state-based breakpoint detection.  

### 5️⃣ Maintaining clean code + reusable components  
Ensuring sidebar, topbar, and course card remained reusable and consistent across pages.

---

