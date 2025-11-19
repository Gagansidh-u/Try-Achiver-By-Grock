import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Coins } from "lucide-react";
import Image from "next/image";

export default function RewardsPage() {
    const rewards = [
        { name: 'Cybernetic Headset', points: 5000, imageId: 'reward-1', available: true },
        { name: 'Google Play Credit', points: 2500, imageId: 'reward-2', available: true },
        { name: 'Exclusive "Glitch" Skin', points: 10000, imageId: 'reward-3', available: true },
        { name: 'Arcade Classics Pack', points: 3000, imageId: 'hero-background', available: false },
        { name: 'Legendary Loot Box', points: 7500, imageId: 'reward-1', imageHint: 'loot box', available: true },
        { name: 'Player Icon Bundle', points: 1000, imageId: 'user-avatar', imageHint: 'player icon', available: true },
    ];

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">
                    Rewards <span className="text-accent">Arcade</span>
                </h1>
                <p className="text-lg text-muted-foreground mt-2">Cash in your achievements for epic loot!</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {rewards.map((reward) => {
                    const image = PlaceHolderImages.find(p => p.id === reward.imageId);
                    return (
                        <Card key={reward.name} className="card-arcade bg-card border-border/50 flex flex-col group">
                           {image && (
                                <div className="relative h-56 w-full overflow-hidden rounded-t-md">
                                    <Image 
                                        src={image.imageUrl} 
                                        alt={reward.name} 
                                        fill 
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={reward.imageHint || image.imageHint}
                                    />
                                    {!reward.available && (
                                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                            <span className="font-headline text-2xl text-destructive-foreground rotate-[-15deg]">REDEEMED</span>
                                        </div>
                                    )}
                                </div>
                           )}
                           <CardHeader className="flex-grow">
                               <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors">{reward.name}</CardTitle>
                           </CardHeader>
                           <CardFooter className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Coins className="w-6 h-6 text-primary"/>
                                    <span className="text-xl font-bold font-headline text-foreground">{reward.points.toLocaleString()}</span>
                                </div>
                                <Button className="btn-arcade" disabled={!reward.available}>
                                    {reward.available ? 'Redeem' : 'Claimed'}
                                </Button>
                           </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
