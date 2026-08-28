// discord_app/modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx
import GuildsNodeType from "../../GuildsTree.tsx";
import closure_2 from "../../../../stores/SortedGuildStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx");

export default function getGuildBarNeighbors(arg0) {
  guildsTree = guildsTree.getGuildsTree();
  const node = guildsTree.getNode(arg0);
  if (null != node) {
    if (node.type === GuildsNodeType.GuildsNodeType.GUILD) {
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
          if (root.type === tmp5(5348).GuildsNodeType.FOLDER) {
            tmp2 = root;
          }
          let obj = { containingFolder: null, above: null, below: null };
          obj[0] = tmp2;
          let tmp3 = null;
          if (null != root.children[index - 1]) {
            obj = { node: null, isFolder: null };
            obj[0] = tmp8;
            obj[1] = tmp8.type === tmp5(5348).GuildsNodeType.FOLDER;
            tmp3 = obj;
          }
          obj[1] = tmp3;
          let tmp4 = null;
          if (null != root.children[index + 1]) {
            obj1 = { node: null, isFolder: null };
            obj1[0] = tmp9;
            obj1[1] = tmp9.type === tmp5(5348).GuildsNodeType.FOLDER;
            tmp4 = obj1;
          }
          obj[2] = tmp4;
          return obj;
        }
      }
    }
  }
  return null;
};