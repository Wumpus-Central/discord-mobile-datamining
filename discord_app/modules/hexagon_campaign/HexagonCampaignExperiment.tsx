// === Module 5038: HexagonCampaignExperiment ===

// Module 5038 (HexagonCampaignExperiment)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5036 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-hexagon-campaign-client", defaultConfig: { enabled: false, questHomeRedirect: false }, variations: { 0: { enabled: false, questHomeRedirect: false }, 1: { enabled: true, questHomeRedirect: true }, 2: { enabled: true, questHomeRedirect: false } } });
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignExperiment.tsx");

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
export function useIsHexagonCampaignQuestHomeHeaderEnabled(HexagonCampaignQuestHomeHeader) {
  let enabled = apexExperiment.useConfig({ location: HexagonCampaignQuestHomeHeader }).enabled;
  if (enabled) {
    enabled = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
  }
  return enabled;
}