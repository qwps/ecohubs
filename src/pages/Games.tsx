import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Gamepad2, Sword, Car, Brain, Users, Zap } from "lucide-react";
import cyberWarriorsImg from "@/assets/games/cyber-warriors.jpg";
import epicQuestImg from "@/assets/games/epic-quest.jpg";
import speedRacersImg from "@/assets/games/speed-racers.jpg";
import mindPalaceImg from "@/assets/games/mind-palace.jpg";
import battleRoyaleImg from "@/assets/games/battle-royale.jpg";
import mysteryManorImg from "@/assets/games/mystery-manor.jpg";
import driftKingsImg from "@/assets/games/drift-kings.jpg";
import logicLabsImg from "@/assets/games/logic-labs.jpg";
import teamTacticsImg from "@/assets/games/team-tactics.jpg";

interface Game {
  id: number;
  title: string;
  category: string;
  description: string;
  players: string;
  image: string;
}

const games: Game[] = [
  { id: 1, title: "Cyber Warriors", category: "Action", description: "Fast-paced combat in a neon future", players: "1-4", image: cyberWarriorsImg },
  { id: 2, title: "Epic Quest", category: "Adventure", description: "Embark on a legendary journey", players: "1", image: epicQuestImg },
  { id: 3, title: "Speed Racers", category: "Racing", description: "High-octane racing action", players: "1-8", image: speedRacersImg },
  { id: 4, title: "Mind Palace", category: "Puzzle", description: "Challenge your cognitive skills", players: "1", image: mindPalaceImg },
  { id: 5, title: "Battle Royale", category: "Action", description: "Last one standing wins", players: "1-100", image: battleRoyaleImg },
  { id: 6, title: "Mystery Manor", category: "Adventure", description: "Solve the haunting mystery", players: "1-2", image: mysteryManorImg },
  { id: 7, title: "Drift Kings", category: "Racing", description: "Master the art of drifting", players: "1-4", image: driftKingsImg },
  { id: 8, title: "Logic Labs", category: "Puzzle", description: "Scientific puzzles await", players: "1", image: logicLabsImg },
  { id: 9, title: "Team Tactics", category: "Strategy", description: "Lead your squad to victory", players: "1-6", image: teamTacticsImg },
];

const categories = [
  { name: "Action", icon: Sword, color: "text-red-400" },
  { name: "Adventure", icon: Gamepad2, color: "text-primary" },
  { name: "Racing", icon: Car, color: "text-yellow-400" },
  { name: "Puzzle", icon: Brain, color: "text-blue-400" },
  { name: "Strategy", icon: Zap, color: "text-purple-400" },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GameVault</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-surface-hover">
              Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Game Library</h1>
          <p className="text-muted-foreground text-lg mb-12">
            Browse our collection of amazing games
          </p>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant="outline"
                    className="border-border hover:border-primary hover:bg-surface-hover transition-all duration-300"
                  >
                    <Icon className={`w-4 h-4 mr-2 ${category.color}`} />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Games Grid */}
          {categories.map((category) => {
            const categoryGames = games.filter((game) => game.category === category.name);
            if (categoryGames.length === 0) return null;

            const Icon = category.icon;

            return (
              <div key={category.name} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`w-6 h-6 ${category.color}`} />
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryGames.map((game) => (
                    <Card
                      key={game.id}
                      className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] group overflow-hidden"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {game.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {game.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{game.players} Players</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                          >
                            Play Now
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Games;
