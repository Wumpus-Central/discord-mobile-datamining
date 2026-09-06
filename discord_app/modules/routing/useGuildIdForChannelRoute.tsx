// === Module 4572: useGuildIdForChannelRoute ===

// Module 4572 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import closure_2 from "initializeFromUserSettings" /* 1960 */;
import closure_3 from "handleConnectionOpen" /* 4381 */;
import { FAVORITES } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [closure_3];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    guildId = channel.getGuildId();
  } else {
    if (favorite.isFavorite(channel.id)) {
      guildId = FAVORITES;
    }
    const obj2 = favorite;
  }
  return guildId;
};