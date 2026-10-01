// === Module 16202: moveGuildNode ===

// Module 16202 (moveGuildNode)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6018 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 8850 */;
import SortedGuildStore from "SortedGuildStore" /* 5936 */;

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