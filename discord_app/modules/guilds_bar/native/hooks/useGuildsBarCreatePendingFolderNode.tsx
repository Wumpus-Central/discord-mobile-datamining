// === Module 16784: useGuildsBarCreatePendingFolderNode ===

// Module 16784 (useGuildsBarCreatePendingFolderNode)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5846 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 10117 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4651 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 5744 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  const items = [UserGuildJoinRequestStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
  const arr2 = usePendingFolderGuildIdsDefault();
  let obj = stateFromStores(504);
  const items1 = [ExpandedGuildFolderStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => folderExpanded.isFolderExpanded(stateFromStores(dependencyMap[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (!stateFromStores) {
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
  }, items2);
  if (arr2.length > 0) {
    const obj3 = { folderId: tmp2(16785).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER, folderName: null, expanded: null, guildIds: null };
    const intl = tmp2(1115).intl;
    obj3.folderName = intl.string(tmp2(1115).t["scsU+l"]);
    obj3.expanded = stateFromStores1;
    obj3.guildIds = arr2;
    const folderNode = tmp2(5745).createFolderNode(obj3);
    for (const item10054 of arr2) {
      let children = folderNode.children;
      let obj5 = stateFromStores(5745);
      let arr = children.push(obj5.createGuildNode(item10054, folderNode.id));
      continue;
    }
    const obj4 = { expanded: stateFromStores1, pendingFolderNode: folderNode };
    return obj4;
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
  const obj2 = stateFromStores(504);
};