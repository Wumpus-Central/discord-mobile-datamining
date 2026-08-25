// === Module 8231: ? ===

// Module 8231
import closure_0 from "recomputeGuild" /* 5238 */;
import closure_1 from "getUncachedChannelPermissions" /* 4025 */;
import { Permissions } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_0.canChatInGuild(guildId);
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_1.can(Permissions.ADD_REACTIONS, getGuildId);
  }
  if (!canChatInGuildResult) {
    canChatInGuildResult = getGuildId.isPrivate();
  }
  if (canChatInGuildResult) {
    canChatInGuildResult = !getGuildId.isSystemDM();
  }
  return canChatInGuildResult;
};