// === Module 16528: useSubscribeToGuildMemberUpdates ===

// Module 16528 (useSubscribeToGuildMemberUpdates)
import GuildSubscriptionsActionCreatorsAll from "GuildSubscriptionsActionCreators" /* 6815 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function b() {
      let obj = GuildSubscriptionsActionCreatorsAll;
      let result = obj.subscribeToMemberUpdates(closure_0);
      return () => {
        const obj = GuildSubscriptionsActionCreatorsAll;
        const result = obj.unsubscribeFromMemberUpdates(closure_1_0);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    let obj = GuildSubscriptionsActionCreatorsAll;
    let result = obj.subscribeToMemberUpdates(closure_0);
    return () => {
      const obj = GuildSubscriptionsActionCreatorsAll;
      const result = obj.unsubscribeFromMemberUpdates(closure_1_0);
    };
  }, items);
});
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/useSubscribeToGuildMemberUpdates.tsx");

export const useSubscribeToGuildMemberUpdates = tmp2;