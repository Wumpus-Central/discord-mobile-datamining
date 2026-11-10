// === Module 13448: canGoToGameOrganizationGuild ===

// Module 13448 (canGoToGameOrganizationGuild)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, id1, arg2) {
  accepted = accepted.accepted;
  if (accepted) {
    accepted = accepted.inviterId !== id1;
  }
  if (accepted) {
    accepted = arg2;
  }
  return accepted;
};