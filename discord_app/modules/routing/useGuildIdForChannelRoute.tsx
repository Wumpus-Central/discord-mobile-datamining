// === Module 5528: useGuildIdForChannelRoute ===

// Module 5528 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import FavoriteStore from "FavoriteStore" /* 4646 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;

require = fn;
const FAVORITES = fn(1071).FAVORITES;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  items = [SelectedGuildStore];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    let guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
}