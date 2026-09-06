// === Module 16739: trackFavoritesGuildViewed ===

// Module 16739 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1885 */;
import FavoritesHooks from "FavoritesHooks" /* 10224 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10233 */;
import UserStore from "UserStore" /* 1371 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = AnalyticsUtilsDefault;
  obj.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj.is_xp_enabled = obj.getFavoritesAccess().isExperimentEnabled;
  obj.is_premium_tier_2 = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};