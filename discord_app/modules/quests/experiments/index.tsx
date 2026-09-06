// discord_app/modules/quests/experiments/index.tsx
import QuestOrbMultiplierHooks from "../hooks/QuestOrbMultiplierHooks.tsx";
import QuestOrbMultiplierUtils from "../utils/QuestOrbMultiplierUtils.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { name: "2025-11-video-end-card-v2", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = {
  name: "2026-05-app-store-overlay-feature-gate",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj1.variations = obj2;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj1);
const obj3 = {
  name: "2026-07-custom-app-store-overlay",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
const obj5 = {
  CONTROL: 0,
  [0]: "CONTROL",
  LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY: 1,
  [1]: "LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY",
  ENTIRE_VIDEO_CLICKABLE: 2,
  [2]: "ENTIRE_VIDEO_CLICKABLE",
  OPEN_APP_SHEET_ON_PAUSE: 3,
  [3]: "OPEN_APP_SHEET_ON_PAUSE",
};
const apexExperiment2 = ApexExperiment.createApexExperiment(obj3);
const obj6 = {
  name: "2026-08-bounties-ctr-experiment-1",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj5.CONTROL },
  variations: {
    0: { enabled: false, variant: obj5.CONTROL },
    1: { enabled: true, variant: obj5.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY },
    2: { enabled: true, variant: obj5.ENTIRE_VIDEO_CLICKABLE },
    3: { enabled: true, variant: obj5.OPEN_APP_SHEET_ON_PAUSE },
  },
};
const apexExperiment3 = ApexExperiment.createApexExperiment(obj6);
const obj8 = { name: "2026-07-ios-attribution", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj9 = { 1: null };
obj9[1] = { enabled: true };
obj8.variations = obj9;
const obj10 = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  AUTO_ENABLE_CAPTIONS: 1,
  [1]: "AUTO_ENABLE_CAPTIONS",
  AUTO_UNMUTE: 2,
  [2]: "AUTO_UNMUTE",
};
const apexExperiment4 = ApexExperiment.createApexExperiment(obj8);
const obj11 = {
  name: "2026-03-muted-video-quest-new-defaults",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj10.DEFAULT },
  variations: {
    0: { enabled: false, variant: obj10.DEFAULT },
    1: { enabled: true, variant: obj10.AUTO_ENABLE_CAPTIONS },
    2: { enabled: true, variant: obj10.AUTO_UNMUTE },
  },
};
const apexExperiment5 = ApexExperiment.createApexExperiment(obj11);
let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-04-quests-premium-orb-multiplier-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const obj14 = {
  name: "2026-04-composed-quest-player",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj15 = { 1: null };
obj15[1] = { enabled: true };
obj14.variations = obj15;
const apexExperiment6 = ApexExperiment.createApexExperiment(obj14);
const apexExperiment7 = ApexExperiment.createApexExperiment({
  name: "2026-03-mobile-quest-home-red-dot-notification",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const apexExperiment8 = ApexExperiment.createApexExperiment({
  name: "2026-05-quest-home-tile-redesign",
  kind: "user",
  defaultConfig: { useNewLayoutWithSearch: false, useNewTile: false, useLargeFeaturedTiles: false, ctaOnHover: false },
  variations: {
    0: { useNewLayoutWithSearch: false, useNewTile: false, useLargeFeaturedTiles: false, ctaOnHover: false },
    1: { useNewLayoutWithSearch: true, useNewTile: false, useLargeFeaturedTiles: false, ctaOnHover: false },
    2: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: true, ctaOnHover: true },
    3: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: false, ctaOnHover: true },
    4: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: true, ctaOnHover: false },
  },
});
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
  name: "2026-05-bounty-stale-refresh-quest-home",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
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
const apexExperiment11 = ApexExperiment.createApexExperiment({
  name: "2026-07-quest-bar-secondary-cta",
  kind: "user",
  defaultConfig: { enabled: false, showPlayInstantlyLabel: false },
  variations: {
    0: { enabled: false, showPlayInstantlyLabel: false },
    1: { enabled: true, showPlayInstantlyLabel: false },
    2: { enabled: true, showPlayInstantlyLabel: true },
  },
});
const result = size.fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment1;
export const CustomAppStoreOverlayExperiment = apexExperiment2;
export const BountiesCtrExperiment1Variant = obj5;
export const CustomAppStoreSqueezeBackExperiment = apexExperiment3;
export const IosAttributionFeatureGate = apexExperiment4;
export const MutedVideoQuestNewDefaultsVariant = obj10;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment5;
export const useQuestOrbsMultiplierMarketing = function useQuestOrbsMultiplierMarketing(location) {
  let obj = { location };
  const questOrbMultiplierEligibility = QuestOrbMultiplierHooks.useQuestOrbMultiplierEligibility();
  obj = {
    shouldShowBonusOrbsUX:
      questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE &&
      questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.CREPE &&
      closure_2.useConfig(obj).enabled,
    multiplier: tmp(11490).QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
  };
  return obj;
};
export const ComposedQuestPlayerExperiment = apexExperiment6;
export const MobileQuestHomeRedDotNotificationExperiment = apexExperiment7;
export const QuestHomeTileRedesignExperiment = apexExperiment8;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment9;
export const QuestHomeLayoutVisualTweakVariant = obj19;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment10;
export const QuestBarSecondaryCtaExperiment = apexExperiment11;
