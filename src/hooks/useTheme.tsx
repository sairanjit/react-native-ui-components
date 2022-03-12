import React, { useContext } from 'react'

import appTheme, { ITheme } from '../constants/theme'

interface IThemeHook {
  children?: React.ReactNode
  theme?: ITheme
}

const ThemeContext = React.createContext({
  theme: appTheme,
})

export const ThemeProvider = ({ children, theme = appTheme }: IThemeHook) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}

const useTheme = (): ITheme => {
  const { theme } = useContext(ThemeContext)
  return theme
}

export default useTheme
