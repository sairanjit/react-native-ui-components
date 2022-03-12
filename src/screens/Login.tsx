import React from 'react'
import { Block, Button, Input, Text } from '../components'

const Login = () => {
  return (
    <Block marginTop={20} paddingHorizontal={20}>
      <Text h3 align="center">
        Login
      </Text>
      <Input
        padding={12}
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="black"
      />
      <Input
        padding={12}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="black"
      />
      <Button color="lightblue" radius={8} padding={8}>
        <Text align="center">Login</Text>
      </Button>
    </Block>
  )
}

export default Login
