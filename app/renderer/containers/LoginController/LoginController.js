import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../store/actions'

function LoginController () {
  const { isAuthenticated } = useSelector(state => state.Auth)
  const dispatch = useDispatch()
  return (
    <div>
      {isAuthenticated
        ? <button onClick={() => dispatch(logout())}>Logout</button>
        : <button onClick={() => dispatch(login({ username: 'John' }))}>Login</button>}
    </div>
  )
}

export default LoginController
