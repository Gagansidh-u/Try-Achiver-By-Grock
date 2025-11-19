import { Gamepad2 } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Gamepad2 className="w-7 h-7 text-primary" />
            <span className="font-headline text-xl font-bold tracking-tighter text-foreground">
                Try Achiever HQ
            </span>
        </div>
    );
}
