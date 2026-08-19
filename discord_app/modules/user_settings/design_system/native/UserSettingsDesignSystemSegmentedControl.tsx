// === Module 14917: UserSettingsDesignSystemSegmentedControl ===

// Module 14917 (UserSettingsDesignSystemSegmentedControl)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsxs: closure_6, jsx: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: ThemesDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  const tmp = callback(React.useState(0), 2);
  const tmp2 = callback(React.useState(3), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp5 = callback4();
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
        obj = { style: null, children: null };
        obj[0] = item.item;
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj[1] = items1;
        obj[1] = closure_1_6(first(item[6]).Text, obj);
        obj[2] = closure_1_7(closure_1_4, obj);
        let arr = items.push(obj);
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(8799);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  obj = {
    style: callback4().container,
    onLayout: React.useCallback((nativeEvent) => {
      first(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  obj1 = { spacing: 24, children: null };
  let items1 = [callback3(first(10096).SegmentedControl, { state: segmentedControlState }), callback3(first(11785).SegmentedControlPages, { state: segmentedControlState }), ];
  const obj2 = { spacing: 8, direction: "horizontal", children: null };
  const items2 = [
    callback3(first(4745).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 5,
      onPress() {
        const sum = item + 1;
        callback(sum);
        const AccessibilityAnnouncer = first(item[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
      }
    }),
    callback3(first(4745).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        const diff = item - 1;
        callback(diff);
        const AccessibilityAnnouncer = first(item[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
      }
    })
  ];
  obj2[2] = items2;
  items1[2] = callback2(first(4733).Stack, obj2);
  obj1[1] = items1;
  obj[2] = callback2(first(4733).Stack, obj1);
  obj[0] = callback3(closure_4, obj);
  return callback3(closure_5, obj);
};