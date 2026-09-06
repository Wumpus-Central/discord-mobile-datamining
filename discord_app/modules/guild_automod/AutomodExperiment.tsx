// discord_app/modules/guild_automod/AutomodExperiment.tsx
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2022-12_mention_raid_limit",
  label: "Automod Mention Raid Limit",
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
