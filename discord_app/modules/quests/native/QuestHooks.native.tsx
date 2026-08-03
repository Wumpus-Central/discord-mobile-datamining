import closure_3 from "QuestsExperimentLocations";
import getIsEligibleForQuests from "getIsEligibleForQuests";
import setContent from "setContent";
import addApplication from "addApplication";
import initializeState from "initializeState";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";
import { ThemeTypes } from "sum";

let c9;
let metroImportAll;
const require = arg1;
function useIsMobileQuestDockRenderedBase(deliveredQuest) {
  const tmp2 = importDefault(7550)();
  const items = [initializeState];
  let userStatus;
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(callback(table[11]).QuestContent.QUEST_BAR_MOBILE), []);
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    let tmp3Result = tmp3(7066);
    isDismissedResult = tmp3Result.isDismissed(deliveredQuest.userStatus, tmp3(5102).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  tmp3Result = tmp3(10643);
  const isQuestExpired = tmp3Result.useIsQuestExpired(deliveredQuest);
  const obj = require(589) /* initialize */;
  const isEligibleForQuests = require(10644) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  if (stateFromStores) {
    if (!tmp8) {
      let tmp11 = null != deliveredQuest && !tmp2;
    }
    return tmp11;
  }
  tmp11 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp2;
}
function useIsMobileQuestDockRendered() {
  const obj = importDefault(7083);
  const items = [initializeState];
  let stateFromStores = stateFromStores2(589).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(stateFromStores2(5102).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = stateFromStores2(589);
  const items1 = [initializeState];
  let stateFromStores1 = stateFromStores2(589).useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = initializeState);
    let questForPlacement = stateFromStores2(7066).getQuestForPlacement(quests, questToDeliverForPlacement, stateFromStores2(5102).AdPlacement.MOBILE_HOME_DOCK_AREA);
    if (questForPlacement == null) {
      questForPlacement = null;
    }
    return questForPlacement;
  });
  const obj3 = stateFromStores2(589);
  const items2 = [initializeState];
  stateFromStores2 = stateFromStores2(589).useStateFromStores(items2, () => {
    const questAdDecisionByPlacement = questPreviewOverride.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(stateFromStores2(5102).AdPlacement.MOBILE_HOME_DOCK_AREA);
    if (value == null) {
      value = null;
    }
    return value;
  });
  const obj4 = stateFromStores2(589);
  const items3 = [initializeState];
  const items4 = [stateFromStores2];
  if (stateFromStores == null) {
    if (obj.useConfig({ location: "QuestMobileDock" }).enableNewRequestBehavior) {
      stateFromStores1 = obj5.useStateFromStores(items3, () => {
        let questId;
        if (stateFromStores2 != null) {
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
      }, items4);
    }
    stateFromStores = stateFromStores1;
  }
  return useIsMobileQuestDockRenderedBase(stateFromStores);
}
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: metroImportAll, QuestVariants: c9 } = QuestsExperimentLocations);
const result = require("setContent").fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRendered();
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
};
export const useMobileQuestDock = function useMobileQuestDock() {
  let obj = importDefault(7083);
  const items = [initializeState];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(stateFromStores(5102).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = stateFromStores(589);
  const items1 = [initializeState];
  let stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = initializeState);
    let questForPlacement = stateFromStores(7066).getQuestForPlacement(quests, questToDeliverForPlacement, stateFromStores(5102).AdPlacement.MOBILE_HOME_DOCK_AREA);
    if (questForPlacement == null) {
      questForPlacement = null;
    }
    return questForPlacement;
  });
  const obj3 = stateFromStores(589);
  if (stateFromStores == null) {
    if (obj.useConfig({ location: "QuestMobileDock" }).enableNewRequestBehavior) {
      stateFromStores1 = tmp3(stateFromStores(5102).AdPlacement.MOBILE_HOME_DOCK_AREA);
    }
    stateFromStores = stateFromStores1;
  }
  const items2 = [stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      let obj = { type: null };
      obj[0] = stateFromStores(outer1_2[14]).AdCreativeType.NO_FILL;
    } else {
      obj = { type: null, quest: null };
      obj[0] = stateFromStores(outer1_2[14]).AdCreativeType.QUEST;
      obj[1] = tmp;
    }
    return obj;
  }, items2);
};
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(deliveredQuest, isMobileQuestDockRenderedBase) {
  const _require = deliveredQuest;
  let tmp = isMobileQuestDockRenderedBase;
  const isChannelFocused = _require(10407).useIsChannelFocused();
  const obj = _require(10407);
  const currentNavigationRouteName = _require(4106).useCurrentNavigationRouteName();
  const obj2 = _require(4106);
  let tmp4 = null != _require(4106).coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = _require(4106);
  const items = [initializeState];
  let stateFromStores = _require(589).useStateFromStores(items, () => {
    let isClaimingRewardResult = null != closure_0;
    if (isClaimingRewardResult) {
      isClaimingRewardResult = outer1_7.isClaimingReward(tmp.id);
    }
    return isClaimingRewardResult;
  });
  const obj4 = _require(589);
  const items1 = [setContent];
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
export { useIsMobileQuestDockRendered };
export const useQuestGameLogotypeAssetUrl = function useQuestGameLogotypeAssetUrl(questCreative) {
  let closure_0 = questCreative;
  const items = [questCreative];
  return React.useMemo(() => questCreative(outer1_2[20]).getQuestAsset(questCreative, questCreative(outer1_2[20]).QuestAssetType.LOGO_TYPE, outer1_11.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(questCreative) {
  let closure_0 = questCreative;
  const items = [questCreative];
  return React.useMemo(() => {
    const questAsset = questCreative(outer1_2[20]).getQuestAsset(questCreative, questCreative(outer1_2[20]).QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != questCreative.config.assets.questBarHeroVideo) {
      videoAsset = tmp(tmp2[20]).resolveAsset(tmp3.id, tmp3.config.assets.questBarHeroVideo);
      const tmpResult = tmp(tmp2[20]);
    }
    if (questAsset.isAnimated) {
      let staticUrl = str.replace(tmp(tmp2[20]).EXTENSION_RE, ".png");
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
    let obj = config(outer1_2[21]);
    obj = { config };
    return obj.hasWatchVideoOnMobileTasks(obj);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  const _require = quest;
  let obj = _require(stateFromStores[21]);
  const activityApplicationId = obj.getActivityApplicationId(quest);
  let items = [addApplication];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_6.getApplication(activityApplicationId));
  let obj2 = _require(stateFromStores[10]);
  const tmp = stateFromStores;
  const canLaunchFrameResult = _require(stateFromStores[22]).canLaunchFrame(stateFromStores);
  const callback = canLaunchFrameResult;
  let obj3 = _require(stateFromStores[22]);
  let canLaunchActivityResult = _require(stateFromStores[23]).canLaunchActivity(quest);
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
    canLaunchActivityResult = activityApplicationId(tmp[24])(supported_platforms);
    const tmp8 = activityApplicationId(tmp[24]);
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
      const applications = activityApplicationId(stateFromStores[25]).fetchApplications(items, false);
      const obj = activityApplicationId(stateFromStores[25]);
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
            } else if (outer1_4) {
              if (outer1_3) {
                let obj5 = v02(outer1_2[26]);
                const obj1 = { applicationId: null };
                obj1[0] = outer1_2.id;
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
                  obj2 = v0(outer1_2[27]);
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
          return { value: "HermesInternal", done: null };
        } catch (tmp14) {
          v0 = tmp;
          throw tmp14;
        }
      }
    }), items2)
  };
  return obj;
};