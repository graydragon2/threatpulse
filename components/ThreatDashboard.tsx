// components/ThreatDashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThreatDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Live RSS Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Real-time filtered RSS threat data will appear here.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Threat Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Visual scoring or charts will go here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
