// === Module 9301: GuildMembersInMobileVCInvitesExperiment ===

// Module 9301 (GuildMembersInMobileVCInvitesExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-guild-members-in-mobile-vc-invites", kind: "guild", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(location) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};