// === Module 12108: QuestUtils ===

// Module 12108 (QuestUtils)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Link from "Link" /* 1485 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import LinkingDefault from "Linking" /* 4520 */;
import RootNavigationRef from "RootNavigationRef" /* 4687 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import useAlertStore from "useAlertStore" /* 5197 */;
import AlertModal from "AlertModal" /* 5201 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import openUserSettings from "openUserSettings" /* 7712 */;
import getQuestLogger from "getQuestLogger" /* 8032 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8045 */;
import GameControllerIcon from "GameControllerIcon" /* 9429 */;
import QuestActionCreators from "QuestActionCreators" /* 11628 */;
import QuestRewardUtils from "QuestRewardUtils" /* 11639 */;
import QuestOrbsRewardModal from "QuestOrbsRewardModal" /* 12120 */;
import openQuestCollectibleRewardModal from "openQuestCollectibleRewardModal" /* 12128 */;
import CloudIcon from "CloudIcon" /* 12129 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 12109 */;

require = fn;
function openRewardClaimBottomSheet(arg0) {
  ({ questId, questContent, questContentPosition, sourceQuestContent } = arg0);
  return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12113, dependencyMap.paths), timestampProducer, { questId, questContent, questContentPosition, sourceQuestContent });
}
function viewReward(quest) {
  quest = quest.quest;
  ({ product, questContent, questContentPosition, onSuccess, sourceQuestContent } = quest);
  if (obj.hasQuestRewardCode(quest.config)) {
    const obj2 = { questId: quest.id, questContent, questContentPosition, sourceQuestContent };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12113, dependencyMap.paths), timestampProducer, obj2);
  } else {
    if (tmpResult.hasVirtualCurrencyReward(quest.config)) {
      const obj3 = { quest };
      const result = QuestOrbsRewardModal.openQuestOrbsRewardModal(obj3);
      const tmpResult3 = QuestOrbsRewardModal;
    } else {
      const obj4 = { quest, product, onSuccess };
      const result1 = openQuestCollectibleRewardModal.openQuestCollectibleRewardModal(obj4);
      const tmpResult4 = openQuestCollectibleRewardModal;
    }
    tmpResult = QuestRewardUtils;
  }
  obj = QuestRewardUtils;
}
let closure_15 = async function _handleRewardClaim(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          let questLogger;
          const obj5 = { location: constants.QUEST_HOME_MOBILE };
          questLogger = getQuestLogger.getQuestLogger(obj5);
          c4 = 1;
          const defaultPlatform = QuestRewardUtils.getDefaultPlatform(_require.config);
          c5 = 2;
          c6 = 1;
          const obj6 = { value: QuestActionCreators.claimQuestReward(_require.id, defaultPlatform, QuestTypes.QuestContent.QUEST_HOME_MOBILE), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_1 = closure_3;
        questLogger.error("Error claiming reward", closure_129_1);
        const obj8 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
        const intl = closure_130_0(closure_130_2[17]).intl;
        obj8.content = intl.string(closure_130_0(closure_130_2[17]).t.CKsXk3);
        obj8.icon = closure_130_1(closure_130_2[18]);
        closure_130_1(closure_130_2[16]).open(obj8);
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
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
        c5 = tmp;
      }
    }
  }
};
let closure_16 = async function _handleRewardClaimThenView(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp4;
          c1 = 0;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          ({ quest: closure_129_0, questContent: closure_129_1, questContentPosition: closure_129_2, product: closure_129_3, hideActionSheet: closure_129_4, currentUserHasVerifiedEmailOrPhone: closure_129_5, currentUserHasVerifiedEmail: closure_129_6, onSuccess: closure_129_7, sourceQuestContent: closure_129_8 } = closure_0);
          closure_129_9 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          if (true === closure_129_4) {
            closure_130_1(closure_130_2[6]).hideActionSheet();
            const obj4 = closure_130_1(closure_130_2[6]);
          }
          if (closure_129_5) {
            if (!closure_129_6) {
              closure_130_0(closure_130_2[10]);
            }
            if (obj9.hasQuestRewardCode(closure_129_0.config)) {
              const obj10 = { questId: closure_129_0.id, questContent: closure_129_1, questContentPosition: closure_129_2, sourceQuestContent: closure_129_8 };
              closure_130_13(obj10);
              c4 = 3;
              return { value: true, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj11 = {
                value: (function handleRewardClaim() {
                              const self = this;
                              const apply = closure_1_15.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_129_0),
                done: false
              };
              return obj11;
            }
            obj9 = closure_130_0(closure_130_2[10]);
          }
          if (!closure_129_6) {
            closure_130_1(closure_130_2[19]).open();
            const obj6 = closure_130_1(closure_130_2[19]);
          }
          const obj12 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
          const intl = closure_130_0(closure_130_2[17]).intl;
          obj12.content = intl.string(closure_130_0(closure_130_2[17]).t["HZlu0+"]);
          obj12.icon = closure_130_1(closure_130_2[18]);
          closure_130_1(closure_130_2[16]).open(obj12);
          c4 = 3;
          return { value: false, done: true };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        closure_129_9 = value;
        if (closure_129_9) {
          const obj = { quest: closure_129_0, product: closure_129_3, questContent: closure_129_1, questContentPosition: closure_129_2, onSuccess: closure_129_7, sourceQuestContent: closure_129_8 };
          closure_130_14(obj);
        }
        c4 = 3;
        const obj14 = { value: closure_129_9, done: true };
        return obj14;
      }
    } catch (tmp58) {
      c4 = tmp;
      throw tmp58;
    }
  }
};
const QuestConstants = fn(5749);
({ QuestsExperimentLocations: hasOwnProperty, QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: metroRequire, QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY: closure_7, QuestVariants: closure_8 } = QuestConstants);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestUtils.native.tsx");

