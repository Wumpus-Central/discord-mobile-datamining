// === Module 16524: useSubscribeToGuildMemberUpdates ===

// Module 16524 (useSubscribeToGuildMemberUpdates)
import GuildSubscriptionsActionCreatorsAll from "GuildSubscriptionsActionCreators" /* 6815 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/useSubscribeToGuildMemberUpdates.tsx");

export const useSubscribeToGuildMemberUpdates = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function b() {
      let result = GuildSubscriptionsActionCreatorsAll.subscribeToMemberUpdates(closure_0);
      return () => {
        const result = GuildSubscriptionsActionCreatorsAll.unsubscribeFromMemberUpdates(closure_1_0);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    let result = GuildSubscriptionsActionCreatorsAll.subscribeToMemberUpdates(closure_0);
    return () => {
      const result = GuildSubscriptionsActionCreatorsAll.unsubscribeFromMemberUpdates(closure_1_0);
    };
  }, items);
});