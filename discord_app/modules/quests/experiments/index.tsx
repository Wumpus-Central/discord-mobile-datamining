// discord_app/modules/quests/experiments/index.tsx
import react from "../../../../_runtime/00576_react.js";
import QuestOrbMultiplierHooks from "../hooks/QuestOrbMultiplierHooks.tsx";
import QuestOrbMultiplierUtils from "../utils/QuestOrbMultiplierUtils.tsx";
import QuestOrbsMultiplier from "../../../../discord_common/js/shared/shared-constants/QuestOrbsMultiplier.tsx";
import ApexExperiment_mod from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj11;
let obj14;
let obj2;
let obj21;
let obj23;
let obj26;
let obj4;
let obj6;
let obj8;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2025-11-video-end-card-v2", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj3 = {
  name: "2026-05-app-store-overlay-feature-gate",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj4,
};
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = {
  name: "2026-07-custom-app-store-overlay",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj6,
};
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = ApexExperiment_mod;
const obj7 = { name: "2026-07-ios-attribution", kind: "user", defaultConfig: { enabled: false }, variations: obj8 };
obj8 = { 1: null };
obj8[1] = { enabled: true };
const obj9 = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  AUTO_ENABLE_CAPTIONS: 1,
  [1]: "AUTO_ENABLE_CAPTIONS",
  AUTO_UNMUTE: 2,
  [2]: "AUTO_UNMUTE",
};
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
ApexExperiment = ApexExperiment_mod;
const obj10 = {
  name: "2026-03-muted-video-quest-new-defaults",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj9.DEFAULT },
  variations: obj11,
};
obj11 = {
  0: { enabled: false, variant: obj9.DEFAULT },
  1: { enabled: true, variant: obj9.AUTO_ENABLE_CAPTIONS },
  2: { enabled: true, variant: obj9.AUTO_UNMUTE },
};
const apexExperiment4 = ApexExperiment.createApexExperiment(obj10);
ApexExperiment = ApexExperiment_mod;
const obj12 = {
  name: "2026-04-quests-premium-orb-multiplier-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let closure_2 = ApexExperiment.createApexExperiment(obj12);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp4;
      let tmp7;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const enabled = closure_2.useConfig(tmp4).enabled;
      const tmpResult = QuestOrbMultiplierHooks;
      const questOrbMultiplierEligibility = tmpResult.useQuestOrbMultiplierEligibility();
      const tmp6 =
        questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE &&
        questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS &&
        enabled;
      if (cResult[2] !== tmp6) {
        const obj3 = {
          shouldShowBonusOrbsUX: tmp6,
          multiplier: QuestOrbsMultiplier.QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
        };
        cResult[2] = tmp6;
        cResult[3] = obj3;
        tmp7 = obj3;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : (location) => {
      const obj = { location };
      const enabled = closure_2.useConfig(obj).enabled;
      const obj2 = QuestOrbMultiplierHooks;
      const questOrbMultiplierEligibility = obj2.useQuestOrbMultiplierEligibility();
      const tmp4 =
        questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE &&
        questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS &&
        enabled;
      const obj3 = {
        shouldShowBonusOrbsUX: tmp4,
        multiplier: QuestOrbsMultiplier.QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
      };
      return obj3;
    };
ApexExperiment = ApexExperiment_mod;
const obj13 = {
  name: "2026-04-composed-quest-player",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj14,
};
obj14 = { 1: null };
obj14[1] = { enabled: true };
const apexExperiment5 = ApexExperiment.createApexExperiment(obj13);
ApexExperiment = ApexExperiment_mod;
const obj15 = {
  name: "2026-03-mobile-quest-home-red-dot-notification",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment6 = ApexExperiment.createApexExperiment(obj15);
ApexExperiment = ApexExperiment_mod;
const obj16 = {
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
};
const apexExperiment7 = ApexExperiment.createApexExperiment(obj16);
ApexExperiment = ApexExperiment_mod;
const obj17 = {
  name: "2026-05-bounty-stale-refresh-quest-home",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment8 = ApexExperiment.createApexExperiment(obj17);
ApexExperiment = ApexExperiment_mod;
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
const obj18 = {
  name: "2026-09-mobile-quest-home-sort-priority",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment9 = ApexExperiment.createApexExperiment(obj18);
ApexExperiment = ApexExperiment_mod;
const obj20 = {
  name: "2026-06-quest-home-layout-visual-tweaks",
  kind: "user",
  defaultConfig: { enabled: false, variant: obj19.CONTROL },
  variations: obj21,
};
obj21 = {
  0: { enabled: false, variant: obj19.CONTROL },
  1: { enabled: true, variant: obj19.NEW_LAYOUT_WITH_SEARCH },
  2: { enabled: true, variant: obj19.LARGE_MASK_MARGIN },
  3: { enabled: true, variant: obj19.REMOVE_QUEST_TITLE_SUFFIX },
  4: { enabled: true, variant: obj19.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER },
};
const apexExperiment10 = ApexExperiment.createApexExperiment(obj20);
ApexExperiment = ApexExperiment_mod;
const obj22 = {
  name: "2026-09-quest-mobile-bar-secondary-cta",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj23,
};
obj23 = { 1: null };
obj23[1] = { enabled: true };
const apexExperiment11 = ApexExperiment.createApexExperiment(obj22);
ApexExperiment = ApexExperiment_mod;
const obj24 = {
  name: "2026-09-new-orb-reward-visuals",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment12 = ApexExperiment.createApexExperiment(obj24);
ApexExperiment = ApexExperiment_mod;
const obj25 = {
  name: "2026-09-mobile-quest-reward-button-to-secondary-button",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj26,
};
obj26 = { 1: null };
obj26[1] = { enabled: true };
const apexExperiment13 = ApexExperiment.createApexExperiment(obj25);
const result = size.fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment1;
export const CustomAppStoreOverlayExperiment = apexExperiment2;
export const IosAttributionFeatureGate = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj9;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment4;
export const useQuestOrbsMultiplierMarketing = tmp7;
export const ComposedQuestPlayerExperiment = apexExperiment5;
export const MobileQuestHomeRedDotNotificationExperiment = apexExperiment6;
export const QuestHomeTileRedesignExperiment = apexExperiment7;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment8;
export const MobileQuestHomeSortPriorityExperiment = apexExperiment9;
export const QuestHomeLayoutVisualTweakVariant = obj19;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment10;
export const QuestMobileBarSecondaryCtaExperiment = apexExperiment11;
export const QuestOrbTierExperiment = apexExperiment12;
export const MobileQuestRewardButtonToSecondaryButtonExperiment = apexExperiment13;
