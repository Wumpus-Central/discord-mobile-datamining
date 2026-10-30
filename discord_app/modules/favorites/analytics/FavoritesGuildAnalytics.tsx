// discord_app/modules/favorites/analytics/FavoritesGuildAnalytics.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

const require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
let manual_browsing = "manual_browsing";
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/FavoritesGuildAnalytics.tsx");

export function setNextFavoritesGuildViewSource(upsell_modal) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    manual_browsing = upsell_modal;
  }
}
export function consumeNextFavoritesGuildViewSource() {
  manual_browsing = "manual_browsing";
  return manual_browsing;
}
export function trackFavoritesGuildAddToFavorites(source, type, total_favorites) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, {
    source,
    channel_type: type,
    total_favorites,
  });
}
export function trackFavoritesGuildRemoveFromFavorites(type, length) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
    channel_type: type,
    total_favorites: length,
  });
}
export function trackFavoritesGuildOrderUpdated() {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
}
export function trackFavoritesGuildVisibilitySettingToggled(auto, is_visible) {
  AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, { source: auto, is_visible });
}
