// discord_app/modules/favorites/analytics/trackFavoritesGuildViewed.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import isPremiumAtLeastDefault from "../../../utils/PremiumTypeUtils.tsx";
import useFavoritesAccess from "../FavoritesHooks.tsx";
import setNextFavoritesGuildViewSource from "FavoritesGuildAnalytics.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import closure_4 from "../FavoriteStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj = useFavoritesAccess;
  const obj2 = isPremiumAtLeastDefault;
  const isPremiumExactlyResult = isPremiumAtLeastDefault.isPremiumExactly(
    currentUser.getCurrentUser(),
    PremiumTypes.TIER_2,
  );
  obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = expandEventPropertiesDefault;
  obj[0] = setNextFavoritesGuildViewSource.consumeNextFavoritesGuildViewSource();
  obj[1] = favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
  obj[2] = obj.getFavoritesAccess().isExperimentEnabled;
  obj[3] = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
}
