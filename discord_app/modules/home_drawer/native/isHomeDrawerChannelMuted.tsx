// === Module 16448: isHomeDrawerChannelMuted ===

// Module 16448 (isHomeDrawerChannelMuted)
import initialize from "initialize" /* 504 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4278 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4819 */;

require = fn;
const isThread = fn(1962).isThread;
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