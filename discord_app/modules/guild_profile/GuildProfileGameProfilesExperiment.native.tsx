// === Module 9529: useGuildProfileGameProfilesExperiment ===

// Module 9529 (useGuildProfileGameProfilesExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-server-tag-game-profiles-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/guild_profile/GuildProfileGameProfilesExperiment.native.tsx");

export const useGuildProfileGameProfilesExperiment = function useGuildProfileGameProfilesExperiment(location) {
  return closure_0.useConfig({ location: location.location });
};