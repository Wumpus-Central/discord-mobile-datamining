// === Module 5293: isRecentlyActiveChannelsEnabled ===

// Module 5293 (isRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 5295 */;
import getUserAgnosticState from "getUserAgnosticState" /* 5294 */;

const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return closure_2.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};