import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { AlertTriangle, Award, Target } from "lucide-react";

function MissionsBar() {
    const missions = [
        { icon: <Target className="w-5 h-5 text-accent"/>, text: "Earn 500 XP this week" },
        { icon: <Award className="w-5 h-5 text-accent"/>, text: "Unlock 'Speed Runner' achievement" },
        { icon: <AlertTriangle className="w-5 h-5 text-accent"/>, text: "Daily Mission: Play for 30 minutes" },
    ]

    return (
        <div className="bg-secondary/30 border-y border-border/60">
            <div className="container mx-auto px-4">
                <div className="flex items-center h-12 overflow-hidden">
                    <span className="font-headline text-sm font-bold text-accent mr-4 hidden sm:inline">MISSIONS:</span>
                     <div className="flex-1 relative h-full">
                        <div className="animate-marquee whitespace-nowrap absolute top-0 left-0 h-full flex items-center">
                            {missions.map((mission, i) => (
                                <div key={i} className="flex items-center gap-2 mx-6 text-sm text-muted-foreground">
                                    {mission.icon}
                                    <span>{mission.text}</span>
                                </div>
                            ))}
                             {missions.map((mission, i) => (
                                <div key={`clone-${i}`} className="flex items-center gap-2 mx-6 text-sm text-muted-foreground" aria-hidden="true">
                                    {mission.icon}
                                    <span>{mission.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    )
}


export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MissionsBar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
