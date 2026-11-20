// === Module 8209: useRecentlyActiveChannelsEnabled ===

// Module 8209 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 6977 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6978 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
}
export function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
}