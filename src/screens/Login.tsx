import React from 'react'
import { Block, Button, Input, Text } from '../components'
import useTheme from '../hooks/useTheme'

const Login = () => {
  const { sizes } = useTheme()

  return (
    <Block marginTop={20} paddingHorizontal={20}>
      <Text h3 align="center">
        Login
      </Text>
      <Text p align="center">
        Enter your email and password
      </Text>
      <Input
        padding={12}
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="black"
        marginVertical={sizes.base}
      />
      <Input
        padding={12}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="black"
        marginVertical={sizes.base}
      />
      <Button center color="lightblue" radius={8} padding={8}>
        <Text>Login</Text>
      </Button>
    </Block>
  )
}

export default Login
