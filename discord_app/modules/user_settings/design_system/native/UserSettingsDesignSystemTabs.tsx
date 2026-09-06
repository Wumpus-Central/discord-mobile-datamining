// === Module 15775: UserSettingsDesignSystemTabs ===

// Module 15775 (UserSettingsDesignSystemTabs)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: { margin: 16, flex: 1, alignItems: "center" }, item: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
createStyles.item = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  const tmp = _slicedToArray(noop.useState(0), 2);
  _require = tmp[1];
  let tmp2 = _slicedToArray(noop.useState(3), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let tmp4 = _slicedToArray(noop.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = _slicedToArray(noop.useState(false), 2);
  let tmp9 = _slicedToArray(noop.useState(false), 2);
  const first2 = tmp9[0];
  closure_129_0 = first;
  closure_129_1 = tmp7;
  let tmp6 = _slicedToArray(noop.useState(false), 2);
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
        obj = { style: null, children: null };
        obj.style = closure_2.item;
        obj = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj.children = items1;
        obj.children = React5(Text_Text.Text, obj);
        obj.page = React6(hasOwnProperty, obj);
        let arr = items.push(obj);
        num = sum;
      } while (sum < closure_0);
    }
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp[0], defaultIndex: 1 });
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj1 = require("useToken");
  const token = obj1.useToken(first(576).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj2 = require("ColorUtils");
  items1[1] = obj2.hexWithOpacity(token, 0);
  obj = { style: closure_9().container, onLayout: callback, children: null };
  const items2 = [closure_8(require("Tabs").Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp20Result = first2;
  if (first2) {
    obj = { state: segmentedControlState, colors: items1 };
    tmp20Result = tmp20(first(12759), obj);
  }
  obj1 = { children: null };
  obj2 = { spacing: 24, children: null };
  items2[1] = tmp20Result;
  const items3 = [closure_7(closure_5, { children: items2 }), closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj3 = { spacing: 8, direction: "horizontal", children: null };
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
  obj3.children = items4;
  items3[2] = closure_7(require("Stack/Stack").Stack, obj3);
  const obj6 = { children: null };
  const items5 = [closure_8(require("TableSwitchRow").TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp4[1] }), closure_8(require("TableSwitchRow").TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), closure_8(require("TableSwitchRow").TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp9[1] })];
  obj6.children = items5;
  items3[3] = closure_7(closure_5, obj6);
  obj2.children = items3;
  obj.children = closure_7(require("Stack/Stack").Stack, obj2);
  obj1.children = closure_8(closure_5, obj);
  return closure_8(closure_6, obj1);
};