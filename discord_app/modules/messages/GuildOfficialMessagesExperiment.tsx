// discord_app/modules/messages/GuildOfficialMessagesExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;