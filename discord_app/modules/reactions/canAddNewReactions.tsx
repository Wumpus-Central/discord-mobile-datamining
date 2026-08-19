// === Module 10911: ? ===

// Module 10911
import recomputeGuild from "recomputeGuild" /* 4977 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

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
  return canChatInGuildResult;
};