// === Module 16320: getGuildBarNeighbors ===

// Module 16320 (getGuildBarNeighbors)
import GuildsTree from "GuildsTree" /* 5626 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx");

export default function getGuildBarNeighbors(arg0) {
  let tmp3;
  let tmp4;
  const guildsTree = SortedGuildStore.getGuildsTree();
  const node = guildsTree.getNode(arg0);
  if (null != node) {
    if (node.type === GuildsTree.GuildsNodeType.GUILD) {
      let root;
      if (null != node.parentId) {
        root = guildsTree.getNode(node.parentId);
      } else {
        root = guildsTree.root;
      }
      if (null == root) {
        return null;
      } else {
        const children = root.children;
        const index = children.indexOf(node);
        if (index < 0) {
          return null;
        } else {
          let tmp2 = null;
          if (root.type === GuildsTree.GuildsNodeType.FOLDER) {
            tmp2 = root;
          }
          const obj = { containingFolder: tmp2, above: tmp3, below: tmp4 };
          tmp3 = null;
          if (null != root.children[index - 1]) {
            tmp3 = { node: root.children[index - 1], isFolder: root.children[index - 1].type === GuildsTree.GuildsNodeType.FOLDER };
            const obj2 = { node: root.children[index - 1], isFolder: root.children[index - 1].type === GuildsTree.GuildsNodeType.FOLDER };
          }
          tmp4 = null;
          if (null != root.children[index + 1]) {
            tmp4 = { node: root.children[index + 1], isFolder: root.children[index + 1].type === GuildsTree.GuildsNodeType.FOLDER };
            const obj3 = { node: root.children[index + 1], isFolder: root.children[index + 1].type === GuildsTree.GuildsNodeType.FOLDER };
          }
          return obj;
        }
      }
    }
  }
  return null;
};