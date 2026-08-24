// === Module 12010: useFavoritesGuildChannelFilter ===

// Module 12010 (useFavoritesGuildChannelFilter)
import closure_2 from "noop" /* 19 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "getUncachedChannelPermissions" /* 4024 */;
import closure_5 from "initializeFromUserSettings" /* 1394 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  const items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return React.useCallback((type) => {
    type = type.type;
    if (stateFromStores(closure_1_1[6]).AutocompleterResultTypes.USER === type) {
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
    } else if (tmp(tmp2[6]).AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (tmp(tmp2[6]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp(tmp2[6]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          let tmpResult = tmp(tmp2[8]);
          return tmpResult.assertNever(type);
        }
      }
      let canResult = closure_1_4.can(closure_1_6.VIEW_CHANNEL, type.record);
      if (canResult) {
        tmpResult = tmp(tmp2[7]);
        canResult = tmpResult.isFavoritableChannel(type.record);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};