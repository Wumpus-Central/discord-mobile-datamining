// discord_app/modules/quests/experiments/index.tsx
import QuestOrbMultiplierHooks from "../hooks/QuestOrbMultiplierHooks.tsx";
import QuestOrbMultiplierUtils from "../utils/QuestOrbMultiplierUtils.tsx";
import QuestOrbsMultiplier from "../../../../discord_common/js/shared/shared-constants/QuestOrbsMultiplier.tsx";
import ApexExperiment_mod from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2025-11-video-end-card-v2", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = {
  name: "2026-05-app-store-overlay-feature-gate",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
let ApexExperiment = ApexExperiment_mod;
const obj5 = {
  name: "2026-07-custom-app-store-overlay",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
let ApexExperiment = ApexExperiment_mod;
const obj7 = { name: "2026-07-ios-attribution", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj8 = { 1: null };
obj8[1] = { enabled: true };
obj7.variations = obj8;
const obj9 = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  AUTO_ENABLE_CAPTIONS: 1,
  [1]: "AUTO_ENABLE_CAPTIONS",
  AUTO_UNMUTE: 2,
  [2]: "AUTO_UNMUTE",
};
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
let ApexExperiment = ApexExperiment_mod;
const obj10 = {
  name: "2026-03-muted-video-quest-new-defaults",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj9.DEFAULT },
  variations: {
    0: { enabled: false, variant: obj9.DEFAULT },
    1: { enabled: true, variant: obj9.AUTO_ENABLE_CAPTIONS },
    2: { enabled: true, variant: obj9.AUTO_UNMUTE },
  },
};
const apexExperiment4 = ApexExperiment.createApexExperiment(obj10);
let ApexExperiment = ApexExperiment_mod;
let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-04-quests-premium-orb-multiplier-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const obj13 = {
  name: "2026-04-composed-quest-player",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj14 = { 1: null };
obj14[1] = { enabled: true };
obj13.variations = obj14;
const apexExperiment5 = ApexExperiment.createApexExperiment(obj13);
let ApexExperiment = ApexExperiment_mod;
const apexExperiment6 = ApexExperiment.createApexExperiment({
  name: "2026-03-mobile-quest-home-red-dot-notification",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const apexExperiment7 = ApexExperiment.createApexExperiment({
  name: "2026-05-quest-home-tile-redesign",
  kind: "user",
  defaultConfig: { useNewLayoutWithSearch: false, useNewTile: false, useNewFeaturedTiles: false, ctaOnHover: false },
  variations: {
    0: { useNewLayoutWithSearch: false, useNewTile: false, useNewFeaturedTiles: false, ctaOnHover: false },
    1: { useNewLayoutWithSearch: true, useNewTile: false, useNewFeaturedTiles: false, ctaOnHover: false },
    2: { useNewLayoutWithSearch: true, useNewTile: true, useNewFeaturedTiles: true, ctaOnHover: true },
    3: { useNewLayoutWithSearch: true, useNewTile: true, useNewFeaturedTiles: false, ctaOnHover: true },
    4: { useNewLayoutWithSearch: true, useNewTile: true, useNewFeaturedTiles: true, ctaOnHover: false },
  },
});
let ApexExperiment = ApexExperiment_mod;
const apexExperiment8 = ApexExperiment.createApexExperiment({
  name: "2026-05-bounty-stale-refresh-quest-home",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const obj19 = {
  CONTROL: 0,
  [0]: "CONTROL",
  NEW_LAYOUT_WITH_SEARCH: 1,
  [1]: "NEW_LAYOUT_WITH_SEARCH",
  LARGE_MASK_MARGIN: 2,
  [2]: "LARGE_MASK_MARGIN",
  REMOVE_QUEST_TITLE_SUFFIX: 3,
  [3]: "REMOVE_QUEST_TITLE_SUFFIX",
  REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER: 4,
  [4]: "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER",
};
const apexExperiment9 = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-quest-home-sort-priority",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const obj20 = {
  name: "2026-06-quest-home-layout-visual-tweaks",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj19.CONTROL },
  variations: {
    0: { enabled: false, variant: obj19.CONTROL },
    1: { enabled: true, variant: obj19.NEW_LAYOUT_WITH_SEARCH },
    2: { enabled: true, variant: obj19.LARGE_MASK_MARGIN },
    3: { enabled: true, variant: obj19.REMOVE_QUEST_TITLE_SUFFIX },
    4: { enabled: true, variant: obj19.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER },
  },
};
const apexExperiment10 = ApexExperiment.createApexExperiment(obj20);
let ApexExperiment = ApexExperiment_mod;
const obj22 = {
  name: "2026-09-quest-mobile-bar-secondary-cta",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj23 = { 1: null };
obj23[1] = { enabled: true };
obj22.variations = obj23;
const apexExperiment11 = ApexExperiment.createApexExperiment(obj22);
const result = size.fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment1;
export const CustomAppStoreOverlayExperiment = apexExperiment2;
export const IosAttributionFeatureGate = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj9;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment4;
export const useQuestOrbsMultiplierMarketing = function useQuestOrbsMultiplierMarketing(location) {
  const questOrbMultiplierEligibility = QuestOrbMultiplierHooks.useQuestOrbMultiplierEligibility();
  const obj = { location };
  const tmp4 =
    questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE &&
    questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS &&
    closure_2.useConfig({ location }).enabled;
  return {
    shouldShowBonusOrbsUX:
      questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE &&
      questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS &&
      closure_2.useConfig({ location }).enabled,
    multiplier: QuestOrbsMultiplier.QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
  };
};
export const ComposedQuestPlayerExperiment = apexExperiment5;
export const MobileQuestHomeRedDotNotificationExperiment = apexExperiment6;
export const QuestHomeTileRedesignExperiment = apexExperiment7;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment8;
export const MobileQuestHomeSortPriorityExperiment = apexExperiment9;
export const QuestHomeLayoutVisualTweakVariant = obj19;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment10;
export const QuestMobileBarSecondaryCtaExperiment = apexExperiment11;
