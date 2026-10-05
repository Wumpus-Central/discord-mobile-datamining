// === Module 16259: isHomeDrawerChannelInChannelList ===

// Module 16259 (isHomeDrawerChannelInChannelList)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    const fn = function l() {
      let channelRecordOrParentOptedIn;
      return (guild_id) => {
        const obj = closure_1_0(closure_1_1[3]);
        const result = obj.isOptInEnabledForGuild(guild_id.guild_id);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5, tmp6, get_initialized.statesWillNeverBeEqual);
}) : (() => {
  let obj = get_initialized;
  const items = [UserGuildSettingsStore];
  return obj.useStateFromStores(items, () => {
    let channelRecordOrParentOptedIn;
    return (guild_id) => {
      const obj = closure_1_0(closure_1_1[3]);
      const result = obj.isOptInEnabledForGuild(guild_id.guild_id);
      let result1 = !result;
      if (result) {
        result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
      }
      return result1;
    };
  }, [], get_initialized.statesWillNeverBeEqual);
});
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = tmp2;