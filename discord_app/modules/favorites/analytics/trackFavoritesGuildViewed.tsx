// discord_app/modules/favorites/analytics/trackFavoritesGuildViewed.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumTypeUtilsDefault from "../../../utils/PremiumTypeUtils.tsx";
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const PremiumTypes = fn(1386).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(
    UserStore.getCurrentUser(),
    PremiumTypes.TIER_2,
  );
  const obj3 = { source: null, total_favorites: null, is_xp_enabled: true, is_premium_tier_2: null };
  const obj2 = AnalyticsUtilsDefault;
  obj3.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj3.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj3.is_premium_tier_2 = isPremiumExactlyResult;
  obj2.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj3);
}
