// discord_app/modules/favorites/FavoritesAnalytics.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";

const require = arg1;
let manual_browsing = "manual_browsing";
const result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/FavoritesAnalytics.tsx");

export const setNextFavoritesGuildViewSource = function setNextFavoritesGuildViewSource(intro_dc) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    let closure_5 = intro_dc;
  }
};
export function consumeNextFavoritesGuildViewSource() {
  const manual_browsing = "manual_browsing";
  return manual_browsing;
}
export const trackFavoritesGuildAddToFavorites = function trackFavoritesGuildAddToFavorites(source, channel_type, length) {
  let obj = expandEventProperties;
  obj = { source, channel_type, total_favorites: length };
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
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(source, closure_0) {
  let obj = expandEventProperties;
  obj = { source, is_visible: closure_0 };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj);
};
export const trackFavoritesGuildUpsellModalOpened = function trackFavoritesGuildUpsellModalOpened(source) {
  let obj = expandEventProperties;
  obj = { source };
  obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
};
export const trackFavoritesGuildAddModalOpened = function trackFavoritesGuildAddModalOpened(source) {
  let obj = expandEventProperties;
  obj = { source };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
};
export const trackFavoritesGuildViewed = function trackFavoritesGuildViewed(source, total_favorites, is_xp_enabled, is_premium_tier_2) {
  let obj = expandEventProperties;
  obj = { source, total_favorites, is_xp_enabled, is_premium_tier_2 };
  obj.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};