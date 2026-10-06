// === Module 16321: moveGuildNode ===

// Module 16321 (moveGuildNode)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 8091 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/moveGuildNode.tsx");

export default function moveGuildNode(id, id1) {
  let flag = c4;
  if (c4 === undefined) {
    flag = false;
  }
  const obj = GuildActionCreatorsDefault;
  obj.moveById(id, id1, flag, flag2);
  const obj2 = UserSettingsActionCreators;
  obj2.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
};
export const persistGuildsBarOrder = function persistGuildsBarOrder() {
  const obj = UserSettingsActionCreators;
  obj.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
};