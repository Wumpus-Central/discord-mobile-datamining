// === Module 17035: apexExperiment ===

// Module 17035 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import obj132Default from "obj132" /* 687 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { questFetchJitterMs: 5 * obj132Default.Millis.SECOND, questHomeHeroJitterMs: 5 * obj132Default.Millis.SECOND };
obj = { 1: null };
obj[1] = { questFetchJitterMs: 60 * obj132Default.Millis.SECOND, questHomeHeroJitterMs: 60 * obj132Default.Millis.SECOND };
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = obj132.fileFinishedImporting("modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx");

export default apexExperiment;
export const DEFAULT_QUEST_FETCH_JITTER_CONFIG = obj;
export const getQuestFetchReconnectJitterConfig = function getQuestFetchReconnectJitterConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};