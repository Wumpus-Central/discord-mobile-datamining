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
const apexExperiment5 = ApexExperiment.createApexExperiment({
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
const obj15 = {
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
const apexExperiment6 = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-quest-home-sort-priority",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const obj16 = {
  name: "2026-06-quest-home-layout-visual-tweaks",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj15.CONTROL },
  variations: {
    0: { enabled: false, variant: obj15.CONTROL },
    1: { enabled: true, variant: obj15.NEW_LAYOUT_WITH_SEARCH },
    2: { enabled: true, variant: obj15.LARGE_MASK_MARGIN },
    3: { enabled: true, variant: obj15.REMOVE_QUEST_TITLE_SUFFIX },
    4: { enabled: true, variant: obj15.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER },
  },
};
const apexExperiment7 = ApexExperiment.createApexExperiment(obj16);
let ApexExperiment = ApexExperiment_mod;
const obj18 = {
  name: "2026-09-quest-mobile-bar-secondary-cta",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj19 = { 1: null };
obj19[1] = { enabled: true };
obj18.variations = obj19;
const obj20 = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  ALL_TIERS: 1,
  [1]: "ALL_TIERS",
  TIER_1_VISUALS: 2,
  [2]: "TIER_1_VISUALS",
  TIER_2_VISUALS: 3,
  [3]: "TIER_2_VISUALS",
  TIER_3_VISUALS: 4,
  [4]: "TIER_3_VISUALS",
};
const apexExperiment8 = ApexExperiment.createApexExperiment(obj18);
let ApexExperiment = ApexExperiment_mod;
const obj21 = {
  name: "2026-09-new-orb-reward-visuals",
  kind: "user",
  defaultConfig: { variant: obj20.DEFAULT },
  variations: {
    0: { variant: obj20.DEFAULT },
    1: { variant: obj20.ALL_TIERS },
    2: { variant: obj20.TIER_2_VISUALS },
    3: { variant: obj20.TIER_3_VISUALS },
    4: { variant: obj20.TIER_1_VISUALS },
  },
};
const apexExperiment9 = ApexExperiment.createApexExperiment(obj21);
let ApexExperiment = ApexExperiment_mod;
const obj23 = {
  name: "2026-09-mobile-quest-reward-button-to-secondary-button",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj24 = { 1: null };
obj24[1] = { enabled: true };
obj23.variations = obj24;
const apexExperiment10 = ApexExperiment.createApexExperiment(obj23);
let ApexExperiment = ApexExperiment_mod;
const obj25 = {
  name: "2026-10-clickable-hero-banner",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj26 = { 1: null };
obj26[1] = { enabled: true };
obj25.variations = obj26;
const obj27 = {
  newLayoutWithSearch: false,
  iconOnlyCTA: false,
  badge: { duration: false, new: false, countdown: false },
  showGameLogo: true,
  showQuestTitle: true,
  compactReward: false,
  shorterHeight: false,
  gameIconReward: false,
  underlinedMultiplier: false,
};
const apexExperiment11 = ApexExperiment.createApexExperiment(obj25);
let ApexExperiment = ApexExperiment_mod;
const obj28 = { name: "2026-11-quest-home-tile-single-elements", kind: "user", defaultConfig: obj27, variations: null };
const obj29 = {
  0: obj27,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
};
const obj30 = {};
const merged = Object.assign(obj27);
obj30.newLayoutWithSearch = true;
obj29[1] = obj30;
const obj31 = {};
const merged1 = Object.assign(obj27);
obj31.newLayoutWithSearch = true;
obj31.iconOnlyCTA = true;
obj29[2] = obj31;
const obj32 = {};
const merged2 = Object.assign(obj27);
obj32.newLayoutWithSearch = true;
obj32.badge = { duration: true, new: false, countdown: false };
obj29[3] = obj32;
const obj33 = {};
const merged3 = Object.assign(obj27);
obj33.newLayoutWithSearch = true;
obj33.badge = { duration: false, new: true, countdown: false };
obj29[4] = obj33;
const obj34 = {};
const merged4 = Object.assign(obj27);
obj34.newLayoutWithSearch = true;
obj34.badge = { duration: false, new: false, countdown: true };
obj29[5] = obj34;
const obj35 = {};
const merged5 = Object.assign(obj27);
obj35.newLayoutWithSearch = true;
obj35.showGameLogo = false;
obj29[6] = obj35;
const obj36 = {};
const merged6 = Object.assign(obj27);
obj36.newLayoutWithSearch = true;
obj36.showQuestTitle = false;
obj29[7] = obj36;
const obj37 = {};
const merged7 = Object.assign(obj27);
obj37.newLayoutWithSearch = true;
obj37.compactReward = true;
obj29[8] = obj37;
const obj38 = {};
const merged8 = Object.assign(obj27);
obj38.newLayoutWithSearch = true;
obj38.shorterHeight = true;
obj29[9] = obj38;
const obj39 = {};
const merged9 = Object.assign(obj27);
obj39.newLayoutWithSearch = true;
obj39.gameIconReward = true;
obj29[10] = obj39;
const obj40 = {};
const merged10 = Object.assign(obj27);
obj40.newLayoutWithSearch = true;
obj40.badge = { duration: true, new: true, countdown: false };
obj29[11] = obj40;
const obj41 = {};
const merged11 = Object.assign(obj27);
obj41.newLayoutWithSearch = true;
obj41.underlinedMultiplier = true;
obj29[12] = obj41;
obj28.variations = obj29;
const apexExperiment12 = ApexExperiment.createApexExperiment(obj28);
const result = size.fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment1;
export const CustomAppStoreOverlayExperiment = apexExperiment2;
export const IosAttributionFeatureGate = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj9;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment4;
export function useQuestOrbsMultiplierMarketing(location) {
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
}
export const QuestHomeTileRedesignExperiment = apexExperiment5;
export const MobileQuestHomeSortPriorityExperiment = apexExperiment6;
export const QuestHomeLayoutVisualTweakVariant = obj15;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment7;
export const QuestMobileBarSecondaryCtaExperiment = apexExperiment8;
export const QuestOrbTierVariant = obj20;
export const QuestOrbTierExperiment = apexExperiment9;
export const MobileQuestRewardButtonToSecondaryButtonExperiment = apexExperiment10;
export const ClickableHeroBannerExperiment = apexExperiment11;
export const QUEST_HOME_TILE_SINGLE_ELEMENTS_CONTROL = obj27;
export const QuestHomeTileSingleElementsExperiment = apexExperiment12;
