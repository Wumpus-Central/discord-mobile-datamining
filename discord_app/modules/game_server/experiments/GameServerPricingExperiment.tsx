// discord_app/modules/game_server/experiments/GameServerPricingExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import experiment2 from "../GameServerExperiment.tsx";
import createExperiment from "../../experiments/index.tsx";

const items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({
  kind: "guild",
  id: "2026-03_game_server_pricing",
  label: "Game Server Pricing",
  defaultConfig: { enabled: false },
  treatments: items,
});
const result = set.fileFinishedImporting("modules/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(
  guildId,
  useGuildPowerupsChannelListPopout,
) {
  let obj = experiment2;
  let enabled = obj.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  obj = { guildId, location: useGuildPowerupsChannelListPopout };
  if (enabled) {
    enabled = experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};
