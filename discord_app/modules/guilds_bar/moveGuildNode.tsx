// === Module 17682: moveGuildNode ===

// Module 17682 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5855 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6816 */;
import SortedGuildStore from "SortedGuildStore" /* 6687 */;

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