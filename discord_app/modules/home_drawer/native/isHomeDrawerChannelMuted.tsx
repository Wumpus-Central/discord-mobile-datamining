// === Module 16298: isHomeDrawerChannelMuted ===

// Module 16298 (isHomeDrawerChannelMuted)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const isThread = ChannelRecord.isThread;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore, UserGuildSettingsStore];
    const fn = function s() {
      let guildOrCategoryOrChannelMuted;
      let muted;
      return (type) => {
        const tmp = closure_1_3(type.type);
        if (tmp) {
          if (muted.isMuted(type.id)) {
            return true;
          }
        }
        const tmp3 = tmp ? type.parent_id : type.id;
        const result = null != tmp3 && guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
        return result;
      };
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5, tmp6, get_initialized.statesWillNeverBeEqual);
}) : (() => {
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let guildOrCategoryOrChannelMuted;
    let muted;
    return (type) => {
      const tmp = closure_1_3(type.type);
      if (tmp) {
        if (muted.isMuted(type.id)) {
          return true;
        }
      }
      const tmp3 = tmp ? type.parent_id : type.id;
      const result = null != tmp3 && guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
      return result;
    };
  }, [], get_initialized.statesWillNeverBeEqual);
});
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = tmp2;