import React from 'react'
import dynamic from 'next/dynamic'
const SignInForm = dynamic(
  () => import('@/components/SignInForm'),
  { ssr: false },
)


function SignIn() {
  return (
    <div>
      <SignInForm />
    </div>
  )
}

export default SignIn
