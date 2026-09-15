// discord_app/modules/devtools/native/components/DevToolsContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import DevToolsNavigator from "DevToolsNavigator.tsx";
import useSortedDevToolsScreens from "../useSortedDevToolsScreens.tsx";
import ArrowSmallUpIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallUpIcon.tsx";
import ArrowSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallDownIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../../../build_overrides/BuildOverrideStore.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../../experiments/apex/ApexExperimentStore.tsx";

const require = globalThis.__r;
const useSortedDevToolsScreensDefault = useSortedDevToolsScreens;

require = fn;
function DevToolsContentSortButtons(arg0) {
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
    children: null,
  };
  const items = [tmp.button];
  if (start) {
    start = tmp.disabledButton;
  }
  items[1] = start;
  obj2.style = items;
  obj2.children = closure_10(ArrowSmallUpIcon.ArrowSmallUpIcon, {});
  const items1 = [closure_10(Pressables.PressableOpacity, obj2)];
  const obj3 = {
    onPress() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      useSortedDevToolsScreens.updateSortOrder(_require, "down");
    },
    disabled: end,
    style: null,
    accessibilityRole: "button",
    accessibilityLabel: "Shift down",
    children: null,
  };
  const items2 = [tmp.button];
  if (end) {
    end = tmp.disabledButton;
  }
  items2[1] = end;
  obj3.style = items2;
  obj3.children = closure_10(ArrowSmallDownIcon.ArrowSmallDownIcon, {});
  items1[1] = closure_10(Pressables.PressableOpacity, obj3);
  obj.children = items1;
  return closure_11(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4639);
let obj = {
  devToolsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 },
  sortingIcons: null,
  button: null,
  disabledButton: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj.sortingIcons = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let size = {
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.round,
  justifyContent: "center",
  alignItems: "center",
};
obj.button = size;
obj.disabledButton = { opacity: 0.5 };
let closure_12 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ label, value } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const items = [label, closure_1_10(Text_Text.Text, { variant: "text-xs/semibold", children: value })];
  obj.children = items;
  return closure_1_11(Text_Text.Text, obj);
});
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default noop.memo(function DevToolsContent(arg0) {
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let arr5;
  ({ title, embedded } = arg0);
  const tmp = closure_12();
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  let tmp4 = useSafeAreaInsetsDefault();
  const items = [BuildOverrideStore];
  closure_129_0 = require("initialize").useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[closure_0(undefined, _undefined[10]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  });
  let obj2 = require("initialize");
  const items1 = [ExperimentStore];
  const stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length,
  );
  let obj3 = require("initialize");
  const items2 = [ApexExperimentStore];
  closure_129_1 =
    stateFromStores +
    require("initialize").useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
  const obj4 = require("initialize");
  importDefault = useSortedDevToolsScreensDefault().map((item) => {
    [tmp] = item;
    if ("buildOverride" === tmp) {
      let tmp7;
      if (null != closure_0) {
        const obj2 = { label: "Build override: ", value: tmp5 };
        tmp7 = closure_2_10(memoResult, obj2, tmp);
      }
      return tmp7;
    } else if ("experiments" === tmp) {
      let tmp2;
      if (closure_1 > 0) {
        const obj = { label: "Experiments overridden: ", value: closure_1.toString() };
        tmp2 = closure_2_10(memoResult, obj, tmp);
      }
      return tmp2;
    }
  });
  const arr4 = useSortedDevToolsScreensDefault();
  [c2, c3] = arr5.useState(false);
  arr5 = useSortedDevToolsScreensDefault();
  const tmp6 = _slicedToArray(arr5.useState(false), 2);
  const tmp8 = closure_10(require("TableRowGroup").TableRowGroup, {
    title,
    hasIcons: true,
    children: arr5.map((item, index) => {
      [tmp] = item;
      let obj = {
        label: tmp2,
        subLabel: closure_1[index],
        icon: closure_1_10(screenKey(_undefined[20]).TableRow.Icon, { IconComponent: tmp3 }),
        arrow: !_undefined,
        trailing: null,
        onLongPress: null,
        onPress: null,
      };
      let tmp4Result;
      if (_undefined) {
        let obj2 = { screenKey: tmp, start: 0 === index, end: index === arr5.length - 1 };
        tmp4Result = closure_1_10(DevToolsContentSortButtons, obj2);
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
        closure_1(dependencyMap[21]).open(obj2);
        const obj = closure_1(dependencyMap[21]);
        const result = screenKey(dependencyMap[14]).triggerHapticFeedback(
          screenKey(dependencyMap[14]).HapticFeedbackTypes.IMPACT_MEDIUM,
        );
        closure_1_3((arg0) => !arg0);
        const obj3 = screenKey(dependencyMap[14]);
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
      return closure_1_10(screenKey(_undefined[20]).TableRow, obj, tmp);
    }),
  });
  let tmp7Result = tmp8;
  if (!embedded) {
    const obj6 = { style: tmp.devToolsContainer, contentContainerStyle: null, children: null };
    const obj7 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    obj6.contentContainerStyle = obj7;
    obj6.children = tmp8;
    tmp7Result = closure_10(closure_6, obj6);
  }
  return tmp7Result;
});
export const DevToolsContentSubLabel = memoResult;
