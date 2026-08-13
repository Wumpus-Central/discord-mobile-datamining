// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsxs: closure_6, jsx: error } = jsxProd);
createCacheKey = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: require("Themes").colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  const tmp = callback(React.useState(0), 2);
  let first = tmp[1];
  let tmp2 = callback(React.useState(3), 2);
  first = tmp2[0];
  let dependencyMap = first;
  callback = tmp2[1];
  dependencyMap = undefined;
  let tmp5 = createCacheKey();
  dependencyMap = tmp5;
  let items = [first, tmp5.item];
  const memo = React.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < first) {
      do {
        let obj = { label: null, id: null, page: null };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        obj[0] = "Item " + sum;
        let _HermesInternal2 = HermesInternal;
        obj[1] = "item-" + sum;
        let tmp2 = outer1_7;
        let tmp3 = outer1_4;
        obj = { style: null, children: null };
        let tmp4 = _undefined;
        obj[0] = _undefined.item;
        let tmp5 = outer1_6;
        let tmp6 = first;
        let tmp7 = _undefined;
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj[1] = items1;
        obj[1] = outer1_6(first(_undefined[6]).Text, obj);
        obj[2] = outer1_7(outer1_4, obj);
        let arr = items.push(obj);
        let tmp9 = first;
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(9005);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  obj = { children: null };
  obj = {
    style: createCacheKey().container,
    onLayout: React.useCallback((nativeEvent) => {
      first(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  const obj1 = { spacing: 24, children: null };
  let items1 = [callback3(first(9191).SegmentedControl, { state: segmentedControlState }), callback3(first(9611).SegmentedControlPages, { state: segmentedControlState }), ];
  const obj2 = { spacing: 8, direction: "horizontal", children: null };
  const items2 = [
    callback3(first(4755).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 5,
      onPress() {
        const sum = _undefined + 1;
        callback(sum);
        const AccessibilityAnnouncer = first(_undefined[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
      }
    }),
    callback3(first(4755).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        const diff = _undefined - 1;
        callback(diff);
        const AccessibilityAnnouncer = first(_undefined[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
      }
    })
  ];
  obj2[2] = items2;
  items1[2] = callback2(first(4753).Stack, obj2);
  obj1[1] = items1;
  obj[2] = callback2(first(4753).Stack, obj1);
  obj[0] = callback3(closure_4, obj);
  return callback3(closure_5, obj);
};