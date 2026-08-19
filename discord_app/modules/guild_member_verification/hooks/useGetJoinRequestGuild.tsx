// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx
import noop from "../../../../_runtime/00019_noop.js";
import handleGatewayJoinRequestUpdate from "../UserGuildJoinRequestStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = closure_1_4.getRequest(tmp);
    }
    return request;
  });
  let obj = initialize;
  const items1 = [closure_4];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => obj.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = React.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = stateFromStores1(dependencyMap[3]).fetchRequestToJoinGuilds();
      const obj = stateFromStores1(dependencyMap[3]);
    }
  }, items2);
  return stateFromStores;
};