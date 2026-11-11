// === Module 17580: QuestHooks ===

// Module 17580 (QuestHooks)
import QuestTypes from "QuestTypes" /* 5278 */;
import AdCreativeType from "AdCreativeType" /* 5282 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6992 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8765 */;
import AssetUtils from "AssetUtils" /* 10078 */;
import useQuestForPlacement from "useQuestForPlacement" /* 17608 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5490 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import BountyStore from "BountyStore" /* 8741 */;
import QuestStore from "QuestStore" /* 8742 */;
import PlayableStore from "PlayableStore" /* 17581 */;

const require = globalThis.__r;

require = fn;
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  _require = mobileQuestDock;
  const questDockQuest = require("AdCreativeUtils").getQuestDockQuest(mobileQuestDock);
  const tmp4 = questDockAdCreativeId(7705)();
  const obj = require("AdCreativeUtils");
  items = [QuestStore];
  let userStatus1;
  const stateFromStores = require("initialize").useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(mobileQuestDock(dependencyMap[12]).QuestContent.QUEST_BAR_MOBILE), []);
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    isDismissedResult = tmp(8738).isDismissed(questDockQuest.userStatus, tmp(5278).QuestContent.QUEST_BAR_MOBILE);
    const tmpResult = tmp(8738);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj2 = require("initialize");
  const isQuestExpired = require("hooks/QuestHooks").useIsQuestExpired(questDockQuest);
  const tmpResult7 = require("hooks/QuestHooks");
  let isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  const tmpResult8 = require("QuestsEligibility");
  questDockAdCreativeId = require("AdCreativeUtils").getQuestDockAdCreativeId(mobileQuestDock);
  const tmpResult9 = require("AdCreativeUtils");
  const items1 = [QuestStore];
  const items2 = [questDockAdCreativeId];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let isAdContentDismissedResult = null != questDockAdCreativeId;
    if (isAdContentDismissedResult) {
      isAdContentDismissedResult = QuestStore.isAdContentDismissed(tmp);
    }
    return isAdContentDismissedResult;
  }, items2);
  const tmpResult10 = require("initialize");
  const items3 = [BountyStore];
  const items4 = [mobileQuestDock];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    let isBountyCompletedResult = mobileQuestDock.type === AdCreativeType.AdCreativeType.BOUNTY;
    if (isBountyCompletedResult) {
      isBountyCompletedResult = BountyStore.isBountyCompleted(mobileQuestDock.bounty.id);
    }
    return isBountyCompletedResult;
  }, items4);
  const tmpResult11 = require("initialize");
  const items5 = [PlayableStore];
  const items6 = [mobileQuestDock];
  const type = mobileQuestDock.type;
  const stateFromStores3 = require("initialize").useStateFromStores(items5, () => {
    let isPlayableCompletedResult = mobileQuestDock.type === AdCreativeType.AdCreativeType.PLAYABLE;
    if (isPlayableCompletedResult) {
      isPlayableCompletedResult = PlayableStore.isPlayableCompleted(mobileQuestDock.playable.id);
    }
    return isPlayableCompletedResult;
  }, items6);
  if (require("AdCreativeType").AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(5282).AdCreativeType.BOUNTY === type) {
    if (isEligibleForQuests) {
      isEligibleForQuests = !stateFromStores1;
    }
    if (isEligibleForQuests) {
      isEligibleForQuests = !stateFromStores2;
    }
    if (isEligibleForQuests) {
      isEligibleForQuests = !tmp4;
    }
    return isEligibleForQuests;
  } else if (tmp(5282).AdCreativeType.PLAYABLE === type) {
    let tmp19 = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp19 = !stateFromStores1;
    }
    if (tmp19) {
      tmp19 = !stateFromStores3;
    }
    if (tmp19) {
      tmp19 = !tmp4;
    }
    return tmp19;
  } else if (tmp(5282).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      if (!tmp10) {
        let tmp17 = null != questDockQuest && !tmp4;
      }
      return tmp17;
    }
    tmp17 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
    const tmp18 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
  }
  const tmpResult12 = require("initialize");
}
const QuestConstants = fn(5275);
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_10, QuestVariants: closure_11 } = QuestConstants);
const CAPTCHA_MODAL_KEY = fn(6714).CAPTCHA_MODAL_KEY;
const ThemeTypes = fn(1083).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRenderedBase(useQuestForPlacement.useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  let num = 0;
  if (tmp) {
    num = obj2.useQuestDockExternalOffset();
  }
  return num;
}
export function useMobileQuestDock() {
  const adRefreshLoop = useQuestForPlacement.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  return useQuestForPlacement.useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE);
}
export function useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase) {
  _require = mobileQuestDock;
  let tmp = isMobileQuestDockRenderedBase;
  const isChannelFocused = require("isChannelFocused").useIsChannelFocused();
  const obj = require("isChannelFocused");
  const currentNavigationRouteName = require("NavigationRouteUtils").useCurrentNavigationRouteName();
  const obj2 = require("NavigationRouteUtils");
  let tmp4 = null != require("NavigationRouteUtils").coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = require("NavigationRouteUtils");
  items = [QuestStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(mobileQuestDock.quest.id);
    } else {
      return false;
    }
  });
  const obj4 = require("initialize");
  const items1 = [ActionSheetStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    key = key.getKey();
    let tmp2 = key === CAPTCHA_MODAL_KEY;
    if (!tmp2) {
      tmp2 = key === closure_1_10;
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
}
export { useIsMobileQuestDockRenderedBase };
export function useIsMobileQuestDockRendered() {
  return useIsMobileQuestDockRenderedBase(useQuestForPlacement.useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
}
export function useQuestGameLogotypeAssetUrl(quest) {
  closure_0 = quest;
  items = [quest];
  return noop.useMemo(() => AssetUtils.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url, items);
}
export function useQuestDockHeroAsset(quest) {
  items = [quest];
  return noop.useMemo(() => {
    const questAsset = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != quest.config.assets.questBarHeroVideo) {
      videoAsset = AssetUtils.resolveAsset(quest.id, quest.config.assets.questBarHeroVideo);
      const tmpResult = AssetUtils;
    }
    if (questAsset.isAnimated) {
      let staticUrl = str.replace(AssetUtils.EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
}
export function useHasWatchVideoOnMobileTasks(config) {
  items = [config];
  return noop.useMemo(() => QuestTaskUtils.hasWatchVideoOnMobileTasks({ config }), items);
}
export function useMobileActivityQuest(quest) {
  _require = quest;
  const activityApplicationId = require("QuestTaskUtils").getActivityApplicationId(quest);
  analyticsLocations = activityApplicationId(analyticsLocations[24])().analyticsLocations;
  let obj = require("QuestTaskUtils");
  const tmp = analyticsLocations;
  const tmp3 = activityApplicationId;
  items = [ApplicationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  const obj2 = require("initialize");
  let result = require("canLaunchContextlessFrame").canLaunchContextlessFrame(stateFromStores);
  let obj3 = require("canLaunchContextlessFrame");
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
    if (!result) {
      let id;
      if (stateFromStores != null) {
        const bot = stateFromStores.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      result = null != id;
    }
    canLaunchActivityResult = result;
  }
  noop = canLaunchActivityResult;
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
      items = [activityApplicationId];
      const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
    }
  }, items1);
  const items2 = [stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj4 = require("utils/QuestUtils");
  return {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: noop.useCallback(stateFromStores(function*() {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp7 = canLaunchActivityResult;
              if (canLaunchActivityResult) {
                tmp7 = null != stateFromStores;
              }
              if (tmp7) {
                const obj5 = { applicationId: stateFromStores.id, analyticsLocations };
                v1 = 1;
                c0 = 1;
                const obj6 = { value: v1(analyticsLocations[29]).launch(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp12) {
          c0 = tmp;
          throw tmp12;
        }
      }
    }), items2)
  };
}