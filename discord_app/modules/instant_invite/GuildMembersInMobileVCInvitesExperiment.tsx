// discord_app/modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-guild-members-in-mobile-vc-invites",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(
  location,
) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};
