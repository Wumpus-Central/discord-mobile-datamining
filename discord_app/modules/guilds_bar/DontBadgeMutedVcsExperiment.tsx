// === Module 15595: useIsDontBadgeMutedVcsEnabled ===

// Module 15595 (useIsDontBadgeMutedVcsEnabled)
import getUnitIdDefault from "getUnitId" /* 1368 */;

let closure_0 = getUnitIdDefault({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("obj132").fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};