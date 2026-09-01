// discord_app/modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx
import set from "../../../../../_runtime/00002_set.js";
import ApexExperiment from "../../../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-05-server-theme-user",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export const getServerThemeUserEnabled = function getServerThemeUserEnabled(GuildPowerupsConstants) {
  return apexExperiment.getConfig({ location: GuildPowerupsConstants }).enabled;
};
export const useServerThemeUserEnabled = function useServerThemeUserEnabled(DefaultGuildThemePreferenceSetting) {
  return apexExperiment.useConfig({ location: DefaultGuildThemePreferenceSetting }).enabled;
};
