import { api } from './api-client'

interface SignUpRequest {
  name: string
  email: string
  password: string
}

type SignUpResponse = undefined

export async function signUp({
  name,
  email,
  password,
}: SignUpRequest): Promise<SignUpResponse> {
  await api.post('users', {
    json: {
      name,
      email,
      password,
    },
  })
}
