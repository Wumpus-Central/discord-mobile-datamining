// === Module 17814: apexExperiment ===

// Module 17814 (apexExperiment)
import set from "set" /* 2 */;
import setDefault from "set" /* 1090 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let obj = { questFetchJitterMs: 5 * setDefault.Millis.SECOND, questHomeHeroJitterMs: 5 * setDefault.Millis.SECOND };
obj = { name: "2026-06-quest-fetch-reconnect-jitter", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
obj[1] = { questFetchJitterMs: 60 * setDefault.Millis.SECOND, questHomeHeroJitterMs: 60 * setDefault.Millis.SECOND };
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = { questFetchJitterMs: 60 * setDefault.Millis.SECOND, questHomeHeroJitterMs: 60 * setDefault.Millis.SECOND };
const result = set.fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};