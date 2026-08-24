// === Module 15686: useGuildsBarCreatePendingFolderNode ===

// Module 15686 (useGuildsBarCreatePendingFolderNode)
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9572 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleGatewayJoinRequestUpdate" /* 4202 */;
import closure_5 from "set" /* 5084 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  let obj = stateFromStores(589);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => obj.hasFetchedRequestToJoinGuilds);
  const arr2 = usePendingFolderGuildIdsDefault();
  const items1 = [closure_5];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => folderExpanded.isFolderExpanded(stateFromStores(table[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      const requestToJoinGuilds = closure_1_1(closure_1_2[6]).fetchRequestToJoinGuilds();
      const obj = closure_1_1(closure_1_2[6]);
    }
  }, items2);
  if (arr2.length > 0) {
    obj = { folderId: null, folderName: null, expanded: null, guildIds: null };
    obj[0] = tmp2(15687).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER;
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t["scsU+l"]);
    obj[2] = stateFromStores1;
    obj[3] = arr2;
    const folderNode = tmp2(5085).createFolderNode(obj);
    for (const item10054 of arr2) {
      let children = folderNode.children;
      let tmp13 = stateFromStores;
      let tmp14 = stateFromStores;
      let tmp15 = dependencyMap;
      let tmp16 = dependencyMap;
      let obj5 = stateFromStores(5085);
      let arr = children.push(obj5.createGuildNode(item10054, folderNode.id));
      continue;
    }
    obj = { expanded: null, pendingFolderNode: null };
    obj[0] = stateFromStores1;
    obj[1] = folderNode;
    return obj;
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
  const obj2 = stateFromStores(589);
  const tmp = stateFromStores;
  const tmp3 = dependencyMap;
};