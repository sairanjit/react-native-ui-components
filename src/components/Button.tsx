import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({
  children,
  color,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  radius,
  style,
  ...props
}: any) => {
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && { backgroundColor: color },
    padding !== undefined && { padding },
    paddingVertical !== undefined && { paddingVertical },
    paddingHorizontal !== undefined && { paddingHorizontal },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
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
