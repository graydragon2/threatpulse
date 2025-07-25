import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-64 bg-muted p-4 min-h-screen">
      <nav className="space-y-4">
        <h2 className="text-lg font-semibold">ThreatPulse</h2>
        <ul className="space-y-2">
          <li><Link href="/" className="hover:underline">Dashboard</Link></li>
          <li><Link href="#" className="text-muted-foreground">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
