// === Module 11502: GameOrganizationModels ===

// Module 11502 (GameOrganizationModels)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationModels.tsx");

export function gameOrganizationFromServer(game_organization) {
  return { id: game_organization.game_organization_id, applicationId: game_organization.application_id, guildId: game_organization.guild_id, name: game_organization.name, description: game_organization.description, iconUrl: game_organization.icon_url, memberCount: game_organization.member_count, maxMembers: game_organization.max_members };
}