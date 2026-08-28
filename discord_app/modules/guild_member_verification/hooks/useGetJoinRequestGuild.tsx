// === Module 8975: useGetGuildJoinRequest ===

// Module 8975 (useGetGuildJoinRequest)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleGatewayJoinRequestUpdate" /* 4269 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = closure_1_4.getRequest(tmp);
    }
    return request;
  });
  let obj = _require(589);
  const items1 = [closure_4];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => obj.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = React.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = stateFromStores1(closure_1_2[3]).fetchRequestToJoinGuilds();
      const obj = stateFromStores1(closure_1_2[3]);
    }
  }, items2);
  return stateFromStores;
};