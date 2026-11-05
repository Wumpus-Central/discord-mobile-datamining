// === Module 11561: GameOrganizationModels ===

// Module 11561 (GameOrganizationModels)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationModels.tsx");

export function gameOrganizationFromServer(game_organization) {
  const obj = {};
  const merged = Object.assign({ id: game_organization.game_organization_id, applicationId: game_organization.application_id, name: game_organization.name, description: game_organization.description, iconUrl: game_organization.icon_url, memberCount: game_organization.member_count, maxMembers: game_organization.max_members });
  obj.guildId = game_organization.guild_id;
  return obj;
}
export function linkableGameOrganizationFromServer(gameOrganizationRoleIds) {
  const obj = {};
  const merged = Object.assign({ id: gameOrganizationRoleIds.game_organization_id, applicationId: gameOrganizationRoleIds.application_id, name: gameOrganizationRoleIds.name, description: gameOrganizationRoleIds.description, iconUrl: gameOrganizationRoleIds.icon_url, memberCount: gameOrganizationRoleIds.member_count, maxMembers: gameOrganizationRoleIds.max_members });
  ({ guild_id: obj.guildId, user_is_blocked_from_link } = gameOrganizationRoleIds);
  if (user_is_blocked_from_link == null) {
    user_is_blocked_from_link = false;
  }
  obj.userIsBlockedFromLink = user_is_blocked_from_link;
  const channels = gameOrganizationRoleIds.channels;
  obj.channels = channels.map((lobbyId) => ({ lobbyId: lobbyId.lobby_id, name: lobbyId.name }));
  const roles = gameOrganizationRoleIds.roles;
  obj.roles = roles.map((id) => ({ id: id.id, name: id.name, canInvite: id.can_invite, canLink: id.can_link }));
  obj.member = { gameOrganizationRoleIds: gameOrganizationRoleIds.member.game_organization_role_ids };
  return obj;
}