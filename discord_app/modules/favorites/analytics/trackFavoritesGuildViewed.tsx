// === Module 17377: trackFavoritesGuildViewed ===

// Module 17377 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1989 */;
import FavoritesHooks from "FavoritesHooks" /* 10279 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10289 */;
import UserStore from "UserStore" /* 1390 */;
import FavoriteStore from "FavoriteStore" /* 2067 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PremiumTypes = fn(1392).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const obj = FavoritesHooks;
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj4 = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = AnalyticsUtilsDefault;
  obj4.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj4.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj4.is_xp_enabled = obj.getFavoritesAccess().isExperimentEnabled;
  obj4.is_premium_tier_2 = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj4);
};