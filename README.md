# Habit Tracker POC (React Native + Expo)

A simple **Proof of Concept (POC)** React Native app built with **Expo** to practice core mobile concepts: screens, form inputs, global state, list rendering, basic tracking logic, and UI styling.

---

## What this app does

This POC lets you:

- **Create tasks/habits**
- **Track progress using checkboxes**
  - For now: each tick **reduces remaining days** (simple logic)
  - Future enhancement: allow ticking **only once per day**
- **Delete tasks**
- **Set goals**
  - Shows a **goal popup**
  - Adds entered goals to a **goals list**
- Uses a **global in-memory list** (non-persistent)
  - Data is removed when the app refreshes/reloads

---

## Screens / Pages

### 1) Add Tasks Page
- Input fields to create a task/habit
- Submit/reset flow
- Styled UI

### 2) Main Tracking Page
- Renders tasks list from global state
- Checkbox-based tracking (days reduce)
- Delete task option
- Styled UI

---

## Key Concepts Practiced (React Native POC)

- React Native core components (View, Text, inputs, lists)
- Screen-based UI structure
- Form handling with state
- Creating objects from input values
- **Shared/global state** (custom hook) to store multiple tasks
- Rendering lists on the main screen
- Basic tracking logic with checkbox interaction
- Popup UI for goals
- App-wide styling

---

## Current Limitation (POC Note)

✅ Works as a functional frontend POC  
❌ Data is stored only in **volatile memory** (global in-memory list)

So if you refresh/restart:
- tasks/goals reset
- nothing is saved permanently

---

## Next Improvements (Planned)

- Add persistence (AsyncStorage or backend)
- Improve tracking rules:
  - only one tick per day
  - streak tracking
  - habit history/log view
- Better validations (empty inputs, ranges, duplicates)
- Improve UX (empty states, confirmations, animations)

---

## Run the project

### Prerequisites
- Node.js
- Expo CLI (or use `npx`)
- Expo Go app (recommended for fast testing)

### Install & Start
```bash
npm install
npx expo start
