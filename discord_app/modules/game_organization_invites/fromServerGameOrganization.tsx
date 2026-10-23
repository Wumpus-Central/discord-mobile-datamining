// === Module 11003: fromServerGameOrganization ===

// Module 11003 (fromServerGameOrganization)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/fromServerGameOrganization.tsx");

export const fromServerGameOrganization = function fromServerGameOrganization(game_organization) {
  return { id: game_organization.game_organization_id, name: game_organization.name, description: game_organization.description, iconUrl: game_organization.icon_url, applicationId: game_organization.application_id, memberCount: game_organization.member_count, maxMembers: game_organization.max_members };
};
export const fromServerGameOrganizationApplication = function fromServerGameOrganizationApplication(application) {
  return { id: application.id, name: application.name, iconUrl: application.icon_url };
};