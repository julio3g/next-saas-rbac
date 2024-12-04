import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([z.literal('menage'), z.literal('get'), z.literal('export')]),
  z.literal('Billing'),
])

export type BillingSubject = z.infer<typeof billingSubject>
