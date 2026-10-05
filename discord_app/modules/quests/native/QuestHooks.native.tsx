// === Module 14892: QuestHooks ===

// Module 14892 (QuestHooks)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1096 */;
import CaptchaConstants from "CaptchaConstants" /* 5415 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6433 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7208 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import QuestDockHooks from "QuestDockHooks" /* 14893 */;
import useQuestForPlacement from "useQuestForPlacement" /* 14919 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore_mod from "ActionSheetStore" /* 4561 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import BountyStore from "BountyStore" /* 7186 */;
import QuestStore from "QuestStore" /* 7187 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, importDefault, key;

let c10;
let c9;
let react = react_mod;
let ActionSheetStore = ActionSheetStore_mod;
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: c9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = CaptchaConstants.CAPTCHA_MODAL_KEY;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const ThemeTypes = Constants.ThemeTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let num = 0;
  const tmp = closure_16();
  const obj = QuestDockHooks;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
}) : (() => {
  let num = 0;
  const tmp = closure_16();
  const obj = QuestDockHooks;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f68906 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest, arg1) => {
  let tmp6;
  let tmp9;
  _require = quest;
  const obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("isChannelFocused");
  const isChannelFocused = obj2.useIsChannelFocused();
  const obj3 = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj3.useCurrentNavigationRouteName();
  if (cResult[0] !== currentNavigationRouteName) {
    const obj4 = { name: currentNavigationRouteName };
    const tmpResult = require("NavigationRouteUtils");
    const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(obj4);
    cResult[0] = currentNavigationRouteName;
    cResult[1] = coerceGuildsRouteResult;
    tmp6 = coerceGuildsRouteResult;
  } else {
    tmp6 = cResult[1];
  }
  let tmp8 = null != tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === quest.quest) {
    let tmp11;
    let tmp14;
    let tmp13;
    if (cResult[4] === quest.type) {
      tmp11 = cResult[5];
    }
    const tmpResult3 = require("get initialized");
    let stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ActionSheetStore];
      class C {
        constructor() {
          key = key.getKey();
          return key === CAPTCHA_MODAL_KEY || key === closure_1_9;
        }
      }
      cResult[6] = items1;
      cResult[7] = C;
      tmp14 = C;
      tmp13 = items1;
    } else {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    let tmp16 = arg1;
    const tmpResult4 = require("get initialized");
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp13, tmp14);
    if (arg1) {
      tmp16 = !isChannelFocused;
    }
    if (tmp16) {
      if (!tmp8) {
        if (stateFromStores) {
          stateFromStores = stateFromStores1;
        }
        tmp8 = stateFromStores;
      }
      tmp16 = tmp8;
    }
    return tmp16;
  }
  const fn = function y() {
    const type = quest.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(quest.quest.id);
    } else {
      return false;
    }
  };
  cResult[3] = quest.quest;
  cResult[4] = quest.type;
  cResult[5] = fn;
  tmp11 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  let tmp = arg1;
  const obj = require("isChannelFocused");
  const isChannelFocused = obj.useIsChannelFocused();
  const obj2 = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj2.useCurrentNavigationRouteName();
  const obj3 = require("NavigationRouteUtils");
  let tmp4 = null != obj3.coerceGuildsRoute({ name: currentNavigationRouteName });
  const items = [QuestStore];
  const obj4 = require("get initialized");
  let stateFromStores = obj4.useStateFromStores(items, () => {
    type = type.type;
    const tmp = type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
  });
  const items1 = [ActionSheetStore];
  const obj5 = require("get initialized");
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    key = key.getKey();
    return key === CAPTCHA_MODAL_KEY || key === closure_1_9;
  });
  if (arg1) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  let closure_1;
  let questPreviewOverride;
  let tmp16;
  let tmp18;
  let tmp21;
  let tmp23;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = bounty;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(16);
  const obj2 = require("AdCreativeUtils");
  const questDockQuest = obj2.getQuestDockQuest(bounty);
  useIsWindowLargeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function n() {
      return null != questPreviewOverride.getQuestPreviewOverride(bounty(dependencyMap[13]).QuestContent.QUEST_BAR_MOBILE);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  let userStatus1;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7, tmp8);
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult7 = tmp(7183);
    isDismissedResult = tmpResult7.isDismissed(questDockQuest.userStatus, tmp(5626).QuestContent.QUEST_BAR_MOBILE);
  }
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      const claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult8 = tmp(10911);
  const isQuestExpired = tmpResult8.useIsQuestExpired(questDockQuest);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult9 = tmp(10912);
    const isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
    cResult[3] = isEligibleForQuests;
  }
  if (cResult[4] !== bounty) {
    const tmpResult10 = tmp(14903);
    const questDockAdCreativeId = tmpResult10.getQuestDockAdCreativeId(bounty);
    cResult[4] = bounty;
    cResult[5] = questDockAdCreativeId;
    tmp16 = questDockAdCreativeId;
  } else {
    tmp16 = cResult[5];
  }
  importDefault = tmp16;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[6] = items2;
    tmp18 = items2;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== tmp16) {
    class Q {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    const items3 = [tmp16];
    cResult[7] = tmp16;
    cResult[8] = Q;
    cResult[9] = items3;
    tmp21 = items3;
  } else {
    class Q {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult11 = tmp(504);
  const stateFromStores1 = tmpResult11.useStateFromStores(tmp18, Q, tmp21);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    const items4 = [BountyStore];
    cResult[10] = items4;
    tmp23 = items4;
  } else {
    class Q {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
  }
  if (cResult[11] === bounty.bounty) {
    class Q {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    if (cResult[14] !== bounty) {
      class Q {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
      tmp25[0] = bounty;
      cResult[14] = bounty;
      cResult[15] = tmp25;
    } else {
      class Q {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
    }
    const type = bounty.type;
    const tmpResult12 = tmp(504);
    const stateFromStores2 = tmpResult12.useStateFromStores(tmp23, R, tmp25);
    if (tmp(5630).AdCreativeType.NO_FILL === type) {
      class Q {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
      return false;
    } else {
      class Q {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
    }
  }
  class R {
    constructor() {
      const isBountyCompletedResult = bounty.type === AdCreativeType.AdCreativeType.BOUNTY && BountyStore.isBountyCompleted(bounty.bounty.id);
      return isBountyCompletedResult;
    }
  }
  cResult[11] = bounty.bounty;
  cResult[12] = bounty.type;
  cResult[13] = R;
}) : ((type) => {
  let questDockAdCreativeId;
  let questPreviewOverride;
  _require = type;
  const tmp = _require;
  const obj = require("AdCreativeUtils");
  const questDockQuest = obj.getQuestDockQuest(type);
  const tmp4 = questDockAdCreativeId(6433)();
  const items = [QuestStore];
  let userStatus1;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(type(dependencyMap[13]).QuestContent.QUEST_BAR_MOBILE), []);
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult = tmp(7183);
    isDismissedResult = tmpResult.isDismissed(questDockQuest.userStatus, tmp(5626).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult6 = tmp(10911);
  const isQuestExpired = tmpResult6.useIsQuestExpired(questDockQuest);
  const tmpResult7 = tmp(10912);
  let isEligibleForQuests = tmpResult7.getIsEligibleForQuests();
  const tmpResult8 = tmp(14903);
  questDockAdCreativeId = tmpResult8.getQuestDockAdCreativeId(type);
  const items1 = [QuestStore];
  const items2 = [questDockAdCreativeId];
  const tmpResult9 = tmp(504);
  const stateFromStores1 = tmpResult9.useStateFromStores(items1, () => {
    const isAdContentDismissedResult = null != questDockAdCreativeId && QuestStore.isAdContentDismissed(tmp);
    return isAdContentDismissedResult;
  }, items2);
  const items3 = [BountyStore];
  const items4 = [type];
  type = type.type;
  const tmpResult10 = tmp(504);
  const stateFromStores2 = tmpResult10.useStateFromStores(items3, () => {
    const isBountyCompletedResult = type.type === AdCreativeType.AdCreativeType.BOUNTY && BountyStore.isBountyCompleted(type.bounty.id);
    return isBountyCompletedResult;
  }, items4);
  if (tmp(5630).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(5630).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(5630).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      let tmp16;
      if (null == claimedAt) {
        tmp16 = null != questDockQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp4;
  }
});
let closure_15 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  if (typeof f68906 === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return closure_15(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (() => {
  if (typeof f68906 === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return closure_15(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_16 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== quest) {
    const tmpResult = AssetUtils;
    const questAsset = tmpResult.getQuestAsset(quest, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK);
    cResult[0] = quest;
    cResult[1] = questAsset;
    tmp4 = questAsset;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4.url;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] !== config) {
    const tmpResult = AssetUtils;
    const questAsset = tmpResult.getQuestAsset(config, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    if (cResult[3] === config.config.assets.questBarHeroVideo) {
      let tmp7;
      let replaced;
      if (cResult[4] === config.id) {
        tmp7 = cResult[5];
      }
      if (questAsset.isAnimated) {
        replaced = str.replace(AssetUtils.EXTENSION_RE, ".png");
      } else {
        replaced = str;
      }
      cResult[0] = config;
      cResult[1] = replaced;
      cResult[2] = tmp7;
      tmp4 = replaced;
      tmp5 = tmp7;
    }
    let asset = null;
    if (null != config.config.assets.questBarHeroVideo) {
      const tmpResult2 = AssetUtils;
      asset = tmpResult2.resolveAsset(config.id, config.config.assets.questBarHeroVideo);
    }
    cResult[3] = config.config.assets.questBarHeroVideo;
    cResult[4] = config.id;
    cResult[5] = asset;
    tmp7 = asset;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[6] === tmp4) {
    let tmp10;
    if (cResult[7] === tmp5) {
      tmp10 = cResult[8];
    }
    return tmp10;
  }
  const obj2 = { staticUrl: tmp4, videoAsset: tmp5 };
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = obj2;
  tmp10 = obj2;
}) : ((arg0) => {
  const config = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    let staticUrl;
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(config, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != config.config.assets.questBarHeroVideo) {
      const tmpResult = AssetUtils;
      videoAsset = tmpResult.resolveAsset(config.id, config.config.assets.questBarHeroVideo);
    }
    if (questAsset.isAnimated) {
      staticUrl = str.replace(AssetUtils.EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== config) {
    const obj2 = { config };
    const tmpResult = QuestTaskUtils;
    const result = tmpResult.hasWatchVideoOnMobileTasks(obj2);
    cResult[0] = config;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((config) => {
  const items = [config];
  return react.useMemo(() => {
    const obj = QuestTaskUtils;
    const obj2 = { config };
    return obj.hasWatchVideoOnMobileTasks(obj2);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let fn = () => {
  const obj = useQuestForPlacement;
  const adRefreshLoop = obj.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  if (typeof f68906 === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  let analyticsLocations;
  let closure_1;
  let closure_4;
  let tmp11;
  let tmp4;
  let tmp7;
  let tmp9;
  _require = config;
  const tmp2 = analyticsLocations;
  let obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== config) {
    const tmpResult = require("QuestTaskUtils");
    const activityApplicationId = tmpResult.getActivityApplicationId(config);
    cResult[0] = config;
    cResult[1] = activityApplicationId;
    tmp4 = activityApplicationId;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp6 = importDefault;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ApplicationStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function p() {
      return ApplicationStore.getApplication(closure_1);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores = tmpResult4.useStateFromStores(tmp7, tmp9);
  if (cResult[5] !== stateFromStores) {
    const tmpResult5 = require("canLaunchContextlessFrame");
    const result = tmpResult5.canLaunchContextlessFrame(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    tmp11 = result;
  } else {
    tmp11 = cResult[6];
  }
  react = tmp11;
  if (cResult[7] === tmp11) {
    if (cResult[8] === config) {
      let id;
      const tmp13 = cResult[9];
      if (stateFromStores != null) {
        let bot = stateFromStores.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (tmp13 === id) {
        let tmp18;
        let supported_platforms;
        const tmp16 = cResult[10];
        if (stateFromStores != null) {
          const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
          if (embeddedActivityConfig != null) {
            supported_platforms = embeddedActivityConfig.supported_platforms;
          }
        }
        if (tmp16 === supported_platforms) {
          tmp18 = cResult[11];
        }
        let closure_5 = tmp18;
        if (cResult[12] === tmp4) {
          if (cResult[13] === config.config.features) {
            let tmp29;
            let tmp30;
            if (cResult[14] === stateFromStores) {
              tmp29 = cResult[15];
              tmp30 = cResult[16];
            }
            const effect = react.useEffect(tmp29, tmp30);
            if (cResult[17] === analyticsLocations) {
              if (cResult[18] === tmp11) {
                if (cResult[19] === tmp18) {
                  let tmp33;
                  if (cResult[20] === stateFromStores) {
                    tmp33 = cResult[21];
                  }
                  if (cResult[22] === tmp18) {
                    if (cResult[23] === tmp33) {
                      let tmp36;
                      if (cResult[24] === stateFromStores) {
                        tmp36 = cResult[25];
                      }
                      return tmp36;
                    }
                  }
                  let obj2 = { isMobileActivityQuest: tmp18, questApplication: stateFromStores, launchMobileActivity: tmp33 };
                  class S {
                    constructor() {
                      let hasItem = null == stateFromStores && null != closure_1;
                      if (hasItem) {
                        const features = config.config.features;
                        hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
                      }
                      if (hasItem) {
                        const items = [closure_1];
                        const obj = ApplicationActionCreatorsDefault;
                        const applications = obj.fetchApplications(items, false);
                      }
                    }
                  }
                  cResult[22] = tmp18;
                  cResult[23] = tmp33;
                  cResult[24] = stateFromStores;
                  cResult[25] = obj2;
                  tmp36 = obj2;
                }
              }
            }
            _require = stateFromStores(function*() {
              let id;
              let obj3;
              let obj6;
              let obj7;
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else if (closure_1_5) {
                      if (closure_1_4) {
                        const obj5 = { applicationId: id.id, surface, analyticsContext: obj7 };
                        obj7 = { isStart: true, analyticsLocations };
                        c1 = 1;
                        c0 = 1;
                        const obj8 = { value: obj6.launchFrame(obj5), done: false };
                        obj6 = closure_2_1(analyticsLocations[31]);
                        return obj8;
                      } else {
                        id = undefined;
                        if (id != null) {
                          const bot = tmp5.bot;
                          if (bot != null) {
                            id = bot.id;
                          }
                        }
                        if (null != id) {
                          const obj9 = { appId: id.id, botId: id.bot.id, analyticsLocations: [] };
                          c1 = 2;
                          c0 = 1;
                          const obj10 = { value: obj3.launchActivityInBotDM(obj9), done: false };
                          obj3 = v3(analyticsLocations[32]);
                          return obj10;
                        }
                      }
                    }
                  } else if (1 === tmp3) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj11 = { value, done: true };
                      return obj11;
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
                  return { value: "IconComponent", done: null };
                } catch (tmp15) {
                  c0 = 3;
                  throw tmp15;
                }
              }
            });
            class S {
              constructor() {
                let hasItem = null == stateFromStores && null != closure_1;
                if (hasItem) {
                  const features = config.config.features;
                  hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
                }
                if (hasItem) {
                  const items = [closure_1];
                  const obj = ApplicationActionCreatorsDefault;
                  const applications = obj.fetchApplications(items, false);
                }
              }
            }
            cResult[17] = analyticsLocations;
            cResult[18] = tmp11;
            cResult[19] = tmp18;
            cResult[20] = stateFromStores;
            cResult[21] = tmp35;
            tmp33 = tmp35;
          }
        }
        class S {
          constructor() {
            let hasItem = null == stateFromStores && null != closure_1;
            if (hasItem) {
              const features = config.config.features;
              hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
            }
            if (hasItem) {
              const items = [closure_1];
              const obj = ApplicationActionCreatorsDefault;
              const applications = obj.fetchApplications(items, false);
            }
          }
        }
        const items1 = [stateFromStores, tmp4, config.config.features];
        cResult[12] = tmp4;
        cResult[13] = config.config.features;
        cResult[14] = stateFromStores;
        cResult[15] = S;
        cResult[16] = items1;
        tmp30 = items1;
        tmp29 = S;
      }
    }
  }
  const tmpResult6 = require("utils/QuestUtils");
  let canLaunchActivityResult = tmpResult6.canLaunchActivity(config);
  if (canLaunchActivityResult) {
    let features = config.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms1;
    const tmp6Result = tmp6(tmp2[29]);
    if (stateFromStores != null) {
      const embeddedActivityConfig2 = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig2 != null) {
        supported_platforms1 = embeddedActivityConfig2.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp6Result(supported_platforms1);
  }
  if (canLaunchActivityResult) {
    let tmp24 = tmp11;
    if (!tmp24) {
      let id1;
      if (stateFromStores != null) {
        const bot2 = stateFromStores.bot;
        if (bot2 != null) {
          id1 = bot2.id;
        }
      }
      tmp24 = null != id1;
    }
    canLaunchActivityResult = tmp24;
  }
  cResult[7] = tmp11;
  cResult[8] = config;
  let id2;
  if (stateFromStores != null) {
    const bot3 = stateFromStores.bot;
    if (bot3 != null) {
      id2 = bot3.id;
    }
  }
  cResult[9] = id2;
  let supported_platforms2;
  if (stateFromStores != null) {
    const embeddedActivityConfig3 = stateFromStores.embeddedActivityConfig;
    if (embeddedActivityConfig3 != null) {
      supported_platforms2 = embeddedActivityConfig3.supported_platforms;
    }
  }
  cResult[10] = supported_platforms2;
  cResult[11] = canLaunchActivityResult;
  tmp18 = canLaunchActivityResult;
}) : ((config) => {
  let analyticsLocations;
  _require = config;
  let obj = require("QuestTaskUtils");
  const activityApplicationId = obj.getActivityApplicationId(config);
  const tmp3 = activityApplicationId;
  const tmp = analyticsLocations;
  analyticsLocations = activityApplicationId(analyticsLocations[26])().analyticsLocations;
  let obj2 = require("get initialized");
  let items = [ApplicationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj3 = require("canLaunchContextlessFrame");
  const result = obj3.canLaunchContextlessFrame(stateFromStores);
  react = result;
  let obj4 = require("utils/QuestUtils");
  let canLaunchActivityResult = obj4.canLaunchActivity(config);
  if (canLaunchActivityResult) {
    let features = config.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    const tmp3Result = tmp3(tmp[29]);
    if (stateFromStores != null) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp3Result(supported_platforms);
  }
  if (canLaunchActivityResult) {
    let tmp11 = result;
    if (!tmp11) {
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
  const items1 = [stateFromStores, activityApplicationId, config.config.features];
  const effect = react.useEffect(() => {
    let hasItem = null == stateFromStores && null != activityApplicationId;
    if (hasItem) {
      const features = config.config.features;
      hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const obj = ApplicationActionCreatorsDefault;
      const applications = obj.fetchApplications(items, false);
    }
  }, items1);
  const items2 = [result, stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj5 = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: react.useCallback(stateFromStores(function*() {
      let obj7;
      let v2;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
            } else if (ActionSheetStore) {
              if (react) {
                const obj5 = { applicationId: stateFromStores.id, surface, analyticsContext: obj7 };
                obj7 = { isStart: true, analyticsLocations };
                const obj6 = v2(analyticsLocations[31]);
                v2 = 1;
                v3 = 1;
                const obj8 = { value: obj6.launchFrame(obj5), done: false };
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
                  const obj3 = v3(analyticsLocations[32]);
                  v3 = 1;
                  const obj10 = { value: obj3.launchActivityInBotDM(obj9), done: false };
                  return obj10;
                }
              }
            }
          } else if (1 === tmp3) {
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
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          v3 = 3;
          throw tmp15;
        }
      }
    }), items2)
  };
  return obj5;
});
const result2 = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = tmp3;
export const useMobileQuestDock = fn;
export const useIsMobileQuestDockVisibleToUser = tmp6;
export const useIsMobileQuestDockRenderedBase = tmp7;
export const useIsMobileQuestDockRendered = tmp8;
export const useQuestGameLogotypeAssetUrl = tmp9;
export const useQuestDockHeroAsset = tmp10;
export const useHasWatchVideoOnMobileTasks = tmp11;
export const useMobileActivityQuest = tmp12;