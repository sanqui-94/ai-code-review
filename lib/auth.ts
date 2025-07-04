import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import env from "@/lib/env"

const authConfig = {
  providers: [
    GitHub({
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    }),
  ],
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
export default authConfig
