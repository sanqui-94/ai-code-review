"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function AppSessionProvider({ children }: Readonly<Props>) {
  return <SessionProvider>{children}</SessionProvider>
}
