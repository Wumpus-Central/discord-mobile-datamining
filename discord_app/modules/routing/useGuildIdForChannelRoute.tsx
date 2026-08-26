// === Module 4456: useGuildIdForChannelRoute ===

// Module 4456 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 589 */;
import closure_2 from "initializeFromUserSettings" /* 1394 */;
import closure_3 from "handleConnectionOpen" /* 4266 */;
import { FAVORITES } from "ME" /* 676 */;

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