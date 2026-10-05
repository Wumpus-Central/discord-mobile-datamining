// === Module 15657: UserSettingsDesignSystemSegmentedControl ===

// Module 15657 (UserSettingsDesignSystemSegmentedControl)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import Text_Text from "Text/Text" /* 4886 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let announceResult;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let obj = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items1;
  let obj3;
  let obj4;
  let sum;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_8();
  if (cResult[0] === arg0) {
    let tmp3;
    if (cResult[1] === tmp2.item) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const items = [];
  let num = 0;
  if (0 < arg0) {
    do {
      let obj2 = { label: "Item " + sum, id: "item-" + sum, page: metroImportDefault(React3, obj3) };
      sum = num + 1;
      let _HermesInternal = HermesInternal;
      let push = items.push;
      let _HermesInternal2 = HermesInternal;
      obj3 = { style: tmp2.item, children: metroRequire(Text_Text.Text, obj4) };
      obj4 = { variant: "heading-xxl/bold", children: items1 };
      items1 = ["Item ", sum];
      let arr = push(obj2);
      num = sum;
    } while (sum < arg0);
  }
  cResult[0] = arg0;
  cResult[1] = tmp2.item;
  cResult[2] = items;
  tmp3 = items;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = closure_8();
  const item = tmp;
  let items = [arg0, tmp.item];
  return react.useMemo(() => {
    let items1;
    let obj2;
    let obj3;
    let sum;
    const items = [];
    let num = 0;
    if (0 < closure_0) {
      do {
        let obj = { label: "Item " + sum, id: "item-" + sum, page: metroImportDefault(React3, obj2) };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        let push = items.push;
        let _HermesInternal2 = HermesInternal;
        obj2 = { style: item.item, children: metroRequire(Text_Text.Text, obj3) };
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  let items;
  let items1;
  let require;
  let tmp5;
  const obj = require("react");
  const cResult = obj.c(27);
  [tmp5, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, _slicedToArray] = react.useState(3);
  closure_8();
  const tmp9 = closure_9(first);
  if (cResult[0] === tmp9) {
    let tmp10;
    let tmp15;
    if (cResult[1] === tmp5) {
      tmp10 = cResult[2];
    }
    const tmpResult = require("SegmentedControlState");
    const segmentedControlState = tmpResult.useSegmentedControlState(tmp10);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      cResult[3] = I;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
    }
    if (cResult[4] !== segmentedControlState) {
      class I {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      const obj2 = { state: segmentedControlState };
      const obj3 = { state: segmentedControlState };
      const tmp16 = closure_7(require("SegmentedControl").SegmentedControl, obj2);
      const tmp17 = closure_7(require("SegmentedControlPages").SegmentedControlPages, obj3);
      cResult[4] = segmentedControlState;
      cResult[5] = tmp16;
      cResult[6] = tmp17;
      tmp15 = tmp17;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      tmp15 = cResult[6];
    }
    if (cResult[7] !== first) {
      class P {
        constructor() {
          sum = closure_1 + 1;
          tmp2 = closure_2(sum);
          AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
          announceResult = AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
          return;
        }
      }
      cResult[7] = first;
      cResult[8] = P;
    } else {
      class P {
        constructor() {
          sum = closure_1 + 1;
          tmp2 = closure_2(sum);
          AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
          announceResult = AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
          return;
        }
      }
    }
    if (cResult[9] === first >= 5) {
      class P {
        constructor() {
          sum = closure_1 + 1;
          tmp2 = closure_2(sum);
          AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
          announceResult = AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
          return;
        }
      }
      if (cResult[12] !== first) {
        class O {
          constructor() {
            diff = closure_1 - 1;
            tmp2 = closure_2(diff);
            AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
            announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
            return;
          }
        }
        cResult[12] = first;
        cResult[13] = O;
      } else {
        class O {
          constructor() {
            diff = closure_1 - 1;
            tmp2 = closure_2(diff);
            AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
            announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
            return;
          }
        }
      }
      if (cResult[14] === 2 === first) {
        class O {
          constructor() {
            diff = closure_1 - 1;
            tmp2 = closure_2(diff);
            AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
            announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
            return;
          }
        }
        if (cResult[17] === tmp20) {
          class O {
            constructor() {
              diff = closure_1 - 1;
              tmp2 = closure_2(diff);
              AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
              announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
              return;
            }
          }
          if (cResult[20] === tmp28) {
            class O {
              constructor() {
                diff = closure_1 - 1;
                tmp2 = closure_2(diff);
                AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
                announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
                return;
              }
            }
          }
          const obj4 = { spacing: 24, children: items };
          items = [tmp14, tmp15, tmp28];
          cResult[20] = tmp28;
          cResult[21] = tmp14;
          cResult[22] = tmp15;
          cResult[23] = closure_6(require("Stack/Stack").Stack, obj4);
          const tmp33 = closure_6(require("Stack/Stack").Stack, obj4);
        }
        const obj5 = { spacing: 8, direction: "horizontal", children: items1 };
        items1 = [tmp20, tmp25];
        cResult[17] = tmp20;
        cResult[18] = tmp25;
        cResult[19] = closure_6(require("Stack/Stack").Stack, obj5);
        const tmp30 = closure_6(require("Stack/Stack").Stack, obj5);
      }
      const obj6 = { text: "Remove Tab", variant: "destructive", size: "sm", disabled: 2 === first, onPress: O };
      cResult[14] = 2 === first;
      cResult[15] = O;
      cResult[16] = closure_7(require("components/Button/Button").Button, obj6);
      const tmp27 = closure_7(require("components/Button/Button").Button, obj6);
    }
    const obj7 = { text: "Add Tab", variant: "active", size: "sm", disabled: first >= 5, onPress: P };
    cResult[9] = first >= 5;
    cResult[10] = P;
    cResult[11] = closure_7(require("components/Button/Button").Button, obj7);
    const tmp22 = closure_7(require("components/Button/Button").Button, obj7);
  }
  const obj8 = { items: tmp9, pageWidth: tmp5, defaultIndex: 1 };
  cResult[0] = tmp9;
  cResult[1] = tmp5;
  cResult[2] = obj8;
  tmp10 = obj8;
}) : (() => {
  let Stack;
  let closure_0;
  let closure_2;
  let first;
  let first1;
  let items;
  let items1;
  let obj3;
  let obj4;
  [first, _require] = react.useState(0);
  [first1, _slicedToArray] = react.useState(3);
  const tmp5 = closure_8();
  const tmp6 = closure_9(first1);
  const obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: tmp6, pageWidth: first, defaultIndex: 1 });
  const obj2 = { children: closure_7(closure_4, obj3) };
  obj3 = {
    style: tmp5.container,
    onLayout: react.useCallback((nativeEvent) => {
      closure_0(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: closure_6(Stack, obj4)
  };
  obj4 = { spacing: 24, children: items };
  Stack = require("Stack/Stack").Stack;
  items = [closure_7(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }), closure_7(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }), ];
  const obj5 = { spacing: 8, direction: "horizontal", children: items1 };
  const Stack2 = require("Stack/Stack").Stack;
  items1 = [, ];
  const obj6 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first1 >= 5,
    onPress() {
      const sum = first1 + 1;
      closure_2(sum);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
    }
  };
  items1[0] = closure_7(require("components/Button/Button").Button, obj6);
  const obj7 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first1,
    onPress() {
      const diff = first1 - 1;
      closure_2(diff);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
    }
  };
  items1[1] = closure_7(require("components/Button/Button").Button, obj7);
  items[2] = closure_6(Stack2, obj5);
  return closure_7(closure_5, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default tmp4;