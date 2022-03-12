import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native'
import React from 'react'

interface InputProps extends TextInputProps {
  children?: React.ReactNode
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

const Input = ({
  children,
  style,
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
  ...props
}: InputProps) => {
  const inputStyle = StyleSheet.flatten([
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
  ])

  return (
    <TextInput style={inputStyle} {...props}>
      {children}
    </TextInput>
  )
}

export default Input
