import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'

interface BlockProps extends ViewProps {
  children?: React.ReactNode
  flex?: ViewStyle['flex']
  row?: ViewStyle['flexDirection']
  color?: ViewStyle['backgroundColor']
  align?: ViewStyle['alignItems']
  justify?: ViewStyle['justifyContent']
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
  style?: StyleProp<ViewStyle>
}

const Block = ({
  children,
  flex,
  row,
  color,
  align,
  justify,
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
}: BlockProps) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && { flex },
    row !== undefined && { flexDirection: 'row' },
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
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
  ]) as ViewStyle

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  )
}

export default Block
