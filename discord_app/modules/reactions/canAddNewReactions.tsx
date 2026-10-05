// discord_app/modules/reactions/canAddNewReactions.tsx
import Constants from "../../Constants.tsx";
import GuildVerificationStore from "../../stores/GuildVerificationStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult =
    ((null != guildId &&
      GuildVerificationStore.canChatInGuild(guildId) &&
      PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId)) ||
      getGuildId.isPrivate()) &&
    !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
