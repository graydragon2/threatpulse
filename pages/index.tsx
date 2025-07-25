// pages/index.tsx
import Head from 'next/head'
import { ThreatDashboard } from '@/components/ThreatDashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreatPulse Dashboard</title>
      </Head>
      <main className="min-h-screen bg-background text-foreground p-6">
        <ThreatDashboard />
      </main>
    </>
  )
}
