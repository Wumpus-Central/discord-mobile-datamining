// discord_app/modules/quests/native/QuestUtils.native.tsx
import closure_3 from "jsxProd";
import "module_8391";
import zustandStore from "zustandStore";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { UserSettingsSections } from "ME";
import jsxProd from "isSponsoredPlayQuest";
import { createStandardNavigationFactories } from "../../../../_runtime/01481_createStandardNavigationFactories.js";
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { useAlertStore } from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { Linking } from "../../../lib/native/Linking.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { getRootNavigationRef } from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import { _manuallyStartConsoleQuest } from "../QuestActionCreators.tsx";
import { _getDefaultRewardName } from "../utils/QuestRewardUtils.tsx";
import { isSponsoredPlayQuest } from "../utils/QuestUtils.tsx";

let c10;
let c5;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function openRewardClaimBottomSheet(arg0) {
  let questContent;
  let questContentPosition;
  let questId;
  let sourceQuestContent;
  ({ questId, questContent, questContentPosition, sourceQuestContent } = arg0);
  return ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(11103, dependencyMap.paths), closure_6, { questId, questContent, questContentPosition, sourceQuestContent });
}
function viewReward(quest) {
  let onSuccess;
  let product;
  let questContent;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  ({ product, questContent, questContentPosition, onSuccess, sourceQuestContent } = quest);
  let obj = _getDefaultRewardName;
  if (obj.hasQuestRewardCode(quest.config)) {
    obj = { questId: null, questContent: null, questContentPosition: null, sourceQuestContent: null };
    obj[0] = quest.id;
    obj[1] = questContent;
    obj[2] = questContentPosition;
    obj[3] = sourceQuestContent;
    ACTION_SHEET_HEIGHT_HALF.openLazy(tmp(1988)(11103, dependencyMap.paths), closure_6, obj);
    const obj7 = ACTION_SHEET_HEIGHT_HALF;
  } else {
    let tmpResult = tmp(10410);
    if (tmpResult.hasVirtualCurrencyReward(quest.config)) {
      tmpResult = tmp(11110);
      obj = { quest: null };
      obj[0] = quest;
      const result = tmpResult.openQuestOrbsRewardModal(obj);
    } else {
      const obj1 = { quest: null, product: null, onSuccess: null };
      obj1[0] = quest;
      obj1[1] = product;
      obj1[2] = onSuccess;
      const result1 = tmp(11116).openQuestCollectibleRewardModal(obj1);
      const tmpResult1 = tmp(11116);
    }
  }
}
function _handleRewardClaim() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let callback = tmp5;
              let logger;
              let obj1 = { location: null };
              obj1[0] = constants.QUEST_HOME_MOBILE;
              logger = logger(outer1_2[13]).getQuestLogger(obj1);
              const obj7 = logger(outer1_2[13]);
              let c4 = 1;
              const defaultPlatform = logger(outer1_2[10]).getDefaultPlatform(logger.config);
              const obj9 = logger(outer1_2[10]);
              constants = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = logger(outer1_2[14]).claimQuestReward(logger.id, defaultPlatform, logger(outer1_2[15]).QuestContent.QUEST_HOME_MOBILE);
              return obj2;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            callback = closure_3;
            logger.error("Error claiming reward", callback);
            obj1 = callback(4002);
            const obj3 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
            const intl = logger(1236).intl;
            obj3[1] = intl.string(logger(1236).t.CKsXk3);
            obj3[2] = callback(8385);
            obj1.open(obj3);
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp24;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  });
  const _handleRewardClaim = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleRewardClaimThenView() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp4;
              let callback = 0;
              let lib;
              callback = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              ({ quest: c0, questContent: c1, questContentPosition: c2, product: c3, hideActionSheet: c4, currentUserHasVerifiedEmailOrPhone: c5, currentUserHasVerifiedEmail: c6, onSuccess: c7, sourceQuestContent: c8 } = lib);
              let closure_9;
              c3 = 1;
              c4 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (true === c4) {
                let obj3 = callback(4270);
                obj3.hideActionSheet();
              }
              if (c5) {
                if (!c6) {
                  let obj4 = lib(10410);
                }
                if (obj9.hasQuestRewardCode(lib.config)) {
                  const obj2 = { questId: null, questContent: null, questContentPosition: null, sourceQuestContent: null };
                  obj2[0] = lib.id;
                  obj2[1] = callback;
                  obj2[2] = dependencyMap;
                  obj2[3] = c8;
                  callback2(obj2);
                  c4 = 3;
                  return { value: true, done: true };
                } else {
                  c3 = 2;
                  c4 = 1;
                  obj3 = { value: null, done: false };
                  obj3[0] = (function handleRewardClaim(c0) {
                    const self = this;
                    const apply = closure_15.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(lib);
                  return obj3;
                }
                obj9 = lib(10410);
              }
              if (!c6) {
                let obj5 = callback(8391);
                obj5.open();
              }
              let obj6 = callback(4002);
              obj4 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
              const intl = lib(1236).intl;
              obj4[1] = intl.string(lib(1236).t["HZlu0+"]);
              obj4[2] = callback(8385);
              obj6.open(obj4);
              c4 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_9 = arg1;
            if (closure_9) {
              obj = { quest: null, product: null, questContent: null, questContentPosition: null, onSuccess: null, sourceQuestContent: null };
              obj[0] = lib;
              obj[1] = c3;
              obj[2] = callback;
              obj[3] = dependencyMap;
              obj[4] = c7;
              obj[5] = c8;
              callback3(obj);
            }
            c4 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = closure_9;
            return obj6;
          }
        } catch (tmp58) {
          c4 = tmp;
          throw tmp58;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleRewardClaimThenView = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ QuestsExperimentLocations: c5, QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_6, QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY: error, QuestVariants: metroImportAll } = QuestsExperimentLocations);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let result = require("zustandStore").fileFinishedImporting("modules/quests/native/QuestUtils.native.tsx");

