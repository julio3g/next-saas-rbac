import { env } from '@saas/env'
import { getCookie } from 'cookies-next'
import ky from 'ky'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        let token: unknown

        if (typeof window === 'undefined') {
          const { cookies } = await import('next/headers')
          const cookieStore = await cookies()
          token = cookieStore.get('token')?.value
        } else token = getCookie('token')

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
