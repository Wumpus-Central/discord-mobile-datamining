// === Module 7790: useRecentlyActiveChannelsEnabled ===

// Module 7790 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 7066 */;
import DesignTogglesStore from "DesignTogglesStore" /* 7067 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
}
export function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
}