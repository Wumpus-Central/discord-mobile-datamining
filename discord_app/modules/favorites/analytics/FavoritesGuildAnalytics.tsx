// discord_app/modules/favorites/analytics/FavoritesGuildAnalytics.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";

const require = arg1;
let manual_browsing = "manual_browsing";
const result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/analytics/FavoritesGuildAnalytics.tsx");

export const setNextFavoritesGuildViewSource = function setNextFavoritesGuildViewSource(intro_dc) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    let closure_5 = intro_dc;
  }
};
export function consumeNextFavoritesGuildViewSource() {
  const manual_browsing = "manual_browsing";
  return manual_browsing;
}
export const trackFavoritesGuildAddToFavorites = function trackFavoritesGuildAddToFavorites(closure_1, channel_type, length) {
  let obj = expandEventProperties;
  obj = { source: closure_1, channel_type, total_favorites: length };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, obj);
};
export const trackFavoritesGuildRemoveFromFavorites = function trackFavoritesGuildRemoveFromFavorites(c3, length) {
  let obj = expandEventProperties;
  obj = { channel_type: c3, total_favorites: length };
  obj.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, obj);
};
export const trackFavoritesGuildOrderUpdated = function trackFavoritesGuildOrderUpdated() {
  expandEventProperties.track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
};
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(auto, is_visible) {
  let obj = expandEventProperties;
  obj = { source: auto, is_visible };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj);
};