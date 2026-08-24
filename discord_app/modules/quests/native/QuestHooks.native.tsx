// === Module 14443: useDeliveredDockCreative ===

// Module 14443 (useDeliveredDockCreative)
import initialize from "initialize" /* 589 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 6719 */;
import AdCreativeType from "AdCreativeType" /* 7469 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7925 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 10685 */;
import maybeRefreshAd from "maybeRefreshAd" /* 14467 */;
import getDeliveredQuest from "getDeliveredQuest" /* 14469 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "setContent" /* 4086 */;
import closure_6 from "addApplication" /* 4478 */;
import closure_7 from "initializeState" /* 7453 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS" /* 10480 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 8709 */;
import { ThemeTypes } from "sum" /* 505 */;

require = arg1;
function useDeliveredDockCreative() {
  const items = [closure_7];
  let stateFromStores = deliveredQuestId(deliveredBounty[10]).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(deliveredQuestId(deliveredBounty[11]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj = deliveredQuestId(deliveredBounty[10]);
  const tmp3 = closure_7;
  const adDecisionForPlacement = deliveredQuestId(deliveredBounty[12]).useAdDecisionForPlacement(deliveredQuestId(deliveredBounty[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
  const obj2 = deliveredQuestId(deliveredBounty[12]);
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  deliveredQuestId = deliveredQuestId(deliveredBounty[13]).getDeliveredQuestId(creative);
  let tmpResult = tmp(tmp2[10]);
  const items1 = [tmp3];
  const items2 = [deliveredQuestId];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != deliveredQuestId) {
      const quests = closure_1_7.quests;
      let value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  }, items2);
  let tmp9 = null;
  if (null != stateFromStores1) {
    tmpResult = tmp(tmp2[14]);
    tmp9 = null;
    if (!tmpResult.isQuestExpired(stateFromStores1)) {
      tmp9 = stateFromStores1;
    }
  }
  if (stateFromStores == null) {
    stateFromStores = tmp9;
  }
  const obj3 = deliveredQuestId(deliveredBounty[13]);
  let creative1;
  if (adDecisionForPlacement != null) {
    creative1 = adDecisionForPlacement.creative;
  }
  deliveredBounty = deliveredQuestId(deliveredBounty[13]).getDeliveredBounty(creative1);
  const items3 = [stateFromStores, deliveredBounty];
  return React.useMemo(() => {
    if (null != stateFromStores) {
      let obj = { type: null, quest: null };
      obj[0] = deliveredQuestId(deliveredBounty[15]).AdCreativeType.QUEST;
      obj[1] = tmp;
    } else if (null != deliveredBounty) {
      obj = { type: null, bounty: null };
      obj[0] = deliveredQuestId(deliveredBounty[15]).AdCreativeType.BOUNTY;
      obj[1] = tmp2;
    } else {
      obj = { type: null };
      obj[0] = deliveredQuestId(deliveredBounty[15]).AdCreativeType.NO_FILL;
    }
    return obj;
  }, items3);
}
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  const deliveredQuest = getDeliveredQuest.getDeliveredQuest(mobileQuestDock);
  const tmp4 = useIsWindowLargeDefault();
  const obj = getDeliveredQuest;
  const items = [closure_7];
  let userStatus;
  const stateFromStores = initialize.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(callback(table[11]).QuestContent.QUEST_BAR_MOBILE), []);
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    let tmpResult = tmp(7451);
    isDismissedResult = tmpResult.isDismissed(deliveredQuest.userStatus, tmp(6719).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  tmpResult = tmp(10684);
  const isQuestExpired = tmpResult.useIsQuestExpired(deliveredQuest);
  const obj2 = initialize;
  const type = mobileQuestDock.type;
  const isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
  if (AdCreativeType.AdCreativeType.NO_FILL !== type) {
    if (tmp(7469).AdCreativeType.BOUNTY !== type) {
      if (tmp(7469).AdCreativeType.QUEST === type) {
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
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_8, QuestVariants: c9 } = QuestsExperimentLocations);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

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
  const isChannelFocused = _require(10023).useIsChannelFocused();
  const obj = _require(10023);
  const currentNavigationRouteName = _require(4229).useCurrentNavigationRouteName();
  const obj2 = _require(4229);
  let tmp4 = null != _require(4229).coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = _require(4229);
  const items = [closure_7];
  let stateFromStores = _require(589).useStateFromStores(items, () => {
    const type = mobileQuestDock.type;
    if (mobileQuestDock(closure_1_2[15]).AdCreativeType.QUEST === type) {
      return closure_1_7.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
    tmp = mobileQuestDock;
  });
  const obj4 = _require(589);
  const items1 = [closure_5];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
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
  closure_0 = questCreative;
  const items = [questCreative];
  return React.useMemo(() => questCreative(closure_1_2[22]).getQuestAsset(questCreative, questCreative(closure_1_2[22]).QuestAssetType.LOGO_TYPE, closure_1_12.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(questCreative) {
  closure_0 = questCreative;
  const items = [questCreative];
  return React.useMemo(() => {
    const questAsset = questCreative(closure_1_2[22]).getQuestAsset(questCreative, questCreative(closure_1_2[22]).QuestAssetType.QUEST_BAR_HERO);
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
  closure_0 = config;
  const items = [config];
  return React.useMemo(() => {
    let obj = config(closure_1_2[23]);
    obj = { config };
    return obj.hasWatchVideoOnMobileTasks(obj);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  const _require = quest;
  let obj = _require(stateFromStores[23]);
  const activityApplicationId = obj.getActivityApplicationId(quest);
  let items = [closure_6];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => closure_1_6.getApplication(activityApplicationId));
  let obj2 = _require(stateFromStores[10]);
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
      hasItem = features.includes(closure_1_9.MOBILE_ACTIVITY_QUEST);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            } else if (closure_1_4) {
              if (closure_1_3) {
                let obj5 = v02(closure_1_2[28]);
                obj1 = { applicationId: null, surface: null };
                obj1[0] = closure_1_2.id;
                obj1[1] = closure_1_11;
                v02 = 1;
                v0 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj5.launchFrame(obj1);
                return obj2;
              } else {
                let id;
                if (closure_1_2 != null) {
                  const bot = tmp6.bot;
                  if (bot != null) {
                    id = bot.id;
                  }
                }
                if (null != id) {
                  obj2 = v0(closure_1_2[29]);
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
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp15) {
          v0 = tmp;
          throw tmp15;
        }
      }
    }), items2)
  };
  return obj;
};