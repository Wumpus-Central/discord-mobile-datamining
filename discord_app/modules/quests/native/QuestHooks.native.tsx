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
function useDeliveredDockCreative() {
  const items = [QuestStore];
  let stateFromStores = deliveredQuestId(deliveredBounty[11]).useStateFromStores(
    items,
    () =>
      questPreviewOverride.getQuestPreviewOverride(deliveredQuestId(deliveredBounty[12]).QuestContent.QUEST_BAR_MOBILE),
    [],
  );
  let obj = deliveredQuestId(deliveredBounty[11]);
  const adDecisionForPlacement = deliveredQuestId(deliveredBounty[13]).useAdDecisionForPlacement(
    deliveredQuestId(deliveredBounty[12]).AdPlacement.MOBILE_HOME_DOCK_AREA,
  );
  let obj2 = deliveredQuestId(deliveredBounty[13]);
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  deliveredQuestId = deliveredQuestId(deliveredBounty[14]).getDeliveredQuestId(creative);
  let obj3 = deliveredQuestId(deliveredBounty[14]);
  const items1 = [QuestStore];
  const items2 = [deliveredQuestId];
  const stateFromStores1 = deliveredQuestId(deliveredBounty[11]).useStateFromStores(
    items1,
    () => {
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
    },
    items2,
  );
  let tmp9 = null;
  if (null != stateFromStores1) {
    tmp9 = null;
    if (!tmpResult3.isQuestExpired(stateFromStores1)) {
      tmp9 = stateFromStores1;
    }
    tmpResult3 = tmp(tmp2[15]);
  }
  if (stateFromStores == null) {
    stateFromStores = tmp9;
  }
  const tmpResult = deliveredQuestId(deliveredBounty[11]);
  let creative1;
  if (adDecisionForPlacement != null) {
    creative1 = adDecisionForPlacement.creative;
  }
  deliveredBounty = deliveredQuestId(deliveredBounty[14]).getDeliveredBounty(creative1);
  const items3 = [stateFromStores, deliveredBounty];
  return noop.useMemo(() => {
    if (null != stateFromStores) {
      const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
      let obj = obj2;
    } else if (null != deliveredBounty) {
      const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
      obj = obj3;
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items3);
}
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  _require = mobileQuestDock;
  const deliveredQuest = require("QuestDockCreativeContext").getDeliveredQuest(mobileQuestDock);
  const tmp4 = deliveredAdCreativeId(7274)();
  const obj = require("QuestDockCreativeContext");
  const items = [QuestStore];
  let userStatus1;
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () =>
      null !=
      questPreviewOverride.getQuestPreviewOverride(mobileQuestDock(dependencyMap[12]).QuestContent.QUEST_BAR_MOBILE),
    [],
  );
  if (deliveredQuest != null) {
    userStatus1 = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    isDismissedResult = tmp(8020).isDismissed(deliveredQuest.userStatus, tmp(5750).QuestContent.QUEST_BAR_MOBILE);
    const tmpResult = tmp(8020);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    const userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj2 = require("initialize");
  const isQuestExpired = require("hooks/QuestHooks").useIsQuestExpired(deliveredQuest);
  const tmpResult6 = require("hooks/QuestHooks");
  let isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  const tmpResult7 = require("QuestsEligibility");
  deliveredAdCreativeId = require("QuestDockCreativeContext").getDeliveredAdCreativeId(mobileQuestDock);
  const tmpResult8 = require("QuestDockCreativeContext");
  const items1 = [QuestStore];
  const items2 = [deliveredAdCreativeId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      let isAdContentDismissedResult = null != deliveredAdCreativeId;
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
  } else if (tmp(5754).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(5754).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      if (!tmp10) {
        let tmp16 = null != deliveredQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
    const tmp17 =
      null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
  }
  const tmpResult10 = require("initialize");
}
const QuestConstants = fn(5747);
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = fn(5175).CAPTCHA_MODAL_KEY;
const MAIN_SURFACE = fn(9390).MAIN_SURFACE;
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
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(
  mobileQuestDock,
  isMobileQuestDockRenderedBase,
) {
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
};
export { useIsMobileQuestDockRenderedBase };
export const useIsMobileQuestDockRendered = function useIsMobileQuestDockRendered() {
  return useIsMobileQuestDockRenderedBase(useDeliveredDockCreative());
};
export const useQuestGameLogotypeAssetUrl = function useQuestGameLogotypeAssetUrl(quest) {
  closure_0 = quest;
  const items = [quest];
  return noop.useMemo(
    () => AssetUtils.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url,
    items,
  );
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(quest) {
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
};
export const useHasWatchVideoOnMobileTasks = function useHasWatchVideoOnMobileTasks(config) {
  const items = [config];
  return noop.useMemo(() => QuestTaskUtils.hasWatchVideoOnMobileTasks({ config }), items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  _require = quest;
  const activityApplicationId = require("QuestTaskUtils").getActivityApplicationId(quest);
  analyticsLocations = activityApplicationId(analyticsLocations[25])().analyticsLocations;
  let obj = require("QuestTaskUtils");
  const tmp = analyticsLocations;
  const tmp3 = activityApplicationId;
  let items = [ApplicationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ApplicationStore.getApplication(activityApplicationId),
  );
  let obj2 = require("initialize");
  const canLaunchFrameResult = require("canLaunchFrame").canLaunchFrame(stateFromStores);
  noop = canLaunchFrameResult;
  const obj3 = require("canLaunchFrame");
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
    canLaunchActivityResult = tmp3(tmp[28])(supported_platforms);
    const tmp3Result = tmp3(tmp[28]);
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
  let obj4 = require("utils/QuestUtils");
  return {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: noop.useCallback(
      stateFromStores(function* () {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
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
                const obj4 = { value, done: true };
                return obj4;
              } else if (canLaunchActivityResult) {
                if (canLaunchFrameResult) {
                  const obj5 = { applicationId: stateFromStores.id, surface, analyticsContext: null };
                  const obj7 = { isStart: true, analyticsLocations };
                  obj5.analyticsContext = obj7;
                  v2 = 1;
                  v3 = 1;
                  const obj8 = { value: v2(9650).launchFrame(obj5), done: false };
                  return obj8;
                } else {
                  let id;
                  if (stateFromStores != null) {
                    const bot = stateFromStores.bot;
                    if (bot != null) {
                      id = bot.id;
                    }
                  }
                  if (null != id) {
                    const obj9 = { appId: stateFromStores.id, botId: stateFromStores.bot.id, analyticsLocations: [] };
                    v2 = 2;
                    v3 = 1;
                    const obj10 = { value: v3(11852).launchActivityInBotDM(obj9), done: false };
                    return obj10;
                  }
                }
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj11 = { value, done: true };
                return obj11;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            v3 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp16) {
            v3 = tmp;
            throw tmp16;
          }
        }
      }),
      items2,
    ),
  };
};
