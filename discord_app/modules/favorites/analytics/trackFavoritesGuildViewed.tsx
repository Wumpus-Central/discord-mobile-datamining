// discord_app/modules/favorites/analytics/trackFavoritesGuildViewed.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumTypeUtilsDefault from "../../../utils/PremiumTypeUtils.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(
    UserStore.getCurrentUser(),
    PremiumTypes.TIER_2,
  );
  const obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = AnalyticsUtilsDefault;
  obj.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj.is_xp_enabled = obj.getFavoritesAccess().isExperimentEnabled;
  obj.is_premium_tier_2 = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
}
