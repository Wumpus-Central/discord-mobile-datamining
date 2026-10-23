// discord_app/modules/game_organization_invites/fromServerGameOrganization.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_organization_invites/fromServerGameOrganization.tsx");

export const fromServerGameOrganization = function fromServerGameOrganization(game_organization) {
  return {
    id: game_organization.game_organization_id,
    name: game_organization.name,
    description: game_organization.description,
    iconUrl: game_organization.icon_url,
    applicationId: game_organization.application_id,
    memberCount: game_organization.member_count,
    maxMembers: game_organization.max_members,
  };
};
export const fromServerGameOrganizationApplication = function fromServerGameOrganizationApplication(application) {
  return { id: application.id, name: application.name, iconUrl: application.icon_url };
};
export const fromServerGameOrganizationGuild = function fromServerGameOrganizationGuild(guild) {
  return {
    id: guild.id,
    name: guild.name,
    icon: guild.icon,
    memberCount: guild.approximate_member_count,
    presenceCount: guild.approximate_presence_count,
  };
};
