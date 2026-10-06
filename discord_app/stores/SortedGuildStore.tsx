// === Module 5623: SortedGuildStore ===

// Module 5623 (SortedGuildStore)
import _modDef38 from "module_38" /* 38 */;
import _modDef1342 from "module_1342" /* 1342 */;
import GuildsTree from "GuildsTree" /* 5626 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4706 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 5624 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5625 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import FunctionUtils_mod from "FunctionUtils" /* 2026 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set2;

let tmp;
let tmp2;
function loadCache() {
  const snapshot = closure_0.readSnapshot(SortedGuildStore.LATEST_SNAPSHOT_VERSION);
  let tree;
  if (snapshot != null) {
    tree = snapshot.tree;
  }
  if (null != tree) {
    const self = this;
    const self2 = this;
    guildsTree = new GuildsTree.GuildsTree();
    const snapshot1 = guildsTree.loadSnapshot(tree);
    const allNodesResult = guildsTree.allNodes();
    for (const item10011 of allNodesResult) {
      if (item10011.type === GuildsTree.GuildsNodeType.FOLDER) {
        item10011.expanded = ExpandedGuildFolderStore.isFolderExpanded(item10011.id);
      }
      continue;
    }
  }
}
function insertUnsortedGuilds(fn, fn2) {
  const guildIds = GuildStore.getGuildIds();
  for (const item10010 of guildIds) {
    let tmp3 = fn(item10010);
    let isLurkingResult = !tmp3 || LurkingStore.isLurking(item10010) || GuildMemberStore.isCurrentUserGuest(item10010);
    if (!isLurkingResult) {
      let tmp10 = fn2(item10010);
    }
    continue;
  }
}
function convertNodeToGuildFolder(type) {
  let children;
  let items;
  type = type.type;
  if (GuildsTree.GuildsNodeType.FOLDER === type) {
    const obj3 = { folderId: null, folderName: null, folderColor: null, expanded: null, guildIds: children.map((id) => id.id) };
    ({ id: obj2.folderId, name: obj2.folderName, color: obj2.folderColor, expanded: obj2.expanded, children } = type);
    return obj3;
  } else if (GuildsTree.GuildsNodeType.GUILD === type) {
    const obj = { folderId: "Array", guildIds: items };
    items = [type.id];
    return obj;
  } else {
    const _Error = Error;
    throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
  }
}
function rebuildTree(guildFolders1, guildPositions) {
  guildsTree = new GuildsTree.GuildsTree();
  if (0 === guildFolders1.length) {
    if (guildPositions.length > 0) {
      const tmp18 = guildPositions[Symbol.iterator]();
      while (tmp18 !== undefined) {
        let addNode3 = guildsTree.addNode;
        let obj3 = GuildsTree;
        let addNode3Result = addNode3(obj3.createGuildNode(tmp20));
        continue;
      }
    }
    const allNodesResult = guildsTree.allNodes();
    const iter2 = allNodesResult[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp33 = nextResult;
      let tmp36 = nextResult.type === GuildsTree.GuildsNodeType.GUILD;
      if (tmp36) {
        let isLurkingResult = LurkingStore.isLurking(tmp33.id);
        if (!isLurkingResult) {
          isLurkingResult = GuildMemberStore.isCurrentUserGuest(tmp33.id);
        }
        if (!isLurkingResult) {
          let tmp44 = null == GuildStore.getGuild(tmp33.id);
          if (tmp44) {
            tmp44 = !GuildAvailabilityStore.isUnavailable(tmp33.id);
          }
          isLurkingResult = tmp44;
        }
        tmp36 = isLurkingResult;
      }
      if (tmp36) {
        let removeNodeResult = guildsTree.removeNode(tmp33);
      }
      continue;
    }
    const _Object = Object;
    const values = Object.values(guildsTree.nodes);
    for (const item10123 of values) {
      let tmp58 = item10123.type === GuildsTree.GuildsNodeType.FOLDER && 0 === item10123.children.length;
      if (tmp58) {
        let removeNodeResult1 = guildsTree.removeNode(item10123);
      }
      continue;
    }
    insertUnsortedGuilds((arg0) => null == guildsTree.nodes[arg0], (item10030) => {
      const addNode = guildsTree.addNode;
      const obj = require("GuildsTree");
      return addNode(obj.createGuildNode(item10030), guildsTree.root, false);
    });
    guildsTree.version = guildsTree.version;
    const tmp69 = _modDef1342(guildsTree, guildsTree);
    if (tmp69) {
      guildsTree = tmp;
    } else {
      guildsTree.version = guildsTree.version + 1;
    }
    return !tmp69;
  }
  const iter = guildFolders1[Symbol.iterator]();
  const nextResult1 = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult1;
    if (0 !== nextResult1.guildIds.length) {
      if (null == tmp5.folderId) {
        let addNode2 = guildsTree.addNode;
        let obj2 = GuildsTree;
        let addNode2Result = addNode2(obj2.createGuildNode(tmp5.guildIds[0]));
      } else {
        let obj4 = GuildsTree;
        let folderNode = obj4.createFolderNode(tmp5, undefined, ExpandedGuildFolderStore.isFolderExpanded(tmp5.folderId));
        let tmp77 = folderNode;
        let addNodeResult = guildsTree.addNode(folderNode);
        let guildIds = tmp5.guildIds;
        for (const item10030 of guildIds) {
          let addNode = guildsTree.addNode;
          let obj = GuildsTree;
          let addNodeResult1 = addNode(obj.createGuildNode(item10030), tmp77);
          continue;
        }
      }
    }
    continue;
  }
}
function handleRebuild() {
  guildFolders1 = UserSettingsProtoStore.getGuildFolders();
  if (guildFolders1 == null) {
    guildFolders1 = [];
  }
  const guildFolders = UserSettingsProtoStore.settings.guildFolders;
  let guildPositions;
  if (guildFolders != null) {
    guildPositions = guildFolders.guildPositions;
  }
  if (guildPositions == null) {
    guildPositions = [];
  }
  return rebuildTree(guildFolders1, guildPositions);
}
function handleSettingsUpdate() {
  guildFolders1 = UserSettingsProtoStore.getGuildFolders();
  let tmp6Result = null == guildFolders1 || !_modDef1342(guildFolders1, guildFolders1);
  if (tmp6Result) {
    if (guildFolders1 == null) {
      guildFolders1 = [];
    }
    const guildFolders = UserSettingsProtoStore.settings.guildFolders;
    let guildPositions;
    if (guildFolders != null) {
      guildPositions = guildFolders.guildPositions;
    }
    if (guildPositions == null) {
      guildPositions = [];
    }
    tmp6Result = rebuildTree(guildFolders1, guildPositions);
  }
  return tmp6Result;
}
function handleMoveById(targetId) {
  let combine;
  let moveToBelow;
  ({ moveToBelow, combine } = targetId);
  targetId = targetId.targetId;
  const node = guildsTree.getNode(targetId.sourceId);
  const node1 = guildsTree.getNode(targetId);
  if (null != node) {
    if (null != node1) {
      let tmp4 = combine;
      const tmp24 = _modDef38;
      if (combine) {
        tmp4 = node.type === GuildsTree.GuildsNodeType.FOLDER;
      }
      const _HermesInternal = HermesInternal;
      const tmp5 = !tmp4;
      tmp24(tmp5, "[SORTED GUILDS] Can't combine a folder " + node.id + " with another guilds list item");
      let tmp9 = combine;
      const tmp22Result = _modDef38;
      if (combine) {
        tmp9 = null != node1.parentId;
      }
      const _HermesInternal2 = HermesInternal;
      const tmp10 = !tmp9;
      tmp22Result(tmp10, "[SORTED GUILDS] Can't combine with a guild " + node1.id + " that's already inside of a folder");
      const _HermesInternal3 = HermesInternal;
      const tmp22Result2 = _modDef38;
      const tmp14 = node.type === GuildsTree.GuildsNodeType.FOLDER && null != node1.parentId;
      tmp22Result2(!tmp14, "[SORTED GUILDS] Can't move a folder " + node.id + " to inside of another folder " + node1.parentId);
      if (combine) {
        let convertToFolderResult = node1;
        if (node1.type !== GuildsTree.GuildsNodeType.FOLDER) {
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
  let c0;
  const name = sourceIds.name;
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
      convertToFolderResult.name = name;
      const item = sourceIds.forEach((item) => {
        const node = guildsTree.getNode(item);
        if (null != node) {
          guildsTree.moveInto(node, c0, true);
        }
      });
    }
  }
}
function handleGuildFolderEditLocal(arg0) {
  let sourceIds;
  let targetId;
  ({ targetId, sourceIds } = arg0);
  const merged = Object.assign(arg0, Object.assign({ targetId: 0, sourceIds: 0 }));
  let node1;
  set = undefined;
  let set1;
  let node = guildsTree.getNode(targetId);
  if (null == node) {
    return false;
  } else {
    const tmp12 = node1;
    if (node.type !== node1(set1[10]).GuildsNodeType.FOLDER) {
      return false;
    } else {
      let name;
      if ("" !== merged.name) {
        name = merged.name;
      }
      if (name !== node.name) {
        const cloneNodeResult = guildsTree.cloneNode(node);
        set(set1[12])(cloneNodeResult.id === node.id, "[SORTED GUILDS] Replacement folder node must have same id.");
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
        const self = this;
        const self2 = this;
        set = new Set(found);
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set1 = new Set(sourceIds);
        const _Set3 = Set;
        const items = [];
        HermesBuiltin.arraySpread(items, found, 0);
        const self5 = this;
        const self6 = this;
        set2 = new Set(items.filter((item) => !set1.has(item)));
        const found1 = sourceIds.filter((item) => !set.has(item));
        const item = found1.forEach((item) => {
          const node = guildsTree.getNode(item);
          if (null != node) {
            guildsTree.moveInto(node, node1, true);
          }
        });
        const item1 = set2.forEach((item) => {
          const node = guildsTree.getNode(item);
          if (null != node) {
            guildsTree.moveNextTo(node, node1, true);
          }
        });
      }
    }
  }
}
function handleGuildFolderDeleteLocal(targetId) {
  const element = guildsTree.getNode(targetId.targetId);
  let tmp = null != element;
  if (tmp) {
    const tmp4 = element.type === element(5626).GuildsNodeType.FOLDER;
    const tmp2 = element;
    if (tmp4) {
      const children = element.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(tmp2(1375).isNotNullish);
      const item = found.forEach((item) => {
        const node = guildsTree.getNode(item);
        if (null != node) {
          guildsTree.moveNextTo(node, element, true);
        }
      });
    }
    tmp = tmp4;
  }
  return tmp;
}
function handleJoinedLurkingGuild(joinedAt) {
  let guildId;
  let user;
  joinedAt = joinedAt.joinedAt;
  ({ guildId, user } = joinedAt);
  const currentUser = UserStore.getCurrentUser();
  const guild = GuildStore.getGuild(guildId);
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id === user.id) {
    if (null != guild) {
      let date = joinedAt;
      if (typeof joinedAt === "string") {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(joinedAt);
      }
      let tmp5Result = date !== guild.joinedAt && null != date;
      if (tmp5Result) {
        guildFolders1 = UserSettingsProtoStore.getGuildFolders();
        if (guildFolders1 == null) {
          guildFolders1 = [];
        }
        const guildFolders = UserSettingsProtoStore.settings.guildFolders;
        let guildPositions;
        if (guildFolders != null) {
          guildPositions = guildFolders.guildPositions;
        }
        if (guildPositions == null) {
          guildPositions = [];
        }
        tmp5Result = rebuildTree(guildFolders1, guildPositions);
      }
      return tmp5Result;
    }
  }
  return false;
}
function handleGuildFolderExpand(folderId) {
  folderId = folderId.folderId;
  const node = guildsTree.getNode(folderId);
  const isFolderExpandedResult = ExpandedGuildFolderStore.isFolderExpanded(folderId);
  if (null != node) {
    if (node.type === GuildsTree.GuildsNodeType.FOLDER) {
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
    if (node.type === GuildsTree.GuildsNodeType.FOLDER) {
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
  const allNodesResult = guildsTree.allNodes();
  const iter = allNodesResult[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let expanded = nextResult.type === GuildsTree.GuildsNodeType.FOLDER;
    if (expanded) {
      expanded = tmp3.expanded;
    }
    if (expanded) {
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
let guildsTree = new GuildsTree.GuildsTree();
let FunctionUtils = FunctionUtils_mod;
let closure_28 = FunctionUtils.cachedFunction((sortedGuildNodes) => {
  const sortedGuildNodesResult = sortedGuildNodes.sortedGuildNodes();
  return sortedGuildNodesResult.map((id) => id.id);
});
FunctionUtils = FunctionUtils_mod;
let set = FunctionUtils.cachedFunction((getRoots) => {
  const roots = getRoots.getRoots();
  return roots.map(convertNodeToGuildFolder);
});
FunctionUtils = FunctionUtils_mod;
const __initData = FunctionUtils.cachedFunction((root) => {
  const items = [];
  function flattenNodes(root) {
    const type = root.type;
    if (GuildsTree.GuildsNodeType.FOLDER === type) {
      items.push(root);
    }
    const tmp5 = root.children[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp8 = flattenNodes(tmp6);
      continue;
    }
  }
  flattenNodes(root.root);
  return items;
});
FunctionUtils = FunctionUtils_mod;
let closure_31 = FunctionUtils.cachedFunction((root) => {
  const children = root.root.children;
  return children.map(convertNodeToGuildFolder);
});
class SortedGuildStore extends MobileCacheSnapshotStore {
  constructor() {
    let closure_0;
    _require = undefined;
    const obj = { CONNECTION_OPEN: handleRebuild, OVERLAY_INITIALIZE: handleRebuild, CACHE_LOADED, GUILD_CREATE: handleRebuild, GUILD_DELETE: handleRebuild, GUILD_MEMBER_ADD: handleJoinedLurkingGuild, USER_SETTINGS_PROTO_UPDATE: handleSettingsUpdate, GUILD_MOVE_BY_ID: handleMoveById, GUILD_FOLDER_CREATE_LOCAL: handleGuildFolderCreateLocal, GUILD_FOLDER_EDIT_LOCAL: handleGuildFolderEditLocal, GUILD_FOLDER_DELETE_LOCAL: handleGuildFolderDeleteLocal, TOGGLE_GUILD_FOLDER_EXPAND: handleGuildFolderExpand, SET_GUILD_FOLDER_EXPANDED: handleFolderExpanded, GUILD_FOLDER_COLLAPSE: handleCollapseAll };
    class CACHE_LOADED {
      constructor() {
        return closure_0.loadCache();
      }
    }
    const tmp2 = new tmp(obj, CACHE_LOADED, handleFolderExpanded, new.target);
    _require = tmp2;
    tmp2.loadCache = loadCache;
    return tmp2;
  }
  initialize() {
    this.waitFor(GuildStore, UserGuildSettingsStore, UserSettingsProtoStore, GuildAvailabilityStore, LurkingStore, ExpandedGuildFolderStore, UserGuildJoinRequestStore);
  }
  getGuildsTree() {
    return guildsTree;
  }
  getGuildFolders() {
    return closure_29(guildsTree, guildsTree.version);
  }
  getGuildFolderById(folderId) {
    let closure_0 = folderId;
    const guildFolders = this.getGuildFolders();
    return guildFolders.find((folderId) => folderId.folderId === closure_0);
  }
  getFlattenedGuildIds() {
    return closure_28(guildsTree, guildsTree.version);
  }
  getFlattenedGuildFolderList() {
    return closure_30(guildsTree, guildsTree.version);
  }
  getCompatibleGuildFolders() {
    return closure_31(guildsTree, guildsTree.version);
  }
  getFastListGuildFolders() {
    return guildsTree.getRoots();
  }
  takeSnapshot() {
    const obj = { version: SortedGuildStore.LATEST_SNAPSHOT_VERSION, data: { tree: guildsTree.getSnapshot() } };
    ({ tree: guildsTree.getSnapshot() });
    return obj;
  }
}
const prototype = SortedGuildStore.prototype;
SortedGuildStore.displayName = "SortedGuildStore";
SortedGuildStore.LATEST_SNAPSHOT_VERSION = 2;
let _module31;
let obj = { CONNECTION_OPEN: handleRebuild, OVERLAY_INITIALIZE: handleRebuild, CACHE_LOADED, GUILD_CREATE: handleRebuild, GUILD_DELETE: handleRebuild, GUILD_MEMBER_ADD: handleJoinedLurkingGuild, USER_SETTINGS_PROTO_UPDATE: handleSettingsUpdate, GUILD_MOVE_BY_ID: handleMoveById, GUILD_FOLDER_CREATE_LOCAL: handleGuildFolderCreateLocal, GUILD_FOLDER_EDIT_LOCAL: handleGuildFolderEditLocal, GUILD_FOLDER_DELETE_LOCAL: handleGuildFolderDeleteLocal, TOGGLE_GUILD_FOLDER_EXPAND: handleGuildFolderExpand, SET_GUILD_FOLDER_EXPANDED: handleFolderExpanded, GUILD_FOLDER_COLLAPSE: handleCollapseAll };
class CACHE_LOADED {
  constructor() {
    return closure_0.loadCache();
  }
}
_module31 = new FunctionUtils(obj, tmp2, tmp, CACHE_LOADED, handleRebuild, handleJoinedLurkingGuild, handleSettingsUpdate, handleMoveById, handleGuildFolderCreateLocal, handleGuildFolderEditLocal, handleGuildFolderDeleteLocal);
_module31.loadCache = loadCache;
const result = size.fileFinishedImporting("stores/SortedGuildStore.tsx");

export default _module31;
export const GuildsNodeType = GuildsTree.GuildsNodeType;
export { insertUnsortedGuilds };