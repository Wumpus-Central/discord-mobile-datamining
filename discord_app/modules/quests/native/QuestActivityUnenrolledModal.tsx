// discord_app/modules/quests/native/QuestActivityUnenrolledModal.tsx
import PlatformTypes from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import registerAssetDefault from "../../../../_runtime/08178_registerAsset.js";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../QuestStore.tsx";
import closure_9 from "../UnenrolledActivityQuestStore.tsx";
import { QuestsExperimentLocations } from "../QuestConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function QuestActivityUnenrolledModalInner(quest) {
  quest = quest.quest;
  let first;
  dependencyMap = undefined;
  let getOrFetchApplication;
  let trackQuestContentClickedWithImpression;
  let obj = quest(4315);
  const theme = obj.useTheme();
  obj1 = quest(1364);
  const tmp4 = callback2(obj1.isThemeDark(theme));
  let obj2 = quest(589);
  const items = [closure_9];
  const tmp5 = trackQuestContentClickedWithImpression(React.useState(obj2.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  let obj3 = quest(5840);
  let obj4 = quest(7328);
  getOrFetchApplication = obj3.useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(10531);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  let obj6 = quest(11333);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5271).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const items1 = [getOrFetchApplication];
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj);
  const memo = React.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = first(1435);
      obj = { id: null, icon: null, size: 87 };
      ({ id: obj2[0], icon: obj2[1] } = getOrFetchApplication);
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items1);
  const items2 = [quest.id];
  const callback = React.useCallback(getOrFetchApplication(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            obj1 = { questContent: null, questContentCTA: null, sourceQuestContent: null };
            obj1[0] = closure_1_0(5271).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL;
            obj1[1] = closure_1_0(7332).QuestContentCTA.START_QUEST;
            obj1[2] = closure_1_0(5271).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL;
            v0 = 1;
            dependencyMap = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = closure_1_0(10533).enrollInQuest(closure_1_0.id, obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let arr = v0(4611);
          arr = arr.pop();
          dependencyMap = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp9) {
        dependencyMap = tmp;
        throw tmp9;
      }
    }
  }), items2);
  let obj8 = quest(4109);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked: first });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  let obj9 = quest(10531);
  const isQuestAccessSuspended = obj9.useIsQuestAccessSuspended();
  let obj10 = quest(11332);
  trackQuestContentClickedWithImpression = obj10.useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = React.useCallback(() => {
    trackQuestContentClickedWithImpression({ questId: quest.id, questContent: quest(5271).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: quest(7332).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: quest(5271).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL });
    first(14568)();
  }, items3);
  obj = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: null };
  obj1 = { style: tmp4.content, children: null };
  obj2 = { style: tmp4.baseShadow, children: null };
  obj3 = { style: tmp4.imagesContainer, children: null };
  let tmp18Result = null != memo;
  if (tmp18Result) {
    obj4 = { style: null, children: null };
    obj4[0] = tmp4.appIconContainer;
    obj5 = { source: null, style: null };
    obj6 = { uri: null };
    obj6[0] = memo;
    obj5[0] = obj6;
    obj5[1] = tmp4.appIcon;
    obj4[1] = tmp18(first(5374), obj5);
    tmp18Result = tmp18(tmp17, obj4);
  }
  const items4 = [tmp18Result, ];
  obj8 = { quest, height: 87, width: 87, style: tmp4.questRewardTile };
  items4[1] = closure_11(closure_7, { style: tmp4.rewardTileContainer, children: closure_11(first(11329), obj8) });
  obj3[1] = items4;
  obj2[1] = closure_12(closure_7, obj3);
  const items5 = [closure_11(closure_7, obj2), ];
  obj9 = { style: tmp4.textContainer, children: null };
  obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: null };
  const intl = tmp(1236).intl;
  obj10[3] = intl.string(quest(1236).t.IrNgN4);
  const items6 = [closure_11(quest(4376).Text, obj10), ];
  const obj11 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: null };
  const intl2 = tmp(1236).intl;
  const items7 = [intl2.format(quest(1236).t.V3NSJx, { questName: quest.config.messages.questName }), "\u00A0", questsInstructionsToWinReward];
  obj11[3] = items7;
  items6[1] = closure_12(quest(4376).Text, obj11);
  obj9[1] = items6;
  items5[1] = closure_12(closure_7, obj9);
  obj1[1] = items5;
  const items8 = [closure_12(closure_7, obj1), ];
  const obj13 = { style: tmp4.footer, children: null };
  const obj14 = { style: tmp4.buttonsContainer, children: null };
  const obj15 = { size: "lg", text: null, onPress: null, disabled: null, onPressDisabled: null };
  const intl3 = tmp(1236).intl;
  obj15[1] = intl3.string(quest(1236).t.l7E81v);
  obj15[2] = callback;
  obj15[3] = isQuestAccessSuspended;
  let tmp21;
  if (isQuestAccessSuspended) {
    tmp21 = callback1;
  }
  obj15[4] = tmp21;
  const items9 = [closure_11(quest(4815).Button, obj15), ];
  const obj16 = { size: "lg", text: null, onPress: null, variant: "secondary" };
  const intl4 = tmp(1236).intl;
  obj16[1] = intl4.string(quest(1236).t.fyT2ol);
  obj16[2] = function onPress() {
    const result = quest(10533).dismissQuestActivityModal(quest.id);
    let arr = first(4611);
    arr = arr.pop();
  };
  items9[1] = closure_11(quest(4815).Button, obj16);
  obj14[1] = items9;
  const items10 = [closure_12(closure_7, obj14), ];
  const obj17 = { accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
  const intl5 = tmp(1236).intl;
  obj17[1] = intl5.string(quest(1236).t["931n1T"]);
  obj17[2] = accessibilityState;
  obj17[3] = function onPress() {
    dependencyMap(!first);
    quest(10533).setAutoEnroll(!first);
  };
  obj17[4] = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
  const items11 = [closure_11(quest(8120).FormCheckbox, { checked: first }), ];
  const obj18 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl6 = tmp(1236).intl;
  obj18[2] = intl6.string(quest(1236).t["931n1T"]);
  items11[1] = closure_11(quest(4376).Text, obj18);
  obj17[5] = items11;
  items10[1] = closure_12(closure_6, obj17);
  obj13[1] = items10;
  items8[1] = closure_12(closure_7, obj13);
  obj[4] = items8;
  return closure_12(quest(4813).Stack, obj);
}
function CloseButton() {
  const obj = {
    source: registerAssetDefault,
    onPress() {
      return callback(table[22]).pop();
    },
    accessibilityLabel: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return callback(HeaderActionButton.HeaderActionButton, obj);
}
({ Pressable: closure_6, View: error } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { MAIN: "main" };
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, content: null, imagesContainer: null, baseShadow: null, appIconContainer: null, appIcon: null, rewardTileContainer: null, questRewardTile: null, textContainer: null, buttonsContainer: null, footer: null };
  obj = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_24, paddingVertical: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_48 };
  obj[0] = obj;
  obj[1] = { marginTop: "auto" };
  obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: ThemesDefault.space.PX_32 };
  let obj3 = PlatformTypes;
  if (obj3.isIOS()) {
    if (arg0) {
      obj1 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: null, shadowOpacity: 0.6, shadowRadius: 85 };
      obj1[1] = { width: 0, height: 0 };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
  } else {
    if (arg0) {
      obj3 = { dropShadow: null };
      obj3[0] = { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 };
      const items = [obj3, ];
      const obj4 = { dropShadow: null };
      obj4[0] = { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 };
      items[1] = obj4;
      let items1 = items;
    } else {
      items1 = [];
    }
    const obj5 = { filter: null };
    obj5[0] = items1;
    const merged = Object.assign(obj5);
    obj[2] = obj;
    const obj6 = {};
    if (tmp3Result.isIOS()) {
      if (arg0) {
        const obj7 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: null, shadowOpacity: 0.4, shadowRadius: 85 };
        obj7[1] = { width: 0, height: 16 };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      const merged1 = Object.assign(obj8);
    } else {
      obj[3] = obj6;
      const obj9 = { borderRadius: null, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: null, overflow: "hidden" };
      obj9[0] = tmp(712).radii.xl;
      const items2 = [{ rotate: "-12.41deg" }];
      obj9[4] = items2;
      obj[4] = obj9;
      const obj10 = { width: 87, height: 87, borderRadius: null };
      obj10[2] = tmp(712).radii.xl - 2.18;
      obj[5] = obj10;
      const obj11 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: null, borderStyle: "solid", transform: null, overflow: "hidden" };
      obj11[2] = tmp(712).radii.xl;
      const items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
      obj11[4] = items3;
      obj[6] = obj11;
      const obj12 = { borderRadius: null };
      obj12[0] = tmp(712).radii.xl - 2.18;
      obj[7] = obj12;
      const obj13 = { alignItems: "center", gap: null };
      obj13[1] = tmp(712).space.PX_8;
      obj[8] = obj13;
      const obj14 = { flexDirection: "column", gap: null, marginBottom: 20 };
      obj14[1] = tmp(712).space.PX_8;
      obj[9] = obj14;
      obj[10] = { flexDirection: "column", width: "100%", marginTop: "auto" };
      return obj;
    }
    tmp3Result = PlatformTypes;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  let stateFromStores;
  let obj = questId(589);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getQuest(questId));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj[0] = CloseButton;
    obj[1] = function headerRight() {
      return null;
    };
    obj[2] = function headerTitle() {
      const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
      const intl = questId(1236).intl;
      obj[2] = intl.string(questId(1236).t.l7E81v);
      return callback(questId(4376).Text, obj);
    };
    obj[3] = function render() {
      return closure_1_11(questId(closure_1_2[35]).QuestContentImpressionTrackerNative, {
        questOrQuests: stateFromStores,
        questContent: questId(closure_1_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
        sourceQuestContent: questId(closure_1_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
        children() {
          return closure_1_11(closure_1_15, { quest: closure_1 });
        }
      });
    };
    obj[constants.MAIN] = obj;
    obj1 = { screens: null, initialRouteName: null };
    obj1[0] = obj;
    obj1[1] = constants.MAIN;
    return callback(tmp(11497).Modal, obj1);
  }
  tmp = questId;
};