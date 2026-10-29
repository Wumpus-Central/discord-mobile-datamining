// discord_app/modules/game_organization_invites/getGameOrganizationInviteSendStateKey.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/game_organization_invites/getGameOrganizationInviteSendStateKey.tsx",
);

export default function getGameOrganizationInviteSendStateKey(applicationId) {
  return "game-organization-invite:" + applicationId.applicationId + ":" + applicationId.gameOrganizationId;
}
export function toLinkedGameOrganization(organization) {
  return { applicationId: organization.applicationId, gameOrganizationId: organization.id };
}
