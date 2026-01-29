import { RegisterForm } from '@/features/auth/components/register-form'
import { requireUnauth } from '@/lib/auth-utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create Account - StillRead',
    description: 'Create your StillRead account to start your reading journey',
}

const Page = async () => {
    await requireUnauth()
    return <RegisterForm />
}

export default Page
