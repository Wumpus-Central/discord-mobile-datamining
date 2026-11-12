// === Module 15042: useFavoritesGuildChannelFilter ===

// Module 15042 (useFavoritesGuildChannelFilter)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import sortByMatchScore from "sortByMatchScore" /* 10178 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import FavoriteStore from "FavoriteStore" /* 5095 */;

require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  items = [FavoriteStore];
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
          return GlobalUtils.assertNever(type);
        }
      }
      let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, type.record);
      if (canResult) {
        canResult = FavoritesUtils.isFavoritableChannel(type.record);
        const tmpResult2 = FavoritesUtils;
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};