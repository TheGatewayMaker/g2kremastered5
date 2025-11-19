import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Streaming from "./pages/Streaming";
import CategoryPlaceholder from "./pages/CategoryPlaceholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route
            path="/apps"
            element={<CategoryPlaceholder title="Apps & Softwares" />}
          />
          <Route
            path="/books"
            element={<CategoryPlaceholder title="Books & Novels" />}
          />
          <Route
            path="/ai"
            element={<CategoryPlaceholder title="Artificial Intelligence" />}
          />
          <Route
            path="/games"
            element={<CategoryPlaceholder title="Games" />}
          />
          <Route
            path="/torrents"
            element={<CategoryPlaceholder title="Torrents" />}
          />
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
