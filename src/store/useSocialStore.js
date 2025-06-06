import { create } from 'zustand';
import { SocialApi } from '../api/api';

const useSocialStore = create((set) => ({
  // State
  socials: [],
  loading: false,
  error: null,

  // Actions
  fetchSocials: async () => {
    try {
      set({ loading: true, error: null });
      const response = await SocialApi.getAllSocials();

      set({ socials: response.data.data || [], loading: false });
    } catch (error) {
      console.error("Error fetching social media links:", error);
      set({ 
        error: error.response?.data?.message || "Failed to fetch social media links", 
        loading: false 
      });
    }
  },

  // Reset state
  reset: () => {
    set({ socials: [], loading: false, error: null });
  }
}));

export default useSocialStore;