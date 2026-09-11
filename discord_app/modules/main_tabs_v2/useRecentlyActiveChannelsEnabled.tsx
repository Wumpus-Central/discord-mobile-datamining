// === Module 7609: useRecentlyActiveChannelsEnabled ===

// Module 7609 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 5677 */;
import DesignTogglesStore from "DesignTogglesStore" /* 5678 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};