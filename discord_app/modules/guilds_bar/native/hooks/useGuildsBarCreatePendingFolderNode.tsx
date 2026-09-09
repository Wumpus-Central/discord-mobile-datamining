// === Module 16391: useGuildsBarCreatePendingFolderNode ===

// Module 16391 (useGuildsBarCreatePendingFolderNode)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5555 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9238 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4396 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 5453 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  let obj = stateFromStores(504);
  const items = [UserGuildJoinRequestStore];
  stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
  const arr2 = usePendingFolderGuildIdsDefault();
  const items1 = [ExpandedGuildFolderStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => folderExpanded.isFolderExpanded(stateFromStores(dependencyMap[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (!stateFromStores) {
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
  }, items2);
  if (arr2.length > 0) {
    obj = { folderId: tmp2(16392).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER, folderName: null, expanded: null, guildIds: null };
    const intl = tmp2(1114).intl;
    obj.folderName = intl.string(tmp2(1114).t["scsU+l"]);
    obj.expanded = stateFromStores1;
    obj.guildIds = arr2;
    const folderNode = tmp2(5454).createFolderNode(obj);
    for (const item10054 of arr2) {
      let children = folderNode.children;
      let obj5 = stateFromStores(5454);
      let arr = children.push(obj5.createGuildNode(item10054, folderNode.id));
      continue;
    }
    obj = { expanded: stateFromStores1, pendingFolderNode: folderNode };
    return obj;
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
  const obj2 = stateFromStores(504);
};