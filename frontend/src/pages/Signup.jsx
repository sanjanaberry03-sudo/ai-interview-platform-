import { useState } from "react"
import axios from "axios"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

  try {

    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      {
        name,
        email,
        password,
      }
    )

    alert(response.data.message)

  } catch (error) {

    alert("Signup failed")

  }
}

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg rounded-xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
  onClick={handleSignup}
  className="w-full bg-black text-white p-2 rounded mt-4"
>
  Signup
</button>

      </div>
    </div>
  )
}

export default Signup