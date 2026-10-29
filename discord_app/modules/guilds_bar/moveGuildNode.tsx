// === Module 18297: moveGuildNode ===

// Module 18297 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5906 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6889 */;
import SortedGuildStore from "SortedGuildStore" /* 6759 */;

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
export function persistGuildsBarOrder() {
  UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
}