// === Module 15673: UserSettingsDesignSystemTabs ===

// Module 15673 (UserSettingsDesignSystemTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import TableSwitchRow from "TableSwitchRow" /* 6705 */;
import SegmentedControlState from "SegmentedControlState" /* 9317 */;
import SegmentedControlPages from "SegmentedControlPages" /* 10987 */;
import Tabs_Tabs from "Tabs/Tabs" /* 12297 */;
import TabsGradientDefault from "TabsGradient" /* 12440 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { margin: 16, flex: 1, alignItems: "center" }, item: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let sum;
  const cResult = c.c(4);
  const tmp2 = closure_9();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2.item) {
      if (cResult[2] === arg1) {
        let tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  const items = [];
  let num = 0;
  if (0 < arg0) {
    do {
      let obj2 = { label: null, count: null, id: null, page: null };
      sum = num + 1;
      let _HermesInternal = HermesInternal;
      obj2.label = "Item " + sum;
      let rounded;
      if (arg1) {
        let _Math = Math;
        let _Math2 = Math;
        rounded = Math.floor(100 * Math.random());
      }
      obj2.count = rounded;
      let _HermesInternal2 = HermesInternal;
      obj2.id = "item-" + sum;
      let obj3 = { style: tmp2.item, children: null };
      let obj4 = { variant: "heading-xxl/bold", children: null };
      let items1 = ["Item ", sum];
      obj4.children = items1;
      obj3.children = React5(Text_Text.Text, obj4);
      obj2.page = closure_1_8(hasOwnProperty, obj3);
      let arr = items.push(obj2);
      num = sum;
    } while (sum < arg0);
  }
  cResult[0] = arg0;
  cResult[1] = tmp2.item;
  cResult[2] = arg1;
  cResult[3] = items;
  tmp3 = items;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const tmp = closure_9();
  const item = tmp;
  let items = [arg0, tmp.item, arg1];
  return noop.useMemo(() => {
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
        if (closure_1) {
          let _Math = Math;
          let _Math2 = Math;
          rounded = Math.floor(100 * Math.random());
        }
        obj.count = rounded;
        let _HermesInternal2 = HermesInternal;
        obj.id = "item-" + sum;
        let obj2 = { style: item.item, children: null };
        let obj3 = { variant: "heading-xxl/bold", children: null };
        let items1 = ["Item ", sum];
        obj3.children = items1;
        obj2.children = React5(Text_Text.Text, obj3);
        obj.page = closure_2_8(hasOwnProperty, obj2);
        let arr = items.push(obj);
        num = sum;
      } while (sum < closure_0);
    }
    return items;
  }, items);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(token, 0);
    cResult[0] = token;
    cResult[1] = hexWithOpacityResult;
    let tmp5 = hexWithOpacityResult;
    const tmpResult = ColorUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [token, tmp5];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (() => {
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const items = [token, ];
  items[1] = ColorUtils.hexWithOpacity(token, 0);
  return items;
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(47);
  [tmp5, require] = noop.useState(0);
  [first, closure_2] = noop.useState(3);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  const first1 = _slicedToArray(noop.useState(true), 2)[0];
  const tmp8 = _slicedToArray(noop.useState(true), 2);
  [tmp11, r10034] = noop.useState(false);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  const first2 = _slicedToArray(noop.useState(false), 2)[0];
  closure_9();
  const tmp15 = closure_10(first, tmp11);
  if (cResult[0] === tmp15) {
    if (cResult[1] === tmp5) {
      let tmp16 = cResult[2];
    }
    const segmentedControlState = SegmentedControlState.useSegmentedControlState(tmp16);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      cResult[3] = D;
    } else {
      class D {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
    }
    const tmp21 = closure_11();
    if (cResult[4] === segmentedControlState) {
      class D {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      if (cResult[7] === tmp21) {
        class D {
          constructor(arg0) {
            tmp = closure_0(arg0.nativeEvent.layout.width);
            return;
          }
        }
      }
      let tmp26 = first2;
      if (first2) {
        class D {
          constructor(arg0) {
            tmp = closure_0(arg0.nativeEvent.layout.width);
            return;
          }
        }
        const obj2 = { state: segmentedControlState, colors: tmp21 };
        tmp26 = closure_1_8(TabsGradientDefault, obj2);
      }
      cResult[7] = tmp21;
      cResult[8] = segmentedControlState;
      cResult[9] = first2;
      cResult[10] = tmp26;
    }
    const obj3 = { state: segmentedControlState, grow: first1 };
    const tmp24 = closure_1_8(Tabs_Tabs.Tabs, obj3);
    cResult[4] = segmentedControlState;
    cResult[5] = first1;
    cResult[6] = tmp24;
    const tmpResult = SegmentedControlState;
  }
  const obj4 = { items: tmp15, pageWidth: tmp5, defaultIndex: 1 };
  cResult[0] = tmp15;
  cResult[1] = tmp5;
  cResult[2] = obj4;
  tmp16 = obj4;
  const tmp12 = _slicedToArray(noop.useState(false), 2);
}) : (() => {
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp[1];
  [first, closure_2] = noop.useState(3);
  const tmp4 = _slicedToArray(noop.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const first2 = tmp9[0];
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const tmp11 = closure_9();
  const tmp12 = closure_10(first, tmp7);
  const segmentedControlState = SegmentedControlState.useSegmentedControlState({ items: tmp12, pageWidth: tmp[0], defaultIndex: 1 });
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj2 = { style: tmp11.container, onLayout: callback, children: null };
  const items = [closure_1_8(Tabs_Tabs.Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp18Result = first2;
  if (first2) {
    const obj3 = { state: segmentedControlState, colors: tmp17 };
    tmp18Result = closure_1_8(TabsGradientDefault, obj3);
  }
  const obj4 = { children: null };
  const obj5 = { spacing: 24, children: null };
  items[1] = tmp18Result;
  const items1 = [React5(hasOwnProperty, { children: items }), closure_1_8(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj6 = { spacing: 8, direction: "horizontal", children: null };
  const items2 = [
    closure_1_8(components_Button_Button.Button, {
      text: "Add Tab",
      variant: "active",
      size: "sm",
      disabled: first >= 10,
      onPress() {
        return closure_2(first + 1);
      }
    }),
    closure_1_8(components_Button_Button.Button, {
      text: "Remove Tab",
      variant: "destructive",
      size: "sm",
      disabled: 2 === first,
      onPress() {
        return closure_2(first - 1);
      }
    })
  ];
  obj6.children = items2;
  items1[2] = React5(Stack_Stack.Stack, obj6);
  const obj9 = { children: null };
  const items3 = [closure_1_8(TableSwitchRow.TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp4[1] }), closure_1_8(TableSwitchRow.TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), closure_1_8(TableSwitchRow.TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp9[1] })];
  obj9.children = items3;
  items1[3] = React5(hasOwnProperty, obj9);
  obj5.children = items1;
  obj2.children = React5(Stack_Stack.Stack, obj5);
  obj4.children = closure_1_8(hasOwnProperty, obj2);
  return closure_1_8(timestampProducer, obj4);
});