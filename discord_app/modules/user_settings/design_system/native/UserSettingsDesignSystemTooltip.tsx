// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import LayerScope from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import DeviceOrientation from "../../../device/native/DeviceOrientation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({
  container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" },
  flex: { flex: 1 },
});
let closure_9 = ["top", "bottom", "left", "right"];
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanRotate() {
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
  : function useCanRotate() {
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
let closure_10 = tmp3;
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Content() {
      const cResult = visible(576).c(23);
      const tmp4 = closure_8();
      [visible, dependencyMap] = noop.useState(false);
      const obj = visible(576);
      [tmp8, tmp9] = closure_10();
      const tmp10 = _slicedToArray(noop.useState("top"), 2);
      const first1 = tmp10[0];
      let str = "Show tooltip";
      if (visible) {
        str = "Hide tooltip";
      }
      const ref = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          return dependencyMap(false);
        };
        cResult[0] = fn;
        let first2 = fn;
      } else {
        first2 = cResult[0];
      }
      if (cResult[1] === first1) {
        if (cResult[2] === visible) {
          let tmp14 = cResult[3];
        }
        const tooltip = tmp(9376).useTooltip(ref, tmp14);
        if (cResult[4] !== visible) {
          class U {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
          cResult[4] = visible;
          cResult[5] = U;
        } else {
          class U {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
        }
        if (cResult[6] === U) {
          class U {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
          if (cResult[9] === tmp4.container) {
            class U {
              constructor() {
                tmp = closure_1(!closure_0);
                return;
              }
            }
            if (cResult[12] === tmp8) {
              class U {
                constructor() {
                  tmp = closure_1(!closure_0);
                  return;
                }
              }
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
                const mapped = closure_9.map((label) =>
                  closure_1_5(first(6264).TableRadioRow, { label, value: label }, label),
                );
                cResult[15] = mapped;
                const tmp27 = mapped;
              } else {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              if (cResult[16] !== first1) {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
                const obj3 = { title: "Position", value: first1, onChange: tmp10[1], hasIcons: false, children: tmp27 };
                const tmp30 = closure_5(tmp(6265).TableRadioGroup, obj3);
                cResult[16] = first1;
                cResult[17] = tmp30;
              } else {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
                const tmp33 = closure_5(closure_12, {});
                cResult[18] = tmp33;
                const tmp31 = tmp33;
              } else {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              if (cResult[19] === tmp20) {
                class U {
                  constructor() {
                    tmp = closure_1(!closure_0);
                    return;
                  }
                }
              }
              const obj4 = { children: null };
              const items = [tmp20, tmp24, tmp29, tmp31];
              obj4.children = items;
              const tmp37 = closure_7(closure_6, obj4);
              cResult[19] = tmp20;
              cResult[20] = tmp24;
              cResult[21] = tmp29;
              cResult[22] = tmp37;
            }
            const obj5 = { label: "Unlock Orientation", value: tmp8, onValueChange: tmp9 };
            const tmp26 = closure_5(tmp(6882).TableSwitchRow, obj5);
            cResult[12] = tmp8;
            cResult[13] = tmp9;
            cResult[14] = tmp26;
          }
          const obj6 = { style: tmp4.container, children: tmp17 };
          const tmp23 = closure_5(View, obj6);
          cResult[9] = tmp4.container;
          cResult[10] = tmp17;
          cResult[11] = tmp23;
        }
        const obj7 = { ref, onPress: U, variant: "primary", text: str, size: "md" };
        const tmp19 = closure_5(tmp(5375).Button, obj7);
        cResult[6] = U;
        cResult[7] = str;
        cResult[8] = tmp19;
        const tmpResult = tmp(9376);
      }
      const obj8 = { label: "NEW", position: first1, visible, onPress: first2 };
      cResult[1] = first1;
      cResult[2] = visible;
      cResult[3] = obj8;
      tmp14 = obj8;
      const tmp7 = _slicedToArray(closure_10(), 2);
    }
  : function Content() {
      const tmp2 = first1(noop.useState(false), 2);
      const visible = tmp2[0];
      dependencyMap = tmp2[1];
      const tmp = closure_8();
      [tmp5, tmp6] = first1(closure_10(), 2);
      const tmp7 = first1(noop.useState("top"), 2);
      first1 = tmp7[0];
      let str = "Show tooltip";
      if (visible) {
        str = "Hide tooltip";
      }
      const ref = noop.useRef(null);
      const items = [first1, visible];
      const memo = noop.useMemo(
        () => ({
          label: "NEW",
          position: first1,
          visible,
          onPress() {
            return dependencyMap(false);
          },
        }),
        items,
      );
      const tmp4 = first1(closure_10(), 2);
      const tooltip = visible(9376).useTooltip(ref, memo);
      const obj3 = { children: null };
      const obj4 = {
        style: tmp.container,
        children: closure_5(visible(5375).Button, {
          ref,
          onPress() {
            dependencyMap(!first);
          },
          variant: "primary",
          text: str,
          size: "md",
        }),
      };
      const items1 = [
        closure_5(View, obj4),
        closure_5(visible(6882).TableSwitchRow, { label: "Unlock Orientation", value: tmp5, onValueChange: tmp6 }),
        ,
      ];
      const obj2 = visible(9376);
      const obj5 = {
        ref,
        onPress() {
          dependencyMap(!first);
        },
        variant: "primary",
        text: str,
        size: "md",
      };
      items1[2] = closure_5(visible(6265).TableRadioGroup, {
        title: "Position",
        value: first1,
        onChange: tmp7[1],
        hasIcons: false,
        children: closure_9.map((label) => closure_1_5(first(6264).TableRadioRow, { label, value: label }, label)),
      });
      items1[3] = closure_5(closure_12, {});
      obj3.children = items1;
      return closure_7(closure_6, obj3);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TooltipNote() {
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
  : function TooltipNote() {
      const obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: null };
      const items = [
        "Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing",
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }),
        " on the surface you expect to see the tooltip.",
      ];
      obj.children = items;
      return React5(Text_Text.Text, obj);
    };
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsDesignSystemTooltip() {
      const cResult = c.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: hasOwnProperty(closure_11, {}) };
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
  : function UserSettingsDesignSystemTooltip() {
      const obj = { style: closure_8().flex, bottom: true, children: null };
      const tmp = closure_8();
      obj.children = hasOwnProperty(LayerScope.LayerScope, { children: hasOwnProperty(closure_11, {}) });
      return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
    };
export const useCanRotate = tmp3;
export const TooltipNote = tmp4;
