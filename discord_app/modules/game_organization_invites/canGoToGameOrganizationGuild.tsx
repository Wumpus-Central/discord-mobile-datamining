// === Module 12994: canGoToGameOrganizationGuild ===

// Module 12994 (canGoToGameOrganizationGuild)
import GuildStore from "GuildStore" /* 4879 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1) {
  accepted = accepted.accepted;
  if (accepted) {
    accepted = accepted.inviterId !== arg1;
  }
  if (accepted) {
    accepted = null != GuildStore.getGuild(accepted.guildId);
  }
  return accepted;
};