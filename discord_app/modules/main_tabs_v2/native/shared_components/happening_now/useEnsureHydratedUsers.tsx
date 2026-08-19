// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import handleConnectionReset from "../../../../../stores/GuildMemberRequesterStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

export const useEnsureHydratedUsers = function useEnsureHydratedUsers(guild_id, items1) {
  const _require = guild_id;
  dependencyMap = items1;
  const items = [guild_id, items1];
  items1 = [guild_id, ];
  items1[1] = items1;
  const memo = React.useMemo(() => {
    if (0 === items1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const item = items1.forEach((item, index) => {
      if (null == closure_1_4.getUser(item)) {
        const member = closure_1_3.requestMember(closure_0, item);
      }
    });
  }, items1);
  const subscribeGuildMembers = require("../../../../../lib/guild/subscribeGuildMembers.tsx").useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
};