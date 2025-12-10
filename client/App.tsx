import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ParticleBackground } from "@/components/ParticleBackground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Streaming from "./pages/Streaming";
import Apps from "./pages/Apps";
import Books from "./pages/Books";
import AI from "./pages/AI";
import Games from "./pages/Games";
import Torrents from "./pages/Torrents";
import CategoryPlaceholder from "./pages/CategoryPlaceholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ParticleBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/books" element={<Books />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/games" element={<Games />} />
          <Route path="/torrents" element={<Torrents />} />
          <Route
            path="/darkweb"
            element={<CategoryPlaceholder title="Dark Web" isDevelopment />}
          />
          <Route
            path="/breaches"
            element={
              <CategoryPlaceholder title="Breach & Leaks" isDevelopment />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
