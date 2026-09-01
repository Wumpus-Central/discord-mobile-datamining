// discord_app/modules/messages/GuildOfficialMessagesExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({
  kind: "guild",
  id: "2026-03_guild_official_messages",
  label: "Guild Official Messages",
  defaultConfig: { enabled: false },
  treatments: items,
});
const result = set.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
