// === Module 7997: canAddNewReactions ===

// Module 7997 (canAddNewReactions)
import GuildVerificationStore from "GuildVerificationStore" /* 5896 */;
import PermissionStore from "PermissionStore" /* 4752 */;

const Permissions = fn(1085).Permissions;
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