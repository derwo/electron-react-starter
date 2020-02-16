import React from 'react'
import { useSelector } from 'react-redux'

function Welcome () {
  const { isAuthenticated, user } = useSelector(state => state.Auth)
  return isAuthenticated
    ? <p>Welcome back {user.username}</p>
    : null
}

export default Welcome
