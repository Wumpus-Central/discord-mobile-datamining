// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../UserGuildJoinRequestStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = closure_1_4.getRequest(tmp);
    }
    return request;
  });
  let obj = _initialize;
  const items1 = [closure_4];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => obj.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = React.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = stateFromStores1(closure_1_2[3]).fetchRequestToJoinGuilds();
      const obj = stateFromStores1(closure_1_2[3]);
    }
  }, items2);
  return stateFromStores;
};