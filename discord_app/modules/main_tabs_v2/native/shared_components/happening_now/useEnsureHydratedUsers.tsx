// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
import noop from "noop";
import handleConnectionReset from "handleConnectionReset";
import mergeGuildAvatar from "mergeGuildAvatar";
import { subscribeGuildMembers } from "../../../../../lib/guild/subscribeGuildMembers.tsx";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

export const useEnsureHydratedUsers = function useEnsureHydratedUsers(guild_id, items1) {
  const _require = guild_id;
  const dependencyMap = items1;
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
      if (null == outer1_4.getUser(id)) {
        const member = outer1_3.requestMember(closure_0, id);
      }
    });
  }, items1);
  const subscribeGuildMembers = _subscribeGuildMembers.useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
};