// === Module 15091: useDeliveredDockCreative ===

// Module 15091 (useDeliveredDockCreative)
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 5447 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;
import maybeRefreshAd from "maybeRefreshAd" /* 15116 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "setContent" /* 4251 */;
import closure_6 from "addApplication" /* 4788 */;
import closure_7 from "initializeState" /* 7703 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5444 */;
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS" /* 11279 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 9511 */;
import { ThemeTypes } from "sum" /* 1085 */;

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
  const deliveredQuest = deliveredAdCreativeId(15102).getDeliveredQuest(mobileQuestDock);
  const tmp4 = useIsWindowLargeDefault();
  const obj = deliveredAdCreativeId(15102);
  const items = [closure_7];
  let userStatus;
  const stateFromStores = deliveredAdCreativeId(504).useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(deliveredAdCreativeId(table[11]).QuestContent.QUEST_BAR_MOBILE), []);
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    let tmpResult = tmp(7699);
    isDismissedResult = tmpResult.isDismissed(deliveredQuest.userStatus, tmp(5447).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  tmpResult = tmp(11483);
  const isQuestExpired = tmpResult.useIsQuestExpired(deliveredQuest);
  const obj2 = deliveredAdCreativeId(504);
  const tmp5 = closure_7;
  let isEligibleForQuests = deliveredAdCreativeId(11484).getIsEligibleForQuests();
  const tmpResult1 = deliveredAdCreativeId(11484);
  deliveredAdCreativeId = deliveredAdCreativeId(15102).getDeliveredAdCreativeId(mobileQuestDock);
  const tmpResult2 = deliveredAdCreativeId(15102);
  const items1 = [tmp5];
  const items2 = [deliveredAdCreativeId];
  const type = mobileQuestDock.type;
  const stateFromStores1 = deliveredAdCreativeId(504).useStateFromStores(items1, () => {
    let isAdContentDismissedResult = null != deliveredAdCreativeId;
    if (isAdContentDismissedResult) {
      isAdContentDismissedResult = closure_1_7.isAdContentDismissed(tmp);
    }
    return isAdContentDismissedResult;
  }, items2);
  if (deliveredAdCreativeId(5451).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(5451).AdCreativeType.BOUNTY === type) {
    if (isEligibleForQuests) {
      isEligibleForQuests = !stateFromStores1;
    }
    if (isEligibleForQuests) {
      isEligibleForQuests = !tmp4;
    }
    return isEligibleForQuests;
  } else if (tmp(5451).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      if (!tmp10) {
        let tmp15 = null != deliveredQuest && !tmp4;
      }
      return tmp15;
    }
    tmp15 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
    const tmp16 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
  }
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
  const isChannelFocused = _require(10089).useIsChannelFocused();
  const obj = _require(10089);
  const currentNavigationRouteName = _require(4417).useCurrentNavigationRouteName();
  const obj2 = _require(4417);
  let tmp4 = null != _require(4417).coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = _require(4417);
  const items = [closure_7];
  let stateFromStores = _require(504).useStateFromStores(items, () => {
    const type = mobileQuestDock.type;
    if (mobileQuestDock(closure_1_2[15]).AdCreativeType.QUEST === type) {
      return closure_1_7.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
    tmp = mobileQuestDock;
  });
  const obj4 = _require(504);
  const items1 = [closure_5];
  const stateFromStores1 = _require(504).useStateFromStores(items1, () => {
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
export const useQuestGameLogotypeAssetUrl = function useQuestGameLogotypeAssetUrl(quest) {
  closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => quest(closure_1_2[22]).getQuestAsset(quest, quest(closure_1_2[22]).QuestAssetType.LOGO_TYPE, closure_1_12.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(quest) {
  closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => {
    const questAsset = quest(closure_1_2[22]).getQuestAsset(quest, quest(closure_1_2[22]).QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != quest.config.assets.questBarHeroVideo) {
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
  let obj = _require(analyticsLocations[23]);
  const activityApplicationId = obj.getActivityApplicationId(quest);
  analyticsLocations = activityApplicationId(analyticsLocations[24])().analyticsLocations;
  let items = [closure_6];
  const stateFromStores = _require(analyticsLocations[10]).useStateFromStores(items, () => closure_1_6.getApplication(activityApplicationId));
  let obj2 = _require(analyticsLocations[10]);
  const tmp = analyticsLocations;
  const tmp3 = activityApplicationId;
  const canLaunchFrameResult = _require(analyticsLocations[25]).canLaunchFrame(stateFromStores);
  const React = canLaunchFrameResult;
  let obj3 = _require(analyticsLocations[25]);
  let canLaunchActivityResult = _require(analyticsLocations[26]).canLaunchActivity(quest);
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
    canLaunchActivityResult = tmp3(tmp[27])(supported_platforms);
    const tmp3Result = tmp3(tmp[27]);
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
  closure_5 = canLaunchActivityResult;
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
      const applications = activityApplicationId(analyticsLocations[28]).fetchApplications(items, false);
      const obj = activityApplicationId(analyticsLocations[28]);
    }
  }, items1);
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult, analyticsLocations];
  obj = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: React.useCallback(stateFromStores(function*() {
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
          return { value: "HermesInternal", done: null };
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
            } else if (closure_1_5) {
              if (closure_1_4) {
                let obj5 = v02(closure_1_2[29]);
                obj1 = { applicationId: null, surface: null, analyticsContext: null };
                obj1[0] = closure_1_3.id;
                obj1[1] = closure_1_11;
                let obj2 = { isStart: true, analyticsLocations: null };
                obj2[1] = closure_1_2;
                obj1[2] = obj2;
                v02 = 1;
                v0 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj5.launchFrame(obj1);
                return obj3;
              } else {
                let id;
                if (closure_1_3 != null) {
                  const bot = tmp6.bot;
                  if (bot != null) {
                    id = bot.id;
                  }
                }
                if (null != id) {
                  obj2 = v0(closure_1_2[30]);
                  const obj4 = { appId: null, botId: null, analyticsLocations: null };
                  obj4[0] = tmp6.id;
                  obj4[1] = tmp6.bot.id;
                  obj4[2] = [];
                  v02 = 2;
                  v0 = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = obj2.launchActivityInBotDM(obj4);
                  return obj5;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
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
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          v0 = tmp;
          throw tmp16;
        }
      }
    }), items2)
  };
  return obj;
};