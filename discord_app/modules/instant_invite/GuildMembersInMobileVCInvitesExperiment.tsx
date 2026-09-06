// discord_app/modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-08-guild-members-in-mobile-vc-invites",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(
  location,
) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};
