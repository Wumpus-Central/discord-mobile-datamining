// === Module 11961: useFavoritesGuildChannelFilter ===

// Module 11961 (useFavoritesGuildChannelFilter)
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  const items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return React.useCallback((type) => {
    type = type.type;
    if (stateFromStores(dependencyMap[6]).AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = closure_1_3.getDMChannelFromUserId(type.record.id);
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
    } else if (stateFromStores(dependencyMap[6]).AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (stateFromStores(dependencyMap[6]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (stateFromStores(dependencyMap[6]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          let tmpResult = stateFromStores(dependencyMap[8]);
          return tmpResult.assertNever(type);
        }
      }
      let canResult = closure_1_4.can(Permissions.VIEW_CHANNEL, type.record);
      if (canResult) {
        tmpResult = stateFromStores(dependencyMap[7]);
        canResult = tmpResult.isFavoritableChannel(type.record);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};