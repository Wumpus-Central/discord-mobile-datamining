// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import LayerScope from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import DeviceOrientation from "../../../device/native/DeviceOrientation.tsx";
import useTooltip from "../../../../design/components/Tooltip/native/useTooltip.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({
  container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" },
  flex: { flex: 1 },
});
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = first(576).c(6);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      first = tmp2[0];
      if (cResult[0] !== first) {
        const fn = function n() {
          const obj = DeviceOrientation;
          if (first) {
            obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          } else {
            const result = obj.lockOrientationForiOS();
          }
        };
        cResult[0] = first;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const effect = noop.useEffect(tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          return () => first(closure_1_1[7]).lockOrientationForiOS();
        };
        const items = [];
        cResult[2] = fn2;
        cResult[3] = items;
        let tmp7 = items;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const effect1 = noop.useEffect(tmp6, tmp7);
      if (cResult[4] !== first) {
        const items1 = [first, tmp2[1]];
        cResult[4] = first;
        cResult[5] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
  : () => {
      const tmp = _slicedToArray(noop.useState(false), 2);
      const first = tmp[0];
      const effect = noop.useEffect(() => {
        const obj = DeviceOrientation;
        if (first) {
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        } else {
          const result = obj.lockOrientationForiOS();
        }
      });
      const effect1 = noop.useEffect(() => () => first(closure_1_1[7]).lockOrientationForiOS(), []);
      const items = [first, tmp[1]];
      return items;
    };
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(22);
      const tmp4 = closure_8();
      [visible, dependencyMap] = noop.useState(false);
      [tmp8, tmp9] = closure_9();
      const tmp10 = _slicedToArray(noop.useState(false), 2);
      const first1 = tmp10[0];
      let str = "Show tooltip";
      if (visible) {
        str = "Hide tooltip";
      }
      const ref = noop.useRef(null);
      let str2 = "top";
      if (first1) {
        str2 = "bottom";
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          return closure_1(false);
        };
        cResult[0] = fn;
        let first2 = fn;
      } else {
        first2 = cResult[0];
      }
      if (cResult[1] === visible) {
        if (cResult[2] === str2) {
          let tmp14 = cResult[3];
        }
        const tooltip = useTooltip.useTooltip(ref, tmp14);
        if (cResult[4] !== visible) {
          class N {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
          cResult[4] = visible;
          cResult[5] = N;
        } else {
          class N {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
        }
        if (cResult[6] === N) {
          class N {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
          if (cResult[9] === tmp4.container) {
            class N {
              constructor() {
                tmp = closure_1(!closure_0);
                return;
              }
            }
            if (cResult[12] === tmp8) {
              class N {
                constructor() {
                  tmp = closure_1(!closure_0);
                  return;
                }
              }
              if (cResult[15] !== first1) {
                class N {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
                const obj3 = { label: "Enable Bottom Position", value: first1, onValueChange: tmp10[1] };
                const tmp28 = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj3);
                cResult[15] = first1;
                cResult[16] = tmp28;
              } else {
                class N {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class N {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
                const tmp31 = hasOwnProperty(closure_11, {});
                cResult[17] = tmp31;
                const tmp29 = tmp31;
              } else {
                class N {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              if (cResult[18] === tmp20) {
                class N {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              const obj4 = { children: null };
              const items = [tmp20, tmp24, tmp27, tmp29];
              obj4.children = items;
              const tmp35 = React5(timestampProducer, obj4);
              cResult[18] = tmp20;
              cResult[19] = tmp24;
              cResult[20] = tmp27;
              cResult[21] = tmp35;
            }
            const obj5 = { label: "Unlock Orientation", value: tmp8, onValueChange: tmp9 };
            const tmp26 = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj5);
            cResult[12] = tmp8;
            cResult[13] = tmp9;
            cResult[14] = tmp26;
          }
          const obj6 = { style: tmp4.container, children: tmp17 };
          const tmp23 = hasOwnProperty(View, obj6);
          cResult[9] = tmp4.container;
          cResult[10] = tmp17;
          cResult[11] = tmp23;
        }
        const obj7 = { ref, onPress: N, variant: "primary", text: str, size: "md" };
        const tmp19 = hasOwnProperty(components_Button_Button.Button, obj7);
        cResult[6] = N;
        cResult[7] = str;
        cResult[8] = tmp19;
        const tmpResult = useTooltip;
      }
      const obj8 = { label: "NEW", position: str2, visible, onPress: first2 };
      cResult[1] = visible;
      cResult[2] = str2;
      cResult[3] = obj8;
      tmp14 = obj8;
      const tmp7 = _slicedToArray(closure_9(), 2);
    }
  : () => {
      [visible, closure_1] = noop.useState(false);
      const tmp = closure_8();
      [tmp5, tmp6] = closure_9();
      const tmp7 = _slicedToArray(noop.useState(false), 2);
      const first1 = tmp7[0];
      let str = "Show tooltip";
      if (visible) {
        str = "Hide tooltip";
      }
      const ref = noop.useRef(null);
      const items = [first1, visible];
      const memo = noop.useMemo(() => {
        let str = "top";
        if (first1) {
          str = "bottom";
        }
        return {
          label: "NEW",
          position: str,
          visible,
          onPress() {
            return closure_1_1(false);
          },
        };
      }, items);
      const tmp4 = _slicedToArray(closure_9(), 2);
      const tooltip = useTooltip.useTooltip(ref, memo);
      const obj3 = { children: null };
      const obj4 = {
        style: tmp.container,
        children: hasOwnProperty(components_Button_Button.Button, {
          ref,
          onPress() {
            closure_1(!first);
          },
          variant: "primary",
          text: str,
          size: "md",
        }),
      };
      const items1 = [
        hasOwnProperty(View, obj4),
        hasOwnProperty(TableSwitchRow.TableSwitchRow, {
          label: "Unlock Orientation",
          value: tmp5,
          onValueChange: tmp6,
        }),
        hasOwnProperty(TableSwitchRow.TableSwitchRow, {
          label: "Enable Bottom Position",
          value: first1,
          onValueChange: tmp7[1],
        }),
        hasOwnProperty(closure_11, {}),
      ];
      obj3.children = items1;
      return React5(timestampProducer, obj3);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { padding: 16, paddingTop: 16 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/normal", style: first, children: null };
        const items = [
          "Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing",
          hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }),
          " on the surface you expect to see the tooltip.",
        ];
        obj3.children = items;
        const tmp8 = React5(Text_Text.Text, obj3);
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: null };
      const items = [
        "Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing",
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }),
        " on the surface you expect to see the tooltip.",
      ];
      obj.children = items;
      return React5(Text_Text.Text, obj);
    };
let closure_11 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: hasOwnProperty(closure_10, {}) };
        const tmp8 = hasOwnProperty(LayerScope.LayerScope, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.flex) {
        const obj3 = { style: tmp4.flex, bottom: true, children: first };
        const tmp11 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
        cResult[1] = tmp4.flex;
        cResult[2] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      const obj = { style: closure_8().flex, bottom: true, children: null };
      const tmp = closure_8();
      obj.children = hasOwnProperty(LayerScope.LayerScope, { children: hasOwnProperty(closure_10, {}) });
      return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
    };
export const useCanRotate = tmp3;
export const TooltipNote = tmp4;
