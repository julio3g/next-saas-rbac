import { Header } from '@/components/header'

import { OrganizationForm } from '../org/organization-form'

export default function CreateOrganization() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="w-ful mx-auto max-w-[1200px] space-y-4">
        <h1 className="text-2xl font-bold">Create Organization</h1>
        <OrganizationForm />
      </main>
    </div>
  )
}
