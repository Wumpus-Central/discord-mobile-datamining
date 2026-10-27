// === Module 5001: HexagonCampaignExperiment ===

// Module 5001 (HexagonCampaignExperiment)
import c from "c" /* 576 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4999 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-hexagon-campaign-client", defaultConfig: { enabled: false, questHomeRedirect: false }, variations: { 0: { enabled: false, questHomeRedirect: false }, 1: { enabled: true, questHomeRedirect: true }, 2: { enabled: true, questHomeRedirect: false } } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsHexagonCampaignEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useIsHexagonCampaignEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
});
let closure_3 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignExperiment.tsx");

export const HexagonCampaignClientExperiment = apexExperiment;
export const useIsHexagonCampaignEnabled = tmp3;
export const getIsHexagonCampaignEnabled = function getIsHexagonCampaignEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useIsHexagonCampaignQuestHomeRedirectEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  const cResult = c.c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const config = apexExperiment.useConfig(tmp4);
  if (cResult[2] === config.enabled) {
    if (cResult[3] === config.questHomeRedirect) {
      let tmp6 = cResult[4];
    }
    return tmp6;
  }
  let tmp7 = config.enabled && config.questHomeRedirect;
  if (tmp7) {
    tmp7 = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
    const tmpResult = HexagonCampaignUtils;
  }
  cResult[2] = config.enabled;
  cResult[3] = config.questHomeRedirect;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  const config = apexExperiment.useConfig({ location });
  let tmp2 = config.enabled && config.questHomeRedirect;
  if (tmp2) {
    tmp2 = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
  }
  return tmp2;
});
export const useIsHexagonCampaignQuestHomeHeaderEnabled = function useIsHexagonCampaignQuestHomeHeaderEnabled(HexagonCampaignQuestHomeHeader) {
  let tmp = closure_3(HexagonCampaignQuestHomeHeader);
  if (tmp) {
    tmp = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
  }
  return tmp;
};