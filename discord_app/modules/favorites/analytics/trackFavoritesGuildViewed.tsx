// === Module 15958: trackFavoritesGuildViewed ===

// Module 15958 (trackFavoritesGuildViewed)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import isPremiumAtLeastDefault from "isPremiumAtLeast" /* 1945 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9979 */;
import setNextFavoritesGuildViewSource from "setNextFavoritesGuildViewSource" /* 9985 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

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