// discord_app/modules/game_organization_invites/canGoToGameOrganizationGuild.tsx
import GuildStore from "../../stores/GuildStore.tsx";

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
}
