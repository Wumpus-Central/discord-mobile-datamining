// === Module 18310: UserSettingsDesignSystemSegmentedControl ===

// Module 18310 (UserSettingsDesignSystemSegmentedControl)
import nativeDefault from "native" /* 575 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import Text_Text from "Text/Text" /* 5866 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: metroImportDefault, jsx: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  const tmp2 = useMeasuredLayoutDefault();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  [first, importDefault] = noop.useState(3);
  closure_129_0 = first;
  const tmp6 = closure_9();
  closure_129_1 = tmp6;
  items = [first, tmp6.item];
  const memo = noop.useMemo(() => {
    let sum;
    items = [];
    let num = 0;
    if (0 < first) {
      do {
        let obj = { label: null, id: null, page: null };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        obj.label = "Item " + sum;
        let _HermesInternal2 = HermesInternal;
        obj.id = "item-" + sum;
        let obj2 = { style: closure_1.item, children: null };
        let obj3 = { variant: "heading-xxl/semibold", children: null };
        let items1 = ["Item ", sum];
        obj3.children = items1;
        obj2.children = metroImportDefault(Text_Text.Text, obj3);
        obj.page = React5(hasOwnProperty, obj2);
        let arr = items.push(obj);
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  const tmp5 = closure_9();
  const segmentedControlState = first(7917).useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: 1 });
  let obj2 = { children: null };
  let obj3 = { style: tmp5.container, ref, onLayout, children: null };
  const obj4 = { spacing: 24, children: null };
  let items1 = [closure_8(first(11190).SegmentedControl, { state: segmentedControlState }), closure_8(first(14834).SegmentedControlPages, { state: segmentedControlState }), ];
  const obj5 = { spacing: 8, direction: "horizontal", children: null };
  const items2 = [
    closure_8(first(5873).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 5,
      onPress() {
        const sum = first + 1;
        closure_1(sum);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
      }
    }),
    closure_8(first(5873).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        const diff = first - 1;
        closure_1(diff);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
      }
    })
  ];
  obj5.children = items2;
  items1[2] = closure_7(first(6274).Stack, obj5);
  obj4.children = items1;
  obj3.children = closure_7(first(6274).Stack, obj4);
  obj2.children = closure_8(closure_5, obj3);
  return closure_8(closure_6, obj2);
};