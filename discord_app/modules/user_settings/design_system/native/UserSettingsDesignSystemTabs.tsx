// === Module 15897: UserSettingsDesignSystemTabs ===

// Module 15897 (UserSettingsDesignSystemTabs)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4634 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { margin: 16, flex: 1, alignItems: "center" }, item: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  const tmp = _slicedToArray(noop.useState(0), 2);
  _require = tmp[1];
  [first, dependencyMap] = noop.useState(3);
  const tmp4 = _slicedToArray(noop.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const first2 = tmp9[0];
  closure_129_0 = first;
  closure_129_1 = tmp7;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const tmp12 = closure_9();
  closure_129_2 = tmp12;
  let items = [first, tmp12.item, tmp7];
  const memo = noop.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < closure_0) {
      do {
        let obj = { label: null, count: null, id: null, page: null };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        obj.label = "Item " + sum;
        let rounded;
        if (first) {
          let _Math = Math;
          let _Math2 = Math;
          rounded = Math.floor(100 * Math.random());
        }
        obj.count = rounded;
        let _HermesInternal2 = HermesInternal;
        obj.id = "item-" + sum;
        let obj2 = { style: closure_2.item, children: null };
        let obj3 = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj3.children = items1;
        obj2.children = React5(Text_Text.Text, obj3);
        obj.page = React6(hasOwnProperty, obj2);
        let arr = items.push(obj);
        num = sum;
      } while (sum < closure_0);
    }
    return items;
  }, items);
  const tmp11 = closure_9();
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = require("SegmentedControlState");
  const token = require("useToken").useToken(first(576).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj2 = require("useToken");
  const tmp18 = first;
  items1[1] = require("ColorUtils").hexWithOpacity(token, 0);
  const obj4 = { style: tmp11.container, onLayout: callback, children: null };
  const items2 = [closure_8(require("Tabs/Tabs").Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp20Result = first2;
  if (first2) {
    const obj5 = { state: segmentedControlState, colors: items1 };
    tmp20Result = closure_8(tmp18(12902), obj5);
  }
  const obj6 = { children: null };
  const obj7 = { spacing: 24, children: null };
  items2[1] = tmp20Result;
  const items3 = [closure_7(closure_5, { children: items2 }), closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj8 = { spacing: 8, direction: "horizontal", children: null };
  const items4 = [
    closure_8(require("components/Button/Button").Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 10,
      onPress() {
        return closure_2(first + 1);
      }
    }),
    closure_8(require("components/Button/Button").Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        return closure_2(first - 1);
      }
    })
  ];
  obj8.children = items4;
  items3[2] = closure_7(require("Stack/Stack").Stack, obj8);
  const obj11 = { children: null };
  const items5 = [closure_8(require("TableSwitchRow").TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp4[1] }), closure_8(require("TableSwitchRow").TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), closure_8(require("TableSwitchRow").TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp9[1] })];
  obj11.children = items5;
  items3[3] = closure_7(closure_5, obj11);
  obj7.children = items3;
  obj4.children = closure_7(require("Stack/Stack").Stack, obj7);
  obj6.children = closure_8(closure_5, obj4);
  return closure_8(closure_6, obj6);
};