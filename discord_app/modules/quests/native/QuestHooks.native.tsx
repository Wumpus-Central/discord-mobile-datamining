// discord_app/modules/quests/native/QuestHooks.native.tsx
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import useQuestForPlacement from "../useQuestForPlacement.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import BountyStore from "../BountyStore.tsx";
import QuestStore from "../QuestStore.tsx";

const require = globalThis.__r;

require = fn;
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  _require = mobileQuestDock;
  const questDockQuest = require("AdCreativeUtils").getQuestDockQuest(mobileQuestDock);
  const tmp4 = questDockAdCreativeId(7112)();
  const obj = require("AdCreativeUtils");
  const items = [QuestStore];
  let userStatus1;
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () =>
      null !=
      questPreviewOverride.getQuestPreviewOverride(mobileQuestDock(dependencyMap[11]).QuestContent.QUEST_BAR_MOBILE),
    [],
  );
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    isDismissedResult = tmp(7842).isDismissed(questDockQuest.userStatus, tmp(6784).QuestContent.QUEST_BAR_MOBILE);
    const tmpResult = tmp(7842);
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
  const tmpResult6 = require("hooks/QuestHooks");
  let isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  const tmpResult7 = require("QuestsEligibility");
  questDockAdCreativeId = require("AdCreativeUtils").getQuestDockAdCreativeId(mobileQuestDock);
  const tmpResult8 = require("AdCreativeUtils");
  const items1 = [QuestStore];
  const items2 = [questDockAdCreativeId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      let isAdContentDismissedResult = null != questDockAdCreativeId;
      if (isAdContentDismissedResult) {
        isAdContentDismissedResult = QuestStore.isAdContentDismissed(tmp);
      }
      return isAdContentDismissedResult;
    },
    items2,
  );
  const tmpResult9 = require("initialize");
  const items3 = [BountyStore];
  const items4 = [mobileQuestDock];
  const type = mobileQuestDock.type;
  const stateFromStores2 = require("initialize").useStateFromStores(
    items3,
    () => {
      let isBountyCompletedResult = mobileQuestDock.type === AdCreativeType.AdCreativeType.BOUNTY;
      if (isBountyCompletedResult) {
        isBountyCompletedResult = BountyStore.isBountyCompleted(mobileQuestDock.bounty.id);
      }
      return isBountyCompletedResult;
    },
    items4,
  );
  if (require("AdCreativeType").AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(6788).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(6788).AdCreativeType.PLAYABLE === type) {
    let tmp18 = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp18 = !stateFromStores1;
    }
    if (tmp18) {
      tmp18 = !tmp4;
    }
    return tmp18;
  } else if (tmp(6788).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      if (!tmp10) {
        let tmp16 = null != questDockQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
    const tmp17 =
      null != questDockQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
  }
  const tmpResult10 = require("initialize");
}
const QuestConstants = fn(6781);
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = fn(6546).CAPTCHA_MODAL_KEY;
const ThemeTypes = fn(1083).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRenderedBase(
    useQuestForPlacement.useDeliveredCreativeForPlacement(
      QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA,
      QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    ),
  );
  let num = 0;
  if (tmp) {
    num = obj2.useQuestDockExternalOffset();
  }
  return num;
}
export function useMobileQuestDock() {
  const adRefreshLoop = useQuestForPlacement.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  return useQuestForPlacement.useDeliveredCreativeForPlacement(
    QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA,
    QuestTypes.QuestContent.QUEST_BAR_MOBILE,
  );
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
  const items = [QuestStore];
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
      tmp2 = key === closure_1_9;
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
  return useIsMobileQuestDockRenderedBase(
    useQuestForPlacement.useDeliveredCreativeForPlacement(
      QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA,
      QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    ),
  );
}
export function useQuestGameLogotypeAssetUrl(quest) {
  closure_0 = quest;
  const items = [quest];
  return noop.useMemo(
    () => AssetUtils.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url,
    items,
  );
}
export function useQuestDockHeroAsset(quest) {
  const items = [quest];
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
  const items = [config];
  return noop.useMemo(() => QuestTaskUtils.hasWatchVideoOnMobileTasks({ config }), items);
}
export function useMobileActivityQuest(quest) {
  _require = quest;
  const activityApplicationId = require("QuestTaskUtils").getActivityApplicationId(quest);
  analyticsLocations = activityApplicationId(analyticsLocations[23])().analyticsLocations;
  let obj = require("QuestTaskUtils");
  const tmp = analyticsLocations;
  const tmp3 = activityApplicationId;
  let items = [ApplicationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ApplicationStore.getApplication(activityApplicationId),
  );
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
    canLaunchActivityResult = tmp3(tmp[26])(supported_platforms);
    const tmp3Result = tmp3(tmp[26]);
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
      const items = [activityApplicationId];
      const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
    }
  }, items1);
  const items2 = [stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj4 = require("utils/QuestUtils");
  return {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: noop.useCallback(
      stateFromStores(function* () {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                  const obj6 = { value: v1(analyticsLocations[28]).launch(obj5), done: false };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          } catch (tmp12) {
            c0 = tmp;
            throw tmp12;
          }
        }
      }),
      items2,
    ),
  };
}
