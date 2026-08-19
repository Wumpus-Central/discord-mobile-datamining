// === Module 4769: useGuildIdForChannelRoute ===

// Module 4769 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 589 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import { FAVORITES } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

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
  } else if (favorite.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};