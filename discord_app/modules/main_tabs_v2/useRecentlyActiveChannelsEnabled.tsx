// === Module 8252: useRecentlyActiveChannelsEnabled ===

// Module 8252 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 7162 */;
import DesignTogglesStore from "DesignTogglesStore" /* 7163 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
}
export function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
}