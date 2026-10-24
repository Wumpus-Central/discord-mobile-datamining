// === Module 11313: getGameOrganizationInviteSendStateKey ===

// Module 11313 (getGameOrganizationInviteSendStateKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteSendStateKey.tsx");

export default function getGameOrganizationInviteSendStateKey(applicationId) {
  return "game-organization-invite:" + applicationId.applicationId + ":" + applicationId.gameOrganizationId;
};
export const toLinkedGameOrganization = function toLinkedGameOrganization(organization) {
  return { applicationId: organization.applicationId, gameOrganizationId: organization.id };
};