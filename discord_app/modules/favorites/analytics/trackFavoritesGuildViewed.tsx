// === Module 18896: trackFavoritesGuildViewed ===

// Module 18896 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 2108 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10608 */;
import UserStore from "UserStore" /* 1386 */;
import FavoriteStore from "FavoriteStore" /* 4769 */;

require = fn;
const AnalyticEvents = fn(1071).AnalyticEvents;
const PremiumTypes = fn(1388).PremiumTypes;
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