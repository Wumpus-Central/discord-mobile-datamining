// discord_app/modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx
import GuildJoinRequestActionCreatorsDefault from "../../../guild_member_verification/GuildJoinRequestActionCreators.tsx";
import usePendingFolderGuildIdsDefault from "../../usePendingFolderGuildIds.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserGuildJoinRequestStore from "../../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import ExpandedGuildFolderStore from "../../../../stores/ExpandedGuildFolderStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let folderExpanded;
      let intl;
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp15;
      let tmp6;
      let tmp7;
      let obj = stateFromStores(576);
      const cResult = obj.c(14);
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
      const tmp2Result = stateFromStores(504);
      stateFromStores = tmp2Result.useStateFromStores(tmp6, tmp7);
      const arr2 = usePendingFolderGuildIdsDefault();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ExpandedGuildFolderStore];
        class N {
          constructor() {
            return folderExpanded.isFolderExpanded(
              stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
        cResult[2] = items1;
        cResult[3] = N;
        tmp11 = N;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmp2Result2 = stateFromStores(504);
      const stateFromStores1 = tmp2Result2.useStateFromStores(tmp10, tmp11);
      if (cResult[4] !== stateFromStores) {
        const fn2 = function _() {
          if (!stateFromStores) {
            const obj = GuildJoinRequestActionCreatorsDefault;
            const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
          }
        };
        const items2 = [stateFromStores];
        class N {
          constructor() {
            return folderExpanded.isFolderExpanded(
              stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp15 = items2;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect = react.useEffect(tmp14, tmp15);
      if (arr2.length > 0) {
        if (cResult[7] === stateFromStores1) {
          let tmp18;
          if (cResult[8] === arr2) {
            tmp18 = cResult[9];
          }
          if (cResult[10] === stateFromStores1) {
            let tmp29;
            if (cResult[11] === tmp18) {
              tmp29 = cResult[12];
            }
            return tmp29;
          }
          const obj2 = { expanded: null, pendingFolderNode: tmp18 };
          class N {
            constructor() {
              return folderExpanded.isFolderExpanded(
                stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              );
            }
          }
          cResult[10] = stateFromStores1;
          cResult[11] = tmp18;
          cResult[12] = obj2;
          tmp29 = obj2;
        }
        class N {
          constructor() {
            return folderExpanded.isFolderExpanded(
              stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
        const createFolderNode = tmp21.createFolderNode;
        const obj3 = {
          folderId: stateFromStores(16339).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
          folderName: intl.string(stateFromStores(1126).t["scsU+l"]),
          expanded: stateFromStores1,
          guildIds: arr2,
        };
        intl = tmp2(1126).intl;
        const folderNode = createFolderNode(obj3);
        for (const item10096 of arr2) {
          let children = folderNode.children;
          class N {
            constructor() {
              return folderExpanded.isFolderExpanded(
                stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              );
            }
          }
          let push = children.push;
          let obj6 = stateFromStores(5626);
          let arr = push(obj6.createGuildNode(item10096, folderNode.id));
          continue;
        }
        cResult[7] = stateFromStores1;
        cResult[8] = arr2;
        cResult[9] = folderNode;
        tmp18 = folderNode;
      } else {
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { expanded: false, pendingFolderNode: null };
          cResult[13] = obj4;
          class N {
            constructor() {
              return folderExpanded.isFolderExpanded(
                stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              );
            }
          }
        }
        class N {
          constructor() {
            return folderExpanded.isFolderExpanded(
              stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
            );
          }
        }
      }
    }
  : () => {
      let folderExpanded;
      let intl;
      let stateFromStores;
      let obj = stateFromStores(504);
      const items = [UserGuildJoinRequestStore];
      stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
      const arr2 = usePendingFolderGuildIdsDefault();
      const items1 = [ExpandedGuildFolderStore];
      const obj2 = stateFromStores(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () =>
        folderExpanded.isFolderExpanded(
          stateFromStores(dependencyMap[7]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
        ),
      );
      const items2 = [stateFromStores];
      const effect = react.useEffect(() => {
        if (!stateFromStores) {
          const obj = GuildJoinRequestActionCreatorsDefault;
          const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
        }
      }, items2);
      if (arr2.length > 0) {
        const obj3 = {
          folderId: stateFromStores(16339).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
          folderName: intl.string(stateFromStores(1126).t["scsU+l"]),
          expanded: stateFromStores1,
          guildIds: arr2,
        };
        const createFolderNode = stateFromStores(5626).createFolderNode;
        stateFromStores(5626);
        intl = tmp2(1126).intl;
        const folderNode = createFolderNode(obj3);
        for (const item10054 of arr2) {
          let children = folderNode.children;
          let push = children.push;
          let obj4 = stateFromStores(5626);
          let arr = push(obj4.createGuildNode(item10054, folderNode.id));
          continue;
        }
        return { expanded: stateFromStores1, pendingFolderNode: folderNode };
      } else {
        return { expanded: false, pendingFolderNode: null };
      }
    };
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default tmp2;
