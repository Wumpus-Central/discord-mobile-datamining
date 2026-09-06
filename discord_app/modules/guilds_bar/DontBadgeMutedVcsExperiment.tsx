// === Module 13708: DontBadgeMutedVcsExperiment ===

// Module 13708 (DontBadgeMutedVcsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

let closure_0 = apex_ApexExperimentDefault({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  return closure_0.getConfig({ location: GuildMediaStateStore }).enabled;
};