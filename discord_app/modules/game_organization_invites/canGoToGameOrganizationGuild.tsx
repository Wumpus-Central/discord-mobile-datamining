// discord_app/modules/game_organization_invites/canGoToGameOrganizationGuild.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, id, arg2) {
  accepted = accepted.accepted;
  if (accepted) {
    accepted = accepted.inviterId !== id;
  }
  if (accepted) {
    accepted = arg2;
  }
  return accepted;
}
