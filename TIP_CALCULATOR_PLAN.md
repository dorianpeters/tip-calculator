# Tip Calculator Web Application Plan

## 1. Project Setup
- Current Vite + React + TypeScript project structure
- Existing files to be modified:
  - `src/App.tsx` (main component)
  - `src/App.css` (styling)

## 2. Component Structure
```tsx
// Main App Component
function TipCalculator() {
  // State management
  const [subtotal, setSubtotal] = useState('')
  const [tipPercentage, setTipPercentage] = useState(15)
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // Calculation logic
  const calculateTips = () => {
    // Implementation here
  }

  return (
    // UI JSX here
  )
}
```

## 3. UI Design Requirements
- Modern, responsive layout
- Input field for subtotal
- Tip percentage (show all common percentages)
- Display area for calculated tip amounts and total
- Stylish form elements and buttons

## 4. State Management
- subtotal: string (user input)
- tipPercentage: number (selected percentage)
- tipAmount: number (calculated value)
- totalAmount: number (subtotal + tip)

## 5. Calculation Logic
- Validate subtotal input (ensure numeric value)
- Calculate tip amount based on selected percentage
- Calculate total amount (subtotal + tip)
- Handle edge cases (empty input, negative numbers)

## 6. Styling Approach
- Modern card-based design
- Responsive layout for different screen sizes
- Color scheme and typography
- Hover effects and transitions

## 7. Implementation Steps
1. Modify App.tsx to create the tip calculator component
2. Update App.css with modern styling
3. Implement state management for inputs
4. Add calculation logic
5. Create responsive UI components
6. Add accessibility features
7. Test edge cases
