// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx
import noop from "noop";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  const _require = arg0;
  const items = [handleGatewayJoinRequestUpdate];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = outer1_4.getRequest(tmp);
    }
    return request;
  });
  let obj = _require(589);
  const items1 = [handleGatewayJoinRequestUpdate];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => obj.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = React.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = stateFromStores1(outer1_2[3]).fetchRequestToJoinGuilds();
      const obj = stateFromStores1(outer1_2[3]);
    }
  }, items2);
  return stateFromStores;
};