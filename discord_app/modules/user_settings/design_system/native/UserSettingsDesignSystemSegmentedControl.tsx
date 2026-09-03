// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsxs: closure_6, jsx: error } = jsxProd);
createCacheKey = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: null };
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: 400,
};
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx",
);

export default function UserSettingsDesignSystemSegmentedControl() {
  const tmp = callback(React.useState(0), 2);
  let first = tmp[1];
  let tmp2 = callback(React.useState(3), 2);
  first = tmp2[0];
  dependencyMap = first;
  callback = tmp2[1];
  dependencyMap = undefined;
  let tmp5 = callback4();
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
        let tmp2 = closure_1_7;
        let tmp3 = closure_1_4;
        obj = { style: null, children: null };
        let tmp4 = item;
        obj[0] = item.item;
        let tmp5 = closure_1_6;
        let tmp6 = first;
        let tmp7 = item;
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj[1] = items1;
        obj[1] = closure_1_6(first(item[6]).Text, obj);
        obj[2] = closure_1_7(closure_1_4, obj);
        let arr = items.push(obj);
        let tmp9 = first;
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(9277);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  obj = { children: null };
  obj = {
    style: callback4().container,
    onLayout: React.useCallback((nativeEvent) => {
      first(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null,
  };
  obj1 = { spacing: 24, children: null };
  let items1 = [
    callback3(first(9788).SegmentedControl, { state: segmentedControlState }),
    callback3(first(9285).SegmentedControlPages, { state: segmentedControlState }),
  ];
  const obj2 = { spacing: 8, direction: "horizontal", children: null };
  const items2 = [
    callback3(first(4929).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 5,
      onPress() {
        const sum = item + 1;
        callback(sum);
        const AccessibilityAnnouncer = first(item[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
      },
    }),
    callback3(first(4929).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        const diff = item - 1;
        callback(diff);
        const AccessibilityAnnouncer = first(item[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
      },
    }),
  ];
  obj2[2] = items2;
  items1[2] = callback2(first(4927).Stack, obj2);
  obj1[1] = items1;
  obj[2] = callback2(first(4927).Stack, obj1);
  obj[0] = callback3(closure_4, obj);
  return callback3(closure_5, obj);
}
