import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/guild_profile/hooks/useGuildProfile.tsx
import set from "set";
import noop from "noop";
import handleUpdateStart from "handleUpdateStart";

const require = arg1;
const result = require("handleUpdateStart").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  const _require = guildId;
  let obj = _initialize;
  const items = [handleUpdateStart];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getProfile(closure_0));
  const items1 = [handleUpdateStart];
  obj = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => outer1_4.getFetchStatus(closure_0));
  const items2 = [guildId];
  obj[1] = React.useCallback(callback(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*() {
      let closure_1 = tmp2;
      if (flag === undefined) {
        flag = false;
      }
      yield "ct";
      const obj2 = callback(outer1_1[4]);
      yield obj2.getGuildProfile(flag, flag);
      return arg1;
    })();
    iter.next();
    return iter;
  }), items2);
  obj[2] = stateFromStores1;
  return obj;
};