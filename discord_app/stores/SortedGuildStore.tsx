// === Module 5438: insertUnsortedGuilds ===

// Module 5438 (insertUnsortedGuilds)
import _modDef38 from "module_38" /* 38 */;
import clearAllDefault from "clearAll" /* 1073 */;
import isUndefinedOrNullDefault from "isUndefinedOrNull" /* 1332 */;
import closure_4 from "handleGatewayJoinRequestUpdate" /* 4382 */;
import closure_5 from "initialize" /* 4200 */;
import closure_6 from "handleConnectionClosedOrResumed" /* 1221 */;
import closure_7 from "set" /* 5439 */;
import closure_8 from "handleConnectionOpen" /* 4902 */;
import closure_9 from "trackCommunicationDisabled" /* 2021 */;
import closure_10 from "createGuildRecordFromRust" /* 1979 */;
import closure_11 from "updateUserGuildSettingsInternal" /* 4741 */;
import closure_12 from "mergeGuildAvatar" /* 1371 */;
import areArraysShallowlyEqual from "areArraysShallowlyEqual" /* 1933 */;

let areArraysShallowlyEqual = arg1;
function insertUnsortedGuilds(arg0, arg1) {
  const guildIds = store2.getGuildIds();
  for (const item10010 of guildIds) {
    let tmp2 = item10010;
    let tmp3 = arg0(item10010);
    let isLurkingResult = !tmp3;
    if (tmp3) {
      let tmp5 = closure_5;
      let tmp6 = item10010;
      isLurkingResult = closure_5.isLurking(tmp2);
    }
    if (!isLurkingResult) {
      let tmp7 = closure_9;
      let tmp8 = item10010;
      isLurkingResult = closure_9.isCurrentUserGuest(tmp2);
    }
    if (!isLurkingResult) {
      let tmp9 = item10010;
      let tmp10 = arg1(tmp2);
    }
    continue;
  }
}
function convertNodeToGuildFolder(type) {
  type = type.type;
  if (areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER === type) {
    let obj = { folderId: null, folderName: null, folderColor: null, expanded: null, guildIds: null };
    ({ id: obj2[0], name: obj2[1], color: obj2[2], expanded: obj2[3], children } = type);
    obj[4] = children.map((id) => id.id);
    return obj;
  } else if (tmp(5440).GuildsNodeType.GUILD === type) {
    obj = { folderId: "Array", guildIds: 0 };
    const items = [type.id];
    obj[1] = items;
    return obj;
  } else {
    const _Error = Error;
    throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
  }
  tmp = areArraysShallowlyEqual;
}
function rebuildTree(arg0, arg1) {
  guildsTree = new areArraysShallowlyEqual(5440).GuildsTree();
  if (0 === arg0.length) {
    if (arg1.length > 0) {
      const tmp18 = arg1[Symbol.iterator]();
      while (tmp18 !== undefined) {
        let tmp22 = guildsTree;
        let tmp23 = areArraysShallowlyEqual;
        let tmp24 = dependencyMap;
        let obj3 = areArraysShallowlyEqual(5440);
        let addNodeResult = guildsTree.addNode(obj3.createGuildNode(tmp20));
        continue;
      }
    }
    const allNodesResult = guildsTree.allNodes();
    const iter2 = allNodesResult[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp33 = nextResult;
      let tmp34 = areArraysShallowlyEqual;
      let tmp35 = dependencyMap;
      let tmp36 = nextResult.type === areArraysShallowlyEqual(5440).GuildsNodeType.GUILD;
      if (tmp36) {
        let tmp37 = closure_5;
        let tmp38 = nextResult;
        let isLurkingResult = closure_5.isLurking(tmp33.id);
        if (!isLurkingResult) {
          let tmp40 = closure_9;
          let tmp41 = nextResult;
          isLurkingResult = closure_9.isCurrentUserGuest(tmp33.id);
        }
        if (!isLurkingResult) {
          let tmp42 = store2;
          let tmp43 = nextResult;
          let tmp44 = null == store2.getGuild(tmp33.id);
          if (tmp44) {
            let tmp45 = unavailable;
            let tmp46 = nextResult;
            tmp44 = !unavailable.isUnavailable(tmp33.id);
          }
          isLurkingResult = tmp44;
        }
        tmp36 = isLurkingResult;
      }
      if (tmp36) {
        let tmp47 = guildsTree;
        let tmp48 = nextResult;
        let removeNodeResult = guildsTree.removeNode(tmp33);
      }
      continue;
    }
    const _Object = Object;
    const values = Object.values(guildsTree.nodes);
    for (const item10123 of values) {
      let tmp55 = item10123;
      let tmp56 = areArraysShallowlyEqual;
      let tmp57 = dependencyMap;
      let tmp58 = item10123.type === areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER;
      if (tmp58) {
        let tmp59 = item10123;
        tmp58 = 0 === tmp55.children.length;
      }
      if (tmp58) {
        let tmp60 = guildsTree;
        let tmp61 = item10123;
        let removeNodeResult1 = guildsTree.removeNode(tmp55);
      }
      continue;
    }
    insertUnsortedGuilds((arg0) => null == closure_13.nodes[arg0], (item10030) => closure_13.addNode(callback(table[10]).createGuildNode(item10030), closure_13.root, false));
    guildsTree.version = tmp.version;
    const tmp69 = isUndefinedOrNullDefault(tmp, guildsTree);
    if (tmp69) {
      guildsTree = tmp;
    } else {
      guildsTree.version = tmp.version + 1;
    }
    return !tmp69;
  }
  const iter = arg0[Symbol.iterator]();
  const nextResult1 = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult1;
    if (0 !== nextResult1.guildIds.length) {
      let tmp71 = nextResult1;
      if (null == tmp5.folderId) {
        let tmp12 = guildsTree;
        let tmp13 = areArraysShallowlyEqual;
        let tmp14 = dependencyMap;
        let obj2 = areArraysShallowlyEqual(5440);
        let tmp15 = nextResult1;
        let addNodeResult1 = guildsTree.addNode(obj2.createGuildNode(tmp5.guildIds[0]));
      } else {
        let tmp72 = areArraysShallowlyEqual;
        let tmp73 = dependencyMap;
        let obj4 = areArraysShallowlyEqual(5440);
        let tmp74 = nextResult1;
        let tmp75 = closure_7;
        let folderNode = obj4.createFolderNode(tmp5, undefined, closure_7.isFolderExpanded(tmp5.folderId));
        let tmp78 = guildsTree;
        let tmp77 = folderNode;
        let addNodeResult2 = guildsTree.addNode(folderNode);
        let guildIds = tmp5.guildIds;
        let tmp80 = guildIds;
        let tmp6 = guildIds;
        for (const item10030 of guildIds) {
          let tmp7 = guildsTree;
          let tmp8 = areArraysShallowlyEqual;
          let tmp9 = dependencyMap;
          let obj = areArraysShallowlyEqual(5440);
          let tmp10 = folderNode;
          let addNodeResult3 = guildsTree.addNode(obj.createGuildNode(item10030), tmp77);
          continue;
        }
      }
    }
    continue;
  }
}
function handleRebuild() {
  let guildFolders = store.getGuildFolders();
  if (guildFolders == null) {
    guildFolders = [];
  }
  guildFolders = store.settings.guildFolders;
  let guildPositions;
  if (guildFolders != null) {
    guildPositions = guildFolders.guildPositions;
  }
  if (guildPositions == null) {
    guildPositions = [];
  }
  return rebuildTree(guildFolders, guildPositions);
}
function handleSettingsUpdate() {
  let guildFolders = store.getGuildFolders();
  let tmp6Result = null == guildFolders;
  if (!tmp6Result) {
    tmp6Result = !isUndefinedOrNullDefault(guildFolders, guildFolders);
  }
  if (tmp6Result) {
    if (guildFolders == null) {
      guildFolders = [];
    }
    guildFolders = store.settings.guildFolders;
    let guildPositions;
    if (guildFolders != null) {
      guildPositions = guildFolders.guildPositions;
    }
    if (guildPositions == null) {
      guildPositions = [];
    }
    tmp6Result = rebuildTree(guildFolders, guildPositions);
    const tmp6 = rebuildTree;
  }
  return tmp6Result;
}
function handleMoveById(sourceId) {
  ({ moveToBelow, combine } = sourceId);
  const node = guildsTree.getNode(sourceId.sourceId);
  const node1 = guildsTree.getNode(sourceId.targetId);
  if (null != node) {
    if (null != node1) {
      let tmp4 = combine;
      if (combine) {
        tmp4 = node.type === areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER;
      }
      const _HermesInternal = HermesInternal;
      _modDef38(!tmp4, "[SORTED GUILDS] Can't combine a folder " + node.id + " with another guilds list item");
      let tmp9 = combine;
      let tmp22Result = tmp22(38);
      if (combine) {
        tmp9 = null != node1.parentId;
      }
      const _HermesInternal2 = HermesInternal;
      tmp22Result(!tmp9, "[SORTED GUILDS] Can't combine with a guild " + node1.id + " that's already inside of a folder");
      tmp22Result = tmp22(38);
      const tmp10 = !tmp9;
      const tmp13 = areArraysShallowlyEqual;
      const tmp24 = _modDef38;
      const tmp5 = !tmp4;
      const _HermesInternal3 = HermesInternal;
      tmp22Result(!(node.type === areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER && null != node1.parentId), "[SORTED GUILDS] Can't move a folder " + node.id + " to inside of another folder " + node1.parentId);
      if (combine) {
        let convertToFolderResult = node1;
        if (node1.type !== tmp13(5440).GuildsNodeType.FOLDER) {
          convertToFolderResult = guildsTree.convertToFolder(node1);
        }
        guildsTree.moveInto(node, convertToFolderResult, moveToBelow);
      } else {
        guildsTree.moveNextTo(node, node1, moveToBelow);
      }
    }
  }
  return false;
}
function handleGuildFolderCreateLocal(sourceIds) {
  sourceIds = sourceIds.sourceIds;
  c0 = undefined;
  const arr = sourceIds.shift();
  if (null == arr) {
    return false;
  } else {
    let node = guildsTree.getNode(arr);
    if (null == node) {
      return false;
    } else {
      const convertToFolderResult = guildsTree.convertToFolder(node);
      c0 = convertToFolderResult;
      convertToFolderResult.name = sourceIds.name;
      const item = sourceIds.forEach((arg0) => {
        const node = closure_1_13.getNode(arg0);
        if (null != node) {
          closure_1_13.moveInto(node, c0, true);
        }
      });
    }
  }
}
function handleGuildFolderEditLocal(arg0) {
  ({ targetId, sourceIds } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let node1;
  let set;
  let set1;
  let node = guildsTree.getNode(targetId);
  if (null == node) {
    return false;
  } else {
    if (node.type !== node1(set1[10]).GuildsNodeType.FOLDER) {
      return false;
    } else {
      let name;
      if ("" !== merged.name) {
        name = merged.name;
      }
      if (name !== node.name) {
        const cloneNodeResult = guildsTree.cloneNode(node);
        set(tmp13[12])(cloneNodeResult.id === node.id, "[SORTED GUILDS] Replacement folder node must have same id.");
        cloneNodeResult.name = name;
        guildsTree.replaceNode(node, cloneNodeResult);
      }
      node1 = guildsTree.getNode(targetId);
      if (null == node1) {
        return false;
      } else {
        const children = node1.children;
        const mapped = children.map((id) => id.id);
        const found = mapped.filter(tmp12(tmp13[13]).isNotNullish);
        const _Set = Set;
        set = new Set(found);
        const _Set2 = Set;
        set1 = new Set(sourceIds);
        const _Set3 = Set;
        const items = [];
        HermesBuiltin.arraySpread(found, 0);
        const set2 = new Set(items.filter((arg0) => !set1.has(arg0)));
        const found1 = sourceIds.filter((arg0) => !set.has(arg0));
        const item = found1.forEach((arg0) => {
          const node = closure_1_13.getNode(arg0);
          if (null != node) {
            closure_1_13.moveInto(node, node1, true);
          }
        });
        const item1 = set2.forEach((arg0) => {
          const node = closure_1_13.getNode(arg0);
          if (null != node) {
            closure_1_13.moveNextTo(node, node1, true);
          }
        });
      }
    }
    tmp12 = node1;
  }
}
function handleGuildFolderDeleteLocal(targetId) {
  let element;
  element = guildsTree.getNode(targetId.targetId);
  let tmp = null != element;
  if (tmp) {
    const tmp4 = element.type === element(5440).GuildsNodeType.FOLDER;
    if (tmp4) {
      const children = element.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(tmp2(1369).isNotNullish);
      const item = found.forEach((arg0) => {
        const node = closure_1_13.getNode(arg0);
        if (null != node) {
          closure_1_13.moveNextTo(node, element, true);
        }
      });
    }
    tmp = tmp4;
    tmp2 = element;
  }
  return tmp;
}
function handleJoinedLurkingGuild(joinedAt) {
  joinedAt = joinedAt.joinedAt;
  ({ guildId, user } = joinedAt);
  currentUser = currentUser.getCurrentUser();
  const guild = store2.getGuild(guildId);
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id === user.id) {
    if (null != guild) {
      let date = joinedAt;
      if (typeof joinedAt === "string") {
        const _Date = Date;
        date = new Date(joinedAt);
      }
      let tmp5Result = date !== guild.joinedAt && null != date;
      if (tmp5Result) {
        let guildFolders = store.getGuildFolders();
        if (guildFolders == null) {
          guildFolders = [];
        }
        guildFolders = store.settings.guildFolders;
        let guildPositions;
        if (guildFolders != null) {
          guildPositions = guildFolders.guildPositions;
        }
        if (guildPositions == null) {
          guildPositions = [];
        }
        tmp5Result = rebuildTree(guildFolders, guildPositions);
        const tmp5 = rebuildTree;
        const tmp6 = store;
      }
      return tmp5Result;
    }
  }
  return false;
}
function handleGuildFolderExpand(folderId) {
  folderId = folderId.folderId;
  const node = guildsTree.getNode(folderId);
  const isFolderExpandedResult = closure_7.isFolderExpanded(folderId);
  if (null != node) {
    if (node.type === areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER) {
      if (node.expanded !== isFolderExpandedResult) {
        const cloneNodeResult = guildsTree.cloneNode(node);
        _modDef38(cloneNodeResult.id === node.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.");
        cloneNodeResult.expanded = isFolderExpandedResult;
        guildsTree.replaceNode(node, cloneNodeResult);
      }
    }
  }
  return false;
}
function handleFolderExpanded(expanded) {
  expanded = expanded.expanded;
  const node = guildsTree.getNode(expanded.folderId);
  if (null != node) {
    if (node.type === areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER) {
      if (node.expanded !== expanded) {
        const cloneNodeResult = guildsTree.cloneNode(node);
        _modDef38(cloneNodeResult.id === node.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.");
        cloneNodeResult.expanded = expanded;
        guildsTree.replaceNode(node, cloneNodeResult);
      }
    }
  }
  return false;
}
function handleCollapseAll() {
  const iter = guildsTree.allNodes()[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = areArraysShallowlyEqual;
    let tmp5 = dependencyMap;
    let expanded = nextResult.type === areArraysShallowlyEqual(5440).GuildsNodeType.FOLDER;
    if (expanded) {
      let tmp6 = nextResult;
      expanded = tmp3.expanded;
    }
    if (expanded) {
      let tmp7 = setNodeExpanded;
      let tmp8 = nextResult;
      let tmp9 = setNodeExpanded(tmp3, false);
    }
    continue;
  }
}
function setNodeExpanded(id, arg1) {
  const cloneNodeResult = guildsTree.cloneNode(id);
  _modDef38(cloneNodeResult.id === id.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.");
  cloneNodeResult.expanded = false;
  guildsTree.replaceNode(id, cloneNodeResult);
}
clearAllDefault;
let guildsTree = new require("GuildsNodeType").GuildsTree();
let closure_28 = areArraysShallowlyEqual.cachedFunction((sortedGuildNodes) => sortedGuildNodes.sortedGuildNodes().map((id) => id.id));
let closure_29 = areArraysShallowlyEqual.cachedFunction((getRoots) => {
  const roots = getRoots.getRoots();
  return roots.map(convertNodeToGuildFolder);
});
let closure_30 = areArraysShallowlyEqual.cachedFunction((root) => {
  const items = [];
  function flattenNodes(root) {
    const type = root.type;
    if (items(closure_1_2[10]).GuildsNodeType.FOLDER === type) {
      items.push(root);
    }
    while (tmp5 !== undefined) {
      let tmp7 = flattenNodes;
      let tmp8 = flattenNodes(tmp6);
      continue;
    }
  }
  flattenNodes(root.root);
  return items;
});
let closure_31 = areArraysShallowlyEqual.cachedFunction((root) => {
  const children = root.root.children;
  return children.map(convertNodeToGuildFolder);
});
let SortedGuildStore;
class SortedGuildStore extends tmp4 {
  constructor() {
    closure_0 = undefined;
    obj = { CONNECTION_OPEN: handleRebuild, OVERLAY_INITIALIZE: handleRebuild, CACHE_LOADED: null, GUILD_CREATE: null, GUILD_DELETE: null, GUILD_MEMBER_ADD: null, USER_SETTINGS_PROTO_UPDATE: null, GUILD_MOVE_BY_ID: null, GUILD_FOLDER_CREATE_LOCAL: null, GUILD_FOLDER_EDIT_LOCAL: null, GUILD_FOLDER_DELETE_LOCAL: null, TOGGLE_GUILD_FOLDER_EXPAND: null, SET_GUILD_FOLDER_EXPANDED: null, GUILD_FOLDER_COLLAPSE: null };
    class CACHE_LOADED {
      constructor() {
        return obj.loadCache();
      }
    }
    obj[2] = CACHE_LOADED;
    obj[3] = handleRebuild;
    obj[4] = handleRebuild;
    obj[5] = handleJoinedLurkingGuild;
    obj[6] = handleSettingsUpdate;
    obj[7] = handleMoveById;
    obj[8] = handleGuildFolderCreateLocal;
    obj[9] = handleGuildFolderEditLocal;
    obj[10] = handleGuildFolderDeleteLocal;
    obj[11] = handleGuildFolderExpand;
    obj[12] = handleFolderExpanded;
    obj[13] = handleCollapseAll;
    tmp = new tmp(obj, CACHE_LOADED, handleFolderExpanded, new.target);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    tmp.loadCache = function loadCache() {
      const snapshot = lib.readSnapshot(closure_1_32.LATEST_SNAPSHOT_VERSION);
      let tree;
      if (snapshot != null) {
        tree = snapshot.tree;
      }
      if (null != tree) {
        guildsTree = new lib(closure_1_2[10]).GuildsTree();
        const snapshot1 = guildsTree.loadSnapshot(tree);
        const allNodesResult = guildsTree.allNodes();
        for (const item10011 of allNodesResult) {
          let tmp4 = item10011;
          let tmp5 = lib;
          let tmp6 = closure_1_2;
          if (item10011.type === lib(closure_1_2[10]).GuildsNodeType.FOLDER) {
            let tmp7 = item10011;
            let tmp8 = closure_1_7;
            tmp4.expanded = closure_1_7.isFolderExpanded(tmp4.id);
          }
          continue;
        }
      }
    };
    return tmp;
  }
}
const prototype = SortedGuildStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_10, closure_11, closure_6, closure_8, closure_5, closure_7, closure_4);
};
prototype["getGuildsTree"] = function getGuildsTree() {
  return guildsTree;
};
prototype["getGuildFolders"] = function getGuildFolders() {
  return callback2(guildsTree, guildsTree.version);
};
prototype["getGuildFolderById"] = function getGuildFolderById(closure_1_0) {
  closure_0 = closure_1_0;
  const guildFolders = this.getGuildFolders();
  return guildFolders.find((folderId) => folderId.folderId === closure_0);
};
prototype["getFlattenedGuildIds"] = function getFlattenedGuildIds() {
  return callback(guildsTree, guildsTree.version);
};
prototype["getFlattenedGuildFolderList"] = function getFlattenedGuildFolderList() {
  return callback3(guildsTree, guildsTree.version);
};
prototype["getCompatibleGuildFolders"] = function getCompatibleGuildFolders() {
  return callback4(guildsTree, guildsTree.version);
};
prototype["getFastListGuildFolders"] = function getFastListGuildFolders() {
  return guildsTree.getRoots();
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: SortedGuildStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { tree: guildsTree.getSnapshot() };
  obj[1] = obj;
  return obj;
};
SortedGuildStore.displayName = "SortedGuildStore";
SortedGuildStore.LATEST_SNAPSHOT_VERSION = 2;
areArraysShallowlyEqual = undefined;
areArraysShallowlyEqual = { CONNECTION_OPEN: handleRebuild, OVERLAY_INITIALIZE: handleRebuild, CACHE_LOADED: null, GUILD_CREATE: null, GUILD_DELETE: null, GUILD_MEMBER_ADD: null, USER_SETTINGS_PROTO_UPDATE: null, GUILD_MOVE_BY_ID: null, GUILD_FOLDER_CREATE_LOCAL: null, GUILD_FOLDER_EDIT_LOCAL: null, GUILD_FOLDER_DELETE_LOCAL: null, TOGGLE_GUILD_FOLDER_EXPAND: null, SET_GUILD_FOLDER_EXPANDED: null, GUILD_FOLDER_COLLAPSE: null };
class CACHE_LOADED {
  constructor() {
    return obj.loadCache();
  }
}
areArraysShallowlyEqual[2] = CACHE_LOADED;
areArraysShallowlyEqual[3] = handleRebuild;
areArraysShallowlyEqual[4] = handleRebuild;
areArraysShallowlyEqual[5] = handleJoinedLurkingGuild;
areArraysShallowlyEqual[6] = handleSettingsUpdate;
areArraysShallowlyEqual[7] = handleMoveById;
areArraysShallowlyEqual[8] = handleGuildFolderCreateLocal;
areArraysShallowlyEqual[9] = handleGuildFolderEditLocal;
areArraysShallowlyEqual[10] = handleGuildFolderDeleteLocal;
areArraysShallowlyEqual[11] = handleGuildFolderExpand;
areArraysShallowlyEqual[12] = handleFolderExpanded;
areArraysShallowlyEqual[13] = handleCollapseAll;
areArraysShallowlyEqual = new areArraysShallowlyEqual(areArraysShallowlyEqual, tmp2, tmp, CACHE_LOADED, handleRebuild, handleJoinedLurkingGuild, handleSettingsUpdate, handleMoveById, handleGuildFolderCreateLocal, handleGuildFolderEditLocal, handleGuildFolderDeleteLocal);
// ThrowIfThisInitialized (0x7c)
areArraysShallowlyEqual.loadCache = function loadCache() {
  const snapshot = lib.readSnapshot(closure_1_32.LATEST_SNAPSHOT_VERSION);
  let tree;
  if (snapshot != null) {
    tree = snapshot.tree;
  }
  if (null != tree) {
    guildsTree = new lib(closure_1_2[10]).GuildsTree();
    const snapshot1 = guildsTree.loadSnapshot(tree);
    const allNodesResult = guildsTree.allNodes();
    for (const item10011 of allNodesResult) {
      let tmp4 = item10011;
      let tmp5 = lib;
      let tmp6 = closure_1_2;
      if (item10011.type === lib(closure_1_2[10]).GuildsNodeType.FOLDER) {
        let tmp7 = item10011;
        let tmp8 = closure_1_7;
        tmp4.expanded = closure_1_7.isFolderExpanded(tmp4.id);
      }
      continue;
    }
  }
};
const result = require("set").fileFinishedImporting("stores/SortedGuildStore.tsx");

export default areArraysShallowlyEqual;
export const GuildsNodeType = require("GuildsNodeType").GuildsNodeType;
export { insertUnsortedGuilds };