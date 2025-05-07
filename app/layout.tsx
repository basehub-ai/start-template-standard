import { Toolbar } from "basehub/next-toolbar"
import { basehub } from "basehub"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const generateMetadata = async () => {
  const data = await basehub().query({
    _sys: { title: true, dashboardUrl: true },
  })
  return {
    title: data._sys.title,
    description: `Edit content on ${data._sys.dashboardUrl}`,
  } satisfies Metadata
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toolbar />
      </body>
    </html>
  )
}
