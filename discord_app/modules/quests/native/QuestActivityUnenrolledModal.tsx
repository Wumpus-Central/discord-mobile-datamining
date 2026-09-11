// === Module 17115: QuestActivityUnenrolledModal ===

// Module 17115 (QuestActivityUnenrolledModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import QuestTypes from "QuestTypes" /* 5498 */;
import _modDef7065 from "module_7065" /* 7065 */;
import HeaderActionButton from "HeaderActionButton" /* 7450 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7800 */;
import QuestActionCreators from "QuestActionCreators" /* 11370 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11871 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15176 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7775 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17114 */;

require = fn;
function QuestActivityUnenrolledModalInner(quest) {
  quest = quest.quest;
  let trackQuestContentClickedWithImpression;
  let obj = quest(4541);
  const theme = obj.useTheme();
  let obj1 = quest(4315);
  const tmp4 = closure_14(obj1.isThemeDark(theme));
  let obj2 = quest(504);
  const items = [UnenrolledActivityQuestStore];
  const tmp5 = trackQuestContentClickedWithImpression(noop.useState(obj2.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  const checked = tmp5[0];
  dependencyMap = tmp5[1];
  let obj3 = quest(7241);
  let obj4 = quest(7796);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(11577);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  let obj6 = quest(11868);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5498).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const items1 = [getOrFetchApplication];
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj);
  const memo = noop.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      const obj = { id: null, icon: null, size: 87 };
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items1);
  const items2 = [quest.id];
  const callback = noop.useCallback(getOrFetchApplication(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj1 = { questContent: tmp4(5498).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp4(7800).QuestContentCTA.START_QUEST, sourceQuestContent: tmp4(5498).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
            v1 = 1;
            dependencyMap = 1;
            const obj2 = { value: tmp4(11370).enrollInQuest(quest.id, obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let arr = v1(4809);
          arr = arr.pop();
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        dependencyMap = tmp;
        throw tmp9;
      }
    }
  }), items2);
  let obj8 = quest(4325);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  let obj9 = quest(11577);
  const isQuestAccessSuspended = obj9.useIsQuestAccessSuspended();
  let obj10 = quest(11867);
  trackQuestContentClickedWithImpression = obj10.useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = noop.useCallback(() => {
    trackQuestContentClickedWithImpression({ questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL });
    openQuestAccessSuspendedBottomSheetDefault();
  }, items3);
  obj = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: null };
  obj1 = { style: tmp4.content, children: null };
  obj2 = { style: tmp4.baseShadow, children: null };
  obj3 = { style: tmp4.imagesContainer, children: null };
  let tmp18Result = null != memo;
  if (tmp18Result) {
    obj4 = { style: tmp4.appIconContainer, children: null };
    obj5 = { source: null, style: null };
    obj6 = { uri: memo };
    obj5.source = obj6;
    obj5.style = tmp4.appIcon;
    obj4.children = closure_11(checked(5638), obj5);
    tmp18Result = closure_11(closure_7, obj4);
  }
  const items4 = [tmp18Result, ];
  const obj7 = { style: tmp4.rewardTileContainer, children: null };
  const size = { quest, height: 87, width: 87, style: tmp4.questRewardTile };
  obj7.children = closure_11(checked(11863), size);
  items4[1] = closure_11(closure_7, obj7);
  obj3.children = items4;
  obj2.children = closure_12(closure_7, obj3);
  const items5 = [closure_11(closure_7, obj2), ];
  obj8 = { style: tmp4.textContainer, children: null };
  obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: null };
  const intl = tmp(1114).intl;
  obj9.children = intl.string(quest(1114).t.IrNgN4);
  const items6 = [closure_11(quest(4602).Text, obj9), ];
  obj10 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: null };
  const intl2 = tmp(1114).intl;
  const items7 = [intl2.format(quest(1114).t.V3NSJx, { questName: quest.config.messages.questName }), "\u00A0", questsInstructionsToWinReward];
  obj10.children = items7;
  items6[1] = closure_12(quest(4602).Text, obj10);
  obj8.children = items6;
  items5[1] = closure_12(closure_7, obj8);
  obj1.children = items5;
  const items8 = [closure_12(closure_7, obj1), ];
  const obj12 = { style: tmp4.footer, children: null };
  const obj13 = { style: tmp4.buttonsContainer, children: null };
  const obj14 = { size: "lg", text: null, onPress: null, disabled: null, onPressDisabled: null };
  const intl3 = tmp(1114).intl;
  obj14.text = intl3.string(quest(1114).t.l7E81v);
  obj14.onPress = callback;
  obj14.disabled = isQuestAccessSuspended;
  let tmp21;
  if (isQuestAccessSuspended) {
    tmp21 = callback1;
  }
  obj14.onPressDisabled = tmp21;
  const items9 = [closure_11(quest(5026).Button, obj14), ];
  const obj15 = { size: "lg", text: null, onPress: null, variant: "secondary" };
  const intl4 = tmp(1114).intl;
  obj15.text = intl4.string(quest(1114).t.fyT2ol);
  obj15.onPress = function onPress() {
    const result = QuestActionCreators.dismissQuestActivityModal(quest.id);
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
  };
  items9[1] = closure_11(quest(5026).Button, obj15);
  obj13.children = items9;
  const items10 = [closure_12(closure_7, obj13), ];
  const obj16 = { accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
  const intl5 = tmp(1114).intl;
  obj16.accessibilityLabel = intl5.string(quest(1114).t["931n1T"]);
  obj16.accessibilityState = accessibilityState;
  obj16.onPress = function onPress() {
    closure_2(!first);
    QuestActionCreators.setAutoEnroll(!first);
  };
  obj16.style = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
  const items11 = [closure_11(quest(5668).FormCheckbox, { checked }), ];
  const obj17 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl6 = tmp(1114).intl;
  obj17.children = intl6.string(quest(1114).t["931n1T"]);
  items11[1] = closure_11(quest(4602).Text, obj17);
  obj16.children = items11;
  items10[1] = closure_12(closure_6, obj16);
  obj12.children = items10;
  items8[1] = closure_12(closure_7, obj12);
  obj.children = items8;
  return closure_12(quest(5024).Stack, obj);
}
function CloseButton() {
  const obj = {
    source: _modDef7065,
    onPress() {
      return ModalActionCreatorsDefault.pop();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return closure_1_11(HeaderActionButton.HeaderActionButton, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5495).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants = { MAIN: "main" };
const createStyles = fn(4606);
let closure_14 = createStyles.createStyles((arg0) => {
  let obj = { container: null, content: null, imagesContainer: null, baseShadow: null, appIconContainer: null, appIcon: null, rewardTileContainer: null, questRewardTile: null, textContainer: null, buttonsContainer: null, footer: null };
  obj = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
  obj.container = obj;
  obj.content = { marginTop: "auto" };
  obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
  let obj3 = utils_PlatformUtils;
  if (obj3.isIOS()) {
    if (arg0) {
      const obj1 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
    } else {
      const obj2 = {};
    }
  } else {
    if (arg0) {
      obj3 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } };
      const items = [obj3, ];
      const obj4 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 } };
      items[1] = obj4;
      let items1 = items;
    } else {
      items1 = [];
    }
    const obj5 = { filter: items1 };
    const merged = Object.assign(obj5);
    obj.imagesContainer = obj;
    const obj6 = {};
    if (tmp3Result.isIOS()) {
      if (arg0) {
        const obj7 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      const merged1 = Object.assign(obj8);
    } else {
      obj.baseShadow = obj6;
      const obj9 = { borderRadius: nativeDefault.radii.xl, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: null, overflow: "hidden" };
      const items2 = [{ rotate: "-12.41deg" }];
      obj9.transform = items2;
      obj.appIconContainer = obj9;
      const size = { width: 87, height: 87, borderRadius: nativeDefault.radii.xl - 2.18 };
      obj.appIcon = size;
      const obj10 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: nativeDefault.radii.xl, borderStyle: "solid", transform: null, overflow: "hidden" };
      const items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
      obj10.transform = items3;
      obj.rewardTileContainer = obj10;
      const obj11 = { borderRadius: nativeDefault.radii.xl - 2.18 };
      obj.questRewardTile = obj11;
      const obj12 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
      obj.textContainer = obj12;
      const obj13 = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 };
      obj.buttonsContainer = obj13;
      obj.footer = { flexDirection: "column", width: "100%", marginTop: "auto" };
      return obj;
    }
    tmp3Result = utils_PlatformUtils;
  }
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    obj = {
      headerLeft: CloseButton,
      headerRight() {
          return null;
        },
      headerTitle() {
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
          const intl = questId(1114).intl;
          obj.children = intl.string(questId(1114).t.l7E81v);
          return closure_1_11(questId(4602).Text, obj);
        },
      render() {
          return closure_2_11(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
            questOrQuests: stateFromStores,
            questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              return closure_2_11(QuestActivityUnenrolledModalInner, { quest });
            }
          });
        }
    };
    obj[constants.MAIN] = obj;
    const obj1 = { screens: obj, initialRouteName: constants.MAIN };
    return closure_11(tmp(12022).Modal, obj1);
  }
  tmp = questId;
};