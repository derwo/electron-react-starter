import React from 'react'
import LoginController from '../../containers/LoginController/LoginController'
import Welcome from '../../components/Welcome/Welcome'

function Home () {
  return (
    <div>
      <h1>Home</h1>
      <Welcome />
      <LoginController />
    </div>
  )
}

export default Home
