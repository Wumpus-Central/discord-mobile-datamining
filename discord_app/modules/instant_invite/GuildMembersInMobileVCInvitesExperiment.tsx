// === Module 9846: GuildMembersInMobileVCInvitesExperiment ===

// Module 9846 (GuildMembersInMobileVCInvitesExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-guild-members-in-mobile-vc-invites", kind: "guild", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(location) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};