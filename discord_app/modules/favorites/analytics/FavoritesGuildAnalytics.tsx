// === Module 10233: FavoritesGuildAnalytics ===

// Module 10233 (FavoritesGuildAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

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
  const obj = { source, channel_type: type, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, obj);
};
export const trackFavoritesGuildRemoveFromFavorites = function trackFavoritesGuildRemoveFromFavorites(type, length) {
  const obj = { channel_type: type, total_favorites: length };
  obj.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, obj);
};
export const trackFavoritesGuildOrderUpdated = function trackFavoritesGuildOrderUpdated() {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
};
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(auto, is_visible) {
  const obj = { source: auto, is_visible };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj);
};