// === Module 18182: QuestFetchReconnectJitterExperiment ===

// Module 18182 (QuestFetchReconnectJitterExperiment)
import DurationsDefault from "Durations" /* 1091 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { questFetchJitterMs: 5 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 5 * DurationsDefault.Millis.SECOND };
const obj2 = { name: "2026-06-quest-fetch-reconnect-jitter", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null };
obj3[1] = { questFetchJitterMs: 60 * DurationsDefault.Millis.SECOND, questHomeHeroJitterMs: 60 * DurationsDefault.Millis.SECOND };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};