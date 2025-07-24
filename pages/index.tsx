// pages/index.tsx
import Head from "next/head";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Sidebar } from "@/components/Sidebar";
import ThreatDashboard from "@/components/ThreatDashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreatPulse Dashboard</title>
        <meta name="description" content="Live threat intelligence powered by RSS and AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />

        <div className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">ThreatPulse Dashboard</h1>
            <ThemeToggle />
          </div>

          <Tabs defaultValue="rss">
            <TabsList>
              <TabsTrigger value="rss">RSS Feeds</TabsTrigger>
              <TabsTrigger value="darkweb">Dark Web</TabsTrigger>
              <TabsTrigger value="phishing">Phishing</TabsTrigger>
              <TabsTrigger value="score">Threat Score</TabsTrigger>
            </TabsList>

            <TabsContent value="rss">
              <Card>
                <CardContent className="pt-4">
                  <ThreatDashboard />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="darkweb">
              <Card>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">Dark web monitoring coming soon.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="phishing">
              <Card>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">Phishing protection module in development.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="score">
              <Card>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">Threat scoring system (AI-powered) in progress.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
