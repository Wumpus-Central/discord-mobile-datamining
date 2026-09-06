// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: 400,
};
createStyles.item = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx",
);

export default function UserSettingsDesignSystemSegmentedControl() {
  const tmp = _slicedToArray(noop.useState(0), 2);
  _require = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(3), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  closure_129_0 = first;
  const tmp5 = closure_8();
  closure_129_1 = tmp5;
  let items = [first, tmp5.item];
  const memo = noop.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < closure_0) {
      do {
        let obj = { label: null, id: null, page: null };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        obj.label = "Item " + sum;
        let _HermesInternal2 = HermesInternal;
        obj.id = "item-" + sum;
        obj = { style: first.item, children: null };
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj.children = items1;
        obj.children = timestampProducer(Text_Text.Text, obj);
        obj.page = React5(React4, obj);
        let arr = items.push(obj);
        num = sum;
      } while (sum < closure_0);
    }
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  obj = { children: null };
  obj = {
    style: closure_8().container,
    onLayout: noop.useCallback((nativeEvent) => {
      closure_0(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null,
  };
  const obj1 = { spacing: 24, children: null };
  let items1 = [
    closure_7(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }),
    closure_7(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }),
  ];
  const obj2 = { spacing: 8, direction: "horizontal", children: null };
  const items2 = [
    closure_7(require("components/Button/Button").Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 5,
      onPress() {
        const sum = first + 1;
        closure_2(sum);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
      },
    }),
    closure_7(require("components/Button/Button").Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        const diff = first - 1;
        closure_2(diff);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
      },
    }),
  ];
  obj2.children = items2;
  items1[2] = closure_6(require("Stack/Stack").Stack, obj2);
  obj1.children = items1;
  obj.children = closure_6(require("Stack/Stack").Stack, obj1);
  obj.children = closure_7(closure_4, obj);
  return closure_7(closure_5, obj);
}
