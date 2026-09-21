// discord_app/modules/quests/native/QuestActivityUnenrolledModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import QuestTypes from "../QuestTypes.tsx";
import _modDef7237 from "../../../../_runtime/metro/07237__.js";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import QuestContentImpressionTracker from "QuestContentImpressionTracker.native.tsx";
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestStore from "../QuestStore.tsx";
import UnenrolledActivityQuestStore from "../UnenrolledActivityQuestStore.tsx";

require = fn;
function QuestActivityUnenrolledModalInner(quest) {
  quest = quest.quest;
  let trackQuestContentClickedWithImpression;
  const theme = quest(4690).useTheme();
  let obj = quest(4690);
  const tmp4 = closure_14(quest(4464).isThemeDark(theme));
  let obj2 = quest(4464);
  const items = [UnenrolledActivityQuestStore];
  const tmp5 = trackQuestContentClickedWithImpression(
    noop.useState(quest(504).useStateFromStores(items, () => state.getState().autoEnroll)),
    2,
  );
  const checked = tmp5[0];
  dependencyMap = tmp5[1];
  let obj3 = quest(504);
  let obj4 = quest(7413);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(quest(7960).getActivityApplicationId(quest));
  const obj5 = quest(7960);
  const questTaskDetails = quest(11738).useQuestTaskDetails(quest);
  let obj6 = quest(11738);
  const obj7 = quest(12028);
  const items1 = [getOrFetchApplication];
  const questsInstructionsToWinReward = obj7.useQuestsInstructionsToWinReward({
    quest,
    taskDetails: questTaskDetails,
    location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL,
    sourceQuestContent: quest(5664).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
  });
  const memo = noop.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, size: 87 });
      const obj3 = { id: null, icon: null, size: 87 };
    }
    return applicationIconURL;
  }, items1);
  const items2 = [quest.id];
  const callback = noop.useCallback(
    getOrFetchApplication(function* () {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = {
                questContent: tmp4(5664).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: tmp4(7964).QuestContentCTA.START_QUEST,
                sourceQuestContent: tmp4(5664).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
              };
              v1 = 1;
              dependencyMap = 1;
              const obj6 = { value: tmp4(11542).enrollInQuest(quest.id, obj4), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v1(4959).pop();
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    }),
    items2,
  );
  const obj8 = {
    quest,
    taskDetails: questTaskDetails,
    location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL,
    sourceQuestContent: quest(5664).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
  };
  const checkboxA11yNative = quest(4474).useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj9 = quest(4474);
  const isQuestAccessSuspended = quest(11738).useIsQuestAccessSuspended();
  const obj10 = quest(11738);
  trackQuestContentClickedWithImpression = quest(12027).useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = noop.useCallback(() => {
    trackQuestContentClickedWithImpression({
      questId: quest.id,
      questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
      questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
    });
    openQuestAccessSuspendedBottomSheetDefault();
  }, items3);
  const obj12 = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: null };
  const obj13 = { style: tmp4.content, children: null };
  const obj14 = { style: tmp4.baseShadow, children: null };
  const obj15 = { style: tmp4.imagesContainer, children: null };
  let tmp18Result = null != memo;
  if (tmp18Result) {
    const obj16 = { style: tmp4.appIconContainer, children: null };
    const obj17 = { source: null, style: null };
    const obj18 = { uri: memo };
    obj17.source = obj18;
    obj17.style = tmp4.appIcon;
    obj16.children = closure_11(checked(5804), obj17);
    tmp18Result = closure_11(closure_7, obj16);
  }
  const items4 = [tmp18Result];
  const obj19 = { style: tmp4.rewardTileContainer, children: null };
  const size = { quest, height: 87, width: 87, style: tmp4.questRewardTile };
  obj19.children = closure_11(checked(12023), size);
  items4[1] = closure_11(closure_7, obj19);
  obj15.children = items4;
  obj14.children = closure_12(closure_7, obj15);
  const items5 = [closure_11(closure_7, obj14)];
  const obj20 = { style: tmp4.textContainer, children: null };
  const obj21 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: { textAlign: "center" },
    children: null,
  };
  const intl = tmp(1115).intl;
  obj21.children = intl.string(quest(1115).t.IrNgN4);
  const items6 = [closure_11(quest(4752).Text, obj21)];
  const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: null };
  const intl2 = tmp(1115).intl;
  const items7 = [
    intl2.format(quest(1115).t.V3NSJx, { questName: quest.config.messages.questName }),
    "\u00A0",
    questsInstructionsToWinReward,
  ];
  obj22.children = items7;
  items6[1] = closure_12(quest(4752).Text, obj22);
  obj20.children = items6;
  items5[1] = closure_12(closure_7, obj20);
  obj13.children = items5;
  const items8 = [closure_12(closure_7, obj13)];
  const obj24 = { style: tmp4.footer, children: null };
  const obj25 = { style: tmp4.buttonsContainer, children: null };
  const obj26 = { size: "lg", text: null, onPress: null, disabled: null, onPressDisabled: null };
  const intl3 = tmp(1115).intl;
  obj26.text = intl3.string(quest(1115).t.l7E81v);
  obj26.onPress = callback;
  obj26.disabled = isQuestAccessSuspended;
  let tmp21;
  if (isQuestAccessSuspended) {
    tmp21 = callback1;
  }
  obj26.onPressDisabled = tmp21;
  const items9 = [closure_11(quest(5186).Button, obj26)];
  const obj27 = { size: "lg", text: null, onPress: null, variant: "secondary" };
  const intl4 = tmp(1115).intl;
  obj27.text = intl4.string(quest(1115).t.fyT2ol);
  obj27.onPress = function onPress() {
    const result = QuestActionCreators.dismissQuestActivityModal(quest.id);
    ModalActionCreatorsDefault.pop();
  };
  items9[1] = closure_11(quest(5186).Button, obj27);
  obj25.children = items9;
  const items10 = [closure_12(closure_7, obj25)];
  const obj28 = {
    accessibilityRole,
    accessibilityLabel: null,
    accessibilityState: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl5 = tmp(1115).intl;
  obj28.accessibilityLabel = intl5.string(quest(1115).t["931n1T"]);
  obj28.accessibilityState = accessibilityState;
  obj28.onPress = function onPress() {
    closure_2(!first);
    QuestActionCreators.setAutoEnroll(!first);
  };
  obj28.style = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
  const items11 = [closure_11(quest(5834).FormCheckbox, { checked })];
  const obj29 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl6 = tmp(1115).intl;
  obj29.children = intl6.string(quest(1115).t["931n1T"]);
  items11[1] = closure_11(quest(4752).Text, obj29);
  obj28.children = items11;
  items10[1] = closure_12(closure_6, obj28);
  obj24.children = items10;
  items8[1] = closure_12(closure_7, obj24);
  obj12.children = items8;
  return closure_12(quest(5184).Stack, obj12);
}
function CloseButton() {
  const obj = {
    source: _modDef7237,
    onPress() {
      return ModalActionCreatorsDefault.pop();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return closure_1_11(HeaderActionButton.HeaderActionButton, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5661).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants = { MAIN: "main" };
const createStyles = fn(4756);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = {
    container: {
      flex: 1,
      paddingHorizontal: nativeDefault.space.PX_24,
      paddingVertical: nativeDefault.space.PX_16,
      paddingBottom: nativeDefault.space.PX_48,
    },
    content: { marginTop: "auto" },
    imagesContainer: null,
    baseShadow: null,
    appIconContainer: null,
    appIcon: null,
    rewardTileContainer: null,
    questRewardTile: null,
    textContainer: null,
    buttonsContainer: null,
    footer: null,
  };
  const obj3 = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: nativeDefault.space.PX_32,
  };
  const obj2 = {
    flex: 1,
    paddingHorizontal: nativeDefault.space.PX_24,
    paddingVertical: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_48,
  };
  if (obj4.isIOS()) {
    if (arg0) {
      const obj5 = {
        shadowColor: "rgb(144, 144, 251)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 85,
      };
    } else {
      const obj6 = {};
    }
  } else {
    if (arg0) {
      const obj7 = {
        dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 },
      };
      const items = [obj7];
      const obj8 = {
        dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 },
      };
      items[1] = obj8;
      let items1 = items;
    } else {
      items1 = [];
    }
    const obj9 = { filter: items1 };
    const merged = Object.assign(obj9);
    obj.imagesContainer = obj3;
    const obj10 = {};
    if (tmp3Result.isIOS()) {
      if (arg0) {
        const obj11 = {
          shadowColor: "rgb(144, 144, 250)",
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.4,
          shadowRadius: 85,
        };
        let obj12 = obj11;
      } else {
        obj12 = {};
      }
      const merged1 = Object.assign(obj12);
    } else {
      obj.baseShadow = obj10;
      const obj13 = {
        borderRadius: nativeDefault.radii.xl,
        borderWidth: 2.18,
        borderColor: "rgba(151, 151, 159, 0.24)",
        borderStyle: "solid",
        transform: null,
        overflow: "hidden",
      };
      const items2 = [{ rotate: "-12.41deg" }];
      obj13.transform = items2;
      obj.appIconContainer = obj13;
      const size = { width: 87, height: 87, borderRadius: nativeDefault.radii.xl - 2.18 };
      obj.appIcon = size;
      const obj14 = {
        borderWidth: 2.18,
        borderColor: "rgba(151, 151, 159, 0.24)",
        borderRadius: nativeDefault.radii.xl,
        borderStyle: "solid",
        transform: null,
        overflow: "hidden",
      };
      const items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
      obj14.transform = items3;
      obj.rewardTileContainer = obj14;
      const obj15 = { borderRadius: nativeDefault.radii.xl - 2.18 };
      obj.questRewardTile = obj15;
      const obj16 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
      obj.textContainer = obj16;
      const obj17 = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 };
      obj.buttonsContainer = obj17;
      obj.footer = { flexDirection: "column", width: "100%", marginTop: "auto" };
      return obj;
    }
    tmp3Result = utils_PlatformUtils;
  }
  obj4 = utils_PlatformUtils;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  const items = [QuestStore];
  const stateFromStores = questId(504).useStateFromStores(items, () => QuestStore.getQuest(questId));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = {};
    const obj3 = {
      headerLeft: CloseButton,
      headerRight() {
        return null;
      },
      headerTitle() {
        const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
        const intl = questId(1115).intl;
        obj.children = intl.string(questId(1115).t.l7E81v);
        return closure_1_11(questId(4752).Text, obj);
      },
      render() {
        return closure_2_11(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
          questOrQuests: stateFromStores,
          questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
          sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
          children() {
            return closure_2_11(QuestActivityUnenrolledModalInner, { quest });
          },
        });
      },
    };
    obj2[constants.MAIN] = obj3;
    const obj4 = { screens: obj2, initialRouteName: constants.MAIN };
    return closure_11(tmp(11465).Modal, obj4);
  }
  let obj = questId(504);
  tmp = questId;
}
