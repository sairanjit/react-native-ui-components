import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'

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
  align?: ViewStyle['alignItems']
  justify?: ViewStyle['justifyContent']
  center?: boolean
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
  align,
  justify,
  center,
  style,
  ...props
}: ButtonProps) => {
  const { sizes } = useTheme()
  const buttonStyle = StyleSheet.flatten([
    {
      height: sizes.buttonHeight,
      borderRadius: sizes.buttonRadius,
      borderWidth: sizes.buttonBorder,
    },
    center !== undefined && { alignItems: 'center', justifyContent: 'center' },
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
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    style,
  ]) as ViewStyle

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
