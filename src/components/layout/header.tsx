'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2, Menu, X, Trophy, Gift, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from '../icons/logo';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: <Trophy className="w-5 h-5" /> },
  { href: '/rewards', label: 'Rewards', icon: <Gift className="w-5 h-5" /> },
];

export default function Header() {
  const pathname = usePathname();

  const isAppLink = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                isAppLink(link.href) ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button className="btn-arcade">
            Sign Up
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetHeader className="p-4 flex-row justify-between items-center mb-4">
                <Link href="/">
                  <Logo />
                </Link>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <div className="p-4 pt-0">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn("flex items-center gap-3 rounded-md p-3 text-lg font-medium",
                          isAppLink(link.href) ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/50"
                        )}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                
                <div className="mt-8 border-t border-border pt-8 flex flex-col gap-4">
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full justify-start text-lg p-6">Sign In</Button>
                    </SheetClose>
                     <SheetClose asChild>
                        <Button className="w-full btn-arcade text-lg p-6">Sign Up</Button>
                    </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
