// === Module 15343: DevToolsContentSortButtons ===

// Module 15343 (DevToolsContentSortButtons)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5068 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 14658 */;
import getSortedDevToolsScreensDefault from "getSortedDevToolsScreens" /* 15344 */;
import ArrowSmallDownIcon from "ArrowSmallDownIcon" /* 15345 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "getCurrentBuildOverride" /* 11059 */;
import closure_8 from "getHash" /* 4391 */;
import closure_9 from "initialize" /* 1212 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function DevToolsContentSortButtons(arg0) {
  ({ screenKey: require, start, end } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.sortingIcons, children: null };
  obj = {
    onPress() {
      const result = closure_1_0(closure_1_2[14]).triggerHapticFeedback(closure_1_0(closure_1_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = closure_1_0(closure_1_2[14]);
      closure_1_0(closure_1_2[11]).updateSortOrder(closure_0, "up");
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
  obj[5] = closure_10(ArrowSmallUpIcon.ArrowSmallUpIcon, {});
  const items1 = [closure_10(PressableBase.PressableOpacity, obj), ];
  obj = {
    onPress() {
      const result = closure_1_0(closure_1_2[14]).triggerHapticFeedback(closure_1_0(closure_1_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = closure_1_0(closure_1_2[14]);
      closure_1_0(closure_1_2[11]).updateSortOrder(closure_0, "down");
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
  obj[5] = closure_10(ArrowSmallDownIcon.ArrowSmallDownIcon, {});
  items1[1] = closure_10(PressableBase.PressableOpacity, obj);
  obj[1] = items1;
  return closure_11(closure_5, obj);
}
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { devToolsContainer: null, sortingIcons: null, button: null, disabledButton: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
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
const obj2 = { backgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center" };
const memoResult1 = importAllResult.memo(function DevToolsContent(arg0) {
  let _require;
  importDefault = undefined;
  dependencyMap = undefined;
  let callback;
  let arr5;
  ({ title, embedded } = arg0);
  let obj = _require(1499);
  _require = obj.useNavigation();
  _require = undefined;
  importDefault = undefined;
  const tmp = callback4();
  const tmp3 = importDefault;
  obj1 = _require(589);
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
  const stateFromStores = _require(589).useStateFromStores(items1, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
  const obj3 = _require(589);
  const items2 = [closure_9];
  importDefault = stateFromStores + _require(589).useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
  const obj4 = _require(589);
  importDefault = getSortedDevToolsScreensDefault().map((arg0) => {
    [tmp] = arg0;
    if ("buildOverride" === tmp) {
      let tmp7;
      if (null != closure_0) {
        let obj = { label: "Build override: ", value: null };
        obj[1] = tmp5;
        tmp7 = closure_1_10(closure_1_13, obj, tmp);
      }
      return tmp7;
    } else if ("experiments" === tmp) {
      let tmp2;
      if (closure_1 > 0) {
        obj = { label: "Experiments overridden: ", value: null };
        obj[1] = closure_1.toString();
        tmp2 = closure_1_10(closure_1_13, obj, tmp);
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
    children: arr5.map((arg0, arg1) => {
      [tmp, ] = arg0;
      let obj = { label: tmp2, subLabel: table[arg1], icon: closure_1_10(callback(_undefined[20]).TableRow.Icon, { IconComponent: tmp3 }), arrow: !_undefined, trailing: null, onLongPress: null, onPress: null };
      let tmp4Result;
      if (_undefined) {
        obj = { screenKey: null, start: null, end: null };
        obj[0] = tmp;
        obj[1] = 0 === arg1;
        obj[2] = arg1 === arr5.length - 1;
        tmp4Result = tmp4(closure_1_14, obj);
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
        const result = closure_1_0(closure_1_2[14]).triggerHapticFeedback(closure_1_0(tmp[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
        callback2((arg0) => !arg0);
      };
      obj[6] = function onPress() {
        if (!closure_1_2) {
          let arr = closure_1_0;
          if (null != closure_1_0.push) {
            arr = arr.push(callback);
          } else {
            let obj = callback(table[22]);
            obj = { screenKey: null };
            obj[0] = callback;
            obj.navigateToDevTools(obj);
          }
        }
      };
      return closure_1_10(callback(_undefined[20]).TableRow, obj, tmp);
    })
  };
  const tmp8 = callback2(_require(5992).TableRowGroup, obj);
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
let result = require("set").fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default memoResult1;
export const DevToolsContentSubLabel = memoResult;