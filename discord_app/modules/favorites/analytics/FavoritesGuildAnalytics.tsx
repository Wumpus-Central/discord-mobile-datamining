// === Module 10362: FavoritesGuildAnalytics ===

// Module 10362 (FavoritesGuildAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let manual_browsing = "manual_browsing";
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/FavoritesGuildAnalytics.tsx");

export const setNextFavoritesGuildViewSource = function setNextFavoritesGuildViewSource(intro_dc) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    manual_browsing = intro_dc;
  }
};
export function consumeNextFavoritesGuildViewSource() {
  manual_browsing = "manual_browsing";
  return manual_browsing;
}
export const trackFavoritesGuildAddToFavorites = function trackFavoritesGuildAddToFavorites(source, type, total_favorites) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, { source, channel_type: type, total_favorites });
};
export const trackFavoritesGuildRemoveFromFavorites = function trackFavoritesGuildRemoveFromFavorites(type, length) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, { channel_type: type, total_favorites: length });
};
export const trackFavoritesGuildOrderUpdated = function trackFavoritesGuildOrderUpdated() {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
};
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(auto, is_visible) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, { source: auto, is_visible });
};