// === Module 4473: GameServerExperiment ===

// Module 4473 (GameServerExperiment)
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2025-08_portkey_enabled", label: "GameServer Enabled", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable GameServer", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(id, maybeGetGameServerHostingGuildEligiblePopoutDCF) {
  return experiment.getCurrentConfig({ guildId: id, location: maybeGetGameServerHostingGuildEligiblePopoutDCF }, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.useExperiment({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};