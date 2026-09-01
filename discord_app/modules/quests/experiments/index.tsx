// discord_app/modules/quests/experiments/index.tsx
import set from "../../../../_runtime/00002_set.js";
import getQuestOrbMultiplierEligibilityForUser from "../hooks/QuestOrbMultiplierHooks.tsx";
import items from "../utils/QuestOrbMultiplierUtils.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2025-11-video-end-card-v2",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj,
});
obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({
  name: "2026-05-app-store-overlay-feature-gate",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj,
});
const obj1 = { 1: null };
obj1[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment({
  name: "2026-07-custom-app-store-overlay",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj1,
});
let obj2 = { 1: null };
obj2[1] = { enabled: true };
const obj3 = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  AUTO_ENABLE_CAPTIONS: 1,
  [1]: "AUTO_ENABLE_CAPTIONS",
  AUTO_UNMUTE: 2,
  [2]: "AUTO_UNMUTE",
};
const apexExperiment3 = ApexExperiment.createApexExperiment({
  name: "2026-07-ios-attribution",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
});
const apexExperiment4 = ApexExperiment.createApexExperiment({
  name: "2026-03-muted-video-quest-new-defaults",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj3.DEFAULT },
  variations: {
    0: { enabled: false, variant: obj3.DEFAULT },
    1: { enabled: true, variant: obj3.AUTO_ENABLE_CAPTIONS },
    2: { enabled: true, variant: obj3.AUTO_UNMUTE },
  },
});
let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-04-quests-premium-orb-multiplier-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const obj8 = { 1: null };
obj8[1] = { enabled: true };
const apexExperiment5 = ApexExperiment.createApexExperiment({
  name: "2026-04-composed-quest-player",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj8,
});
const apexExperiment6 = ApexExperiment.createApexExperiment({
  name: "2026-03-mobile-quest-home-red-dot-notification",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const apexExperiment7 = ApexExperiment.createApexExperiment({
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
const obj9 = {
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
const apexExperiment8 = ApexExperiment.createApexExperiment({
  name: "2026-05-bounty-stale-refresh-quest-home",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const apexExperiment9 = ApexExperiment.createApexExperiment({
  name: "2026-06-quest-home-layout-visual-tweaks",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj9.CONTROL },
  variations: {
    0: { enabled: false, variant: obj9.CONTROL },
    1: { enabled: true, variant: obj9.NEW_LAYOUT_WITH_SEARCH },
    2: { enabled: true, variant: obj9.LARGE_MASK_MARGIN },
    3: { enabled: true, variant: obj9.REMOVE_QUEST_TITLE_SUFFIX },
    4: { enabled: true, variant: obj9.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER },
  },
});
const apexExperiment10 = ApexExperiment.createApexExperiment({
  name: "2026-07-quest-bar-secondary-cta",
  kind: "user",
  defaultConfig: { enabled: false, showPlayInstantlyLabel: false },
  variations: {
    0: { enabled: false, showPlayInstantlyLabel: false },
    1: { enabled: true, showPlayInstantlyLabel: false },
    2: { enabled: true, showPlayInstantlyLabel: true },
  },
});
const result = set.fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment1;
export const CustomAppStoreOverlayExperiment = apexExperiment2;
export const IosAttributionFeatureGate = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj3;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment4;
export const useQuestOrbsMultiplierMarketing = function useQuestOrbsMultiplierMarketing(location) {
  let obj = { location };
  const questOrbMultiplierEligibility = getQuestOrbMultiplierEligibilityForUser.useQuestOrbMultiplierEligibility();
  const obj2 = getQuestOrbMultiplierEligibilityForUser;
  obj = {
    shouldShowBonusOrbsUX:
      questOrbMultiplierEligibility !== items.QuestOrbMultiplierEligibilityType.INELIGIBLE &&
      questOrbMultiplierEligibility !== items.QuestOrbMultiplierEligibilityType.CREPE &&
      closure_2.useConfig(obj).enabled,
    multiplier: tmp(11090).QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
  };
  return obj;
};
export const ComposedQuestPlayerExperiment = apexExperiment5;
export const MobileQuestHomeRedDotNotificationExperiment = apexExperiment6;
export const QuestHomeTileRedesignExperiment = apexExperiment7;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment8;
export const QuestHomeLayoutVisualTweakVariant = obj9;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment9;
export const QuestBarSecondaryCtaExperiment = apexExperiment10;
