// === Module 16559: isHomeDrawerChannelInChannelList ===

// Module 16559 (isHomeDrawerChannelInChannelList)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsHomeDrawerChannelInChannelList() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    const fn = function s() {
      return (guild_id) => {
        const result = closure_1_0(closure_1_1[3]).isOptInEnabledForGuild(guild_id.guild_id);
        let result1 = !result;
        if (result) {
          result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
        }
        return result1;
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
  return initialize.useStateFromStores(tmp4, tmp5, tmp6, initialize.statesWillNeverBeEqual);
}) : (function useIsHomeDrawerChannelInChannelList() {
  const items = [UserGuildSettingsStore];
  return initialize.useStateFromStores(items, () => (guild_id) => {
    const result = closure_1_0(closure_1_1[3]).isOptInEnabledForGuild(guild_id.guild_id);
    let result1 = !result;
    if (result) {
      result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
    }
    return result1;
  }, [], initialize.statesWillNeverBeEqual);
});