// === Module 16339: getGuildBarNeighbors ===

// Module 16339 (getGuildBarNeighbors)
import GuildsTree from "GuildsTree" /* 5440 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx");

export default function getGuildBarNeighbors(arg0) {
  const guildsTree = SortedGuildStore.getGuildsTree();
  const node = guildsTree.getNode(arg0);
  if (null != node) {
    if (node.type === GuildsTree.GuildsNodeType.GUILD) {
      if (null != node.parentId) {
        let root = guildsTree.getNode(node.parentId);
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
          if (root.type === tmp5(5440).GuildsNodeType.FOLDER) {
            tmp2 = root;
          }
          let obj = { containingFolder: tmp2, above: null, below: null };
          let tmp3 = null;
          if (null != root.children[index - 1]) {
            obj = { node: tmp8, isFolder: tmp8.type === tmp5(5440).GuildsNodeType.FOLDER };
            tmp3 = obj;
          }
          obj.above = tmp3;
          let tmp4 = null;
          if (null != root.children[index + 1]) {
            const obj1 = { node: tmp9, isFolder: tmp9.type === tmp5(5440).GuildsNodeType.FOLDER };
            tmp4 = obj1;
          }
          obj.below = tmp4;
          return obj;
        }
      }
    }
  }
  return null;
};