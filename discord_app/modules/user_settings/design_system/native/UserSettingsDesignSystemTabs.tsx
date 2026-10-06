// === Module 15673: UserSettingsDesignSystemTabs ===

// Module 15673 (UserSettingsDesignSystemTabs)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import TableSwitchRow from "TableSwitchRow" /* 6705 */;
import SegmentedControlState from "SegmentedControlState" /* 9317 */;
import SegmentedControlPages from "SegmentedControlPages" /* 10987 */;
import Tabs from "Tabs" /* 12297 */;
import TabsGradientDefault from "TabsGradient" /* 12440 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
let obj = { container: { margin: 16, flex: 1, alignItems: "center" }, item: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let items1;
  let obj3;
  let obj4;
  let rounded;
  let sum;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp2 = closure_9();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2.item) {
      let tmp3;
      if (cResult[2] === arg1) {
        tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  const items = [];
  let num = 0;
  if (0 < arg0) {
    do {
      let obj2 = { label: "Item " + sum, count: rounded, id: "item-" + sum, page: metroImportAll(hasOwnProperty, obj3) };
      sum = num + 1;
      let _HermesInternal = HermesInternal;
      let push = items.push;
      rounded = undefined;
      if (arg1) {
        let _Math = Math;
        let _Math2 = Math;
        rounded = Math.floor(100 * Math.random());
      }
      let _HermesInternal2 = HermesInternal;
      obj3 = { style: tmp2.item, children: metroImportDefault(Text_Text.Text, obj4) };
      obj4 = { variant: "heading-xxl/bold", children: items1 };
      items1 = ["Item ", sum];
      let arr = push(obj2);
      num = sum;
    } while (sum < arg0);
  }
  cResult[0] = arg0;
  cResult[1] = tmp2.item;
  cResult[2] = arg1;
  cResult[3] = items;
  tmp3 = items;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = closure_9();
  const item = tmp;
  let items = [arg0, tmp.item, arg1];
  return react.useMemo(() => {
    let items1;
    let obj2;
    let obj3;
    let rounded;
    let sum;
    const items = [];
    let num = 0;
    if (0 < closure_0) {
      do {
        let obj = { label: "Item " + sum, count: rounded, id: "item-" + sum, page: metroImportAll(hasOwnProperty, obj2) };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        let push = items.push;
        rounded = undefined;
        if (closure_1) {
          let _Math = Math;
          let _Math2 = Math;
          rounded = Math.floor(100 * Math.random());
        }
        let _HermesInternal2 = HermesInternal;
        obj2 = { style: item.item, children: metroImportDefault(Text_Text.Text, obj3) };
        obj3 = { variant: "heading-xxl/bold", children: items1 };
        items1 = ["Item ", sum];
        let arr = push(obj);
        num = sum;
      } while (sum < closure_0);
    }
    return items;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const tmpResult = ColorUtils;
    const hexWithOpacityResult = tmpResult.hexWithOpacity(token, 0);
    cResult[0] = token;
    cResult[1] = hexWithOpacityResult;
    tmp5 = hexWithOpacityResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [token, tmp5];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (() => {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const items = [token, ];
  const obj2 = ColorUtils;
  items[1] = obj2.hexWithOpacity(token, 0);
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let closure_2;
  let first;
  let tmp11;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(47);
  [tmp5, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, closure_2] = react.useState(3);
  const first1 = _slicedToArray(react.useState(true), 2)[0];
  _slicedToArray(react.useState(true), 2);
  [tmp11, r10034] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const first2 = _slicedToArray(react.useState(false), 2)[0];
  _slicedToArray(react.useState(false), 2);
  closure_9();
  const tmp15 = closure_10(first, tmp11);
  if (cResult[0] === tmp15) {
    let tmp16;
    if (cResult[1] === tmp5) {
      tmp16 = cResult[2];
    }
    const tmpResult = SegmentedControlState;
    const segmentedControlState = tmpResult.useSegmentedControlState(tmp16);
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
      if (tmp26) {
        class D {
          constructor(arg0) {
            tmp = closure_0(arg0.nativeEvent.layout.width);
            return;
          }
        }
        const obj2 = { state: segmentedControlState, colors: tmp21 };
        tmp26 = metroImportAll(TabsGradientDefault, obj2);
      }
      cResult[7] = tmp21;
      cResult[8] = segmentedControlState;
      cResult[9] = first2;
      cResult[10] = tmp26;
    }
    const obj3 = { state: segmentedControlState, grow: first1 };
    cResult[4] = segmentedControlState;
    cResult[5] = first1;
    cResult[6] = metroImportAll(Tabs.Tabs, obj3);
    const tmp24 = metroImportAll(Tabs.Tabs, obj3);
  }
  const obj4 = { items: tmp15, pageWidth: tmp5, defaultIndex: 1 };
  cResult[0] = tmp15;
  cResult[1] = tmp5;
  cResult[2] = obj4;
  tmp16 = obj4;
}) : (() => {
  let Stack;
  let closure_0;
  let closure_2;
  let first;
  let first1;
  let first2;
  let first3;
  let items1;
  let items2;
  let items3;
  let obj5;
  let tmp10;
  let tmp13;
  let tmp7;
  let tmp9;
  [first, closure_0] = react.useState(0);
  [first1, closure_2] = react.useState(3);
  [first2, tmp7] = react.useState(true);
  [tmp9, tmp10] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first3, tmp13] = react.useState(false);
  const tmp14 = closure_9();
  const tmp15 = closure_10(first1, tmp9);
  const obj = SegmentedControlState;
  const segmentedControlState = obj.useSegmentedControlState({ items: tmp15, pageWidth: first, defaultIndex: 1 });
  const callback = react.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj2 = { style: tmp14.container, onLayout: callback, children: metroImportDefault(Stack, obj5) };
  const tmp20 = closure_11();
  Stack = Stack_Stack.Stack;
  const items = [metroImportAll(Tabs.Tabs, { state: segmentedControlState, grow: first2 }), ];
  let tmp21Result = first3;
  if (tmp21Result) {
    const obj3 = { state: segmentedControlState, colors: tmp20 };
    tmp21Result = metroImportAll(TabsGradientDefault, obj3);
  }
  obj5 = { spacing: 24, children: items1 };
  items[1] = tmp21Result;
  const obj4 = { children: metroImportAll(hasOwnProperty, obj2) };
  items1 = [metroImportDefault(hasOwnProperty, { children: items }), metroImportAll(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj6 = { spacing: 8, direction: "horizontal", children: items2 };
  const Stack2 = Stack_Stack.Stack;
  items2 = [, ];
  const obj7 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first1 >= 10,
    onPress() {
      return closure_2(first1 + 1);
    }
  };
  items2[0] = metroImportAll(components_Button_Button.Button, obj7);
  const obj8 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first1,
    onPress() {
      return closure_2(first1 - 1);
    }
  };
  items2[1] = metroImportAll(components_Button_Button.Button, obj8);
  items1[2] = metroImportDefault(Stack2, obj6);
  const obj9 = { children: items3 };
  items3 = [metroImportAll(TableSwitchRow.TableSwitchRow, { start: true, label: "Enable Grow", value: first2, onValueChange: tmp7 }), metroImportAll(TableSwitchRow.TableSwitchRow, { label: "Enable Counts", value: tmp9, onValueChange: tmp10 }), metroImportAll(TableSwitchRow.TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first3, onValueChange: tmp13 })];
  items1[3] = metroImportDefault(hasOwnProperty, obj9);
  return metroImportAll(metroRequire, obj4);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default tmp4;