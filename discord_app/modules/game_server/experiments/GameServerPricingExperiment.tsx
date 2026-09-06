// === Module 12509: GameServerPricingExperiment ===

// Module 12509 (GameServerPricingExperiment)
import GameServerExperiment from "GameServerExperiment" /* 4473 */;
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

let obj = { kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(guildId, useGuildPowerupsChannelListPopout) {
  let obj = GameServerExperiment;
  let enabled = obj.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  obj = { guildId, location: useGuildPowerupsChannelListPopout };
  if (enabled) {
    enabled = experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};