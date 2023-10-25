
import { signOut } from 'next-auth/react'

const SignOut = () => {
  return (
        <button type="button" className="black_btn" onClick={signOut}>Sign Out</button>
        )
}

export default SignOut