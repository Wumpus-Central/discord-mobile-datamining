// === Module 16317: isHomeDrawerChannelMuted ===

// Module 16317 (isHomeDrawerChannelMuted)
import initialize from "initialize" /* 504 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
const isThread = fn(1961).isThread;
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  return initialize.useStateFromStores(items, () => (type) => {
    const tmp = closure_1_3(type.type);
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