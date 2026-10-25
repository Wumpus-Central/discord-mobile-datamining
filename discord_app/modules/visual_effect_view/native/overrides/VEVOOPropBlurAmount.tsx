// discord_app/modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx
import c from "../../../../../_runtime/00576_c.js";
import FormSwitch from "../../../../design/components/Forms/native/FormSwitch.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const VEVOOStore = fn(5587);
({ getVisualEffectViewOverrides: hasOwnProperty, setVisualEffectViewOverides: metroRequire } = VEVOOStore);
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let closure_8 = createStyles.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VEVOOPropBlurAmount() {
        const cResult = c.c(18);
        const tmp4 = closure_8();
        const tmp5 = _slicedToArray;
        [tmp7, require] = noop.useState(false);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = closure_5();
          cResult[0] = tmp10;
          let first = tmp10;
        } else {
          first = cResult[0];
        }
        const tmp5Result = tmp5(noop.useState(first.blurAmountOverride), 2);
        const first1 = tmp5Result[0];
        dependencyMap = tmp5Result[1];
        const tmp6 = _slicedToArray(noop.useState(false), 2);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor(arg0) {
              if (null != arg0) {
                tmp = closure_2;
                tmp2 = closure_2(arg0);
              }
              obj = {};
              merged = Object.assign(closure_5());
              obj.blurAmountOverride = arg0;
              tmp4 = closure_6(obj);
              return;
            }
          }
          cResult[1] = O;
        } else {
          class O {
            constructor(arg0) {
              if (null != arg0) {
                tmp = closure_2;
                tmp2 = closure_2(arg0);
              }
              obj = {};
              merged = Object.assign(closure_5());
              obj.blurAmountOverride = arg0;
              tmp4 = closure_6(obj);
              return;
            }
          }
        }
        _slicedToArray = O;
        if (cResult[2] !== first1) {
          class O {
            constructor(arg0) {
              if (null != arg0) {
                tmp = closure_2;
                tmp2 = closure_2(arg0);
              }
              obj = {};
              merged = Object.assign(closure_5());
              obj.blurAmountOverride = arg0;
              tmp4 = closure_6(obj);
              return;
            }
          }
          let toFixedResult;
          if (first1 != null) {
            class O {
              constructor(arg0) {
                if (null != arg0) {
                  tmp = closure_2;
                  tmp2 = closure_2(arg0);
                }
                obj = {};
                merged = Object.assign(closure_5());
                obj.blurAmountOverride = arg0;
                tmp4 = closure_6(obj);
                return;
              }
            }
            toFixedResult = first1.toFixed(3);
          }
          if (toFixedResult == null) {
            class O {
              constructor(arg0) {
                if (null != arg0) {
                  tmp = closure_2;
                  tmp2 = closure_2(arg0);
                }
                obj = {};
                merged = Object.assign(closure_5());
                obj.blurAmountOverride = arg0;
                tmp4 = closure_6(obj);
                return;
              }
            }
          }
          cResult[2] = first1;
          cResult[3] = toFixedResult;
          const tmp14 = toFixedResult;
        } else {
          class O {
            constructor(arg0) {
              if (null != arg0) {
                tmp = closure_2;
                tmp2 = closure_2(arg0);
              }
              obj = {};
              merged = Object.assign(closure_5());
              obj.blurAmountOverride = arg0;
              tmp4 = closure_6(obj);
              return;
            }
          }
        }
        const combined = "Blur Amount " + tmp14;
        if (cResult[4] !== first1) {
          class C {
            constructor(arg0) {
              tmp = closure_0(arg0);
              tmp3 = undefined;
              tmp2 = closure_3;
              if (arg0) {
                tmp3 = closure_1;
              }
              tmp2Result = tmp2(tmp3);
              return;
            }
          }
          cResult[4] = first1;
          cResult[5] = C;
        } else {
          class C {
            constructor(arg0) {
              tmp = closure_0(arg0);
              tmp3 = undefined;
              tmp2 = closure_3;
              if (arg0) {
                tmp3 = closure_1;
              }
              tmp2Result = tmp2(tmp3);
              return;
            }
          }
        }
        if (cResult[6] === tmp7) {
          class C {
            constructor(arg0) {
              tmp = closure_0(arg0);
              tmp3 = undefined;
              tmp2 = closure_3;
              if (arg0) {
                tmp3 = closure_1;
              }
              tmp2Result = tmp2(tmp3);
              return;
            }
          }
          if (cResult[9] === !tmp7) {
            class C {
              constructor(arg0) {
                tmp = closure_0(arg0);
                tmp3 = undefined;
                tmp2 = closure_3;
                if (arg0) {
                  tmp3 = closure_1;
                }
                tmp2Result = tmp2(tmp3);
                return;
              }
            }
            if (cResult[12] === tmp4.enabledSwitchStyle) {
              class C {
                constructor(arg0) {
                  tmp = closure_0(arg0);
                  tmp3 = undefined;
                  tmp2 = closure_3;
                  if (arg0) {
                    tmp3 = closure_1;
                  }
                  tmp2Result = tmp2(tmp3);
                  return;
                }
              }
            }
            const obj3 = {
              label: combined,
              leadingStyle: tmp4.enabledSwitchStyle,
              leading: tmp18,
              subLabel: tmp22,
              disabled: !tmp7,
            };
            const tmp29 = jsx(Form.FormRow, {
              label: combined,
              leadingStyle: tmp4.enabledSwitchStyle,
              leading: tmp18,
              subLabel: tmp22,
              disabled: !tmp7,
            });
            cResult[12] = tmp4.enabledSwitchStyle;
            cResult[13] = combined;
            cResult[14] = tmp18;
            cResult[15] = tmp22;
            cResult[16] = !tmp7;
            cResult[17] = tmp29;
          }
          const obj4 = {
            disabled: !tmp7,
            disabledOpacity: !tmp7,
            initialValue: ref,
            onValueChange: O,
            accessibilityLabel: "Blur Amount",
          };
          const tmp25 = jsx(first1(17340), {
            disabled: !tmp7,
            disabledOpacity: !tmp7,
            initialValue: ref,
            onValueChange: O,
            accessibilityLabel: "Blur Amount",
          });
          cResult[9] = !tmp7;
          cResult[10] = !tmp7;
          cResult[11] = tmp25;
        }
        const tmp19 = jsx(FormSwitch.FormSwitch, { value: tmp7, onValueChange: C });
        cResult[6] = tmp7;
        cResult[7] = C;
        cResult[8] = tmp19;
        ref = noop.useRef(first1);
      }
    : function VEVOOPropBlurAmount() {
        const tmp = closure_8();
        [tmp3, require] = onValueChange(noop.useState(false), 2);
        const tmp4 = onValueChange(noop.useState(closure_5().blurAmountOverride), 2);
        const first = tmp4[0];
        dependencyMap = tmp4[1];
        const tmp2 = onValueChange(noop.useState(false), 2);
        onValueChange = noop.useCallback((blurAmountOverride) => {
          if (null != blurAmountOverride) {
            closure_2(blurAmountOverride);
          }
          const obj = {};
          const merged = Object.assign(hasOwnProperty());
          obj.blurAmountOverride = blurAmountOverride;
          timestampProducer(obj);
        }, []);
        let str;
        if (first != null) {
          str = first.toFixed(3);
        }
        if (str == null) {
          str = "";
        }
        let obj = {
          label: "Blur Amount " + str,
          leadingStyle: tmp.enabledSwitchStyle,
          leading: jsx(FormSwitch.FormSwitch, {
            value: tmp3,
            onValueChange(arg0) {
              _require(arg0);
              let tmp3;
              if (arg0) {
                tmp3 = first;
              }
              callback(tmp3);
            },
          }),
          subLabel: null,
          disabled: !tmp3,
        };
        const obj2 = {
          value: tmp3,
          onValueChange(arg0) {
            _require(arg0);
            let tmp3;
            if (arg0) {
              tmp3 = first;
            }
            callback(tmp3);
          },
        };
        const ref = noop.useRef(first);
        obj.subLabel = jsx(first(17340), {
          disabled: !tmp3,
          disabledOpacity: !tmp3,
          initialValue: noop.useRef(first),
          onValueChange,
          accessibilityLabel: "Blur Amount",
        });
        return jsx(Form.FormRow, {
          label: "Blur Amount " + str,
          leadingStyle: tmp.enabledSwitchStyle,
          leading: jsx(FormSwitch.FormSwitch, {
            value: tmp3,
            onValueChange(arg0) {
              _require(arg0);
              let tmp3;
              if (arg0) {
                tmp3 = first;
              }
              callback(tmp3);
            },
          }),
          subLabel: null,
          disabled: !tmp3,
        });
      },
);
