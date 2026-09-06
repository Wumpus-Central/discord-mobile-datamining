// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildMemberRequesterStore from "../../../../../stores/GuildMemberRequesterStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx",
);

export const useEnsureHydratedUsers = function useEnsureHydratedUsers(guild_id, items1) {
  _require = guild_id;
  dependencyMap = items1;
  const items = [guild_id, items1];
  items1 = [guild_id, items1];
  const memo = noop.useMemo(() => {
    if (0 === items1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    const item = items1.forEach((item) => {
      if (null == user.getUser(item)) {
        const member = GuildMemberRequesterStore.requestMember(guild_id, item);
      }
    });
  }, items1);
  const subscribeGuildMembers = require("subscribeGuildMembers").useSubscribeGuildMembers(
    memo,
    "useEnsureHydratedUsers",
  );
};
