// === Module 10250: AutomodExperiment ===

// Module 10250 (AutomodExperiment)
import createExperiment from "module_4553" /* 4553 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const obj2 = { name: "2026-09-automod-application-rules", kind: "guild", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
export const AutomodApplicationRules = apexExperiment;