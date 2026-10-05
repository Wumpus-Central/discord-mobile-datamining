// === Module 15625: DevToolsContent ===

// Module 15625 (DevToolsContent)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14406 */;
import useSortedDevToolsScreens from "useSortedDevToolsScreens" /* 15626 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 15627 */;
import ArrowSmallDownIcon from "ArrowSmallDownIcon" /* 15629 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11082 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;

const require = globalThis.__r;
const useSortedDevToolsScreensDefault = useSortedDevToolsScreens;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj = { devToolsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 }, sortingIcons: null, button: null, disabledButton: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj.sortingIcons = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let size = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center" };
obj.button = size;
obj.disabledButton = { opacity: 0.5 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(576).c(13);
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
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ExperimentStore];
    const fn2 = function p() {
      return Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApexExperimentStore];
    class S {
      constructor() {
        return Object.keys(closure_1_9.getClientOverrides()).length;
      }
    }
    cResult[4] = items2;
    cResult[5] = S;
    let tmp13 = S;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult3 = stateFromStores(504);
  const sum = stateFromStores1 + stateFromStores(504).useStateFromStores(tmp12, tmp13);
  importDefault = sum;
  const arr4 = useSortedDevToolsScreensDefault();
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === arr4) {
      if (cResult[8] === sum) {
        return cResult[9];
      }
    }
  }
  if (cResult[10] === stateFromStores) {
    if (cResult[11] === sum) {
      let tmp16 = cResult[12];
    }
    const mapped = arr4.map(tmp16);
    class S {
      constructor() {
        return Object.keys(closure_1_9.getClientOverrides()).length;
      }
    }
    cResult[7] = arr4;
    cResult[8] = sum;
    cResult[9] = mapped;
  }
  class C {
    constructor(arg0) {
      first = closure_3(arg0, 1)[0];
      if ("buildOverride" === first) {
        tmp6 = null;
        tmp7 = undefined;
        if (null != closure_0) {
          tmp8 = jsx;
          tmp9 = closure_14;
          obj1 = { label: "Build override: ", value: null };
          obj1.value = tmp5;
          tmp7 = jsx(closure_14, obj1, first);
        }
        return tmp7;
      } else {
        str = "experiments";
        if ("experiments" === first) {
          str2 = closure_1;
          num = 0;
          tmp2 = undefined;
          if (closure_1 > 0) {
            tmp3 = jsx;
            tmp4 = closure_14;
            obj = { label: "Experiments overridden: ", value: null };
            obj.value = str2.toString();
            tmp2 = jsx(closure_14, obj, first);
          }
          return tmp2;
        } else {
          return;
        }
      }
    }
  }
  cResult[10] = stateFromStores;
  cResult[11] = sum;
  cResult[12] = C;
  tmp16 = C;
  const tmpResult4 = stateFromStores(504);
}) : (() => {
  const items = [BuildOverrideStore];
  _require = require("initialize").useStateFromStores(items, () => {
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
  let obj = require("initialize");
  const items1 = [ExperimentStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
  let obj2 = require("initialize");
  const items2 = [ApexExperimentStore];
  importDefault = stateFromStores + require("initialize").useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
  const obj3 = require("initialize");
  return useSortedDevToolsScreensDefault().map((item) => {
    [tmp] = item;
    if ("buildOverride" === tmp) {
      let tmp7;
      if (null != closure_0) {
        const obj2 = { label: "Build override: ", value: tmp5 };
        tmp7 = v65535(memoResult, obj2, tmp);
      }
      return tmp7;
    } else if ("experiments" === tmp) {
      let tmp2;
      if (closure_1 > 0) {
        const obj = { label: "Experiments overridden: ", value: closure_1.toString() };
        tmp2 = v65535(memoResult, obj, tmp);
      }
      return tmp2;
    }
  });
});
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ label, value } = arg0);
  if (cResult[0] !== value) {
    const obj2 = { variant: "text-xs/semibold", children: value };
    const tmp6 = v65535(Text_Text.Text, obj2);
    cResult[0] = value;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === label) {
    if (cResult[3] === tmp4) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const items = [label, tmp4];
  obj3.children = items;
  const tmp8 = closure_1_11(Text_Text.Text, obj3);
  cResult[2] = label;
  cResult[3] = tmp4;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  ({ label, value } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const items = [label, v65535(Text_Text.Text, { variant: "text-xs/semibold", children: value })];
  obj.children = items;
  return closure_1_11(Text_Text.Text, obj);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((screenKey) => {
  const cResult = screenKey(576).c(24);
  screenKey = screenKey.screenKey;
  ({ start, end } = screenKey);
  const tmp4 = closure_12();
  if (cResult[0] !== screenKey) {
    const fn = function n() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      useSortedDevToolsScreens.updateSortOrder(screenKey, "up");
    };
    cResult[0] = screenKey;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let disabledButton = start;
  if (start) {
    disabledButton = tmp4.disabledButton;
  }
  if (cResult[2] === tmp4.button) {
    if (cResult[3] === disabledButton) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = closure_10(tmp(15627).ArrowSmallUpIcon, {});
      cResult[5] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] === start) {
      if (cResult[7] === tmp5) {
        if (cResult[10] !== screenKey) {
          class T {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
              obj2 = closure_0(closure_2[13]);
              updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
              return;
            }
          }
          cResult[10] = screenKey;
          cResult[11] = T;
        } else {
          class T {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
              obj2 = closure_0(closure_2[13]);
              updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
              return;
            }
          }
        }
        if (end) {
          class T {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
              obj2 = closure_0(closure_2[13]);
              updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
              return;
            }
          }
        }
        if (cResult[12] === tmp4.button) {
          class T {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
              obj2 = closure_0(closure_2[13]);
              updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
              return;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor() {
                obj = closure_0(closure_2[15]);
                result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
                obj2 = closure_0(closure_2[13]);
                updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
                return;
              }
            }
            const tmp18 = closure_10(tmp(15629).ArrowSmallDownIcon, {});
            cResult[15] = tmp18;
            const tmp17 = tmp18;
          } else {
            class T {
              constructor() {
                obj = closure_0(closure_2[15]);
                result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
                obj2 = closure_0(closure_2[13]);
                updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
                return;
              }
            }
          }
          if (cResult[16] === end) {
            class T {
              constructor() {
                obj = closure_0(closure_2[15]);
                result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
                obj2 = closure_0(closure_2[13]);
                updateSortOrderResult = obj2.updateSortOrder(screenKey, "down");
                return;
              }
            }
          }
          const obj2 = { onPress: T, disabled: end, style: tmp16, accessibilityRole: "button", accessibilityLabel: "Shift down", children: tmp17 };
          const tmp21 = closure_10(tmp(5909).PressableOpacity, obj2);
          cResult[16] = end;
          cResult[17] = T;
          cResult[18] = tmp16;
          cResult[19] = tmp21;
        }
        const items = [tmp4.button, end];
        cResult[12] = tmp4.button;
        cResult[13] = end;
        cResult[14] = items;
      }
    }
    const obj3 = { onPress: tmp5, disabled: start, style: tmp6, accessibilityRole: "button", accessibilityLabel: "Shift up", children: tmp8 };
    const tmp13 = closure_10(tmp(5909).PressableOpacity, obj3);
    cResult[6] = start;
    cResult[7] = tmp5;
    cResult[8] = tmp6;
    cResult[9] = tmp13;
  }
  const items1 = [tmp4.button, disabledButton];
  cResult[2] = tmp4.button;
  cResult[3] = disabledButton;
  cResult[4] = items1;
  tmp6 = items1;
  let obj = screenKey(576);
}) : ((arg0) => {
  ({ screenKey: require, start, end } = arg0);
  const tmp = closure_12();
  let obj = { style: tmp.sortingIcons, children: null };
  const obj2 = {
    onPress() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      useSortedDevToolsScreens.updateSortOrder(_require, "up");
    },
    disabled: start,
    style: null,
    accessibilityRole: "button",
    accessibilityLabel: "Shift up",
    children: null
  };
  const items = [tmp.button, ];
  if (start) {
    start = tmp.disabledButton;
  }
  items[1] = start;
  obj2.style = items;
  obj2.children = closure_10(ArrowSmallUpIcon.ArrowSmallUpIcon, {});
  const items1 = [closure_10(Pressables.PressableOpacity, obj2), ];
  const obj3 = {
    onPress() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      useSortedDevToolsScreens.updateSortOrder(_require, "down");
    },
    disabled: end,
    style: null,
    accessibilityRole: "button",
    accessibilityLabel: "Shift down",
    children: null
  };
  const items2 = [tmp.button, ];
  if (end) {
    end = tmp.disabledButton;
  }
  items2[1] = end;
  obj3.style = items2;
  obj3.children = closure_10(ArrowSmallDownIcon.ArrowSmallDownIcon, {});
  items1[1] = closure_10(Pressables.PressableOpacity, obj3);
  obj.children = items1;
  return closure_11(closure_5, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = navigation(first[10]).c(18);
  ({ title, embedded } = arg0);
  const tmp4 = closure_12();
  let obj = navigation(first[10]);
  let tmp = navigation;
  navigation = navigation(first[19]).useNavigation();
  const tmp7 = require("useSafeAreaInsets")();
  const tmp8 = closure_13();
  importDefault = tmp8;
  let num = 2;
  [first, _slicedToArray] = arr.useState(false);
  arr = require("useSortedDevToolsScreens")();
  if (cResult[0] === arr) {
    if (cResult[1] === first) {
      if (cResult[2] === navigation) {
        if (cResult[3] === tmp8) {
          if (cResult[10] === cResult[4]) {
            if (cResult[11] === title) {
              let tmp15 = cResult[12];
            }
            if (cResult[13] === tmp15) {
              if (cResult[14] === embedded) {
                if (cResult[15] === tmp7) {
                  if (cResult[16] === tmp4) {
                    let tmp18 = cResult[17];
                  }
                  return tmp18;
                }
              }
            }
            let tmp19 = tmp15;
            if (!embedded) {
              let obj3 = { style: tmp4.devToolsContainer, contentContainerStyle: null, children: null };
              const obj4 = { paddingBottom: tmp7.bottom + tmp6(tmp2[8]).space.PX_16 };
              obj3.contentContainerStyle = obj4;
              obj3.children = tmp15;
              tmp19 = closure_10(closure_6, obj3);
            }
            cResult[13] = tmp15;
            cResult[14] = embedded;
            cResult[15] = tmp7;
            cResult[16] = tmp4;
            cResult[17] = tmp19;
            tmp18 = tmp19;
          }
          const obj5 = { title, hasIcons: true, children: cResult[4] };
          const tmp17 = closure_10(tmp(tmp2[24]).TableRowGroup, obj5);
          cResult[10] = cResult[4];
          cResult[11] = title;
          cResult[12] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
  }
  if (cResult[5] === arr.length) {
    if (cResult[6] === first) {
      if (cResult[7] === navigation) {
        if (cResult[8] === tmp8) {
          let tmp12 = cResult[9];
        }
        const mapped = arr.map(tmp12);
        cResult[0] = arr;
        cResult[1] = first;
        cResult[num] = navigation;
        cResult[3] = tmp8;
        num = 4;
        cResult[4] = mapped;
      }
    }
  }
  const fn = function c(arg0, arg1) {
    const tmp = closure_3(arg0, 2);
    const screenKey = tmp[0];
    ({ headerTitle, Icon } = tmp[1]);
    let obj = { label: headerTitle, subLabel: closure_1[arg1], icon: closure_1_10(navigation(screenKey[21]).TableRow.Icon, { IconComponent: Icon }), arrow: !screenKey, trailing: null, onLongPress: null, onPress: null };
    let tmp3Result;
    if (screenKey) {
      let obj2 = { screenKey, start: 0 === arg1, end: arg1 === arr.length - 1 };
      tmp3Result = closure_1_10(closure_1_15, obj2);
    }
    obj.trailing = tmp3Result;
    obj.onLongPress = function onLongPress() {
      let str = "sorting-enabled";
      if (closure_1_2) {
        str = "sorting-disabled";
      }
      const obj2 = { key: str, content: null };
      let str2 = "Sorting enabled";
      if (closure_1_2) {
        str2 = "Sorting disabled";
      }
      obj2.content = str2;
      closure_1(first[22]).open(obj2);
      const obj = closure_1(first[22]);
      const result = navigation(first[15]).triggerHapticFeedback(navigation(first[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
      closure_1_3((arg0) => !arg0);
      const obj3 = navigation(first[15]);
    };
    obj.onPress = function onPress() {
      if (!screenKey) {
        if (null != navigation.push) {
          navigation.push(screenKey);
        } else {
          const obj2 = { screenKey };
          DevToolsNavigator.navigateToDevTools(obj2);
        }
      }
    };
    return closure_1_10(navigation(screenKey[21]).TableRow, obj, screenKey);
  };
  cResult[5] = arr.length;
  cResult[6] = first;
  cResult[7] = navigation;
  cResult[8] = tmp8;
  cResult[9] = fn;
  tmp12 = fn;
  let obj2 = navigation(first[19]);
  tmp6 = importDefault;
}) : ((arg0) => {
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let arr;
  ({ title, embedded } = arg0);
  const tmp = closure_12();
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  importDefault = closure_13();
  const tmp4 = useSafeAreaInsetsDefault();
  [c2, c3] = arr.useState(false);
  arr = useSortedDevToolsScreensDefault();
  const tmp5 = _slicedToArray(arr.useState(false), 2);
  const tmp7 = closure_10(require("TableRowGroup").TableRowGroup, {
    title,
    hasIcons: true,
    children: arr.map((item, index) => {
      [tmp, ] = item;
      let obj = { label: tmp2, subLabel: closure_1[index], icon: closure_1_10(screenKey(_undefined[21]).TableRow.Icon, { IconComponent: tmp3 }), arrow: !_undefined, trailing: null, onLongPress: null, onPress: null };
      let tmp4Result;
      if (_undefined) {
        let obj2 = { screenKey: tmp, start: 0 === index, end: index === arr.length - 1 };
        tmp4Result = closure_1_10(closure_1_15, obj2);
      }
      obj.trailing = tmp4Result;
      obj.onLongPress = function onLongPress() {
        let str = "sorting-enabled";
        if (_undefined) {
          str = "sorting-disabled";
        }
        const obj2 = { key: str, content: null };
        let str2 = "Sorting enabled";
        if (_undefined) {
          str2 = "Sorting disabled";
        }
        obj2.content = str2;
        closure_1(dependencyMap[22]).open(obj2);
        const obj = closure_1(dependencyMap[22]);
        const result = screenKey(dependencyMap[15]).triggerHapticFeedback(screenKey(dependencyMap[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_3((arg0) => !arg0);
        const obj3 = screenKey(dependencyMap[15]);
      };
      obj.onPress = function onPress() {
        if (!c2) {
          if (null != screenKey.push) {
            screenKey.push(screenKey);
          } else {
            const obj2 = { screenKey };
            DevToolsNavigator.navigateToDevTools(obj2);
          }
        }
      };
      return closure_1_10(screenKey(_undefined[21]).TableRow, obj, tmp);
    })
  });
  let tmp6Result = tmp7;
  if (!embedded) {
    let obj3 = { style: tmp.devToolsContainer, contentContainerStyle: null, children: null };
    const obj4 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    obj3.contentContainerStyle = obj4;
    obj3.children = tmp7;
    tmp6Result = closure_10(closure_6, obj3);
  }
  return tmp6Result;
}));
export const DevToolsContentSubLabel = memoResult;