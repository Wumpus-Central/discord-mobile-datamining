// discord_app/modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx
import useDesignToggleDefault from "../devtools/design_toggles/useDesignToggle.tsx";
import DesignTogglesStore from "../devtools/design_toggles/DesignTogglesStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};
