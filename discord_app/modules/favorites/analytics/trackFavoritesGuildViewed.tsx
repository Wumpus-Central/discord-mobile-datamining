// === Module 18817: trackFavoritesGuildViewed ===

// Module 18817 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1983 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10842 */;
import UserStore from "UserStore" /* 1383 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const PremiumTypes = fn(1385).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj3 = { source: null, total_favorites: null, is_xp_enabled: true, is_premium_tier_2: null };
  const obj2 = AnalyticsUtilsDefault;
  obj3.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj3.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj3.is_premium_tier_2 = isPremiumExactlyResult;
  obj2.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj3);
};