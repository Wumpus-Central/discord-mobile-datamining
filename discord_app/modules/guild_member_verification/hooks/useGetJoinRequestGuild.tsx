// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx
import GuildJoinRequestActionCreatorsDefault from "../GuildJoinRequestActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserGuildJoinRequestStore from "../UserGuildJoinRequestStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  _require = arg0;
  const items = [UserGuildJoinRequestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = UserGuildJoinRequestStore.getRequest(tmp);
    }
    return request;
  });
  let obj = require("initialize");
  const items1 = [UserGuildJoinRequestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds,
  );
  const items2 = [stateFromStores1];
  const effect = noop.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
  }, items2);
  return stateFromStores;
}
