// discord_app/modules/quests/experiments/QuestFetchReconnectJitterExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj132Default from "../../../utils/Durations.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";

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