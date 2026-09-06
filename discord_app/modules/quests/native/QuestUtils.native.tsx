// discord_app/modules/quests/native/QuestUtils.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Link from "../../../../_runtime/01484_Link.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import QuestTypes from "../QuestTypes.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import getQuestLogger from "../lib/getQuestLogger.tsx";
import utils_QuestUtils from "../utils/QuestUtils.tsx";
import GameControllerIcon from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import QuestOrbsRewardModal from "QuestOrbsRewardModal.native.tsx";
import openQuestCollectibleRewardModal from "openQuestCollectibleRewardModal.tsx";
import CloudIcon from "../../../design/components/Icon/native/redesign/generated/CloudIcon.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestHomeNavigationStore from "../QuestHomeNavigationStore.tsx";

require = fn;
function openRewardClaimBottomSheet(arg0) {
  ({ questId, questContent, questContentPosition, sourceQuestContent } = arg0);
  return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11772, dependencyMap.paths), timestampProducer, {
    questId,
    questContent,
    questContentPosition,
    sourceQuestContent,
  });
}
function viewReward(quest) {
  quest = quest.quest;
  ({ product, questContent, questContentPosition, onSuccess, sourceQuestContent } = quest);
  let obj = QuestRewardUtils;
  if (obj.hasQuestRewardCode(quest.config)) {
    obj = { questId: quest.id, questContent, questContentPosition, sourceQuestContent };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11772, dependencyMap.paths), timestampProducer, obj);
  } else {
    let tmpResult = QuestRewardUtils;
    if (tmpResult.hasVirtualCurrencyReward(quest.config)) {
      tmpResult = QuestOrbsRewardModal;
      obj = { quest };
      const result = tmpResult.openQuestOrbsRewardModal(obj);
    } else {
      const obj1 = { quest, product, onSuccess };
      const result1 = openQuestCollectibleRewardModal.openQuestCollectibleRewardModal(obj1);
      const tmpResult1 = openQuestCollectibleRewardModal;
    }
  }
}
let closure_15 = async function _handleRewardClaim(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          let questLogger;
          let obj1 = { location: constants.QUEST_HOME_MOBILE };
          questLogger = getQuestLogger.getQuestLogger(obj1);
          c4 = 1;
          const defaultPlatform = QuestRewardUtils.getDefaultPlatform(_require.config);
          c5 = 2;
          c6 = 1;
          const obj2 = {
            value: QuestActionCreators.claimQuestReward(
              _require.id,
              defaultPlatform,
              QuestTypes.QuestContent.QUEST_HOME_MOBILE,
            ),
            done: false,
          };
          return obj2;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_1 = closure_3;
        questLogger.error("Error claiming reward", closure_129_1);
        obj1 = closure_130_1(closure_130_2[16]);
        const obj3 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
        const intl = closure_130_0(closure_130_2[17]).intl;
        obj3.content = intl.string(closure_130_0(closure_130_2[17]).t.CKsXk3);
        obj3.icon = closure_130_1(closure_130_2[18]);
        obj1.open(obj3);
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          ({
            quest: closure_129_0,
            questContent: closure_129_1,
            questContentPosition: closure_129_2,
            product: closure_129_3,
            hideActionSheet: closure_129_4,
            currentUserHasVerifiedEmailOrPhone: closure_129_5,
            currentUserHasVerifiedEmail: closure_129_6,
            onSuccess: closure_129_7,
            sourceQuestContent: closure_129_8,
          } = closure_0);
          closure_129_9 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (true === closure_129_4) {
            let obj3 = closure_130_1(closure_130_2[6]);
            obj3.hideActionSheet();
          }
          if (closure_129_5) {
            if (!closure_129_6) {
              let obj4 = closure_130_0(closure_130_2[10]);
            }
            if (obj9.hasQuestRewardCode(closure_129_0.config)) {
              const obj2 = {
                questId: closure_129_0.id,
                questContent: closure_129_1,
                questContentPosition: closure_129_2,
                sourceQuestContent: closure_129_8,
              };
              closure_130_13(obj2);
              c4 = 3;
              return { value: true, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              obj3 = {
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
                done: false,
              };
              return obj3;
            }
            obj9 = closure_130_0(closure_130_2[10]);
          }
          if (!closure_129_6) {
            let obj5 = closure_130_1(closure_130_2[19]);
            obj5.open();
          }
          let obj6 = closure_130_1(closure_130_2[16]);
          obj4 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
          const intl = closure_130_0(closure_130_2[17]).intl;
          obj4.content = intl.string(closure_130_0(closure_130_2[17]).t["HZlu0+"]);
          obj4.icon = closure_130_1(closure_130_2[18]);
          obj6.open(obj4);
          c4 = 3;
          return { value: false, done: true };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj5 = { value, done: true };
        return obj5;
      } else {
        closure_129_9 = value;
        if (closure_129_9) {
          obj = {
            quest: closure_129_0,
            product: closure_129_3,
            questContent: closure_129_1,
            questContentPosition: closure_129_2,
            onSuccess: closure_129_7,
            sourceQuestContent: closure_129_8,
          };
          closure_130_14(obj);
        }
        c4 = 3;
        obj6 = { value: closure_129_9, done: true };
        return obj6;
      }
    } catch (tmp58) {
      c4 = tmp;
      throw tmp58;
    }
  }
};
const QuestConstants = fn(5444);
({
  QuestsExperimentLocations: hasOwnProperty,
  QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: metroRequire,
  QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY: closure_7,
  QuestVariants: closure_8,
} = QuestConstants);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestUtils.native.tsx");

