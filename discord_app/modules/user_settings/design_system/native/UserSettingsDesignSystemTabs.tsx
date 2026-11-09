// === Module 18114: UserSettingsDesignSystemTabs ===

// Module 18114 (UserSettingsDesignSystemTabs)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5751 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9069 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: metroImportDefault, jsx: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { margin: 16, flex: 1, alignItems: "center" }, item: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  const tmp3 = useMeasuredLayoutDefault();
  const width = tmp3.width;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== width) {
    num = width;
  }
  [first, importDefault] = noop.useState(3);
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  const first1 = tmp6[0];
  [tmp9, tmp10] = noop.useState(false);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  const first2 = tmp11[0];
  closure_129_0 = first;
  closure_129_1 = tmp9;
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const tmp14 = closure_9();
  closure_129_2 = tmp14;
  items = [first, tmp14.item, tmp9];
  const memo = noop.useMemo(() => {
    let sum;
    items = [];
    let num = 0;
    if (0 < first) {
      do {
        let obj = { label: null, count: null, id: null, page: null };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        obj.label = "Item " + sum;
        let rounded;
        if (closure_1) {
          let _Math = Math;
          let _Math2 = Math;
          rounded = Math.floor(100 * Math.random());
        }
        obj.count = rounded;
        let _HermesInternal2 = HermesInternal;
        obj.id = "item-" + sum;
        let obj2 = { style: item.item, children: null };
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
  const tmp13 = closure_9();
  const segmentedControlState = first(9059).useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: 1 });
  let obj = first(9059);
  const token = first(5724).useToken(tmp(575).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj2 = first(5724);
  items1[1] = first(5137).hexWithOpacity(token, 0);
  const obj4 = { style: tmp13.container, ref, onLayout, children: null };
  const items2 = [closure_8(first(12342).Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp19Result = first2;
  if (first2) {
    const obj5 = { state: segmentedControlState, colors: items1 };
    tmp19Result = closure_8(tmp(14608), obj5);
  }
  const obj6 = { children: null };
  const obj7 = { spacing: 24, children: null };
  items2[1] = tmp19Result;
  const items3 = [closure_7(closure_5, { children: items2 }), closure_8(first(14436).SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj8 = { spacing: 8, direction: "horizontal", children: null };
  const items4 = [
    closure_8(first(5758).Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 10,
      onPress() {
        return closure_1(first + 1);
      }
    }),
    closure_8(first(5758).Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        return closure_1(first - 1);
      }
    })
  ];
  obj8.children = items4;
  items3[2] = closure_7(first(6159).Stack, obj8);
  const obj11 = { children: null };
  const items5 = [closure_8(first(7429).TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp6[1] }), closure_8(first(7429).TableSwitchRow, { label: "Enable Counts", value: tmp9, onValueChange: tmp10 }), closure_8(first(7429).TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp11[1] })];
  obj11.children = items5;
  items3[3] = closure_7(closure_5, obj11);
  obj7.children = items3;
  obj4.children = closure_7(first(6159).Stack, obj7);
  obj6.children = closure_8(closure_5, obj4);
  return closure_8(closure_6, obj6);
};