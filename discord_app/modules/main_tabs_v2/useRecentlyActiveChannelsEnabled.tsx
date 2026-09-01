// discord_app/modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx
import useDesignToggleDefault from "../devtools/design_toggles/useDesignToggle.tsx";
import closure_2 from "../devtools/design_toggles/DesignTogglesStore.tsx";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return closure_2.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};
