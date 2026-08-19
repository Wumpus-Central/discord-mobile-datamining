// === Module 4303: apexExperiment ===

// Module 4303 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-server-theme-user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export const getServerThemeUserEnabled = function getServerThemeUserEnabled(GuildPowerupsConstants) {
  return apexExperiment.getConfig({ location: GuildPowerupsConstants }).enabled;
};
export const useServerThemeUserEnabled = function useServerThemeUserEnabled(DefaultGuildThemePreferenceSetting) {
  return apexExperiment.useConfig({ location: DefaultGuildThemePreferenceSetting }).enabled;
};