// === Module 5337: HexagonCampaignExperiment ===

// Module 5337 (HexagonCampaignExperiment)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5334 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-hexagon-campaign-client", defaultConfig: { enabled: false, questHomeRedirect: false }, variations: { 0: { enabled: false, questHomeRedirect: false }, 1: { enabled: true, questHomeRedirect: true }, 2: { enabled: true, questHomeRedirect: false } } });
let result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignExperiment.tsx");

export const HexagonCampaignClientExperiment = apexExperiment;
export function useIsHexagonCampaignEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
}
export function getIsHexagonCampaignEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
}
export function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  const config = apexExperiment.useConfig({ location });
  let tmp2 = config.enabled && config.questHomeRedirect;
  if (tmp2) {
    tmp2 = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
  }
  return tmp2;
}
export function getIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  if (obj.isHexagonCampaignTakeoverOver()) {
    return false;
  } else {
    const obj2 = { location };
    const config = apexExperiment.getConfig(obj2);
    return config.enabled && config.questHomeRedirect;
  }
  obj = HexagonCampaignUtils;
}
export function useIsHexagonCampaignQuestHomeHeaderEnabled(HexagonCampaignQuestHomeHeader) {
  let enabled = apexExperiment.useConfig({ location: HexagonCampaignQuestHomeHeader }).enabled;
  if (enabled) {
    enabled = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
  }
  return enabled;
}
export function useShouldShowHexagonCampaignIntroCard(stateFromStores) {
  let result = HexagonCampaignUtils.isHexagonCampaignHero(stateFromStores);
  if (result) {
    result = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
    const tmpResult = HexagonCampaignUtils;
  }
  return result;
}