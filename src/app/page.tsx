import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Download, Smartphone, Shield } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M21.5,12.2L6.7,2.5C6.4,2.3,6,2.4,5.8,2.7C5.7,2.8,5.7,3,5.7,3.2v17.5c0,0.4,0.3,0.8,0.8,0.8c0.2,0,0.3-0.1,0.5-0.2l14.8-9.7C21.9,12.5,22,12.1,21.8,11.8C21.8,12,21.7,12,21.5,12.2z M8.8,14.8V9.2l4.1,2.8L8.8,14.8z M16.7,10.6l-2.4-1.6L12,10.1l2.3,1.1L16.7,10.6z M17.4,11.8l-2,1.3l-2.6-1.3l2.6-1.3L17.4,11.8z" />
  </svg>
);


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: 'Modern Interface',
      description: 'A clean, intuitive, and user-friendly interface that makes navigation a breeze.',
    },
    {
      icon: <Download className="w-12 h-12 text-primary" />,
      title: 'Lightweight & Fast',
      description: 'Optimized for performance, ensuring a smooth and responsive experience even on older devices.',
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Secure & Private',
      description: 'Your data is important. We prioritize your privacy with robust security measures.',
    },
  ];

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
              data-ai-hint="abstract background"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container px-4 animate-fade-in-up">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-glow">
              Your App, Reimagined.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
              Discover the ultimate tool for [Your App's Main Purpose]. Available now on the Google Play Store.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold text-lg py-6 px-8">
                <Link href="#">
                  <PlayStoreIcon className="w-6 h-6 mr-2" />
                  Download on Google Play
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="text-primary">Features</span> That Make a Difference
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
      </main>
      <Footer />
    </div>
  );
}
