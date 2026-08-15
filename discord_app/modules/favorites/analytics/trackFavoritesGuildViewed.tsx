// discord_app/modules/favorites/analytics/trackFavoritesGuildViewed.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import initializeFromUserSettings from "initializeFromUserSettings";
import { AnalyticEvents } from "ME";
import { PremiumTypes } from "GuildFeatures";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { isPremiumAtLeast } from "../../../utils/PremiumTypeUtils.tsx";
import { useFavoritesAccess } from "../FavoritesHooks.tsx";
import { setNextFavoritesGuildViewSource } from "FavoritesGuildAnalytics.tsx";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj = useFavoritesAccess;
  const obj2 = isPremiumAtLeast;
  const isPremiumExactlyResult = isPremiumAtLeast.isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = expandEventProperties;
  obj[0] = setNextFavoritesGuildViewSource.consumeNextFavoritesGuildViewSource();
  obj[1] = favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
  obj[2] = obj.getFavoritesAccess().isExperimentEnabled;
  obj[3] = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};