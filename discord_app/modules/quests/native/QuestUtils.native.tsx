// === Module 10908: QuestUtils ===

// Module 10908 (QuestUtils)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Link from "Link" /* 1491 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import LinkingDefault from "Linking" /* 4565 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import getQuestLogger from "getQuestLogger" /* 7193 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7206 */;
import GameControllerIcon2 from "GameControllerIcon" /* 8739 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10005 */;
import QuestOrbsRewardModal from "QuestOrbsRewardModal" /* 10960 */;
import openQuestCollectibleRewardModal from "openQuestCollectibleRewardModal" /* 10968 */;
import CloudIcon2 from "CloudIcon" /* 10969 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 10909 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_1, closure_3;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function openRewardClaimBottomSheet(arg0) {
  let questContent;
  let questContentPosition;
  let questId;
  let sourceQuestContent;
  ({ questId, questContent, questContentPosition, sourceQuestContent } = arg0);
  obj = ActionSheetActionCreatorsDefault;
  return obj.openLazy(asyncRequire(10952, dependencyMap.paths), metroRequire, { questId, questContent, questContentPosition, sourceQuestContent });
}
function viewReward(quest) {
  let onSuccess;
  let product;
  let questContent;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  ({ product, questContent, questContentPosition, onSuccess, sourceQuestContent } = quest);
  obj = QuestRewardUtils;
  if (obj.hasQuestRewardCode(quest.config)) {
    const id = quest.id;
    const obj2 = { questId: id, questContent, questContentPosition, sourceQuestContent };
    const obj7 = ActionSheetActionCreatorsDefault;
    obj7.openLazy(asyncRequire(10952, dependencyMap.paths), metroRequire, obj2);
  } else {
    const tmpResult = QuestRewardUtils;
    if (tmpResult.hasVirtualCurrencyReward(quest.config)) {
      const obj3 = { quest };
      const tmpResult3 = QuestOrbsRewardModal;
      const result = tmpResult3.openQuestOrbsRewardModal(obj3);
    } else {
      const obj4 = { quest, product, onSuccess };
      const tmpResult4 = openQuestCollectibleRewardModal;
      const result1 = tmpResult4.openQuestCollectibleRewardModal(obj4);
    }
  }
}
let obj = function _handleRewardClaim() {
  obj = _asyncToGenerator(async (arg0) => {
    let logger = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let intl;
      let obj9;
      let tmp14;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp14;
              const obj4 = { location: constants.QUEST_HOME_MOBILE };
              const obj6 = getQuestLogger;
              logger = obj6.getQuestLogger(obj4);
              c4 = 1;
              const obj8 = QuestRewardUtils;
              const defaultPlatform = obj8.getDefaultPlatform(logger.config);
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj9.claimQuestReward(logger.id, defaultPlatform, QuestTypes.QuestContent.QUEST_HOME_MOBILE), done: false };
              obj9 = QuestActionCreators;
              return obj5;
            }
          } else if (1 === tmp4) {
            c4 = 0;
            closure_1 = closure_3;
            logger.error("Error claiming reward", closure_1);
            tmp14 = closure_130_1(closure_130_2[16]);
            const open = tmp14.open;
            const obj7 = { key: "CLAIM_QUEST_REWARD_ERROR", content: intl.string(closure_130_0(closure_130_2[17]).t.CKsXk3), icon: closure_130_1(closure_130_2[18]) };
            intl = closure_130_0(closure_130_2[17]).intl;
            open(obj7);
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleRewardClaimThenView() {
  obj = _asyncToGenerator(async (quest) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let intl;
    let product;
    let value;
    function handleRewardClaim() {
      return closure_1_15(...arguments);
    }
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (quest === 1) {
        throw value;
      } else if (quest === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let questContent;
        let questContentPosition;
        let onSuccess;
        let sourceQuestContent;
        c4 = 2;
        if (0 === product) {
          if (quest === 1) {
            c4 = 3;
            throw value;
          } else if (quest === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp3;
            quest = undefined;
            questContent = undefined;
            questContentPosition = undefined;
            c5 = undefined;
            c6 = undefined;
            onSuccess = undefined;
            sourceQuestContent = undefined;
            ({ quest: c0, questContent: c1, questContentPosition: c2, product: c3, hideActionSheet: c4, currentUserHasVerifiedEmailOrPhone: c5, currentUserHasVerifiedEmail: c6, onSuccess: c7, sourceQuestContent: c8 } = closure_0);
            value = undefined;
            product = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === product) {
          if (quest === 1) {
            c4 = 3;
            throw value;
          } else if (quest === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (true === c4) {
              const obj4 = closure_130_1(closure_130_2[6]);
              obj4.hideActionSheet();
            }
            const tmp21 = c5;
            if (tmp21) {
              const tmp22 = c6;
              if (!tmp22) {
                closure_130_0(closure_130_2[10]);
              }
              const obj8 = closure_130_0(closure_130_2[10]);
              if (obj8.hasQuestRewardCode(quest.config)) {
                const obj9 = { questId: quest.id, questContent, questContentPosition, sourceQuestContent };
                closure_130_13(obj9);
                c4 = 3;
                return { value: true, done: true };
              } else {
                product = 2;
                c4 = 1;
                const obj10 = { value: handleRewardClaim(quest), done: false };
                return obj10;
              }
            }
            const tmp28 = c6;
            if (!tmp28) {
              const obj6 = closure_130_1(closure_130_2[19]);
              obj6.open();
            }
            const obj11 = { key: "CLAIM_QUEST_REWARD_ERROR", content: intl.string(closure_130_0(closure_130_2[17]).t["HZlu0+"]), icon: closure_130_1(closure_130_2[18]) };
            const open = closure_130_1(closure_130_2[16]).open;
            const tmp36 = closure_130_1(closure_130_2[16]);
            intl = closure_130_0(closure_130_2[17]).intl;
            open(obj11);
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (quest === 1) {
          c4 = 3;
          throw value;
        } else if (quest === 2) {
          c4 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          const tmp5 = value;
          if (tmp5) {
            obj = { quest, product, questContent, questContentPosition, onSuccess, sourceQuestContent };
            closure_130_14(obj);
          }
          c4 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
      } catch (tmp58) {
        c4 = 3;
        throw tmp58;
      }
    }
  });
  return obj(...arguments);
};
({ QuestsExperimentLocations: hasOwnProperty, QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: metroRequire, QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY: metroImportDefault, QuestVariants: metroImportAll } = QuestConstants);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let result = size.fileFinishedImporting("modules/quests/native/QuestUtils.native.tsx");

export const openRewardDetailsBottomSheet = function openRewardDetailsBottomSheet(questId) {
  questId = questId.questId;
  obj = ActionSheetActionCreatorsDefault;
  return obj.openLazy(asyncRequire(10910, dependencyMap.paths), metroImportDefault, { questId });
};
export { viewReward };
export const handleRewardClaimThenView = function handleRewardClaimThenView() {
  return obj(...arguments);
};
export const openQuestHome = function openQuestHome(scrollToQuestId) {
  let fromContent;
  let pop;
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
  ({ pop, fromContent } = scrollToQuestId);
  if (pop === undefined) {
    pop = true;
  }
  obj = scrollToQuestId(sort[20]);
  if (obj.getIsEligibleForQuests()) {
    const setQuestHomeUtmContext = tmp3(sort[21]).setQuestHomeUtmContext;
    scrollToQuestId(sort[21]);
    let obj2 = { questId: scrollToQuestId, fromContent };
    const result = setQuestHomeUtmContext(obj2);
    flag(sort[22])();
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let str;
      obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const obj2 = { sort, filter, scrollToQuestId: str };
          str = scrollToQuestId;
          const setState = QuestHomeNavigationStore.setState;
          if (scrollToQuestId == null) {
            str = "";
          }
          setState(obj2);
          const obj3 = { screen: UserSettingsSections.QUESTS };
          if (flag) {
            rootNavigationRef.navigate("settings", obj3, { pop: true });
          } else {
            const obj4 = { pop };
            const tmpResult = openUserSettings;
            tmpResult.openUserSettings(obj3, undefined, obj4);
          }
        }
      }
    }, 1);
  }
};
export const isHeroVideoSupported = function isHeroVideoSupported(mimetype) {
  let tmp2;
  obj = PlatformUtils;
  if (obj.isIOS()) {
    tmp2 = tmp;
  } else {
    tmp2 = tmp || "video/webm" === mimetype;
  }
  return tmp2;
};
export const openDiscordQuestsFAQ = function openDiscordQuestsFAQ() {
  obj = LinkingDefault;
  obj.openURL("https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5");
};
export const getPrimaryCtaIcon = function getPrimaryCtaIcon(quest, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = utils_QuestUtils;
  if (obj.canLaunchActivity(quest)) {
    const features = quest.config.features;
    if (features.includes(metroImportAll.MOBILE_ACTIVITY_QUEST)) {
      let tmp5Result;
      let num = 0;
      if (flag) {
        num = nativeDefault.space.PX_4;
      }
      const obj2 = { marginRight: num };
      const features2 = quest.config.features;
      if (features2.includes(metroImportAll.CLOUD_GAMING_ACTIVITY)) {
        const obj3 = { size: "sm", style: obj2, color: nativeDefault.colors.WHITE };
        const CloudIcon = CloudIcon2.CloudIcon;
        tmp5Result = authStore(CloudIcon, obj3);
      } else {
        const obj4 = { size: "sm", style: obj2, color: nativeDefault.colors.WHITE };
        const GameControllerIcon = GameControllerIcon2.GameControllerIcon;
        tmp5Result = authStore(GameControllerIcon, obj4);
      }
      return tmp5Result;
    }
  }
};
export const showQuestUnavailableAlert = function showQuestUnavailableAlert() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  const openAlert = useAlertStore.openAlert;
  obj = { title: intl.string(intl5.t.Lhpq2P), content: intl2.string(intl5.t.iyF4WB), actions: closure_12(unpackModuleId, obj2) };
  useAlertStore;
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  const obj3 = { text: intl3.string(intl5.t.H0vjGc), onPress: QuestActionCreators.fetchCurrentQuests };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [authStore(AlertActionButton, obj3), ];
  const obj4 = { text: intl4.string(intl5.t["6XS10x"]), variant: "secondary" };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = authStore(AlertActionButton2, obj4);
  openAlert("quest-unavailable", authStore(AlertModal, obj));
};
export const dismissOverlayScreens = function dismissOverlayScreens() {
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const tmpResult = NavigationRouteUtils;
      const result = tmpResult.routesBelowFirstRemoved(rootState.routes, (name) => "you" === name.name || "settings" === name.name);
      if (null != result) {
        const dispatch = rootNavigationRef.dispatch;
        const CommonActions = Link.CommonActions;
        const reset = CommonActions.reset;
        const obj2 = { routes: result, index: result.length - 1 };
        const merged = Object.assign(rootState);
        dispatch(reset(obj2));
      }
    }
  }
};