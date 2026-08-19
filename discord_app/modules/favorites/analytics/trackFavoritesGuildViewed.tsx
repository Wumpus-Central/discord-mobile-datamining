// discord_app/modules/favorites/analytics/trackFavoritesGuildViewed.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import isPremiumAtLeastDefault from "../../../utils/PremiumTypeUtils.tsx";
import useFavoritesAccess from "../FavoritesHooks.tsx";
import setNextFavoritesGuildViewSource from "FavoritesGuildAnalytics.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import initializeFromUserSettings from "../FavoriteStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const isPremiumExactlyResult = isPremiumAtLeastDefault.isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  const obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = expandEventPropertiesDefault;
  obj[0] = setNextFavoritesGuildViewSource.consumeNextFavoritesGuildViewSource();
  obj[1] = favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
  obj[2] = obj.getFavoritesAccess().isExperimentEnabled;
  obj[3] = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};