// discord_app/modules/routing/useGuildIdForChannelRoute.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import initializeFromUserSettings from "../favorites/FavoriteStore.tsx";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import { FAVORITES } from "../../Constants.tsx";

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