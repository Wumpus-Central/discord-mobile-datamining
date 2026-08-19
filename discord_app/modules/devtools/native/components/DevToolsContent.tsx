// discord_app/modules/devtools/native/components/DevToolsContent.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HapticFeedbackTypes from "../../../haptics/HapticUtils.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import getSortedDevToolsScreens from "../useSortedDevToolsScreens.tsx";
import getSortedDevToolsScreensDefault from "../useSortedDevToolsScreens.tsx";
import ArrowSmallUpIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallUpIcon.tsx";
import ArrowSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallDownIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import getCurrentBuildOverride from "../../../build_overrides/BuildOverrideStore.tsx";
import getHash from "../../../experiments/ExperimentStore.tsx";
import initialize from "../../../experiments/apex/ApexExperimentStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

require = fn;
function DevToolsContentSortButtons(arg0) {
  ({ screenKey: require, start, end } = arg0);
  const tmp = callback4();
  let obj = {
    onPress() {
      const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
      getSortedDevToolsScreens.updateSortOrder(closure_0, "up");
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
  obj[2] = items;
  obj[5] = callback(ArrowSmallUpIcon.ArrowSmallUpIcon, {});
  const items1 = [callback(PressableBase.PressableOpacity, obj), ];
  obj = {
    onPress() {
      const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
      getSortedDevToolsScreens.updateSortOrder(closure_0, "down");
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
  obj[2] = items2;
  obj[5] = callback(ArrowSmallDownIcon.ArrowSmallDownIcon, {});
  items1[1] = callback(PressableBase.PressableOpacity, obj);
  obj[1] = items1;
  return callback2(closure_5, obj);
}
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
const createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center" };
obj[3] = { opacity: 0.5 };
let closure_12 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ label, value } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const items = [label, callback2(Text.Text, { variant: "text-xs/semibold", children: value })];
  obj[2] = items;
  return callback3(Text.Text, obj);
});
const memoResult1 = importAllResult.memo(function DevToolsContent(arg0) {
  let _require;
  dependencyMap = undefined;
  let callback;
  let arr5;
  ({ title, embedded } = arg0);
  let obj = useNavigation;
  obj.useNavigation();
  _require = undefined;
  importDefault = undefined;
  const tmp = callback4();
  obj1 = initialize;
  const items = [closure_7];
  _require = obj1.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[callback(undefined, _undefined[10]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  });
  let tmp4 = useSafeAreaInsetsDefault();
  const items1 = [closure_8];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
  let obj3 = initialize;
  const items2 = [closure_9];
  stateFromStores + require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
  const obj4 = initialize;
  importDefault = getSortedDevToolsScreensDefault().map((item, index) => {
    [tmp] = item;
    if ("buildOverride" === tmp) {
      let tmp7;
      if (null != closure_0) {
        let obj = { label: "Build override: ", value: null };
        obj[1] = tmp5;
        tmp7 = closure_1_10(closure_1_13, obj);
      }
      return tmp7;
    } else if ("experiments" === tmp) {
      let tmp2;
      if (closure_1 > 0) {
        obj = { label: "Experiments overridden: ", value: null };
        obj[1] = closure_1.toString();
        tmp2 = closure_1_10(closure_1_13, obj);
      }
      return tmp2;
    }
  });
  const arr4 = getSortedDevToolsScreensDefault();
  [c2, c3] = callback(arr5.useState(false), 2);
  arr5 = getSortedDevToolsScreensDefault();
  obj = {
    title,
    hasIcons: true,
    children: arr5.map((item, index) => {
      [tmp, ] = item;
      let obj = { label: tmp2, subLabel: table[index], icon: closure_1_10(callback(_undefined[20]).TableRow.Icon, { IconComponent: tmp3 }), arrow: !_undefined, trailing: null, onLongPress: null, onPress: null };
      let tmp4Result;
      if (_undefined) {
        obj = { screenKey: null, start: null, end: null };
        obj[0] = tmp;
        obj[1] = 0 === index;
        obj[2] = index === arr5.length - 1;
        tmp4Result = closure_1_10(DevToolsContentSortButtons, obj);
      }
      obj[4] = tmp4Result;
      obj[5] = function onLongPress() {
        let obj = closure_1_1(closure_1_2[21]);
        let str = "sorting-enabled";
        if (closure_2) {
          str = "sorting-disabled";
        }
        obj = { key: str, content: null };
        let str2 = "Sorting enabled";
        if (closure_2) {
          str2 = "Sorting disabled";
        }
        obj[1] = str2;
        obj.open(obj);
        const result = closure_1_0(closure_1_2[14]).triggerHapticFeedback(closure_1_0(closure_1_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
        callback2((arg0) => !arg0);
        const obj3 = closure_1_0(closure_1_2[14]);
      };
      obj[6] = function onPress() {
        if (!closure_1_2) {
          let arr = closure_1_0;
          if (null != closure_1_0.push) {
            arr = arr.push(callback);
          } else {
            callback(table[22]);
            const obj = { screenKey: null };
            obj[0] = callback;
            obj.navigateToDevTools(obj);
          }
        }
      };
      return closure_1_10(callback(_undefined[20]).TableRow, obj, tmp);
    })
  };
  const tmp8 = callback2(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx").TableRowGroup, obj);
  let tmp7Result = tmp8;
  if (!embedded) {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.devToolsContainer;
    obj1 = { paddingBottom: null };
    obj1[0] = tmp4.bottom + ThemesDefault.space.PX_16;
    obj[1] = obj1;
    obj[2] = tmp8;
    tmp7Result = callback2(closure_6, obj);
  }
  return tmp7Result;
});
let result = require("obj132").fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default memoResult1;
export const DevToolsContentSubLabel = memoResult;