// === Module 15091: QuestHooks ===

// Module 15091 (QuestHooks)
import QuestTypes from "QuestTypes" /* 5447 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7163 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import useQuestForPlacement from "useQuestForPlacement" /* 15116 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function useDeliveredDockCreative() {
  const items = [QuestStore];
  let stateFromStores = deliveredQuestId(deliveredBounty[10]).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(deliveredQuestId(deliveredBounty[11]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj = deliveredQuestId(deliveredBounty[10]);
  const tmp3 = QuestStore;
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
      const quests = QuestStore.quests;
      value = quests.get(tmp);
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
  return noop.useMemo(() => {
    if (null != stateFromStores) {
      let obj = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
    } else if (null != deliveredBounty) {
      obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items3);
}
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  const deliveredQuest = deliveredAdCreativeId(15102).getDeliveredQuest(mobileQuestDock);
  const tmp4 = useIsWindowLargeDefault();
  const obj = deliveredAdCreativeId(15102);
  const items = [QuestStore];
  let userStatus;
  const stateFromStores = deliveredAdCreativeId(504).useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(deliveredAdCreativeId(dependencyMap[11]).QuestContent.QUEST_BAR_MOBILE), []);
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
  const tmp5 = QuestStore;
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
      isAdContentDismissedResult = QuestStore.isAdContentDismissed(tmp);
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
const QuestConstants = fn(5444);
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_8, QuestVariants: closure_9 } = QuestConstants);
const CAPTCHA_MODAL_KEY = fn(11279).CAPTCHA_MODAL_KEY;
const MAIN_SURFACE = fn(9511).MAIN_SURFACE;
const ThemeTypes = fn(1085).ThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRenderedBase(useDeliveredDockCreative());
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
};
export const useMobileQuestDock = function useMobileQuestDock() {
  const adRefreshLoop = useQuestForPlacement.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  return useDeliveredDockCreative();
};
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase) {
  _require = mobileQuestDock;
  let tmp = isMobileQuestDockRenderedBase;
  const isChannelFocused = require("isChannelFocused").useIsChannelFocused();
  const obj = require("isChannelFocused");
  const currentNavigationRouteName = require("NavigationRouteUtils").useCurrentNavigationRouteName();
  const obj2 = require("NavigationRouteUtils");
  let tmp4 = null != require("NavigationRouteUtils").coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = require("NavigationRouteUtils");
  const items = [QuestStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
    tmp = mobileQuestDock;
  });
  const obj4 = require("initialize");
  const items1 = [ActionSheetStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    key = key.getKey();
    let tmp2 = key === CAPTCHA_MODAL_KEY;
    if (!tmp2) {
      tmp2 = key === closure_1_8;
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
  return noop.useMemo(() => AssetUtils.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(quest) {
  const items = [quest];
  return noop.useMemo(() => {
    const questAsset = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != quest.config.assets.questBarHeroVideo) {
      videoAsset = tmp(11285).resolveAsset(tmp3.id, tmp3.config.assets.questBarHeroVideo);
      const tmpResult = tmp(11285);
    }
    if (questAsset.isAnimated) {
      let staticUrl = str.replace(tmp(11285).EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
};
export const useHasWatchVideoOnMobileTasks = function useHasWatchVideoOnMobileTasks(config) {
  const items = [config];
  return noop.useMemo(() => {
    const obj = { config };
    return obj.hasWatchVideoOnMobileTasks(obj);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  _require = quest;
  let obj = require("QuestTaskUtils");
  const activityApplicationId = obj.getActivityApplicationId(quest);
  analyticsLocations = activityApplicationId(analyticsLocations[24])().analyticsLocations;
  let items = [ApplicationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj2 = require("initialize");
  const tmp = analyticsLocations;
  const tmp3 = activityApplicationId;
  const canLaunchFrameResult = require("canLaunchFrame").canLaunchFrame(stateFromStores);
  noop = canLaunchFrameResult;
  let obj3 = require("canLaunchFrame");
  let canLaunchActivityResult = require("utils/QuestUtils").canLaunchActivity(quest);
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
  ActionSheetStore = canLaunchActivityResult;
  const items1 = [stateFromStores, activityApplicationId, quest.config.features];
  const effect = noop.useEffect(() => {
    let hasItem = null == stateFromStores;
    if (hasItem) {
      hasItem = null != activityApplicationId;
    }
    if (hasItem) {
      const features = quest.config.features;
      hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
    }
  }, items1);
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult, analyticsLocations];
  obj = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: noop.useCallback(stateFromStores(function*(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else if (canLaunchActivityResult) {
              if (canLaunchFrameResult) {
                let obj5 = v2(9507);
                const obj1 = { applicationId: stateFromStores.id, surface, analyticsContext: null };
                let obj2 = { isStart: true, analyticsLocations };
                obj1.analyticsContext = obj2;
                v2 = 1;
                v3 = 1;
                const obj3 = { value: obj5.launchFrame(obj1), done: false };
                return obj3;
              } else {
                let id;
                if (stateFromStores != null) {
                  const bot = tmp6.bot;
                  if (bot != null) {
                    id = bot.id;
                  }
                }
                if (null != id) {
                  obj2 = v3(11519);
                  const obj4 = { appId: tmp6.id, botId: tmp6.bot.id, analyticsLocations: [] };
                  v2 = 2;
                  v3 = 1;
                  obj5 = { value: obj2.launchActivityInBotDM(obj4), done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          v3 = tmp;
          throw tmp16;
        }
      }
    }), items2)
  };
  return obj;
};