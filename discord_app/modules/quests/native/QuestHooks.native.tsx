// discord_app/modules/quests/native/QuestHooks.native.tsx
import closure_3 from "QuestsExperimentLocations";
import useIsWindowLarge from "useIsWindowLarge";
import setContent from "setContent";
import addApplication from "addApplication";
import initializeState from "initializeState";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";
import { MAIN_SURFACE } from "FrameLayoutModes";
import { ThemeTypes } from "sum";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { AdCreativeType } from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import { navigationToRootTabHelper } from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import { getFocusedChannelId } from "../../panels/isChannelFocused.native.tsx";
import { useIsWindowLarge } from "../../screen/native/useIsWindowLarge.tsx";
import { apexExperiment } from "../experiments/NewAdRequestBehaviorExperiment.tsx";
import { getIsEligibleForQuests } from "../lib/QuestsEligibility.tsx";
import { QuestsVisibleMessagesChangedSource } from "../QuestTypes.tsx";
import { maybeRefreshAd } from "../useQuestForPlacement.tsx";
import { getDeliveredQuest } from "QuestDock/QuestDockCreativeContext.tsx";

let c9;
let metroImportAll;
const require = arg1;
function useDeliveredDockCreative() {
  let obj = apexExperiment;
  const tmp2 = adDecisionForPlacement;
  const items = [initializeState];
  const stateFromStores = adDecisionForPlacement(589).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(adDecisionForPlacement(5163).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = adDecisionForPlacement(589);
  const items1 = [initializeState];
  let stateFromStores1 = adDecisionForPlacement(589).useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = initializeState);
    let questForPlacement = adDecisionForPlacement(7098).getQuestForPlacement(quests, questToDeliverForPlacement, adDecisionForPlacement(5163).AdPlacement.MOBILE_HOME_DOCK_AREA);
    if (questForPlacement == null) {
      questForPlacement = null;
    }
    return questForPlacement;
  });
  const obj3 = adDecisionForPlacement(589);
  adDecisionForPlacement = adDecisionForPlacement(14285).useAdDecisionForPlacement(adDecisionForPlacement(5163).AdPlacement.MOBILE_HOME_DOCK_AREA);
  const obj4 = adDecisionForPlacement(14285);
  const items2 = [initializeState];
  const items3 = [adDecisionForPlacement];
  if (obj.useConfig({ location: "QuestMobileDock" }).enableNewRequestBehavior) {
    stateFromStores1 = obj5.useStateFromStores(items2, () => {
      let questId;
      if (adDecisionForPlacement != null) {
        questId = tmp.questId;
      }
      let tmp3 = null;
      if (null != questId) {
        const quests = outer1_7.quests;
        let value = quests.get(tmp.questId);
        if (value == null) {
          value = null;
        }
        tmp3 = value;
      }
      return tmp3;
    }, items3);
  }
  let tmp6 = null;
  if (null != stateFromStores1) {
    tmp6 = null;
    if (!tmp2Result.isQuestExpired(stateFromStores1)) {
      tmp6 = stateFromStores1;
    }
    tmp2Result = tmp2(7098);
  }
  let tmp7 = stateFromStores;
  if (stateFromStores == null) {
    tmp7 = tmp6;
  }
  importDefault = tmp7;
  const items4 = [tmp7];
  return React.useMemo(() => {
    if (null == closure_1) {
      let obj = { type: null };
      obj[0] = adDecisionForPlacement(outer1_2[15]).AdCreativeType.NO_FILL;
    } else {
      obj = { type: null, quest: null };
      obj[0] = adDecisionForPlacement(outer1_2[15]).AdCreativeType.QUEST;
      obj[1] = tmp;
    }
    return obj;
  }, items4);
}
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  const deliveredQuest = getDeliveredQuest.getDeliveredQuest(mobileQuestDock);
  const tmp4 = useIsWindowLarge();
  const obj = getDeliveredQuest;
  const items = [initializeState];
  let userStatus;
  const stateFromStores = initialize.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(callback(table[12]).QuestContent.QUEST_BAR_MOBILE), []);
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    let tmpResult = tmp(7098);
    isDismissedResult = tmpResult.isDismissed(deliveredQuest.userStatus, tmp(5163).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  tmpResult = tmp(10393);
  const isQuestExpired = tmpResult.useIsQuestExpired(deliveredQuest);
  const obj2 = initialize;
  const type = mobileQuestDock.type;
  const isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
  if (AdCreativeType.AdCreativeType.NO_FILL !== type) {
    if (tmp(7128).AdCreativeType.BOUNTY !== type) {
      if (tmp(7128).AdCreativeType.QUEST === type) {
        if (stateFromStores) {
          if (!tmp9) {
            let tmp12 = null != deliveredQuest && !tmp4;
          }
          return tmp12;
        }
        tmp12 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp9 && !isDismissedResult && !tmp4;
        const tmp13 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp9 && !isDismissedResult && !tmp4;
      }
    }
  }
  return false;
}
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: metroImportAll, QuestVariants: c9 } = QuestsExperimentLocations);
const result = require("setContent").fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRenderedBase(useDeliveredDockCreative());
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
};
export const useMobileQuestDock = function useMobileQuestDock() {
  const adRefreshLoop = maybeRefreshAd.useAdRefreshLoop(QuestsVisibleMessagesChangedSource.AdPlacement.MOBILE_HOME_DOCK_AREA);
  return useDeliveredDockCreative();
};
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase) {
  const _require = mobileQuestDock;
  let tmp = isMobileQuestDockRenderedBase;
  const isChannelFocused = _getFocusedChannelId.useIsChannelFocused();
  const obj = _getFocusedChannelId;
  const currentNavigationRouteName = _navigationToRootTabHelper.useCurrentNavigationRouteName();
  const obj2 = _navigationToRootTabHelper;
  let tmp4 = null != _navigationToRootTabHelper.coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = _navigationToRootTabHelper;
  const items = [initializeState];
  let stateFromStores = _initialize.useStateFromStores(items, () => {
    const type = mobileQuestDock.type;
    if (mobileQuestDock(outer1_2[15]).AdCreativeType.QUEST === type) {
      return outer1_7.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
    tmp = mobileQuestDock;
  });
  const obj4 = _initialize;
  const items1 = [setContent];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    key = key.getKey();
    let tmp2 = key === closure_10;
    if (!tmp2) {
      tmp2 = key === closure_8;
    }
    return tmp2;
  });
  if (isMobileQuestDockRenderedBase) {
    tmp = !isChannelFocused;
  }
  if (tmp) {
    if (!tmp4) {
      if (stateFromStores) {
        stateFromStores = stateFromStores1;
      }
      tmp4 = stateFromStores;
    }
    tmp = tmp4;
  }
  return tmp;
};
export { useIsMobileQuestDockRenderedBase };
export const useIsMobileQuestDockRendered = function useIsMobileQuestDockRendered() {
  return useIsMobileQuestDockRenderedBase(useDeliveredDockCreative());
};
export const useQuestGameLogotypeAssetUrl = function useQuestGameLogotypeAssetUrl(questCreative) {
  let closure_0 = questCreative;
  const items = [questCreative];
  return React.useMemo(() => questCreative(outer1_2[22]).getQuestAsset(questCreative, questCreative(outer1_2[22]).QuestAssetType.LOGO_TYPE, outer1_12.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(questCreative) {
  let closure_0 = questCreative;
  const items = [questCreative];
  return React.useMemo(() => {
    const questAsset = questCreative(outer1_2[22]).getQuestAsset(questCreative, questCreative(outer1_2[22]).QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != questCreative.config.assets.questBarHeroVideo) {
      videoAsset = tmp(tmp2[22]).resolveAsset(tmp3.id, tmp3.config.assets.questBarHeroVideo);
      const tmpResult = tmp(tmp2[22]);
    }
    if (questAsset.isAnimated) {
      let staticUrl = str.replace(tmp(tmp2[22]).EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
};
export const useHasWatchVideoOnMobileTasks = function useHasWatchVideoOnMobileTasks(config) {
  let closure_0 = config;
  const items = [config];
  return React.useMemo(() => {
    let obj = config(outer1_2[23]);
    obj = { config };
    return obj.hasWatchVideoOnMobileTasks(obj);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  const _require = quest;
  let obj = _require(stateFromStores[23]);
  const activityApplicationId = obj.getActivityApplicationId(quest);
  let items = [addApplication];
  stateFromStores = _require(stateFromStores[11]).useStateFromStores(items, () => outer1_6.getApplication(activityApplicationId));
  let obj2 = _require(stateFromStores[11]);
  const tmp = stateFromStores;
  const canLaunchFrameResult = _require(stateFromStores[24]).canLaunchFrame(stateFromStores);
  const callback = canLaunchFrameResult;
  let obj3 = _require(stateFromStores[24]);
  let canLaunchActivityResult = _require(stateFromStores[25]).canLaunchActivity(quest);
  if (canLaunchActivityResult) {
    let features = quest.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    if (stateFromStores != null) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = activityApplicationId(tmp[26])(supported_platforms);
    const tmp8 = activityApplicationId(tmp[26]);
  }
  if (canLaunchActivityResult) {
    let tmp11 = canLaunchFrameResult;
    if (!canLaunchFrameResult) {
      let id;
      if (stateFromStores != null) {
        let bot = stateFromStores.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp11 = null != id;
    }
    canLaunchActivityResult = tmp11;
  }
  const React = canLaunchActivityResult;
  const items1 = [stateFromStores, activityApplicationId, quest.config.features];
  const effect = React.useEffect(() => {
    let hasItem = null == stateFromStores;
    if (hasItem) {
      hasItem = null != activityApplicationId;
    }
    if (hasItem) {
      const features = quest.config.features;
      hasItem = features.includes(outer1_9.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const applications = activityApplicationId(stateFromStores[27]).fetchApplications(items, false);
      const obj = activityApplicationId(stateFromStores[27]);
    }
  }, items1);
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult];
  obj = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: React.useCallback(callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (outer1_4) {
              if (outer1_3) {
                let obj5 = v02(outer1_2[28]);
                const obj1 = { applicationId: null, surface: null };
                obj1[0] = outer1_2.id;
                obj1[1] = outer1_11;
                v02 = 1;
                v0 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj5.launchFrame(obj1);
                return obj2;
              } else {
                let id;
                if (outer1_2 != null) {
                  const bot = tmp6.bot;
                  if (bot != null) {
                    id = bot.id;
                  }
                }
                if (null != id) {
                  obj2 = v0(outer1_2[29]);
                  const obj3 = { appId: null, botId: null, analyticsLocations: null };
                  obj3[0] = tmp6.id;
                  obj3[1] = tmp6.bot.id;
                  obj3[2] = [];
                  v02 = 2;
                  v0 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj2.launchActivityInBotDM(obj3);
                  return obj4;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "T", done: null };
        } catch (tmp15) {
          v0 = tmp;
          throw tmp15;
        }
      }
    }), items2)
  };
  return obj;
};