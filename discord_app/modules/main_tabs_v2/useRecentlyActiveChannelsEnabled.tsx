// === Module 7290: isRecentlyActiveChannelsEnabled ===

// Module 7290 (isRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 5505 */;
import closure_2 from "getUserAgnosticState" /* 5506 */;

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return closure_2.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};