export const openRewardDetailsBottomSheet = function openRewardDetailsBottomSheet(questId) {
  return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12110, dependencyMap.paths), React5, { questId: questId.questId });
};
export { viewReward };
export const handleRewardClaimThenView = function handleRewardClaimThenView() {
  const self = this;
  const apply = closure_16.apply;
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
  if (obj.getIsEligibleForQuests()) {
    let obj2 = { questId: scrollToQuestId, fromContent: scrollToQuestId.fromContent };
    const result = scrollToQuestId(tmp4[21]).setQuestHomeUtmContext(obj2);
    flag(tmp4[22])();
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const obj2 = { sort, filter, scrollToQuestId: null };
          let str = scrollToQuestId;
          if (scrollToQuestId == null) {
            str = "";
          }
          obj2.scrollToQuestId = str;
          QuestHomeNavigationStore.setState(obj2);
          const obj3 = { screen: UserSettingsSections.QUESTS };
          if (flag) {
            const obj4 = {};
            const merged = Object.assign(obj3);
            obj4.pop = true;
            rootNavigationRef.navigate("settings", obj4);
          } else {
            openUserSettings.openUserSettings(obj3);
            const tmpResult = openUserSettings;
          }
        }
      }
    }, 1);
    const tmp3Result = scrollToQuestId(tmp4[21]);
  }
};
export const isHeroVideoSupported = function isHeroVideoSupported(mimetype) {
  if (obj.isIOS()) {
    let tmp2 = tmp;
  } else {
    tmp2 = tmp;
    if (!tmp) {
      tmp2 = "video/webm" === mimetype;
    }
  }
  return tmp2;
};
export const openDiscordQuestsFAQ = function openDiscordQuestsFAQ() {
  LinkingDefault.openURL("https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5");
};
export const getPrimaryCtaIcon = function getPrimaryCtaIcon(quest, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (obj.canLaunchActivity(quest)) {
    const features = quest.config.features;
    if (features.includes(constants.MOBILE_ACTIVITY_QUEST)) {
      let num = 0;
      if (flag) {
        num = nativeDefault.space.PX_4;
      }
      const obj2 = { marginRight: num };
      const features2 = quest.config.features;
      if (features2.includes(constants.CLOUD_GAMING_ACTIVITY)) {
        const obj3 = { size: "sm", style: obj2, color: nativeDefault.colors.WHITE };
        let tmp5Result = closure_1_10(CloudIcon.CloudIcon, obj3);
      } else {
        const obj4 = { size: "sm", style: obj2, color: nativeDefault.colors.WHITE };
        tmp5Result = closure_1_10(GameControllerIcon.GameControllerIcon, obj4);
      }
      return tmp5Result;
    }
  }
  obj = utils_QuestUtils;
};
export const showQuestUnavailableAlert = function showQuestUnavailableAlert() {
  const obj2 = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.Lhpq2P);
  const intl2 = util.intl;
  obj2.content = intl2.string(util.t.iyF4WB);
  const obj3 = { children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.H0vjGc);
  obj4.onPress = QuestActionCreators.fetchCurrentQuests;
  const items = [closure_1_10(AlertModal.AlertActionButton, obj4), ];
  const obj5 = { text: null, variant: "secondary" };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["6XS10x"]);
  items[1] = closure_1_10(AlertModal.AlertActionButton, obj5);
  obj3.children = items;
  obj2.actions = closure_1_12(closure_1_11, obj3);
  useAlertStore.openAlert("quest-unavailable", closure_1_10(AlertModal.AlertModal, obj2));
};
export const dismissOverlayScreens = function dismissOverlayScreens() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
        const CommonActions = Link.CommonActions;
        const obj2 = {};
        const merged = Object.assign(rootState);
        obj2.routes = found;
        obj2.index = found.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj2));
      }
    }
  }
};