// discord_app/modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx
import GuildJoinRequestActionCreatorsDefault from "../../../guild_member_verification/GuildJoinRequestActionCreators.tsx";
import usePendingFolderGuildIdsDefault from "../../usePendingFolderGuildIds.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserGuildJoinRequestStore from "../../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import ExpandedGuildFolderStore from "../../../../stores/ExpandedGuildFolderStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildsBarCreatePendingFolderNode() {
      const cResult = stateFromStores(576).c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildJoinRequestStore];
        const fn = function n() {
          return UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp6, tmp7);
      const arr2 = usePendingFolderGuildIdsDefault();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ExpandedGuildFolderStore];
        class N {
          constructor() {
            return closure_1_5.isFolderExpanded(
              closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
        cResult[2] = items1;
        cResult[3] = N;
        let tmp11 = N;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmp2Result = stateFromStores(504);
      const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp10, tmp11);
      if (cResult[4] !== stateFromStores) {
        const fn2 = function _() {
          if (!stateFromStores) {
            const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
          }
        };
        const items2 = [stateFromStores];
        class N {
          constructor() {
            return closure_1_5.isFolderExpanded(
              closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp15 = items2;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect = noop.useEffect(tmp14, tmp15);
      if (arr2.length > 0) {
        if (cResult[7] === stateFromStores1) {
          if (cResult[8] === arr2) {
            let tmp18 = cResult[9];
          }
          if (cResult[10] === stateFromStores1) {
            if (cResult[11] === tmp18) {
              let tmp28 = cResult[12];
            }
            return tmp28;
          }
          const obj2 = { expanded: null, pendingFolderNode: null };
          class N {
            constructor() {
              return closure_1_5.isFolderExpanded(
                closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              );
            }
          }
          obj2.pendingFolderNode = tmp18;
          cResult[10] = stateFromStores1;
          cResult[11] = tmp18;
          cResult[12] = obj2;
          tmp28 = obj2;
        }
        class N {
          constructor() {
            return closure_1_5.isFolderExpanded(
              closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
        const obj3 = {
          folderId: tmp2(16792).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
          folderName: null,
          expanded: null,
          guildIds: null,
        };
        const intl = tmp2(1126).intl;
        obj3.folderName = intl.string(tmp2(1126).t["scsU+l"]);
        obj3.expanded = stateFromStores1;
        obj3.guildIds = arr2;
        const folderNode = obj5.createFolderNode(obj3);
        for (const item10096 of arr2) {
          let children = folderNode.children;
          class N {
            constructor() {
              return closure_1_5.isFolderExpanded(
                closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              );
            }
          }
          let obj7 = stateFromStores(5968);
          let arr = children.push(obj7.createGuildNode(item10096, folderNode.id));
          continue;
        }
        cResult[7] = stateFromStores1;
        cResult[8] = arr2;
        cResult[9] = folderNode;
        tmp18 = folderNode;
      } else {
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          cResult[13] = { expanded: false, pendingFolderNode: null };
          class N {
            constructor() {
              return closure_1_5.isFolderExpanded(
                closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              );
            }
          }
          const obj4 = { expanded: false, pendingFolderNode: null };
        }
        class N {
          constructor() {
            return closure_1_5.isFolderExpanded(
              closure_0(closure_1_2[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
      }
      const tmp2Result2 = stateFromStores(504);
    }
  : function useGuildsBarCreatePendingFolderNode() {
      const items = [UserGuildJoinRequestStore];
      stateFromStores = stateFromStores(504).useStateFromStores(
        items,
        () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds,
      );
      const arr2 = usePendingFolderGuildIdsDefault();
      let obj = stateFromStores(504);
      const items1 = [ExpandedGuildFolderStore];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () =>
        folderExpanded.isFolderExpanded(
          stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
        ),
      );
      const items2 = [stateFromStores];
      const effect = noop.useEffect(() => {
        if (!stateFromStores) {
          const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
        }
      }, items2);
      if (arr2.length > 0) {
        const obj3 = {
          folderId: tmp2(16792).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
          folderName: null,
          expanded: null,
          guildIds: null,
        };
        const intl = tmp2(1126).intl;
        obj3.folderName = intl.string(tmp2(1126).t["scsU+l"]);
        obj3.expanded = stateFromStores1;
        obj3.guildIds = arr2;
        const folderNode = tmp2(5968).createFolderNode(obj3);
        for (const item10054 of arr2) {
          let children = folderNode.children;
          let obj5 = stateFromStores(5968);
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
