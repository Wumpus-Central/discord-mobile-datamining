// discord_app/modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-09-guild-members-in-mobile-vc-invites",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(
  location,
) {
  const obj = { location: location.location, guildId: location.guildId };
  return apexExperiment.getConfig(obj).enabled;
};
