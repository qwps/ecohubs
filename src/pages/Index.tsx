import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gamepad2, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GameVault</span>
          </div>
          <Link to="/games">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Browse Games
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="container mx-auto px-6 py-32 flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)]">
          <div className="relative">
            <div className="absolute inset-0 blur-[100px] opacity-20 bg-primary rounded-full" />
            <Sparkles className="w-16 h-16 text-primary mb-6 animate-pulse relative z-10" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-fade-in">
            GameVault
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl animate-fade-in">
            Your ultimate destination for discovering and playing amazing games across all genres
          </p>
          
          <Link to="/games">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_50px_rgba(74,222,128,0.5)] transition-all duration-300 animate-scale-in"
            >
              Explore Games
            </Button>
          </Link>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vast Library</h3>
              <p className="text-muted-foreground text-sm">
                Explore hundreds of games across multiple categories
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Curated Collection</h3>
              <p className="text-muted-foreground text-sm">
                Hand-picked games organized by genre and style
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-primary font-bold flex items-center justify-center text-xl">∞</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Always Growing</h3>
              <p className="text-muted-foreground text-sm">
                New games added regularly to keep things fresh
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
