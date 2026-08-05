// discord_app/modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx
import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return getUserAgnosticState.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return require("../devtools/design_toggles/useDesignToggle.tsx")("enable_recently_active");
};