// === Module 17814: QuestFetchReconnectJitterExperiment ===

// Module 17814 (QuestFetchReconnectJitterExperiment)
import DurationsDefault from "Durations" /* 1090 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { questFetchJitterMs: 5 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 5 * DurationsDefault.Millis.SECOND };
obj = { name: "2026-06-quest-fetch-reconnect-jitter", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
obj[1] = { questFetchJitterMs: 60 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 60 * DurationsDefault.Millis.SECOND };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};