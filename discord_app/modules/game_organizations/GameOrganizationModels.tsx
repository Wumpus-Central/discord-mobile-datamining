// discord_app/modules/game_organizations/GameOrganizationModels.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationModels.tsx");

export function gameOrganizationFromServer(game_organization) {
  return {
    id: game_organization.game_organization_id,
    applicationId: game_organization.application_id,
    guildId: game_organization.guild_id,
    name: game_organization.name,
    description: game_organization.description,
    iconUrl: game_organization.icon_url,
    memberCount: game_organization.member_count,
    maxMembers: game_organization.max_members,
  };
}
