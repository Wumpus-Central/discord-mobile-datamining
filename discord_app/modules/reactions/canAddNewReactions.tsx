// === Module 8709: canAddNewReactions ===

// Module 8709 (canAddNewReactions)
import GuildVerificationStore from "GuildVerificationStore" /* 6531 */;
import PermissionStore from "PermissionStore" /* 4845 */;

const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = GuildVerificationStore.canChatInGuild(guildId);
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId);
  }
  if (!canChatInGuildResult) {
    canChatInGuildResult = getGuildId.isPrivate();
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = !getGuildId.isSystemDM();
  }
  return canChatInGuildResult;
};