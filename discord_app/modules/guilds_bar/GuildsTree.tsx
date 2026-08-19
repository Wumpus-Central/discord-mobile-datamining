// discord_app/modules/guilds_bar/GuildsTree.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import apply from "../../../_runtime/00012_apply.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";

let obj = { ROOT: "root", FOLDER: "folder", GUILD: "guild" };
const result = obj132.fileFinishedImporting("modules/guilds_bar/GuildsTree.tsx");
class GuildsTree {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj = { type: closure_3.ROOT, children: [] };
    obj.root = obj;
    obj.nodes = {};
    obj.version = 0;
    return obj;
  }
}
const prototype = GuildsTree.prototype;
prototype["getSnapshot"] = function getSnapshot() {
  const self = this;
  obj = {};
  for (const key10005 in this.nodes) {
    let tmp2 = self.nodes[key10005];
    obj = {};
    let merged = Object.assign(tmp2);
    obj.children = undefined;
    let children = tmp2.children;
    obj.childrenIds = children.map((item, index) => item.id);
    obj[key10005] = obj;
    continue;
  }
  obj = { rootChildrenIds: children1.map((item, index) => item.id), nodes: obj };
  children1 = self.root.children;
  return obj;
};
prototype["loadSnapshot"] = function loadSnapshot(tree) {
  const self = this;
  this.nodes = tree.nodes;
  for (const key10006 in this.nodes) {
    let tmp4 = self.nodes[key10006];
    if (!("childrenIds" in tmp4)) {
      continue;
    } else {
      let childrenIds = tmp4.childrenIds;
      tmp4.children = childrenIds.map((item, index) => self.nodes[item]);
      delete tmp2[tmp];
      continue;
    }
    continue;
  }
  const rootChildrenIds = tree.rootChildrenIds;
  self.root.children = rootChildrenIds.map((item, index) => self.nodes[item]);
  self.version = self.version + 1;
};
prototype["moveNextTo"] = function moveNextTo(node, node1, moveToBelow) {
  let flag = moveToBelow;
  if (moveToBelow === undefined) {
    flag = false;
  }
  const self = this;
  this._pluckNode(node);
  if (null != node1.parentId) {
    let root = self.nodes[node1.parentId];
  } else {
    root = self.root;
  }
  const children = root.children;
  const index = children.indexOf(node1);
  let tmp7 = node.type === obj.FOLDER;
  if (tmp7) {
    tmp7 = root.type === tmp6.FOLDER;
  }
  _modDef38(!tmp7, "[GUILDS TREE] Tried moving a folder (" + node.id + ") inside of another folder (" + root.id + ")");
  _modDef38(index >= 0, "[GUILDS TREE] target node (" + node1.id + ") did not exist within its specified parent (" + node1.parentId + ")");
  let num = 0;
  if (flag) {
    num = 1;
  }
  const items = [...root.children];
  root.children = items;
  const children1 = root.children;
  children1.splice(index + num, 0, node);
  node.parentId = root.id;
  self.version = self.version + 1;
  return self;
};
prototype["moveInto"] = function moveInto(node, c0, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const self = this;
  this._pluckNode(node);
  let num = 0;
  if (flag) {
    num = _require.children.length;
  }
  const items = [...c0.children];
  _require.children = items;
  const children = _require.children;
  children.splice(num, 0, node);
  node.parentId = _require.id;
  self.version = self.version + 1;
  return self;
};
prototype["addNode"] = function addNode(type, c0, flag) {
  const self = this;
  let root = c0;
  if (c0 === undefined) {
    root = self.root;
  }
  if (flag === undefined) {
    flag = true;
  }
  _modDef38(type.type !== obj.ROOT, "[GUILDS TREE] Tried adding another root node into the tree");
  _modDef38(null != type.id, "[GUILDS TREE] Tried adding a node without an id");
  _modDef38(null == self.nodes[type.id], "[GUILDS TREE] Tried adding a node that already exists (" + type.id + ")");
  self.nodes[type.id] = type;
  self.version = self.version + 1;
  return self.moveInto(type, root, flag);
};
prototype["removeNode"] = function removeNode(id) {
  _modDef38(id !== this.root, "[GUILDS TREE] Tried removing the root node from the tree");
  _modDef38(null != id.id, "[GUILDS TREE] Tried removing a node without an id");
  this._pluckNode(id);
  id.parentId = undefined;
  delete tmp2[tmp];
  this.version = this.version + 1;
  return this;
};
prototype["replaceNode"] = function replaceNode(node, cloneNodeResult) {
  const self = this;
  _modDef38(null != node.id, "[GUILDS TREE] Tried replacing a node without an id");
  _modDef38(null != cloneNodeResult.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id");
  if (null != node.parentId) {
    let root = self.nodes[node.parentId];
  } else {
    root = self.root;
  }
  const children = root.children;
  const index = children.indexOf(node);
  _modDef38(index >= 0, "[GUILDS TREE] existing node (" + node.id + ") did not exist within its specified parent (" + node.parentId + ")");
  const items = [...root.children];
  root.children = items;
  const children1 = root.children;
  children1.splice(index, 1, cloneNodeResult);
  cloneNodeResult.parentId = root.id;
  node.parentId = undefined;
  delete tmp2[tmp];
  self.nodes[cloneNodeResult.id] = cloneNodeResult;
  self.version = self.version + 1;
  return self;
};
prototype["cloneNode"] = function cloneNode(node) {
  return apply.clone(node);
};
prototype["convertToFolder"] = function convertToFolder(node) {
  const self = this;
  let rounded = Math.floor(4294967296 * Math.random());
  if (null != this.getNode(rounded)) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      let rounded1 = Math.floor(4294967296 * Math.random());
      rounded = rounded1;
      node = self.getNode(rounded1);
    } while (null != node);
  }
  obj = { type: obj.FOLDER, id: rounded, expanded: false, children: [] };
  self.replaceNode(node, obj);
  self.removeNode(node);
  self.addNode(node, obj, false);
  self.version = self.version + 1;
  return obj;
};
prototype["allNodes"] = function allNodes() {
  return Object.values(this.nodes);
};
prototype["getNode"] = function getNode(arg0) {
  return this.nodes[arg0];
};
prototype["getRoots"] = function getRoots() {
  return this.root.children;
};
Object.defineProperty(prototype, "size", {
  get: function size() {
    return this.allNodes().length;
  },
  set: undefined
});
prototype["sortedGuildNodes"] = function sortedGuildNodes() {
  const root = this.root;
  if (root.type === obj.GUILD) {
    const items = [root];
    let items1 = items;
  } else if (null == root.children) {
    items1 = [];
  } else {
    const children = root.children;
    const mapped = children.map((item, index) => {
      if (item.type === constants.GUILD) {
        let items = [item];
        let items1 = items;
      } else if (null == item.children) {
        items1 = [];
      } else {
        let children = item.children;
        let mapped = children.map((item, index) => {
          if (item.type === constants.GUILD) {
            let items = [item];
            let items1 = items;
          } else if (null == item.children) {
            items1 = [];
          } else {
            let children = item.children;
            let mapped = children.map((item, index) => {
              if (item.type === constants.GUILD) {
                let items = [item];
                let items1 = items;
              } else if (null == item.children) {
                items1 = [];
              } else {
                let children = item.children;
                let mapped = children.map((item, index) => {
                  if (item.type === constants.GUILD) {
                    let items = [item];
                    let items1 = items;
                  } else if (null == item.children) {
                    items1 = [];
                  } else {
                    let children = item.children;
                    let mapped = children.map(() => { ... });
                    items1 = mapped.flat();
                  }
                  return items1;
                });
                items1 = mapped.flat();
              }
              return items1;
            });
            items1 = mapped.flat();
          }
          return items1;
        });
        items1 = mapped.flat();
      }
      return items1;
    });
    items1 = mapped.flat();
  }
  return items1;
};
prototype["_pluckNode"] = function _pluckNode(parentId) {
  const self = this;
  closure_0 = parentId;
  if (null != parentId.parentId) {
    let root = self.nodes[parentId.parentId];
  } else {
    root = self.root;
  }
  _modDef38(null != root, "[GUILDS TREE] source node (" + parentId.id + ") had a parent id (" + parentId.parentId + ") which doesn't exist in the tree");
  const children = root.children;
  _modDef38(null != children, "[GUILDS TREE] source node (" + parentId.id + ") had a parent id (" + parentId.parentId + ") which contains no children");
  root.children = children.filter((item, index) => item !== closure_0);
  parentId.parentId = undefined;
  self.version = self.version + 1;
};

export const GuildsNodeType = obj;
export { GuildsTree };
export const createGuildNode = function createGuildNode(item10030, id) {
  obj = { type: obj.GUILD, id: item10030, parentId: id, children: [], unavailable: false };
  return obj;
};
export const createFolderNode = function createFolderNode(folderId, parentId, closure_7) {
  obj = { type: obj.FOLDER, id: folderId.folderId, parentId, name: folderName, color: folderColor, expanded: null, children: null };
  folderName = folderId.folderName;
  folderColor = folderId.folderColor;
  let tmp = closure_7;
  if (null == closure_7) {
    let flag = folderId.expanded;
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  obj[5] = tmp;
  obj[6] = [];
  return obj;
};