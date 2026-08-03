// === Module 4104: experiment ===

// Module 4104 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable GameServer", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2025-08_portkey_enabled", label: "GameServer Enabled", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(c0, maybeGetGameServerHostingGuildEligiblePopoutDCF) {
  return experiment.getCurrentConfig({ guildId: c0, location: maybeGetGameServerHostingGuildEligiblePopoutDCF }, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.useExperiment({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};