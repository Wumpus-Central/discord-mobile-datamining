// === Module 15625: DevToolsContent ===

// Module 15625 (DevToolsContent)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14406 */;
import useSortedDevToolsScreens from "useSortedDevToolsScreens" /* 15626 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 15627 */;
import ArrowSmallDownIcon from "ArrowSmallDownIcon" /* 15629 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11082 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const useSortedDevToolsScreensDefault = useSortedDevToolsScreens;
let _require, dependencyMap, importDefault, navigation;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { devToolsContainer: obj2, sortingIcons: obj3, button: size, disabledButton: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
size = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center" };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let allExperimentOverrideDescriptors;
  let clientOverrides;
  let currentBuildOverride;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BuildOverrideStore];
    const fn = function o() {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[stateFromStores(undefined, dependencyMap[11]).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ExperimentStore];
    const fn2 = function p() {
      return Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = stateFromStores(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApexExperimentStore];
    class S {
      constructor() {
        return Object.keys(clientOverrides.getClientOverrides()).length;
      }
    }
    cResult[4] = items2;
    cResult[5] = S;
    tmp13 = S;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = stateFromStores(504);
  const sum = stateFromStores1 + tmpResult4.useStateFromStores(tmp12, tmp13);
  importDefault = sum;
  const arr4 = useSortedDevToolsScreensDefault();
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === arr4) {
      if (cResult[8] === sum) {
        tmp16 = cResult[9];
      }
      return tmp16;
    }
  }
  if (cResult[10] === stateFromStores) {
    let tmp17;
    if (cResult[11] === sum) {
      tmp17 = cResult[12];
    }
    const mapped = arr4.map(tmp17);
    class S {
      constructor() {
        return Object.keys(clientOverrides.getClientOverrides()).length;
      }
    }
    cResult[7] = arr4;
    cResult[8] = sum;
    cResult[9] = mapped;
    tmp16 = mapped;
  }
  class C {
    constructor(arg0) {
      const first = _slicedToArray(arg0, 1)[0];
      if ("buildOverride" === first) {
        let tmp7;
        if (null != stateFromStores) {
          const obj2 = { label: "Build override: ", value: tmp5 };
          tmp7 = authStore(memoResult, obj2, first);
        }
        return tmp7;
      } else if ("experiments" === first) {
        let tmp2;
        if (importDefault > 0) {
          const obj = { label: "Experiments overridden: ", value: importDefault.toString() };
          tmp2 = authStore(memoResult, obj, first);
        }
        return tmp2;
      }
    }
  }
  cResult[10] = stateFromStores;
  cResult[11] = sum;
  cResult[12] = C;
  tmp17 = C;
}) : (() => {
  let allExperimentOverrideDescriptors;
  let clientOverrides;
  let closure_0;
  let closure_1;
  let currentBuildOverride;
  let obj = require("get initialized");
  const items = [BuildOverrideStore];
  _require = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[closure_0(undefined, dependencyMap[11]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  });
  let obj2 = require("get initialized");
  const items1 = [ExperimentStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
  const items2 = [ApexExperimentStore];
  const obj3 = require("get initialized");
  importDefault = stateFromStores + obj3.useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
  const arr4 = useSortedDevToolsScreensDefault();
  return arr4.map((item) => {
    let tmp;
    [tmp] = item;
    if ("buildOverride" === tmp) {
      let tmp7;
      if (null != closure_0) {
        const obj2 = { label: "Build override: ", value: tmp5 };
        tmp7 = authStore(memoResult, obj2, tmp);
      }
      return tmp7;
    } else if ("experiments" === tmp) {
      let tmp2;
      if (closure_1 > 0) {
        const obj = { label: "Experiments overridden: ", value: closure_1.toString() };
        tmp2 = authStore(memoResult, obj, tmp);
      }
      return tmp2;
    }
  });
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let label;
  let tmp4;
  let value;
  const obj = react2;
  const cResult = obj.c(5);
  ({ label, value } = arg0);
  if (cResult[0] !== value) {
    const obj2 = { variant: "text-xs/semibold", children: value };
    const tmp6 = authStore(Text_Text.Text, obj2);
    cResult[0] = value;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === label) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: items };
  items = [label, tmp4];
  const tmp8 = unpackModuleId(Text_Text.Text, obj3);
  cResult[2] = label;
  cResult[3] = tmp4;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let items;
  let label;
  let value;
  ({ label, value } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-subtle", children: items };
  items = [label, ];
  const Text = Text_Text.Text;
  items[1] = authStore(Text_Text.Text, { variant: "text-xs/semibold", children: value });
  return unpackModuleId(Text, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((screenKey) => {
  let end;
  let start;
  let tmp5;
  let obj = screenKey(576);
  const cResult = obj.c(24);
  screenKey = screenKey.screenKey;
  ({ start, end } = screenKey);
  const tmp4 = closure_12();
  if (cResult[0] !== screenKey) {
    const fn = function n() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = useSortedDevToolsScreens;
      obj2.updateSortOrder(screenKey, "up");
    };
    cResult[0] = screenKey;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.button) {
    let tmp7;
    let tmp9;
    if (cResult[3] === (start && tmp4.disabledButton)) {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = closure_10(screenKey(15627).ArrowSmallUpIcon, {});
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === start) {
      if (cResult[7] === tmp5) {
        if (cResult[10] !== screenKey) {
          class T {
            constructor() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              const obj2 = useSortedDevToolsScreens;
              obj2.updateSortOrder(screenKey, "down");
            }
          }
          cResult[10] = screenKey;
          cResult[11] = T;
        } else {
          class T {
            constructor() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              const obj2 = useSortedDevToolsScreens;
              obj2.updateSortOrder(screenKey, "down");
            }
          }
        }
        if (cResult[12] === tmp4.button) {
          let tmp18;
          class T {
            constructor() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              const obj2 = useSortedDevToolsScreens;
              obj2.updateSortOrder(screenKey, "down");
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor() {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                const obj2 = useSortedDevToolsScreens;
                obj2.updateSortOrder(screenKey, "down");
              }
            }
            const tmp19 = closure_10(screenKey(15629).ArrowSmallDownIcon, {});
            cResult[15] = tmp19;
            tmp18 = tmp19;
          } else {
            class T {
              constructor() {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                const obj2 = useSortedDevToolsScreens;
                obj2.updateSortOrder(screenKey, "down");
              }
            }
          }
          if (cResult[16] === end) {
            class T {
              constructor() {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                const obj2 = useSortedDevToolsScreens;
                obj2.updateSortOrder(screenKey, "down");
              }
            }
          }
          let obj2 = { onPress: T, disabled: end, style: tmp17, accessibilityRole: "button", accessibilityLabel: "Shift down", children: tmp18 };
          cResult[16] = end;
          cResult[17] = T;
          cResult[18] = tmp17;
          cResult[19] = closure_10(screenKey(5909).PressableOpacity, obj2);
          const tmp22 = closure_10(screenKey(5909).PressableOpacity, obj2);
        }
        const items = [tmp4.button, end && tmp4.disabledButton];
        cResult[12] = tmp4.button;
        cResult[13] = end && tmp4.disabledButton;
        cResult[14] = items;
      }
    }
    const obj3 = { onPress: tmp5, disabled: start, style: tmp7, accessibilityRole: "button", accessibilityLabel: "Shift up", children: tmp9 };
    cResult[6] = start;
    cResult[7] = tmp5;
    cResult[8] = tmp7;
    cResult[9] = closure_10(screenKey(5909).PressableOpacity, obj3);
    const tmp14 = closure_10(screenKey(5909).PressableOpacity, obj3);
  }
  const items1 = [tmp4.button, start && tmp4.disabledButton];
  cResult[2] = tmp4.button;
  cResult[3] = start && tmp4.disabledButton;
  cResult[4] = items1;
  tmp7 = items1;
}) : ((arg0) => {
  let end;
  let items;
  let items1;
  let items2;
  let require;
  let start;
  ({ screenKey: require, start, end } = arg0);
  const tmp = closure_12();
  let obj = { style: tmp.sortingIcons, children: items1 };
  let obj2 = {
    onPress() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = useSortedDevToolsScreens;
      obj2.updateSortOrder(_require, "up");
    },
    disabled: start,
    style: items,
    accessibilityRole: "button",
    accessibilityLabel: "Shift up",
    children: closure_10(ArrowSmallUpIcon.ArrowSmallUpIcon, {})
  };
  items = [tmp.button, ];
  const PressableOpacity = Pressables.PressableOpacity;
  if (start) {
    start = tmp.disabledButton;
  }
  items[1] = start;
  items1 = [closure_10(PressableOpacity, obj2), ];
  const obj3 = {
    onPress() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = useSortedDevToolsScreens;
      obj2.updateSortOrder(_require, "down");
    },
    disabled: end,
    style: items2,
    accessibilityRole: "button",
    accessibilityLabel: "Shift down",
    children: closure_10(ArrowSmallDownIcon.ArrowSmallDownIcon, {})
  };
  items2 = [tmp.button, ];
  const PressableOpacity2 = Pressables.PressableOpacity;
  if (end) {
    end = tmp.disabledButton;
  }
  items2[1] = end;
  items1[1] = closure_10(PressableOpacity2, obj3);
  return closure_11(closure_5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let closure_1;
  let closure_3;
  let embedded;
  let first;
  let obj4;
  let title;
  let tmp11;
  const tmp2 = first;
  let tmp = navigation;
  let obj = navigation(first[10]);
  const cResult = obj.c(18);
  ({ title, embedded } = arg0);
  const tmp4 = closure_12();
  let obj2 = navigation(first[19]);
  navigation = obj2.useNavigation();
  const tmp7 = require("useSafeAreaInsets")();
  const tmp8 = closure_13();
  const tmp6 = importDefault;
  importDefault = tmp8;
  [first, _slicedToArray] = arr.useState(false);
  arr = require("useSortedDevToolsScreens")();
  if (cResult[0] === arr) {
    if (cResult[1] === first) {
      if (cResult[2] === navigation) {
        if (cResult[3] === tmp8) {
          tmp11 = cResult[4];
        }
        if (cResult[10] === tmp11) {
          let tmp14;
          if (cResult[11] === title) {
            tmp14 = cResult[12];
          }
          if (cResult[13] === tmp14) {
            if (cResult[14] === embedded) {
              if (cResult[15] === tmp7) {
                let tmp17;
                if (cResult[16] === tmp4) {
                  tmp17 = cResult[17];
                }
                return tmp17;
              }
            }
          }
          let tmp18 = tmp14;
          if (!embedded) {
            const obj3 = { style: tmp4.devToolsContainer, contentContainerStyle: obj4, children: tmp14 };
            obj4 = { paddingBottom: tmp7.bottom + tmp6(tmp2[8]).space.PX_16 };
            tmp18 = closure_10(closure_6, obj3);
          }
          cResult[13] = tmp14;
          cResult[14] = embedded;
          cResult[15] = tmp7;
          cResult[16] = tmp4;
          cResult[17] = tmp18;
          tmp17 = tmp18;
        }
        const obj5 = { title, hasIcons: true, children: tmp11 };
        const tmp16 = closure_10(tmp(tmp2[24]).TableRowGroup, obj5);
        cResult[10] = tmp11;
        cResult[11] = title;
        cResult[12] = tmp16;
        tmp14 = tmp16;
      }
    }
  }
  if (cResult[5] === arr.length) {
    if (cResult[6] === first) {
      if (cResult[7] === navigation) {
        let tmp12;
        if (cResult[8] === tmp8) {
          tmp12 = cResult[9];
        }
        const mapped = arr.map(tmp12);
        cResult[0] = arr;
        cResult[1] = first;
        cResult[2] = navigation;
        cResult[3] = tmp8;
        cResult[4] = mapped;
        tmp11 = mapped;
      }
    }
  }
  const fn = function c(arg0, arg1) {
    let Icon;
    let headerTitle;
    let tmp3Result;
    const tmp = closure_3(arg0, 2);
    const screenKey = tmp[0];
    ({ headerTitle, Icon } = tmp[1]);
    let obj = {
      label: headerTitle,
      subLabel: closure_1[arg1],
      icon: closure_1_10(navigation(screenKey[21]).TableRow.Icon, { IconComponent: Icon }),
      arrow: !screenKey,
      trailing: tmp3Result,
      onLongPress() {
        let str2;
        let str = "sorting-enabled";
        const open = closure_1(first[22]).open;
        closure_1(first[22]);
        if (closure_1_2) {
          str = "sorting-disabled";
        }
        const obj = { key: str, content: str2 };
        str2 = "Sorting enabled";
        if (closure_1_2) {
          str2 = "Sorting disabled";
        }
        open(obj);
        const obj2 = navigation(first[15]);
        const result = obj2.triggerHapticFeedback(navigation(first[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_3((arg0) => !arg0);
      },
      onPress() {
        if (!screenKey) {
          if (null != navigation.push) {
            navigation.push(screenKey);
          } else {
            const obj2 = { screenKey };
            const obj = DevToolsNavigator;
            obj.navigateToDevTools(obj2);
          }
        }
      }
    };
    const TableRow = navigation(screenKey[21]).TableRow;
    tmp3Result = undefined;
    if (screenKey) {
      let obj2 = { screenKey, start: 0 === arg1, end: arg1 === arr.length - 1 };
      tmp3Result = closure_1_10(closure_1_15, obj2);
    }
    return closure_1_10(TableRow, obj, screenKey);
  };
  cResult[5] = arr.length;
  cResult[6] = first;
  cResult[7] = navigation;
  cResult[8] = tmp8;
  cResult[9] = fn;
  tmp12 = fn;
}) : ((arg0) => {
  let _undefined;
  let c2;
  let c3;
  let closure_0;
  let closure_1;
  let embedded;
  let obj4;
  let title;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let arr;
  ({ title, embedded } = arg0);
  const tmp = closure_12();
  const tmp2 = dependencyMap;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp3 = importDefault;
  const tmp4 = useSafeAreaInsetsDefault();
  importDefault = closure_13();
  [c2, c3] = arr.useState(false);
  _slicedToArray(arr.useState(false), 2);
  arr = useSortedDevToolsScreensDefault();
  let obj2 = {
    title,
    hasIcons: true,
    children: arr.map((item, index) => {
      let tmp;
      let tmp4Result;
      [tmp, ] = item;
      let obj = {
        label: tmp2,
        subLabel: closure_1[index],
        icon: closure_1_10(screenKey(c2[21]).TableRow.Icon, { IconComponent: tmp3 }),
        arrow: !c2,
        trailing: tmp4Result,
        onLongPress() {
          let str2;
          let str = "sorting-enabled";
          const open = closure_1(c2[22]).open;
          closure_1(c2[22]);
          if (_undefined) {
            str = "sorting-disabled";
          }
          const obj = { key: str, content: str2 };
          str2 = "Sorting enabled";
          if (_undefined) {
            str2 = "Sorting disabled";
          }
          open(obj);
          const obj2 = screenKey(c2[15]);
          const result = obj2.triggerHapticFeedback(screenKey(c2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
          closure_1_3((arg0) => !arg0);
        },
        onPress() {
          if (!c2) {
            if (null != screenKey.push) {
              screenKey.push(screenKey);
            } else {
              const obj2 = { screenKey };
              const obj = DevToolsNavigator;
              obj.navigateToDevTools(obj2);
            }
          }
        }
      };
      const TableRow = screenKey(c2[21]).TableRow;
      tmp4Result = undefined;
      if (c2) {
        let obj2 = { screenKey: tmp, start: 0 === index, end: index === arr.length - 1 };
        tmp4Result = closure_1_10(closure_1_15, obj2);
      }
      return closure_1_10(TableRow, obj, tmp);
    })
  };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  const tmp7 = closure_10(TableRowGroup, obj2);
  let tmp6Result = tmp7;
  if (!embedded) {
    const obj3 = { style: tmp.devToolsContainer, contentContainerStyle: obj4, children: tmp7 };
    obj4 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    tmp6Result = closure_10(closure_6, obj3);
  }
  return tmp6Result;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default memoResult1;
export const DevToolsContentSubLabel = memoResult;