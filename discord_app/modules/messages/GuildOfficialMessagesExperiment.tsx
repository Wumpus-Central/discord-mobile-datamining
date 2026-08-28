// === Module 6080: experiment ===

// Module 6080 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4357 */;

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;