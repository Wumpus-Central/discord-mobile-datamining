// === Module 17532: GameOrganizationInviteFixtures ===

// Module 17532 (GameOrganizationInviteFixtures)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteFixtures.tsx");

export function makeGameOrganizationInviteFixture(code) {
  return { code, game_organization: { id: "cinderfang-legion", application_id: "1234567890123456789", name: "Cinderfang Legion", description: "A veteran-run outfit for late-night raids and weekend siege pushes. We run scheduled ops three nights a week, keep a standing scrim roster, and welcome anyone willing to show up on time.", icon_url: "https://cdn.discordapp.com/embed/avatars/3.png", member_count: 24, max_members: 50 }, application: { id: "1234567890123456789", name: "Fated Colossus", icon_url: "https://cdn.discordapp.com/embed/avatars/1.png" }, application_config: { display_noun: "Guild" } };
}