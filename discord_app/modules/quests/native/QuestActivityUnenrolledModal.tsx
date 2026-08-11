// discord_app/modules/quests/native/QuestActivityUnenrolledModal.tsx
import set from "set";
import HeaderActionButton from "HeaderActionButton";
import getAvatarURL from "getAvatarURL";
import get_ActivityIndicator from "_getQuestsInstructionsToWinReward";
import initializeState from "initializeState";
import closure_9 from "set";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "getQuestContentName";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/08029_registerAsset.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { PlatformTypes } from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import { HeaderActionButton } from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function QuestActivityUnenrolledModalInner(quest) {
  let accessibilityRole;
  let accessibilityState;
  quest = quest.quest;
  let first;
  let dependencyMap;
  let getOrFetchApplication;
  let obj = quest(4239);
  const theme = obj.useTheme();
  let obj1 = quest(1364);
  const tmp4 = callback3(obj1.isThemeDark(theme));
  let obj2 = quest(589);
  const items = [closure_9];
  const tmp5 = callback(React.useState(obj2.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  let obj3 = quest(5734);
  let obj4 = quest(7184);
  getOrFetchApplication = obj3.useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(10465);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  let obj6 = quest(11178);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5164).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
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
  callback = React.useCallback(getOrFetchApplication(function*() {
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp4;
            const obj1 = { questContent: null, questContentCTA: null, sourceQuestContent: null };
            obj1[0] = outer1_0(5164).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL;
            obj1[1] = outer1_0(7188).QuestContentCTA.START_QUEST;
            obj1[2] = outer1_0(5164).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL;
            v0 = 1;
            dependencyMap = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_0(10467).enrollInQuest(outer1_0.id, obj1);
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
          let arr = v0(4509);
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
  let obj8 = quest(4032);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked: first });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  let obj9 = quest(10465);
  const isQuestAccessSuspended = obj9.useIsQuestAccessSuspended();
  obj = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: null };
  obj1 = { style: tmp4.content, children: null };
  obj2 = { style: tmp4.baseShadow, children: null };
  obj3 = { style: tmp4.imagesContainer, children: null };
  let tmp16Result = null != memo;
  if (tmp16Result) {
    obj4 = { style: null, children: null };
    obj4[0] = tmp4.appIconContainer;
    obj5 = { source: null, style: null };
    obj6 = { uri: null };
    obj6[0] = memo;
    obj5[0] = obj6;
    obj5[1] = tmp4.appIcon;
    obj4[1] = tmp16(first(5268), obj5);
    tmp16Result = tmp16(tmp15, obj4);
  }
  const items3 = [tmp16Result, ];
  obj8 = { quest, height: 87, width: 87, style: tmp4.questRewardTile };
  items3[1] = closure_11(closure_7, { style: tmp4.rewardTileContainer, children: closure_11(first(11174), obj8) });
  obj3[1] = items3;
  obj2[1] = closure_12(closure_7, obj3);
  const items4 = [closure_11(closure_7, obj2), ];
  obj9 = { style: tmp4.textContainer, children: null };
  const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: null };
  const intl = tmp(1236).intl;
  obj10[3] = intl.string(quest(1236).t.IrNgN4);
  const items5 = [closure_11(quest(4299).Text, obj10), ];
  const obj11 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: null };
  const intl2 = tmp(1236).intl;
  const items6 = [intl2.format(quest(1236).t.V3NSJx, { questName: quest.config.messages.questName }), "\u00A0", questsInstructionsToWinReward];
  obj11[3] = items6;
  items5[1] = closure_12(quest(4299).Text, obj11);
  obj9[1] = items5;
  items4[1] = closure_12(closure_7, obj9);
  obj1[1] = items4;
  const items7 = [closure_12(closure_7, obj1), ];
  const obj13 = { style: tmp4.footer, children: null };
  const obj14 = { style: tmp4.buttonsContainer, children: null };
  const obj15 = { size: "lg", text: null, onPress: null, disabled: null, onPressDisabled: null };
  const intl3 = tmp(1236).intl;
  obj15[1] = intl3.string(quest(1236).t.l7E81v);
  obj15[2] = callback;
  obj15[3] = isQuestAccessSuspended;
  let tmp19Result;
  if (isQuestAccessSuspended) {
    tmp19Result = first(14368);
  }
  obj15[4] = tmp19Result;
  const items8 = [closure_11(quest(4714).Button, obj15), ];
  const obj16 = { size: "lg", text: null, onPress: null, variant: "secondary" };
  const intl4 = tmp(1236).intl;
  obj16[1] = intl4.string(quest(1236).t.fyT2ol);
  obj16[2] = function onPress() {
    const result = quest(10467).dismissQuestActivityModal(quest.id);
    let arr = first(4509);
    arr = arr.pop();
  };
  items8[1] = closure_11(quest(4714).Button, obj16);
  obj14[1] = items8;
  const items9 = [closure_12(closure_7, obj14), ];
  const obj17 = { accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
  const intl5 = tmp(1236).intl;
  obj17[1] = intl5.string(quest(1236).t["931n1T"]);
  obj17[2] = accessibilityState;
  obj17[3] = function onPress() {
    dependencyMap(!first);
    quest(10467).setAutoEnroll(!first);
  };
  obj17[4] = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
  const items10 = [closure_11(quest(7971).FormCheckbox, { checked: first }), ];
  const obj18 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl6 = tmp(1236).intl;
  obj18[2] = intl6.string(quest(1236).t["931n1T"]);
  items10[1] = closure_11(quest(4299).Text, obj18);
  obj17[5] = items10;
  items9[1] = closure_12(closure_6, obj17);
  obj13[1] = items9;
  items7[1] = closure_12(closure_7, obj13);
  obj[4] = items7;
  return closure_12(quest(4712).Stack, obj);
}
function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = registerAsset;
  obj[1] = function onPress() {
    return callback(table[22]).pop();
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return callback2(HeaderActionButton.HeaderActionButton, obj);
}
({ Pressable: closure_6, View: error } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { MAIN: "main" };
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, content: null, imagesContainer: null, baseShadow: null, appIconContainer: null, appIcon: null, rewardTileContainer: null, questRewardTile: null, textContainer: null, buttonsContainer: null, footer: null };
  obj = { flex: 1, paddingHorizontal: Themes.space.PX_24, paddingVertical: Themes.space.PX_16, paddingBottom: Themes.space.PX_48 };
  obj[0] = obj;
  obj[1] = { marginTop: "auto" };
  obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: Themes.space.PX_32 };
  let obj3 = PlatformTypes;
  if (obj3.isIOS()) {
    if (arg0) {
      const obj1 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: null, shadowOpacity: 0.6, shadowRadius: 85 };
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
let result = require("noop").fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  let stateFromStores;
  let obj = questId(589);
  const items = [initializeState];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.getQuest(questId));
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
      return callback(questId(4299).Text, obj);
    };
    obj[3] = function render() {
      const obj = { questOrQuests: stateFromStores, questContent: null, sourceQuestContent: null, children: null };
      obj[1] = questId(outer1_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL;
      obj[2] = questId(outer1_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL;
      obj[3] = function children() {
        return outer1_11(outer1_15, { quest: closure_1 });
      };
      return outer1_11(questId(outer1_2[34]).QuestContentImpressionTrackerNative, obj);
    };
    obj[constants.MAIN] = obj;
    const obj1 = { screens: null, initialRouteName: null };
    obj1[0] = obj;
    obj1[1] = constants.MAIN;
    return callback2(tmp(11341).Modal, obj1);
  }
  tmp = questId;
};