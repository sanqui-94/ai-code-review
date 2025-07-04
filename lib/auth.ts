import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import env from "@/lib/env"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: env.AUTH_GITHUB_CLIENT_ID,
            clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
        })
    ]
})
