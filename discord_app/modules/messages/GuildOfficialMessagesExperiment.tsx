// === Module 7341: GuildOfficialMessagesExperiment ===

// Module 7341 (GuildOfficialMessagesExperiment)
import createExperiment from "module_4520" /* 4520 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;