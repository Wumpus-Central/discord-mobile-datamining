// discord_app/modules/quests/experiments/BountiesVerticalScrollExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const obj = { 1: null, 2: { enabled: true, verticalScrollEnabled: false, scrollAffordanceVariant: "none", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, 3: { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "none", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, 4: { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "indicator", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, 5: { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "auto", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 } };
obj[5] = { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "peek", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0.12, ctaTimerMilliSeconds: 0 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-bounties-vertical-scroll", kind: "user", defaultConfig: { enabled: false, verticalScrollEnabled: false, scrollAffordanceVariant: "none", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/BountiesVerticalScrollExperiment.tsx");

export const BountiesVerticalScrollExperiment = apexExperiment;
export const useIsBountiesVerticalScrollExperimentEnabled = function useIsBountiesVerticalScrollExperimentEnabled(BountiesScrollEndCard) {
  return apexExperiment.useConfig({ location: BountiesScrollEndCard }).verticalScrollEnabled;
};
export const useIsBountiesVerticalScrollExperimentActive = function useIsBountiesVerticalScrollExperimentActive(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export function shouldUseScrollIndicatorOverlay(scrollAffordanceVariant) {
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
}
export const useIsScrollIndicatorOverlayVariant = function useIsScrollIndicatorOverlayVariant(location) {
  const scrollAffordanceVariant = apexExperiment.useConfig({ location }).scrollAffordanceVariant;
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
};