import React from 'react'
import { ThemeProvider } from './src/hooks/useTheme'
import { Login } from './src/screens'

const App = () => {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  )
}

export default App
