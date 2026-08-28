// === Module 16249: trackFavoritesGuildViewed ===

// Module 16249 (trackFavoritesGuildViewed)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import isPremiumAtLeastDefault from "isPremiumAtLeast" /* 1947 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10244 */;
import setNextFavoritesGuildViewSource from "setNextFavoritesGuildViewSource" /* 10251 */;
import closure_3 from "mergeGuildAvatar" /* 1923 */;
import closure_4 from "initializeFromUserSettings" /* 1394 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { PremiumTypes } from "GuildFeatures" /* 1925 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj = useFavoritesAccess;
  const obj2 = isPremiumAtLeastDefault;
  const isPremiumExactlyResult = isPremiumAtLeastDefault.isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = expandEventPropertiesDefault;
  obj[0] = setNextFavoritesGuildViewSource.consumeNextFavoritesGuildViewSource();
  obj[1] = favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
  obj[2] = obj.getFavoritesAccess().isExperimentEnabled;
  obj[3] = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};