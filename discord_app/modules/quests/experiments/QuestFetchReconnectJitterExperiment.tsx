import ApexExperiment from "ApexExperiment";

let obj = { questFetchJitterMs: 5 * require("set").Millis.SECOND, questHomeHeroJitterMs: 5 * require("set").Millis.SECOND };
obj = { name: "2026-06-quest-fetch-reconnect-jitter", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
obj[1] = { questFetchJitterMs: 60 * require("set").Millis.SECOND, questHomeHeroJitterMs: 60 * require("set").Millis.SECOND };
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = { questFetchJitterMs: 60 * require("set").Millis.SECOND, questHomeHeroJitterMs: 60 * require("set").Millis.SECOND };
const result = require("set").fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};