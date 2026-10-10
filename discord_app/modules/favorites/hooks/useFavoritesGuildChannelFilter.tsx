// === Module 12692: useFavoritesGuildChannelFilter ===

// Module 12692 (useFavoritesGuildChannelFilter)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import sortByMatchScore from "sortByMatchScore" /* 8699 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import FavoriteStore from "FavoriteStore" /* 2068 */;

require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildChannelFilter() {
  const cResult = stateFromStores(576).c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function n() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function p(type, arg1) {
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
    };
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useFavoritesGuildChannelFilter() {
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
});