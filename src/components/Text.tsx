import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native'
import React from 'react'

interface TextProps extends TextStyle {
  children?: React.ReactNode
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  p?: boolean
  size?: TextStyle['fontSize']
  weight?: TextStyle['fontWeight']
  color?: TextStyle['color']
  align?: TextStyle['textAlign']
  margin?: TextStyle['margin']
  marginTop?: TextStyle['marginTop']
  marginBottom?: TextStyle['marginBottom']
  marginVertical?: TextStyle['marginVertical']
  marginHorizontal?: TextStyle['marginHorizontal']
  padding?: TextStyle['padding']
  paddingTop?: TextStyle['paddingTop']
  paddingBottom?: TextStyle['paddingBottom']
  paddingVertical?: TextStyle['paddingVertical']
  paddingHorizontal?: TextStyle['paddingHorizontal']
  style?: StyleProp<TextStyle>
}

const Text = ({
  children,
  h1,
  h2,
  h3,
  h4,
  p,
  size,
  weight,
  color,
  align,
  margin,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  padding,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  style,
  ...props
}: TextProps) => {
  const textStyle = StyleSheet.flatten([
    { fontSize: 16 },
    h1 !== undefined && { fontSize: 36, fontWeight: '800' },
    h2 !== undefined && { fontSize: 32, fontWeight: '700' },
    h3 !== undefined && { fontSize: 28, fontWeight: '600' },
    h4 !== undefined && { fontSize: 24, fontWeight: '500' },
    p !== undefined && { fontSize: 22 },
    size !== undefined && { fontSize: size },
    weight !== undefined && { fontWeight: weight },
    color !== undefined && { color: color },
    align !== undefined && { textAlign: align },
    margin !== undefined && { margin },
    marginTop !== undefined && { marginTop },
    marginBottom !== undefined && { marginBottom },
    marginVertical !== undefined && { marginVertical },
    marginHorizontal !== undefined && { marginHorizontal },
    padding !== undefined && { padding },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
    paddingVertical !== undefined && { paddingVertical },
    paddingHorizontal !== undefined && { paddingHorizontal },
    style,
  ]) as TextStyle

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  )
}

export default Text
