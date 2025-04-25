
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  onMenuToggle: () => void;
}

export function MobileHeader({ onMenuToggle }: MobileHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between md:hidden">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="mr-2"
        >
          <Menu size={24} />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <h1 className="text-lg font-semibold">ONDC IGM</h1>
      </div>
    </div>
  );
}
