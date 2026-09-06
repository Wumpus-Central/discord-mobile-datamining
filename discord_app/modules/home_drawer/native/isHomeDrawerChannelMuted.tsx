// === Module 16317: useIsHomeDrawerChannelMuted ===

// Module 16317 (useIsHomeDrawerChannelMuted)
import initialize from "initialize" /* 504 */;
import closure_2 from "storeThread" /* 4201 */;
import { isThread } from "createChannelRecord" /* 1961 */;
import closure_4 from "updateUserGuildSettingsInternal" /* 4741 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [closure_2, closure_4];
  return initialize.useStateFromStores(items, () => (type) => {
    const tmp = callback(type.type);
    if (tmp) {
      if (muted.isMuted(type.id)) {
        return true;
      }
    }
    const tmp3 = tmp ? type.parent_id : type.id;
    let result = null != tmp3;
    if (result) {
      result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
    }
    return result;
  }, [], initialize.statesWillNeverBeEqual);
};