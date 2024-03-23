import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  onClose: () => set(() => ({ collapsed: true })),
  onOpen: () => set(() => ({ collapsed: false })),
}));
