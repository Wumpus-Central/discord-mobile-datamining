// discord_app/modules/hexagon_campaign/HexagonCampaignExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import HexagonCampaignUtils from "HexagonCampaignUtils.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import "ReactCompilerGating";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-09-hexagon-campaign-client",
  defaultConfig: { enabled: false, questHomeRedirect: false },
  variations: {
    0: { enabled: false, questHomeRedirect: false },
    1: { enabled: true, questHomeRedirect: true },
    2: { enabled: true, questHomeRedirect: false },
  },
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsHexagonCampaignEnabled(location) {
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
    }
  : function useIsHexagonCampaignEnabled(location) {
      return apexExperiment.useConfig({ location }).enabled;
    };
let closure_3 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignExperiment.tsx");

export const HexagonCampaignClientExperiment = apexExperiment;
export const useIsHexagonCampaignEnabled = tmp3;
export function getIsHexagonCampaignEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
}
export const useIsHexagonCampaignQuestHomeRedirectEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
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
    }
  : function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
      const config = apexExperiment.useConfig({ location });
      let tmp2 = config.enabled && config.questHomeRedirect;
      if (tmp2) {
        tmp2 = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
      }
      return tmp2;
    };
export function useIsHexagonCampaignQuestHomeHeaderEnabled(HexagonCampaignQuestHomeHeader) {
  let tmp = closure_3(HexagonCampaignQuestHomeHeader);
  if (tmp) {
    tmp = !HexagonCampaignUtils.isHexagonCampaignTakeoverOver();
  }
  return tmp;
}