export const openRewardDetailsBottomSheet = function openRewardDetailsBottomSheet(questId) {
  return ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(11101, dependencyMap.paths), closure_7, { questId: questId.questId });
};
export { viewReward };
export const handleRewardClaimThenView = function handleRewardClaimThenView(arg0) {
  const self = this;
  const apply = _handleRewardClaimThenView.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const openQuestHome = function openQuestHome(scrollToQuestId) {
  scrollToQuestId = scrollToQuestId.scrollToQuestId;
  let flag = scrollToQuestId.mergeExistingRoutes;
  if (flag === undefined) {
    flag = false;
  }
  let sort = scrollToQuestId.sort;
  if (sort === undefined) {
    sort = null;
  }
  let filter = scrollToQuestId.filter;
  if (filter === undefined) {
    filter = null;
  }
  let obj = scrollToQuestId(sort[20]);
  if (obj.getIsEligibleForQuests()) {
    obj = { questId: null, fromContent: null };
    obj[0] = scrollToQuestId;
    obj[1] = scrollToQuestId.fromContent;
    const result = scrollToQuestId(tmp4[21]).setQuestHomeUtmContext(obj);
    flag(tmp4[22])();
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = scrollToQuestId(sort[23]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          obj = { sort: null, filter: null, scrollToQuestId: null };
          obj[0] = sort;
          obj[1] = filter;
          let str = scrollToQuestId;
          if (scrollToQuestId == null) {
            str = "";
          }
          obj[2] = str;
          outer1_4.setState(obj);
          obj = { screen: null };
          obj[0] = outer1_9.QUESTS;
          if (flag) {
            const obj1 = {};
            const merged = Object.assign(obj);
            obj1.pop = true;
            rootNavigationRef.navigate("settings", obj1);
          } else {
            scrollToQuestId(sort[24]).openUserSettings(obj);
            const tmpResult = scrollToQuestId(sort[24]);
          }
        }
      }
    }, 1);
    const tmp3Result = scrollToQuestId(tmp4[21]);
  }
};
export const isHeroVideoSupported = function isHeroVideoSupported(memo) {
  if (obj.isIOS()) {
    let tmp2 = tmp;
  } else {
    tmp2 = tmp;
    if (!tmp) {
      tmp2 = "video/webm" === memo.mimetype;
    }
  }
  return tmp2;
};
export const openDiscordQuestsFAQ = function openDiscordQuestsFAQ() {
  Linking.openURL("https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5");
};
export const getPrimaryCtaIcon = function getPrimaryCtaIcon(quest, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = isSponsoredPlayQuest;
  if (obj.canLaunchActivity(quest)) {
    const features = quest.config.features;
    if (features.includes(constants.MOBILE_ACTIVITY_QUEST)) {
      let num = 0;
      if (flag) {
        num = Themes.space.PX_4;
      }
      obj = { marginRight: null };
      obj[0] = num;
      const features2 = quest.config.features;
      if (features2.includes(tmp3.CLOUD_GAMING_ACTIVITY)) {
        obj = { size: "sm", style: null, color: null };
        obj[1] = obj;
        obj[2] = Themes.colors.WHITE;
        let tmp5Result = tmp5(tmp(11117).CloudIcon, obj);
      } else {
        const obj1 = { size: "sm", style: null, color: null };
        obj1[1] = obj;
        obj1[2] = Themes.colors.WHITE;
        tmp5Result = tmp5(tmp(8702).GameControllerIcon, obj1);
      }
      return tmp5Result;
    }
    tmp3 = constants;
  }
};
export const showQuestUnavailableAlert = function showQuestUnavailableAlert() {
  let obj = useAlertStore;
  obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Lhpq2P);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.iyF4WB);
  obj = { children: null };
  const obj1 = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.H0vjGc);
  obj1[1] = _manuallyStartConsoleQuest.fetchCurrentQuests;
  const items = [callback2(getAlertModalItemKey.AlertActionButton, obj1), ];
  const obj2 = { text: null, variant: "secondary" };
  const intl4 = getSystemLocale.intl;
  obj2[0] = intl4.string(getSystemLocale.t["6XS10x"]);
  items[1] = callback2(getAlertModalItemKey.AlertActionButton, obj2);
  obj[0] = items;
  obj[2] = callback3(closure_11, obj);
  obj.openAlert("quest-unavailable", callback2(getAlertModalItemKey.AlertModal, obj));
};
export const dismissOverlayScreens = function dismissOverlayScreens() {
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const routes = rootState.routes;
      const found = routes.filter((name) => {
        let tmp = "you" !== name.name;
        if (tmp) {
          tmp = "settings" !== name.name;
        }
        return tmp;
      });
      if (found.length < rootState.routes.length) {
        const CommonActions = createStandardNavigationFactories.CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj.routes = found;
        obj.index = found.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
      }
    }
  }
};