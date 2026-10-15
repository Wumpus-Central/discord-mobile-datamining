// === Module 17376: moveGuildNode ===

// Module 17376 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5320 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6320 */;
import SortedGuildStore from "SortedGuildStore" /* 6179 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/moveGuildNode.tsx");

export default function moveGuildNode(id, id1) {
  let flag = c4;
  if (c4 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  GuildActionCreatorsDefault.moveById(id, id1, flag, flag2);
  UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
};
export const persistGuildsBarOrder = function persistGuildsBarOrder() {
  UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
};