import { StyleSheet } from 'react-native'

export interface ITheme {
  sizes: {
    // common sizes
    base: number
    text: number
    padding: number

    // text sizes
    h1: number
    h2: number
    h3: number
    h4: number
    p: number

    // button sizes
    buttonHeight: number
    buttonRadius: number
    buttonBorder: number

    // input sizes
    inputHeight: number
    inputRadius: number
    inputBorder: number
  }
}

export const SIZES = {
  // common sizes
  base: 8,
  text: 14,
  padding: 20,

  // text sizes
  h1: 36,
  h2: 28,
  h3: 24,
  h4: 22,
  p: 18,

  // button sizes
  buttonHeight: 40,
  buttonRadius: 4,
  buttonBorder: 0,

  // input sizes
  inputHeight: 40,
  inputRadius: 4,
  inputBorder: StyleSheet.hairlineWidth,
}

export const THEME: ITheme = {
  sizes: SIZES,
}

export default THEME
