// discord_app/modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let closure_0 = apex_ApexExperimentDefault({
  kind: "user",
  name: "2026-06-dont-badge-muted-vcs",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  return closure_0.getConfig({ location: GuildMediaStateStore }).enabled;
};
