// === Module 19113: moveGuildNode ===

// Module 19113 (moveGuildNode)
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 6242 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import SortedGuildStore from "SortedGuildStore" /* 6956 */;

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