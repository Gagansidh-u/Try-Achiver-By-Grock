import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BarChart, Gift, Trophy } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const rewardImage1 = PlaceHolderImages.find(p => p.id === 'reward-1');
  const rewardImage2 = PlaceHolderImages.find(p => p.id === 'reward-2');
  const rewardImage3 = PlaceHolderImages.find(p => p.id === 'reward-3');

  const features = [
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: 'Track Achievements',
      description: 'Seamlessly sync your Google Play Games profile and watch your progress soar. Never miss a milestone.',
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: 'Analyze Your Gameplay',
      description: 'Get insights into your gaming habits, XP gains, and activity logs. Level up your strategy.',
    },
    {
      icon: <Gift className="w-12 h-12 text-primary" />,
      title: 'Unlock Epic Rewards',
      description: 'Turn your gaming victories into real-world rewards. Exclusive content and discounts await the dedicated.',
    },
  ];
  
  const rewards = [
    { image: rewardImage1, name: 'Cybernetic Headset', points: '5000 PTS' },
    { image: rewardImage2, name: 'Google Play Credit', points: '2500 PTS' },
    { image: rewardImage3, name: 'Exclusive "Glitch" Skin', points: '10000 PTS' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover z-0"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container px-4 animate-fade-in-up">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-glow">
              LEVEL UP YOUR GAMING
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
              Turn your Google Play achievements into exclusive rewards. Track your progress, dominate the leaderboards, and get rewarded.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold btn-arcade text-lg py-6 px-8">
                <Link href="/dashboard">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="text-primary">Features</span> That Power You Up
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-arcade bg-card border-border/50 text-center">
                  <CardHeader className="items-center">
                    {feature.icon}
                    <CardTitle className="font-headline text-2xl mt-4 text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="rewards" className="py-20 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
              Reap Your <span className="text-accent">Rewards</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {rewards.map((reward, index) => reward.image && (
                 <Card key={index} className="card-arcade bg-card border-border/50 overflow-hidden group">
                   <div className="relative h-60">
                     <Image src={reward.image.imageUrl} alt={reward.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={reward.image.imageHint} />
                   </div>
                   <CardHeader>
                     <CardTitle className="font-headline text-xl text-accent">{reward.name}</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <p className="text-lg font-bold text-primary">{reward.points}</p>
                   </CardContent>
                 </Card>
               ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="link" className="text-accent text-lg">
                    <Link href="/rewards">View All Rewards <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
