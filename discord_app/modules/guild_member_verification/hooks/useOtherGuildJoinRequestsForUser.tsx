// discord_app/modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx
import GuildJoinRequestActionCreatorsDefault from "../GuildJoinRequestActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildJoinRequestStore from "../GuildJoinRequestStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx",
);

export const useOtherGuildJoinRequestsForUser = function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  let items = [GuildJoinRequestStore];
  const items1 = [guildId, userId];
  const stateFromStores = guildId(selectedJoinRequestId[2]).useStateFromStores(
    items,
    () => GuildJoinRequestStore.getRequestsForUser(guildId, userId),
    items1,
  );
  const items2 = [guildId, userId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const guildJoinRequestsForUser = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequestsForUser(
        guildId,
        userId,
      );
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return stateFromStores.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const found = items.filter((joinRequestId) => joinRequestId.joinRequestId !== selectedJoinRequestId);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const time = new Date(createdAt2.createdAt).getTime();
      const date = new Date(createdAt2.createdAt);
      return time - new Date(createdAt.createdAt).getTime();
    });
  }, items3);
};
