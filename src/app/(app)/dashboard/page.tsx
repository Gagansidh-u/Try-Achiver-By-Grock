import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Clock, Star, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const avatarImage = PlaceHolderImages.find(p => p.id === 'user-avatar');

  const stats = [
    { label: 'Level', value: '42', icon: <Star className="w-5 h-5" /> },
    { label: 'Achievements', value: '128 / 250', icon: <Award className="w-5 h-5" /> },
    { label: 'Weekly XP', value: '+1,450', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Play Streak', value: '14 Days', icon: <Zap className="w-5 h-5" /> },
  ];

  const recentAchievements = [
    { title: 'Galaxy Explorer', game: 'Cosmic Drift', description: 'Visited every planet in the Orion sector.', timestamp: '2 hours ago', icon: <Star /> },
    { title: 'Speed Runner', game: 'Pixel Racer', description: 'Finished the Neon Circuit in under 2 minutes.', timestamp: '5 hours ago', icon: <Clock /> },
    { title: 'Perfect Score', game: 'Rhythm Master', description: 'Achieved a 100% perfect run on a hard difficulty song.', timestamp: '1 day ago', icon: <Award /> },
    { title: 'Legendary Crafter', game: 'Blockverse', description: 'Crafted a legendary tier item.', timestamp: '2 days ago', icon: <Zap /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <Card className="card-arcade bg-card border-border/50 mb-8">
        <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-primary">
            {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt="User Avatar" data-ai-hint={avatarImage.imageHint} />}
            <AvatarFallback>GG</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">GamerGod_420</h1>
            <p className="text-muted-foreground">Master of Pixels, Lord of the Lag</p>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-primary">Next Level XP</span>
                <span className="text-sm text-muted-foreground">3,500 / 10,000 XP</span>
              </div>
              <Progress value={35} className="h-4 border-2 border-primary bg-background" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="card-arcade bg-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <div className="text-accent">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-headline text-primary">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Recent Achievements */}
      <div>
        <h2 className="font-headline text-3xl font-bold mb-6">Recent Achievements</h2>
        <div className="space-y-6">
          {recentAchievements.map((achievement, index) => (
            <Card key={index} className="card-arcade bg-card border-border/50 transition-transform hover:-translate-y-1">
              <CardContent className="p-4 flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline font-bold text-lg text-primary">{achievement.title}</h3>
                      <p className="text-sm text-accent font-semibold">{achievement.game}</p>
                    </div>
                     <p className="text-xs text-muted-foreground whitespace-nowrap">{achievement.timestamp}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
