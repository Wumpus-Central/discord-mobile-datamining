// discord_app/stores/SortedGuildStore.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import _modDef1332 from "../../_runtime/metro/01332__.js";
import UserGuildJoinRequestStore from "../modules/guild_member_verification/UserGuildJoinRequestStore.tsx";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore.tsx";
import GuildAvailabilityStore from "GuildAvailabilityStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore.tsx";
import UserGuildSettingsStore from "UserGuildSettingsStore.tsx";
import UserStore from "UserStore.tsx";

function insertUnsortedGuilds(fn, fn2) {
  const guildIds = GuildStore.getGuildIds();
  for (const item10010 of guildIds) {
    let tmp3 = arg0(item10010);
    let isLurkingResult = !tmp3;
    if (tmp3) {
      isLurkingResult = LurkingStore.isLurking(item10010);
    }
    if (!isLurkingResult) {
      isLurkingResult = GuildMemberStore.isCurrentUserGuest(item10010);
    }
    if (!isLurkingResult) {
      let tmp10 = arg1(item10010);
    }
    continue;
  }
}
function convertNodeToGuildFolder(type) {
  type = type.type;
  if (FunctionUtils(5440).GuildsNodeType.FOLDER === type) {
    let obj = { folderId: null, folderName: null, folderColor: null, expanded: null, guildIds: null };
    ({ id: obj2.folderId, name: obj2.folderName, color: obj2.folderColor, expanded: obj2.expanded, children } = type);
    obj.guildIds = children.map((id) => id.id);
    return obj;
  } else if (FunctionUtils(5440).GuildsNodeType.GUILD === type) {
    obj = { folderId: "Array", guildIds: 0 };
    const items = [type.id];
    obj.guildIds = items;
    return obj;
  } else {
    const _Error = Error;
    throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
  }
}
function rebuildTree(guildFolders, guildPositions) {
  guildsTree = new FunctionUtils(5440).GuildsTree();
  if (0 === guildFolders.length) {
    if (guildPositions.length > 0) {
      const tmp18 = guildPositions[Symbol.iterator]();
      while (tmp18 !== undefined) {
        let obj3 = FunctionUtils(5440);
        let addNodeResult = guildsTree.addNode(obj3.createGuildNode(tmp20));
        continue;
      }
    }
    const allNodesResult = guildsTree.allNodes();
    const iter2 = allNodesResult[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp33 = nextResult;
      let tmp36 = nextResult.type === FunctionUtils(5440).GuildsNodeType.GUILD;
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
      let tmp58 = item10123.type === FunctionUtils(5440).GuildsNodeType.FOLDER;
      if (tmp58) {
        tmp58 = 0 === item10123.children.length;
      }
      if (tmp58) {
        let removeNodeResult1 = guildsTree.removeNode(item10123);
      }
      continue;
    }
    insertUnsortedGuilds(
      (arg0) => null == guildsTree.nodes[arg0],
      (item10030) =>
        guildsTree.addNode(FunctionUtils(dependencyMap[10]).createGuildNode(item10030), guildsTree.root, false),
    );
    guildsTree.version = tmp.version;
    const tmp69 = _modDef1332(tmp, guildsTree);
    if (tmp69) {
      guildsTree = tmp;
    } else {
      guildsTree.version = tmp.version + 1;
    }
    return !tmp69;
  }
  const iter = guildFolders[Symbol.iterator]();
  const nextResult1 = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult1;
    if (0 !== nextResult1.guildIds.length) {
      if (null == tmp5.folderId) {
        let obj2 = FunctionUtils(5440);
        let addNodeResult1 = guildsTree.addNode(obj2.createGuildNode(tmp5.guildIds[0]));
      } else {
        let obj4 = FunctionUtils(5440);
        let folderNode = obj4.createFolderNode(
          tmp5,
          undefined,
          ExpandedGuildFolderStore.isFolderExpanded(tmp5.folderId),
        );
        let tmp77 = folderNode;
        let addNodeResult2 = guildsTree.addNode(folderNode);
        let guildIds = tmp5.guildIds;
        for (const item10030 of guildIds) {
          let obj = FunctionUtils(5440);
          let addNodeResult3 = guildsTree.addNode(obj.createGuildNode(item10030), tmp77);
          continue;
        }
      }
    }
    continue;
  }
}
function handleRebuild() {
  guildFolders = UserSettingsProtoStore.getGuildFolders();
  if (guildFolders == null) {
    guildFolders = [];
  }
  guildFolders = UserSettingsProtoStore.settings.guildFolders;
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
  guildFolders = UserSettingsProtoStore.getGuildFolders();
  let tmp6Result = null == guildFolders;
  if (!tmp6Result) {
    tmp6Result = !_modDef1332(guildFolders, guildFolders);
  }
  if (tmp6Result) {
    if (guildFolders == null) {
      guildFolders = [];
    }
    guildFolders = UserSettingsProtoStore.settings.guildFolders;
    let guildPositions;
    if (guildFolders != null) {
      guildPositions = guildFolders.guildPositions;
    }
    if (guildPositions == null) {
      guildPositions = [];
    }
    tmp6Result = rebuildTree(guildFolders, guildPositions);
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
        tmp4 = node.type === FunctionUtils(5440).GuildsNodeType.FOLDER;
      }
      const _HermesInternal = HermesInternal;
      _modDef38(!tmp4, "[SORTED GUILDS] Can't combine a folder " + node.id + " with another guilds list item");
      let tmp9 = combine;
      let tmp22Result = _modDef38;
      if (combine) {
        tmp9 = null != node1.parentId;
      }
      const _HermesInternal2 = HermesInternal;
      tmp22Result(
        !tmp9,
        "[SORTED GUILDS] Can't combine with a guild " + node1.id + " that's already inside of a folder",
      );
      tmp22Result = _modDef38;
      const tmp10 = !tmp9;
      const tmp5 = !tmp4;
      const _HermesInternal3 = HermesInternal;
      tmp22Result(
        !(node.type === FunctionUtils(5440).GuildsNodeType.FOLDER && null != node1.parentId),
        "[SORTED GUILDS] Can't move a folder " + node.id + " to inside of another folder " + node1.parentId,
      );
      if (combine) {
        let convertToFolderResult = node1;
        if (node1.type !== FunctionUtils(5440).GuildsNodeType.FOLDER) {
          convertToFolderResult = guildsTree.convertToFolder(node1);
        }
        guildsTree.moveInto(node, convertToFolderResult, moveToBelow);
      } else {
        guildsTree.moveNextTo(node, node1, moveToBelow);
      }
      const tmp14 = node.type === FunctionUtils(5440).GuildsNodeType.FOLDER && null != node1.parentId;
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
  ({ targetId, sourceIds } = arg0);
  const merged = Object.assign(arg0, Object.assign({ targetId: 0, sourceIds: 0 }));
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
        const set2 = new Set(items.filter((item) => !set1.has(item)));
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
    tmp12 = node1;
  }
}
function handleGuildFolderDeleteLocal(targetId) {
  const element = guildsTree.getNode(targetId.targetId);
  let tmp = null != element;
  if (tmp) {
    const tmp4 = element.type === element(5440).GuildsNodeType.FOLDER;
    if (tmp4) {
      const children = element.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(tmp2(1369).isNotNullish);
      const item = found.forEach((item) => {
        const node = guildsTree.getNode(item);
        if (null != node) {
          guildsTree.moveNextTo(node, element, true);
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
        date = new Date(joinedAt);
      }
      let tmp5Result = date !== guild.joinedAt && null != date;
      if (tmp5Result) {
        guildFolders = UserSettingsProtoStore.getGuildFolders();
        if (guildFolders == null) {
          guildFolders = [];
        }
        guildFolders = UserSettingsProtoStore.settings.guildFolders;
        let guildPositions;
        if (guildFolders != null) {
          guildPositions = guildFolders.guildPositions;
        }
        if (guildPositions == null) {
          guildPositions = [];
        }
        tmp5Result = rebuildTree(guildFolders, guildPositions);
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
    if (node.type === FunctionUtils(5440).GuildsNodeType.FOLDER) {
      if (node.expanded !== isFolderExpandedResult) {
        const cloneNodeResult = guildsTree.cloneNode(node);
        _modDef38(
          cloneNodeResult.id === node.id,
          "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.",
        );
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
    if (node.type === FunctionUtils(5440).GuildsNodeType.FOLDER) {
      if (node.expanded !== expanded) {
        const cloneNodeResult = guildsTree.cloneNode(node);
        _modDef38(
          cloneNodeResult.id === node.id,
          "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.",
        );
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
    let expanded = nextResult.type === FunctionUtils(5440).GuildsNodeType.FOLDER;
    if (expanded) {
      expanded = tmp3.expanded;
    }
    if (expanded) {
      let tmp9 = setNodeExpanded(tmp3, false);
    }
    continue;
  }
  const allNodesResult = guildsTree.allNodes();
}
function setNodeExpanded(id, arg1) {
  const cloneNodeResult = guildsTree.cloneNode(id);
  _modDef38(
    cloneNodeResult.id === id.id,
    "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.",
  );
  cloneNodeResult.expanded = false;
  guildsTree.replaceNode(id, cloneNodeResult);
}
let guildsTree = new fn(5440).GuildsTree();
let FunctionUtils = fn(1933);
let closure_28 = FunctionUtils.cachedFunction((sortedGuildNodes) =>
  sortedGuildNodes.sortedGuildNodes().map((id) => id.id),
);
FunctionUtils = fn(1933);
let closure_29 = FunctionUtils.cachedFunction((getRoots) => {
  const roots = getRoots.getRoots();
  return roots.map(convertNodeToGuildFolder);
});
FunctionUtils = fn(1933);
let closure_30 = FunctionUtils.cachedFunction((root) => {
  const items = [];
  function flattenNodes(root) {
    const type = root.type;
    if (FunctionUtils(5440).GuildsNodeType.FOLDER === type) {
      items.push(root);
    }
    while (tmp5 !== undefined) {
      let tmp8 = flattenNodes(tmp6);
      continue;
    }
    tmp5 = root.children[Symbol.iterator]();
  }
  flattenNodes(root.root);
  return items;
});
FunctionUtils = fn(1933);
let closure_31 = FunctionUtils.cachedFunction((root) => {
  const children = root.root.children;
  return children.map(convertNodeToGuildFolder);
});
let SortedGuildStore;
class SortedGuildStore extends tmp4 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN: handleRebuild,
      OVERLAY_INITIALIZE: handleRebuild,
      CACHE_LOADED: null,
      GUILD_CREATE: null,
      GUILD_DELETE: null,
      GUILD_MEMBER_ADD: null,
      USER_SETTINGS_PROTO_UPDATE: null,
      GUILD_MOVE_BY_ID: null,
      GUILD_FOLDER_CREATE_LOCAL: null,
      GUILD_FOLDER_EDIT_LOCAL: null,
      GUILD_FOLDER_DELETE_LOCAL: null,
      TOGGLE_GUILD_FOLDER_EXPAND: null,
      SET_GUILD_FOLDER_EXPANDED: null,
      GUILD_FOLDER_COLLAPSE: null,
    };
    class CACHE_LOADED {
      constructor() {
        return closure_0.loadCache();
      }
    }
    obj.CACHE_LOADED = CACHE_LOADED;
    obj.GUILD_CREATE = handleRebuild;
    obj.GUILD_DELETE = handleRebuild;
    obj.GUILD_MEMBER_ADD = handleJoinedLurkingGuild;
    obj.USER_SETTINGS_PROTO_UPDATE = handleSettingsUpdate;
    obj.GUILD_MOVE_BY_ID = handleMoveById;
    obj.GUILD_FOLDER_CREATE_LOCAL = handleGuildFolderCreateLocal;
    obj.GUILD_FOLDER_EDIT_LOCAL = handleGuildFolderEditLocal;
    obj.GUILD_FOLDER_DELETE_LOCAL = handleGuildFolderDeleteLocal;
    obj.TOGGLE_GUILD_FOLDER_EXPAND = handleGuildFolderExpand;
    obj.SET_GUILD_FOLDER_EXPANDED = handleFolderExpanded;
    obj.GUILD_FOLDER_COLLAPSE = handleCollapseAll;
    tmp = new tmp(obj, CACHE_LOADED, handleFolderExpanded, new.target);
    closure_0 = tmp;
    tmp.loadCache = function loadCache() {
      const snapshot = closure_0.readSnapshot(SortedGuildStore.LATEST_SNAPSHOT_VERSION);
      let tree;
      if (snapshot != null) {
        tree = snapshot.tree;
      }
      if (null != tree) {
        guildsTree = new FunctionUtils(5440).GuildsTree();
        const snapshot1 = guildsTree.loadSnapshot(tree);
        const allNodesResult = guildsTree.allNodes();
        for (const item10011 of allNodesResult) {
          if (item10011.type === FunctionUtils(5440).GuildsNodeType.FOLDER) {
            item10011.expanded = ExpandedGuildFolderStore.isFolderExpanded(item10011.id);
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
  this.waitFor(
    GuildStore,
    UserGuildSettingsStore,
    UserSettingsProtoStore,
    GuildAvailabilityStore,
    LurkingStore,
    ExpandedGuildFolderStore,
    UserGuildJoinRequestStore,
  );
};
prototype["getGuildsTree"] = function getGuildsTree() {
  return guildsTree;
};
prototype["getGuildFolders"] = function getGuildFolders() {
  return closure_29(guildsTree, guildsTree.version);
};
prototype["getGuildFolderById"] = function getGuildFolderById(folderId) {
  closure_0 = folderId;
  guildFolders = this.getGuildFolders();
  return guildFolders.find((folderId) => folderId.folderId === closure_0);
};
prototype["getFlattenedGuildIds"] = function getFlattenedGuildIds() {
  return closure_28(guildsTree, guildsTree.version);
};
prototype["getFlattenedGuildFolderList"] = function getFlattenedGuildFolderList() {
  return closure_30(guildsTree, guildsTree.version);
};
prototype["getCompatibleGuildFolders"] = function getCompatibleGuildFolders() {
  return closure_31(guildsTree, guildsTree.version);
};
prototype["getFastListGuildFolders"] = function getFastListGuildFolders() {
  return guildsTree.getRoots();
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: SortedGuildStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { tree: guildsTree.getSnapshot() };
  obj.data = obj;
  return obj;
};
SortedGuildStore.displayName = "SortedGuildStore";
SortedGuildStore.LATEST_SNAPSHOT_VERSION = 2;
let closure_129_0;
FunctionUtils = {
  CONNECTION_OPEN: handleRebuild,
  OVERLAY_INITIALIZE: handleRebuild,
  CACHE_LOADED: null,
  GUILD_CREATE: null,
  GUILD_DELETE: null,
  GUILD_MEMBER_ADD: null,
  USER_SETTINGS_PROTO_UPDATE: null,
  GUILD_MOVE_BY_ID: null,
  GUILD_FOLDER_CREATE_LOCAL: null,
  GUILD_FOLDER_EDIT_LOCAL: null,
  GUILD_FOLDER_DELETE_LOCAL: null,
  TOGGLE_GUILD_FOLDER_EXPAND: null,
  SET_GUILD_FOLDER_EXPANDED: null,
  GUILD_FOLDER_COLLAPSE: null,
};
class CACHE_LOADED {
  constructor() {
    return closure_0.loadCache();
  }
}
FunctionUtils.CACHE_LOADED = CACHE_LOADED;
FunctionUtils.GUILD_CREATE = handleRebuild;
FunctionUtils.GUILD_DELETE = handleRebuild;
FunctionUtils.GUILD_MEMBER_ADD = handleJoinedLurkingGuild;
FunctionUtils.USER_SETTINGS_PROTO_UPDATE = handleSettingsUpdate;
FunctionUtils.GUILD_MOVE_BY_ID = handleMoveById;
FunctionUtils.GUILD_FOLDER_CREATE_LOCAL = handleGuildFolderCreateLocal;
FunctionUtils.GUILD_FOLDER_EDIT_LOCAL = handleGuildFolderEditLocal;
FunctionUtils.GUILD_FOLDER_DELETE_LOCAL = handleGuildFolderDeleteLocal;
FunctionUtils.TOGGLE_GUILD_FOLDER_EXPAND = handleGuildFolderExpand;
FunctionUtils.SET_GUILD_FOLDER_EXPANDED = handleFolderExpanded;
FunctionUtils.GUILD_FOLDER_COLLAPSE = handleCollapseAll;
FunctionUtils = new FunctionUtils(
  FunctionUtils,
  tmp2,
  tmp,
  CACHE_LOADED,
  handleRebuild,
  handleJoinedLurkingGuild,
  handleSettingsUpdate,
  handleMoveById,
  handleGuildFolderCreateLocal,
  handleGuildFolderEditLocal,
  handleGuildFolderDeleteLocal,
);
closure_129_0 = FunctionUtils;
FunctionUtils.loadCache = function loadCache() {
  const snapshot = closure_0.readSnapshot(SortedGuildStore.LATEST_SNAPSHOT_VERSION);
  let tree;
  if (snapshot != null) {
    tree = snapshot.tree;
  }
  if (null != tree) {
    guildsTree = new FunctionUtils(5440).GuildsTree();
    const snapshot1 = guildsTree.loadSnapshot(tree);
    const allNodesResult = guildsTree.allNodes();
    for (const item10011 of allNodesResult) {
      if (item10011.type === FunctionUtils(5440).GuildsNodeType.FOLDER) {
        item10011.expanded = ExpandedGuildFolderStore.isFolderExpanded(item10011.id);
      }
      continue;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("stores/SortedGuildStore.tsx");

export default FunctionUtils;
export const GuildsNodeType = fn(5440).GuildsNodeType;
export { insertUnsortedGuilds };
