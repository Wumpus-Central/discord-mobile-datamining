// === Module 17895: isHomeDrawerChannelMuted ===

// Module 17895 (isHomeDrawerChannelMuted)
import initialize from "initialize" /* 504 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4847 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;

require = fn;
const isThread = fn(4766).isThread;
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export function useIsHomeDrawerChannelMuted() {
  items = [JoinedThreadsStore, UserGuildSettingsStore];
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
}