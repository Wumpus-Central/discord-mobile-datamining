// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { margin: 16, flex: 1, alignItems: "center", padding: 40 },
  item: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderWidth: 2,
    borderColor: nativeDefault.colors.BORDER_STRONG,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 400,
  },
};
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSegmentedControlItems(arg0) {
      let sum;
      const cResult = c.c(3);
      const tmp2 = closure_8();
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp2.item) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const items = [];
      let num = 0;
      if (0 < arg0) {
        do {
          let obj2 = { label: null, id: null, page: null };
          sum = num + 1;
          let _HermesInternal = HermesInternal;
          obj2.label = "Item " + sum;
          let _HermesInternal2 = HermesInternal;
          obj2.id = "item-" + sum;
          let obj3 = { style: tmp2.item, children: null };
          let obj4 = { variant: "heading-xxl/bold", children: null };
          let items1 = ["Item ", sum];
          obj4.children = items1;
          obj3.children = timestampProducer(Text_Text.Text, obj4);
          obj2.page = React5(React4, obj3);
          let arr = items.push(obj2);
          num = sum;
        } while (sum < arg0);
      }
      cResult[0] = arg0;
      cResult[1] = tmp2.item;
      cResult[2] = items;
      tmp3 = items;
    }
  : function useSegmentedControlItems(arg0) {
      closure_0 = arg0;
      const tmp = closure_8();
      const item = tmp;
      let items = [arg0, tmp.item];
      return noop.useMemo(() => {
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
            let obj2 = { style: item.item, children: null };
            let obj3 = { variant: "heading-xxl/bold", children: null };
            let items1 = ["Item ", sum];
            obj3.children = items1;
            obj2.children = timestampProducer(Text_Text.Text, obj3);
            obj.page = React5(React4, obj2);
            let arr = items.push(obj);
            num = sum;
          } while (sum < closure_0);
        }
        return items;
      }, items);
    };
ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: 400,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsDesignSystemSegmentedControl() {
      const cResult = require("c").c(27);
      const obj = require("c");
      [tmp5, require] = noop.useState(0);
      [first, _slicedToArray] = noop.useState(3);
      closure_8();
      const tmp9 = closure_9(first);
      if (cResult[0] === tmp9) {
        if (cResult[1] === tmp5) {
          let tmp10 = cResult[2];
        }
        const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(tmp10);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function _(nativeEvent) {
            _require(nativeEvent.nativeEvent.layout.width);
          };
          cResult[3] = fn;
        }
        if (cResult[4] !== segmentedControlState) {
          const obj2 = { state: segmentedControlState };
          const tmp17 = closure_7(require("SegmentedControl").SegmentedControl, obj2);
          const obj3 = { state: segmentedControlState };
          const tmp18 = closure_7(require("SegmentedControlPages").SegmentedControlPages, obj3);
          cResult[4] = segmentedControlState;
          cResult[5] = tmp17;
          cResult[6] = tmp18;
          let tmp15 = tmp18;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[5];
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
            class D {
              constructor() {
                diff = closure_1 - 1;
                tmp2 = closure_2(diff);
                AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
                announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
                return;
              }
            }
            cResult[12] = first;
            cResult[13] = D;
          } else {
            class D {
              constructor() {
                diff = closure_1 - 1;
                tmp2 = closure_2(diff);
                AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
                announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
                return;
              }
            }
          }
          if ((cResult[14] === 2) === first) {
            class D {
              constructor() {
                diff = closure_1 - 1;
                tmp2 = closure_2(diff);
                AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
                announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
                return;
              }
            }
            if (cResult[17] === tmp21) {
              class D {
                constructor() {
                  diff = closure_1 - 1;
                  tmp2 = closure_2(diff);
                  AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
                  announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
                  return;
                }
              }
              if (cResult[20] === tmp29) {
                class D {
                  constructor() {
                    diff = closure_1 - 1;
                    tmp2 = closure_2(diff);
                    AccessibilityAnnouncer = closure_0(closure_1[12]).AccessibilityAnnouncer;
                    announceResult = AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
                    return;
                  }
                }
              }
              const obj4 = { spacing: 24, children: null };
              const items = [tmp14, tmp15, tmp29];
              obj4.children = items;
              const tmp34 = closure_6(require("Stack/Stack").Stack, obj4);
              cResult[20] = tmp29;
              cResult[21] = tmp14;
              cResult[22] = tmp15;
              cResult[23] = tmp34;
            }
            const obj5 = { spacing: 8, direction: "horizontal", children: null };
            const items1 = [tmp21, tmp26];
            obj5.children = items1;
            const tmp31 = closure_6(require("Stack/Stack").Stack, obj5);
            cResult[17] = tmp21;
            cResult[18] = tmp26;
            cResult[19] = tmp31;
          }
          const obj6 = { text: "Remove Tab", variant: "destructive", size: "sm", disabled: 2 === first, onPress: D };
          const tmp28 = closure_7(require("components/Button/Button").Button, obj6);
          cResult[14] = 2 === first;
          cResult[15] = D;
          cResult[16] = tmp28;
        }
        const obj7 = { text: "Add Tab", variant: "active", size: "sm", disabled: first >= 5, onPress: P };
        const tmp23 = closure_7(require("components/Button/Button").Button, obj7);
        cResult[9] = first >= 5;
        cResult[10] = P;
        cResult[11] = tmp23;
        const tmpResult = require("SegmentedControlState");
      }
      const obj8 = { items: tmp9, pageWidth: tmp5, defaultIndex: 1 };
      cResult[0] = tmp9;
      cResult[1] = tmp5;
      cResult[2] = obj8;
      tmp10 = obj8;
      const tmp4 = _slicedToArray(noop.useState(0), 2);
    }
  : function UserSettingsDesignSystemSegmentedControl() {
      const tmp = _slicedToArray(noop.useState(0), 2);
      _require = tmp[1];
      [first, _slicedToArray] = noop.useState(3);
      const tmp4 = closure_8();
      const tmp5 = closure_9(first);
      const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({
        items: tmp5,
        pageWidth: tmp[0],
        defaultIndex: 1,
      });
      const obj2 = { children: null };
      const obj3 = {
        style: tmp4.container,
        onLayout: noop.useCallback((nativeEvent) => {
          closure_0(nativeEvent.nativeEvent.layout.width);
        }, []),
        children: null,
      };
      const obj4 = { spacing: 24, children: null };
      const items = [
        closure_7(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }),
        closure_7(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }),
      ];
      const obj5 = { spacing: 8, direction: "horizontal", children: null };
      const items1 = [
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
      obj5.children = items1;
      items[2] = closure_6(require("Stack/Stack").Stack, obj5);
      obj4.children = items;
      obj3.children = closure_6(require("Stack/Stack").Stack, obj4);
      obj2.children = closure_7(closure_4, obj3);
      return closure_7(closure_5, obj2);
    };
