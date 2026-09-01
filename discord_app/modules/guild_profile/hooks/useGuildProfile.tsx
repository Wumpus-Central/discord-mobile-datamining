// === Module 9011: useGuildProfile ===

// Module 9011 (useGuildProfile)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleUpdateStart" /* 9009 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  const _require = guildId;
  let obj = _require(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getProfile(closure_0));
  const items1 = [closure_4];
  obj = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => closure_1_4.getFetchStatus(closure_0));
  const items2 = [guildId];
  obj[1] = React.useCallback(callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      closure_1 = tmp2;
      if (flag === undefined) {
        flag = false;
      }
      yield "PX_16";
      const obj2 = callback(closure_1_1[4]);
      yield obj2.getGuildProfile(flag, flag);
      return arg1;
    })();
    iter.next();
    return iter;
  }), items2);
  obj[2] = stateFromStores1;
  return obj;
};