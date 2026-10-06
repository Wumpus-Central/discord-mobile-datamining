// === Module 17215: QuestActivityUnenrolledModal ===

// Module 17215 (QuestActivityUnenrolledModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6890 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10971 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 14936 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestStore from "QuestStore" /* 7200 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17214 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, c1, c2, dependencyMap, questId;

let closure_12;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const constants = { MAIN: "main" };
let c14 = 87;
let closure_15 = createStyles.createStyles((arg0) => {
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj3;
  let obj9;
  let tmp5;
  const obj = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 }, content: { marginTop: "auto" }, imagesContainer: obj3, baseShadow: tmp5, appIconContainer: obj13, appIcon: size, rewardTileContainer: obj14, questRewardTile: { borderRadius: nativeDefault.radii.xl - 2.18 }, textContainer: { alignItems: "center", gap: nativeDefault.space.PX_8 }, buttonsContainer: { flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 }, footer: { flexDirection: "column", width: "100%", marginTop: "auto" } };
  ({ flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 });
  obj3 = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
  const obj4 = utils_PlatformUtils;
  if (obj4.isIOS()) {
    let obj6;
    if (arg0) {
      obj6 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
      const obj5 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
    } else {
      obj6 = {};
    }
    obj9 = obj6;
  } else {
    let items1;
    if (arg0) {
      const items = [{ dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } }, ];
      const obj7 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } };
      const obj8 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 } };
      items[1] = obj8;
      items1 = items;
    } else {
      items1 = [];
    }
    obj9 = { filter: items1 };
  }
  const merged = Object.assign(obj9);
  const obj10 = {};
  const tmp3Result = utils_PlatformUtils;
  if (tmp3Result.isIOS()) {
    let obj12;
    if (arg0) {
      obj12 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
      const obj11 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
    } else {
      obj12 = {};
    }
    const merged1 = Object.assign(obj12);
    tmp5 = obj10;
  } else {
    tmp5 = obj10;
  }
  obj13 = { borderRadius: nativeDefault.radii.xl, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: items2, overflow: "hidden" };
  items2 = [{ rotate: "-12.41deg" }];
  size = { width: v87, height: v87, borderRadius: nativeDefault.radii.xl - 2.18 };
  obj14 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: nativeDefault.radii.xl, borderStyle: "solid", transform: items3, overflow: "hidden" };
  items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
  ({ borderRadius: nativeDefault.radii.xl - 2.18 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let accessibilityRole;
  let accessibilityState;
  let closure_2;
  let closure_3;
  let state;
  let tmp13;
  let tmp5;
  let tmp8;
  let tmp9;
  let trackQuestContentClickedWithImpression;
  const tmp2 = dependencyMap;
  let obj = quest(576);
  const cResult = obj.c(85);
  quest = quest.quest;
  let obj2 = quest(4797);
  const theme = obj2.useTheme();
  if (cResult[0] !== theme) {
    const tmpResult = quest(4593);
    const isThemeDarkResult = tmpResult.isThemeDark(theme);
    cResult[0] = theme;
    cResult[1] = isThemeDarkResult;
    tmp5 = isThemeDarkResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_15(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnenrolledActivityQuestStore];
    class A {
      constructor() {
        return state.getState().autoEnroll;
      }
    }
    cResult[2] = items;
    cResult[3] = A;
    tmp9 = A;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult9 = quest(504);
  const tmp11 = trackQuestContentClickedWithImpression(react.useState(tmpResult9.useStateFromStores(tmp8, tmp9)), 2);
  const first = tmp11[0];
  dependencyMap = tmp11[1];
  if (cResult[4] !== quest) {
    const tmpResult10 = quest(7221);
    const activityApplicationId = tmpResult10.getActivityApplicationId(quest);
    class A {
      constructor() {
        return state.getState().autoEnroll;
      }
    }
    cResult[5] = activityApplicationId;
    tmp13 = activityApplicationId;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult11 = quest(6670);
  const getOrFetchApplication = tmpResult11.useGetOrFetchApplication(tmp13);
  const tmpResult12 = quest(10924);
  const questTaskDetails = tmpResult12.useQuestTaskDetails(quest);
  if (cResult[6] === quest) {
    let tmp17;
    if (cResult[7] === questTaskDetails) {
      tmp17 = cResult[8];
    }
    const tmpResult13 = quest(10968);
    const questsInstructionsToWinReward = tmpResult13.useQuestsInstructionsToWinReward(tmp17);
    class A {
      constructor() {
        return state.getState().autoEnroll;
      }
    }
    let tmp19 = null;
    if (null != getOrFetchApplication) {
      if (cResult[9] === getOrFetchApplication.icon) {
        let tmp20;
        if (cResult[10] === getOrFetchApplication.id) {
          tmp20 = cResult[11];
        }
        tmp19 = tmp20;
      }
      const obj10 = first(1402);
      class A {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      ({ id: tmp22[0], icon: tmp22[1] } = getOrFetchApplication);
      tmp22[2] = c14;
      const applicationIconURL = obj10.getApplicationIconURL(tmp22);
      cResult[9] = getOrFetchApplication.icon;
      cResult[10] = getOrFetchApplication.id;
      cResult[11] = applicationIconURL;
      tmp20 = applicationIconURL;
    }
    if (cResult[12] !== quest.id) {
      _require = _asyncToGenerator(async () => {
        if (c2 === 2) {
          c2 = 3;
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
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const obj4 = { questContent: tmp3(closure_2_2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp3(closure_2_2[23]).QuestContentCTA.START_QUEST, sourceQuestContent: tmp3(closure_2_2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
                const enrollInQuest = tmp3(closure_2_2[22]).enrollInQuest;
                const id = tmp3.id;
                const tmp14 = tmp3(closure_2_2[22]);
                c1 = 1;
                c2 = 1;
                const obj5 = { value: enrollInQuest(id, obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const arr = first(closure_2_2[24]);
              arr.pop();
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp8) {
            c2 = 3;
            throw tmp8;
          }
        }
      });
      const fn = function() {
        return closure_0(...arguments);
      };
      class A {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[12] = quest.id;
      cResult[13] = fn;
    }
    if (cResult[14] !== quest.id) {
      class V {
        constructor() {
          const obj = QuestActionCreators;
          const result = obj.dismissQuestActivityModal(quest.id);
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
      cResult[14] = quest.id;
      class A {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[15] = V;
    } else {
      class V {
        constructor() {
          const obj = QuestActionCreators;
          const result = obj.dismissQuestActivityModal(quest.id);
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(autoEnroll) {
          closure_2(autoEnroll);
          const obj = QuestActionCreators;
          obj.setAutoEnroll(autoEnroll);
        }
      }
      cResult[16] = B;
      class A {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
    } else {
      class B {
        constructor(autoEnroll) {
          closure_2(autoEnroll);
          const obj = QuestActionCreators;
          obj.setAutoEnroll(autoEnroll);
        }
      }
    }
    _asyncToGenerator = tmp28;
    if (cResult[17] !== first) {
      class B {
        constructor(autoEnroll) {
          closure_2(autoEnroll);
          const obj = QuestActionCreators;
          obj.setAutoEnroll(autoEnroll);
        }
      }
      tmp30[0] = first;
      class A {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[18] = tmp30;
    } else {
      class B {
        constructor(autoEnroll) {
          closure_2(autoEnroll);
          const obj = QuestActionCreators;
          obj.setAutoEnroll(autoEnroll);
        }
      }
    }
    const tmpResult14 = quest(4600);
    const checkboxA11yNative = tmpResult14.useCheckboxA11yNative(tmp30);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    const tmpResult15 = quest(10924);
    const isQuestAccessSuspended = tmpResult15.useIsQuestAccessSuspended();
    const tmpResult16 = quest(10967);
    trackQuestContentClickedWithImpression = tmpResult16.useTrackQuestContentClickedWithImpression();
    if (cResult[19] === quest.id) {
      class B {
        constructor(autoEnroll) {
          closure_2(autoEnroll);
          const obj = QuestActionCreators;
          obj.setAutoEnroll(autoEnroll);
        }
      }
      if (cResult[22] === tmp19) {
        class B {
          constructor(autoEnroll) {
            closure_2(autoEnroll);
            const obj = QuestActionCreators;
            obj.setAutoEnroll(autoEnroll);
          }
        }
      }
      class A {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[22] = tmp19;
      cResult[23] = tmp7.appIcon;
      cResult[24] = tmp7.appIconContainer;
      cResult[25] = null != tmp19;
    }
    const fn2 = function j() {
      const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
      trackQuestContentClickedWithImpression(obj);
      openQuestAccessSuspendedBottomSheetDefault();
    };
    cResult[19] = quest.id;
    cResult[20] = trackQuestContentClickedWithImpression;
    cResult[21] = fn2;
  }
  let obj3 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: tmp(5633).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  cResult[6] = quest;
  cResult[7] = questTaskDetails;
  cResult[8] = obj3;
  tmp17 = obj3;
}) : ((quest) => {
  let accessibilityRole;
  let accessibilityState;
  let closure_2;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let obj16;
  let obj17;
  let state;
  let tmp22;
  quest = quest.quest;
  dependencyMap = undefined;
  let trackQuestContentClickedWithImpression;
  const tmp2 = dependencyMap;
  let obj = quest(4797);
  const theme = obj.useTheme();
  let obj2 = quest(4593);
  const tmp4 = closure_15(obj2.isThemeDark(theme));
  let obj3 = quest(504);
  const items = [UnenrolledActivityQuestStore];
  const tmp5 = trackQuestContentClickedWithImpression(react.useState(obj3.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  const checked = tmp5[0];
  dependencyMap = tmp5[1];
  const useGetOrFetchApplication = quest(6670).useGetOrFetchApplication;
  quest(6670);
  let obj4 = quest(7221);
  const getOrFetchApplication = useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(10924);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  const items1 = [getOrFetchApplication];
  const obj6 = quest(10968);
  const obj7 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5633).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj7);
  const memo = react.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      const obj3 = { id: null, icon: null, size };
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      const obj = AvatarUtilsDefault;
      applicationIconURL = obj.getApplicationIconURL(obj3);
    }
    return applicationIconURL;
  }, items1);
  const items2 = [quest.id];
  const callback = react.useCallback(getOrFetchApplication(function*() {
    let closure_0;
    let v1;
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { questContent: tmp3(c2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp3(c2[23]).QuestContentCTA.START_QUEST, sourceQuestContent: tmp3(c2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
            const enrollInQuest = tmp3(c2[22]).enrollInQuest;
            const id = quest.id;
            const tmp14 = tmp3(c2[22]);
            v1 = 1;
            c2 = 1;
            const obj5 = { value: enrollInQuest(id, obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const arr = v1(c2[24]);
          arr.pop();
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  }), items2);
  const obj8 = quest(4600);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj9 = quest(10924);
  const isQuestAccessSuspended = obj9.useIsQuestAccessSuspended();
  const obj10 = quest(10967);
  trackQuestContentClickedWithImpression = obj10.useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = react.useCallback(() => {
    const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
    trackQuestContentClickedWithImpression(obj);
    openQuestAccessSuspendedBottomSheetDefault();
  }, items3);
  const obj11 = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: items8 };
  const obj12 = { style: tmp4.content, children: items5 };
  const obj13 = { style: tmp4.baseShadow, children: closure_12(closure_7, obj14) };
  let tmp19Result = null != memo;
  obj14 = { style: tmp4.imagesContainer, children: items4 };
  const Stack = quest(5600).Stack;
  if (tmp19Result) {
    const obj15 = { style: tmp4.appIconContainer, children: closure_11(checked(5981), obj16) };
    obj16 = { source: obj17, style: tmp4.appIcon };
    obj17 = { uri: memo };
    tmp19Result = closure_11(closure_7, obj15);
  }
  items4 = [tmp19Result, ];
  const obj18 = { style: tmp4.rewardTileContainer, children: closure_11(checked(10963), size) };
  size = { quest, height: v87, width: v87, style: tmp4.questRewardTile };
  items4[1] = closure_11(closure_7, obj18);
  items5 = [closure_11(closure_7, obj13), ];
  const obj19 = { style: tmp4.textContainer, children: items6 };
  const obj20 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: intl.string(quest(1126).t.IrNgN4) };
  const Text = tmp(4892).Text;
  intl = tmp(1126).intl;
  items6 = [closure_11(Text, obj20), ];
  const obj21 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: items7 };
  const Text2 = tmp(4892).Text;
  const intl2 = tmp(1126).intl;
  items7 = [, , ];
  const obj22 = { questName: quest.config.messages.questName };
  items7[0] = intl2.format(quest(1126).t.V3NSJx, obj22);
  items7[1] = "\u00A0";
  items7[2] = questsInstructionsToWinReward;
  items6[1] = closure_12(Text2, obj21);
  items5[1] = closure_12(closure_7, obj19);
  items8 = [closure_12(closure_7, obj12), ];
  const obj23 = { style: tmp4.footer, children: items10 };
  const obj24 = { style: tmp4.buttonsContainer, children: items9 };
  const obj25 = { size: "lg", text: intl3.string(quest(1126).t.l7E81v), onPress: callback, disabled: isQuestAccessSuspended, onPressDisabled: tmp22 };
  const Button = tmp(5601).Button;
  intl3 = tmp(1126).intl;
  tmp22 = undefined;
  if (isQuestAccessSuspended) {
    tmp22 = callback1;
  }
  items9 = [closure_11(Button, obj25), ];
  const obj26 = {
    size: "lg",
    text: intl4.string(quest(1126).t.fyT2ol),
    onPress() {
      const obj = QuestActionCreators;
      const result = obj.dismissQuestActivityModal(quest.id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    },
    variant: "secondary"
  };
  const Button2 = tmp(5601).Button;
  intl4 = tmp(1126).intl;
  items9[1] = closure_11(Button2, obj26);
  items10 = [closure_12(closure_7, obj24), ];
  const obj27 = {
    accessibilityRole,
    accessibilityLabel: intl5.string(quest(1126).t["931n1T"]),
    accessibilityState,
    onPress() {
      closure_2(!first);
      const obj = QuestActionCreators;
      obj.setAutoEnroll(!first);
    },
    style: { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 },
    children: items11
  };
  intl5 = tmp(1126).intl;
  items11 = [closure_11(tmp(5998).FormCheckbox, { checked }), ];
  const obj28 = { variant: "text-sm/normal", color: "text-subtle", children: intl6.string(quest(1126).t["931n1T"]) };
  const Text3 = tmp(4892).Text;
  intl6 = tmp(1126).intl;
  items11[1] = closure_11(Text3, obj28);
  items10[1] = closure_12(closure_6, obj27);
  items8[1] = closure_12(closure_7, obj23);
  return closure_12(Stack, obj11);
});
ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault, onPress: first, accessibilityLabel: intl.string(intl7.t.cpT0Cq) };
    const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
    intl = intl7.intl;
    const tmp8 = unpackModuleId(HeaderActionButton, obj2);
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let intl;
  const obj = {
    source: AssetRegistryDefault,
    onPress() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    },
    accessibilityLabel: intl.string(intl7.t.cpT0Cq)
  };
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  intl = intl7.intl;
  return unpackModuleId(HeaderActionButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  let first;
  let tmp6;
  let obj = questId(576);
  const cResult = obj.c(7);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questId) {
    const fn = function o() {
      return QuestStore.getQuest(questId);
    };
    cResult[1] = questId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = questId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp8;
    let tmp10;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function c() {
        return null;
      };
      cResult[3] = fn2;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
      cResult[4] = C;
    } else {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
    }
    if (cResult[5] !== stateFromStores) {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
      const obj2 = {
        headerLeft,
        headerRight: tmp8,
        headerTitle: C,
        render() {
              let quest;
              let obj = {
                questOrQuests: stateFromStores,
                questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                children() {
                  const obj = { quest };
                  return closure_2_11(closure_2_16, obj);
                }
              };
              const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
              return unpackModuleId(QuestContentImpressionTrackerNative, obj);
            }
      };
      tmp11[constants.MAIN] = obj2;
      const obj3 = { screens: tmp11, initialRouteName: constants.MAIN };
      const tmp15 = closure_11(questId(10989).Modal, obj3);
      cResult[5] = stateFromStores;
      cResult[6] = tmp15;
      tmp10 = tmp15;
    } else {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
    }
    return tmp10;
  }
}) : ((questId) => {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  const tmp = questId;
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = {};
    const obj3 = {
      headerLeft,
      headerRight() {
          return null;
        },
      headerTitle() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        },
      render() {
          let quest;
          let obj = {
            questOrQuests: stateFromStores,
            questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              const obj = { quest };
              return closure_2_11(closure_2_16, obj);
            }
          };
          const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
          return unpackModuleId(QuestContentImpressionTrackerNative, obj);
        }
    };
    obj2[constants.MAIN] = obj3;
    const obj4 = { screens: obj2, initialRouteName: constants.MAIN };
    return closure_11(tmp(10989).Modal, obj4);
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default tmp4;