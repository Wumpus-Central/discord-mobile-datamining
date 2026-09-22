// === Module 16683: GuildMediaStateStoreExperiment ===

// Module 16683 (GuildMediaStateStoreExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { HOOK: "hook", STORE: "store", SHADOW: "shadow" };
const obj2 = { kind: "user", name: "2026-08-guilds-bar-media-state-store", defaultConfig: { source: obj.HOOK }, variations: { 0: { source: obj.HOOK }, 1: { source: obj.STORE }, 2: { source: obj.SHADOW } } };
let closure_0 = apex_ApexExperimentDefault(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStoreExperiment.tsx");

export const GuildMediaStateSource = obj;
export const useGuildMediaStateSource = function useGuildMediaStateSource(GuildsBarGuild) {
  return closure_0.useConfig({ location: GuildsBarGuild }).source;
};