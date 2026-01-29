import { LoginForm } from "@/features/auth/components/login-form"
import { requireUnauth } from "@/lib/auth-utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign In - StillRead",
    description: "Sign in to your StillRead account to continue reading",
}

export const Page = async () => {
    await requireUnauth()
    return <LoginForm />
}

export default Page