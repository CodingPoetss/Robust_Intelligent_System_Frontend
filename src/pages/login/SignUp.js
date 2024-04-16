import React from 'react'
import dynamic from 'next/dynamic'
const SignUpForm = dynamic(
  () => import('@/components/SignUpForm'),
  { ssr: false },
)


function SignUp() {
  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default SignUp
