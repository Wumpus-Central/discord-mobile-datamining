// discord_app/modules/reactions/canAddNewReactions.tsx
import recomputeGuild from "../../stores/GuildVerificationStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";

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