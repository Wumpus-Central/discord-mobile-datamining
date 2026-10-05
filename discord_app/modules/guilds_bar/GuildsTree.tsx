// === Module 5619: GuildsTree ===

// Module 5619 (GuildsTree)
import _mod12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import size from "module_2" /* 2 */;

let children, obj;

const GuildsNodeType = { ROOT: "root", FOLDER: "folder", GUILD: "guild" };
const result = size.fileFinishedImporting("modules/guilds_bar/GuildsTree.tsx");
class GuildsTree {
  constructor() {
    obj = Object.create(new.target.prototype);
    const element = { type: obj.ROOT, children: [] };
    obj.root = element;
    obj.nodes = {};
    obj.version = 0;
    return obj;
  }
  getSnapshot() {
    let children1;
    const self = this;
    const nodes = {};
    for (const key10005 in this.nodes) {
      let tmp2 = self.nodes[key10005];
      let obj2 = { children: undefined, childrenIds: children.map((id) => id.id) };
      let merged = Object.assign(tmp2);
      children = tmp2.children;
      nodes[key10005] = obj2;
      continue;
    }
    const obj3 = { rootChildrenIds: children1.map((id) => id.id), nodes };
    children1 = self.root.children;
    return obj3;
  }
  loadSnapshot(tree) {
    const self = this;
    this.nodes = tree.nodes;
    for (const key10006 in this.nodes) {
      let tmp3 = self.nodes[key10006];
      if (!("childrenIds" in tmp3)) {
        continue;
      } else {
        let childrenIds = tmp3.childrenIds;
        tmp3.children = childrenIds.map((item) => self.nodes[item]);
        delete tmp3[tmp];
        continue;
      }
      continue;
    }
    const rootChildrenIds = tree.rootChildrenIds;
    self.root.children = rootChildrenIds.map((item) => self.nodes[item]);
    self.version = self.version + 1;
  }
  moveNextTo(node, node1) {
    let root;
    let flag = moveToBelow;
    if (moveToBelow === undefined) {
      flag = false;
    }
    const self = this;
    this._pluckNode(node);
    if (null != node1.parentId) {
      root = self.nodes[node1.parentId];
    } else {
      root = self.root;
    }
    children = root.children;
    const index = children.indexOf(node1);
    let tmp7 = node.type === obj.FOLDER;
    const tmp5 = _modDef38;
    if (tmp7) {
      tmp7 = root.type === tmp6.FOLDER;
    }
    tmp5(!tmp7, "[GUILDS TREE] Tried moving a folder (" + node.id + ") inside of another folder (" + root.id + ")");
    const tmp10 = index >= 0;
    const tmp3Result = _modDef38;
    tmp3Result(tmp10, "[GUILDS TREE] target node (" + node1.id + ") did not exist within its specified parent (" + node1.parentId + ")");
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
  }
  moveInto(node, c0) {
    const self = this;
    this._pluckNode(node);
    let num = 0;
    if (flag) {
      num = _require.children.length;
    }
    const items = [...c0.children];
    _require.children = items;
    children = _require.children;
    children.splice(num, 0, node);
    node.parentId = _require.id;
    self.version = self.version + 1;
    return self;
  }
  addNode(type) {
    const self = this;
    let root = c0;
    if (c0 === undefined) {
      root = self.root;
    }
    _modDef38(type.type !== obj.ROOT, "[GUILDS TREE] Tried adding another root node into the tree");
    _modDef38(null != type.id, "[GUILDS TREE] Tried adding a node without an id");
    const tmp3 = _modDef38;
    const tmp4 = null == self.nodes[type.id];
    tmp3(tmp4, "[GUILDS TREE] Tried adding a node that already exists (" + type.id + ")");
    self.nodes[type.id] = type;
    self.version = self.version + 1;
    return self.moveInto(type, root, flag);
  }
  removeNode(id) {
    _modDef38(id !== this.root, "[GUILDS TREE] Tried removing the root node from the tree");
    _modDef38(null != id.id, "[GUILDS TREE] Tried removing a node without an id");
    this._pluckNode(id);
    id.parentId = undefined;
    delete this.nodes[id.id];
    this.version = this.version + 1;
    return this;
  }
  replaceNode(node, cloneNodeResult) {
    let root;
    const self = this;
    _modDef38(null != node.id, "[GUILDS TREE] Tried replacing a node without an id");
    _modDef38(null != cloneNodeResult.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id");
    if (null != node.parentId) {
      root = self.nodes[node.parentId];
    } else {
      root = self.root;
    }
    children = root.children;
    const index = children.indexOf(node);
    const tmp7 = index >= 0;
    const tmpResult = _modDef38;
    tmpResult(tmp7, "[GUILDS TREE] existing node (" + node.id + ") did not exist within its specified parent (" + node.parentId + ")");
    const items = [...root.children];
    root.children = items;
    const children1 = root.children;
    children1.splice(index, 1, cloneNodeResult);
    cloneNodeResult.parentId = root.id;
    node.parentId = undefined;
    delete self.nodes[node.id];
    self.nodes[cloneNodeResult.id] = cloneNodeResult;
    self.version = self.version + 1;
    return self;
  }
  cloneNode(node) {
    obj = _mod12;
    return obj.clone(node);
  }
  convertToFolder(node) {
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
    const element = { type: obj.FOLDER, id: rounded, expanded: false, children: [] };
    self.replaceNode(node, element);
    self.removeNode(node);
    self.addNode(node, element, false);
    self.version = self.version + 1;
    return element;
  }
  allNodes() {
    return Object.values(this.nodes);
  }
  getNode(arg0) {
    return this.nodes[arg0];
  }
  getRoots() {
    return this.root.children;
  }
  sortedGuildNodes() {
    let items1;
    const f136858 = (type) => {
      let items1;
      if (type.type === constants.GUILD) {
        const items = [type];
        items1 = items;
      } else if (null == type.children) {
        items1 = [];
      } else {
        children = type.children;
        const mapped = children.map(f136858);
        items1 = mapped.flat();
      }
      return items1;
    };
    const root = this.root;
    if (root.type === obj.GUILD) {
      let items = [root];
      items1 = items;
    } else if (null == root.children) {
      items1 = [];
    } else {
      children = root.children;
      let mapped = children.map(f136858);
      items1 = mapped.flat();
    }
    return items1;
  }
  _pluckNode(parentId) {
    let root;
    const self = this;
    let closure_0 = parentId;
    if (null != parentId.parentId) {
      root = self.nodes[parentId.parentId];
    } else {
      root = self.root;
    }
    const tmp = _modDef38;
    const tmp2 = null != root;
    tmp(tmp2, "[GUILDS TREE] source node (" + parentId.id + ") had a parent id (" + parentId.parentId + ") which doesn't exist in the tree");
    children = root.children;
    const tmp4 = _modDef38;
    const tmp5 = null != children;
    tmp4(tmp5, "[GUILDS TREE] source node (" + parentId.id + ") had a parent id (" + parentId.parentId + ") which contains no children");
    root.children = children.filter((item) => item !== closure_0);
    parentId.parentId = undefined;
    self.version = self.version + 1;
  }
}
Object.defineProperty(GuildsTree.prototype, "size", {
  get: function size() {
    return this.allNodes().length;
  },
  set: undefined
});

export { GuildsNodeType };
export { GuildsTree };
export const createGuildNode = function createGuildNode(item10030, id) {
  const element = { type: obj.GUILD, id: item10030, parentId: id, children: [], unavailable: false };
  return element;
};
export const createFolderNode = function createFolderNode(folderId, parentId, ExpandedGuildFolderStore) {
  let folderColor;
  let folderName;
  let tmp;
  const element = { type: obj.FOLDER, id: folderId.folderId, parentId, name: folderName, color: folderColor, expanded: tmp, children: [] };
  folderName = folderId.folderName;
  folderColor = folderId.folderColor;
  tmp = ExpandedGuildFolderStore;
  if (null == ExpandedGuildFolderStore) {
    let flag = folderId.expanded;
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return element;
};