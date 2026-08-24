// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../../stores/GuildMemberRequesterStore.tsx";
import closure_4 from "../../../../../stores/UserStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

export const useEnsureHydratedUsers = function useEnsureHydratedUsers(guild_id, items1) {
  const _require = guild_id;
  dependencyMap = items1;
  const items = [guild_id, items1];
  items1 = [guild_id, items1];
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
    const item = items1.forEach((id) => {
      if (null == closure_1_4.getUser(id)) {
        const member = closure_1_3.requestMember(closure_0, id);
      }
    });
  }, items1);
  const subscribeGuildMembers = require("../../../../../lib/guild/subscribeGuildMembers.tsx").useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
};