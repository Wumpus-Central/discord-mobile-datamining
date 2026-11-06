// === Module 11524: fromServerGameOrganization ===

// Module 11524 (fromServerGameOrganization)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/fromServerGameOrganization.tsx");

export function fromServerGameOrganizationApplication(application) {
  return { id: application.id, name: application.name, iconUrl: application.icon_url };
}
export function fromServerGameOrganizationGuild(guild) {
  return { id: guild.id, name: guild.name, icon: guild.icon, memberCount: guild.approximate_member_count, presenceCount: guild.approximate_presence_count };
}
export function fromServerGameOrganizationCharacter(id) {
  return { id: id.id, name: id.name, eligible: id.eligible, description: id.description, iconUrl: id.icon_url };
}