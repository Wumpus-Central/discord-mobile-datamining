// discord_app/modules/guild_profile/hooks/useGuildProfile.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../GuildProfileStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  const _require = guildId;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getProfile(closure_0));
  const items1 = [closure_4];
  obj = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items1,
    () => closure_1_4.getFetchStatus(closure_0),
  );
  const items2 = [guildId];
  obj[1] = React.useCallback(
    callback(() => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function* () {
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
    }),
    items2,
  );
  obj[2] = stateFromStores1;
  return obj;
};
