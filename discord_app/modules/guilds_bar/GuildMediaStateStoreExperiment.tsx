// === Module 15693: GuildMediaStateSource ===

// Module 15693 (GuildMediaStateSource)
import getUnitIdDefault from "getUnitId" /* 1368 */;

let obj = { HOOK: "hook", STORE: "store", SHADOW: "shadow" };
obj = { source: obj.HOOK };
obj = { source: obj.HOOK };
let closure_0 = getUnitIdDefault({ kind: "user", name: "2026-08-guilds-bar-media-state-store", defaultConfig: obj, variations: { 0: obj, 1: { source: obj.STORE }, 2: { source: obj.SHADOW } } });
const result = require("set").fileFinishedImporting("modules/guilds_bar/GuildMediaStateStoreExperiment.tsx");

export const GuildMediaStateSource = obj;
export const useGuildMediaStateSource = function useGuildMediaStateSource(GuildsBarGuild) {
  return closure_0.useConfig({ location: GuildsBarGuild }).source;
};