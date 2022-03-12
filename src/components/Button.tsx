import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import React from 'react'

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode
  color?: ViewStyle['backgroundColor']
  margin?: ViewStyle['margin']
  marginTop?: ViewStyle['marginTop']
  marginBottom?: ViewStyle['marginBottom']
  marginVertical?: ViewStyle['marginVertical']
  marginHorizontal?: ViewStyle['marginHorizontal']
  padding?: ViewStyle['padding']
  paddingTop?: ViewStyle['paddingTop']
  paddingBottom?: ViewStyle['paddingBottom']
  paddingVertical?: ViewStyle['paddingVertical']
  paddingHorizontal?: ViewStyle['paddingHorizontal']
  radius?: ViewStyle['borderRadius']
  style?: StyleProp<ViewStyle>
}

const Button = ({
  children,
  color,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  margin,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  radius,
  style,
  ...props
}: ButtonProps) => {
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && { backgroundColor: color },
    padding !== undefined && { padding },
    paddingVertical !== undefined && { paddingVertical },
    paddingHorizontal !== undefined && { paddingHorizontal },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
    margin !== undefined && { margin },
    marginTop !== undefined && { marginTop },
    marginBottom !== undefined && { marginBottom },
    marginVertical !== undefined && { marginVertical },
    marginHorizontal !== undefined && { marginHorizontal },
    radius !== undefined && { borderRadius: radius },
    style,
  ])

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
