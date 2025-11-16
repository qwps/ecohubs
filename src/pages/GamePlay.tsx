import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Gamepad2, Maximize, Minimize, ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";

// Game data - in a real app, this would come from a database or API
const gameData: Record<string, { title: string; iframeUrl: string }> = {
  "1": { title: "Cyber Warriors", iframeUrl: "https://example.com/cyber-warriors" },
  "2": { title: "Epic Quest", iframeUrl: "https://example.com/epic-quest" },
  "3": { title: "Speed Racers", iframeUrl: "https://example.com/speed-racers" },
  "4": { title: "Mind Palace", iframeUrl: "https://example.com/mind-palace" },
  "5": { title: "Battle Royale", iframeUrl: "https://example.com/battle-royale" },
  "6": { title: "Mystery Manor", iframeUrl: "https://example.com/mystery-manor" },
  "7": { title: "Drift Kings", iframeUrl: "https://example.com/drift-kings" },
  "8": { title: "Logic Labs", iframeUrl: "https://example.com/logic-labs" },
  "9": { title: "Team Tactics", iframeUrl: "https://example.com/team-tactics" },
};

const GamePlay = () => {
  const { id } = useParams<{ id: string }>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const game = id ? gameData[id] : null;

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  // Listen for fullscreen changes
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  // Add event listener for fullscreen changes
  if (typeof document !== "undefined") {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Link to="/games">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Back to Games
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GameVault</span>
          </Link>
          <Link to="/games">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-surface-hover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
          </Link>
        </div>
      </nav>

      {/* Game Container */}
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-foreground">{game.title}</h1>
            <Button
              onClick={toggleFullscreen}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {isFullscreen ? (
                <>
                  <Minimize className="w-4 h-4 mr-2" />
                  Exit Fullscreen
                </>
              ) : (
                <>
                  <Maximize className="w-4 h-4 mr-2" />
                  Fullscreen
                </>
              )}
            </Button>
          </div>

          {/* Game Frame */}
          <div
            ref={containerRef}
            className="relative bg-card border-2 border-border rounded-lg overflow-hidden shadow-[0_0_40px_rgba(74,222,128,0.15)]"
          >
            <div className="aspect-video w-full">
              <iframe
                src={game.iframeUrl}
                title={game.title}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
            
            {/* Fullscreen overlay controls */}
            {isFullscreen && (
              <div className="absolute top-4 right-4 z-10">
                <Button
                  onClick={toggleFullscreen}
                  size="sm"
                  className="bg-background/80 backdrop-blur-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Minimize className="w-4 h-4 mr-2" />
                  Exit Fullscreen
                </Button>
              </div>
            )}
          </div>

          {/* Game Info */}
          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About This Game</h2>
            <p className="text-muted-foreground mb-4">
              Enjoy playing {game.title}! Use the fullscreen button above for an immersive gaming experience.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">Game is loading in the frame above</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamePlay;
