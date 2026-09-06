// === Module 10979: useFavoritesGuildChannelFilter ===

// Module 10979 (useFavoritesGuildChannelFilter)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

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
};