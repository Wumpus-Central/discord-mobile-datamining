// discord_app/modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import sortByMatchScore from "../../autocompleter/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  const items = [FavoriteStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return noop.useCallback((type, arg1) => {
    type = type.type;
    if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp13 = !arg1;
      if (!arg1) {
        tmp13 = null == dMChannelFromUserId;
      }
      let tmp15 = !tmp13;
      if (!tmp13) {
        let tmp17 = null == dMChannelFromUserId;
        if (!tmp17) {
          tmp17 = null == stateFromStores[dMChannelFromUserId.id];
        }
        tmp15 = tmp17;
      }
      return tmp15;
    } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          let tmpResult = GlobalUtils;
          return tmpResult.assertNever(type);
        }
      }
      let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, type.record);
      if (canResult) {
        tmpResult = FavoritesUtils;
        canResult = tmpResult.isFavoritableChannel(type.record);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
}
