// discord_app/modules/favorites/analytics/trackFavoritesGuildViewed.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import PremiumTypeUtilsDefault from "../../../utils/PremiumTypeUtils.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj4;
  const obj = FavoritesHooks;
  const isExperimentEnabled = obj.getFavoritesAccess().isExperimentEnabled;
  const obj2 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj2.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj3 = {
    source: obj4.consumeNextFavoritesGuildViewSource(),
    total_favorites: FavoriteStore.getFavoritesCountAgainstLimit(),
    is_xp_enabled: isExperimentEnabled,
    is_premium_tier_2: isPremiumExactlyResult,
  };
  const track = AnalyticsUtilsDefault.track;
  const FAVORITES_GUILD_VIEWED = AnalyticEvents.FAVORITES_GUILD_VIEWED;
  AnalyticsUtilsDefault;
  obj4 = FavoritesGuildAnalytics;
  track(FAVORITES_GUILD_VIEWED, obj3);
}