export const openRewardDetailsBottomSheet = function openRewardDetailsBottomSheet(questId) {
  return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11769, dependencyMap.paths), React5, {
    questId: questId.questId,
  });
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
  let obj = scrollToQuestId(sort[20]);
  if (obj.getIsEligibleForQuests()) {
    obj = { questId: scrollToQuestId, fromContent: scrollToQuestId.fromContent };
    const result = scrollToQuestId(tmp4[21]).setQuestHomeUtmContext(obj);
    flag(tmp4[22])();
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          obj = { sort, filter, scrollToQuestId: null };
          let str = scrollToQuestId;
          if (scrollToQuestId == null) {
            str = "";
          }
          obj.scrollToQuestId = str;
          QuestHomeNavigationStore.setState(obj);
          obj = { screen: UserSettingsSections.QUESTS };
          if (flag) {
            const obj1 = {};
            const merged = Object.assign(obj);
            obj1.pop = true;
            rootNavigationRef.navigate("settings", obj1);
          } else {
            openUserSettings.openUserSettings(obj);
            const tmpResult = openUserSettings;
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
  LinkingDefault.openURL(
    "https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5",
  );
};
export const getPrimaryCtaIcon = function getPrimaryCtaIcon(quest, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = utils_QuestUtils;
  if (obj.canLaunchActivity(quest)) {
    const features = quest.config.features;
    if (features.includes(constants.MOBILE_ACTIVITY_QUEST)) {
      let num = 0;
      if (flag) {
        num = nativeDefault.space.PX_4;
      }
      obj = { marginRight: num };
      const features2 = quest.config.features;
      if (features2.includes(constants.CLOUD_GAMING_ACTIVITY)) {
        obj = { size: "sm", style: null, color: null };
        obj.style = obj;
        obj.color = nativeDefault.colors.WHITE;
        let tmp5Result = closure_1_10(CloudIcon.CloudIcon, obj);
      } else {
        const obj1 = { size: "sm", style: obj, color: nativeDefault.colors.WHITE };
        tmp5Result = closure_1_10(GameControllerIcon.GameControllerIcon, obj1);
      }
      return tmp5Result;
    }
  }
};
export const showQuestUnavailableAlert = function showQuestUnavailableAlert() {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Lhpq2P);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.iyF4WB);
  obj = { children: null };
  const obj1 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj1.text = intl3.string(util.t.H0vjGc);
  obj1.onPress = QuestActionCreators.fetchCurrentQuests;
  const items = [closure_1_10(AlertModal.AlertActionButton, obj1)];
  const obj2 = { text: null, variant: "secondary" };
  const intl4 = util.intl;
  obj2.text = intl4.string(util.t["6XS10x"]);
  items[1] = closure_1_10(AlertModal.AlertActionButton, obj2);
  obj.children = items;
  obj.actions = closure_1_12(closure_1_11, obj);
  obj.openAlert("quest-unavailable", closure_1_10(AlertModal.AlertModal, obj));
};
export const dismissOverlayScreens = function dismissOverlayScreens() {
  let obj = RootNavigationRef;
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
        const CommonActions = Link.CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj.routes = found;
        obj.index = found.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
      }
    }
  }
};
