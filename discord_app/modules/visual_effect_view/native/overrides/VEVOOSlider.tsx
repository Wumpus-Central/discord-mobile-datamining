// discord_app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Slider from "../../../../design/components/Slider/native/Slider.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
const PlatformUtils = fn(1381);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let closure_4 = createStyles.createStyles({ slider: { marginTop: num } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VEVOOSlider(arg0) {
        const cResult = c.c(13);
        ({ disabled, disabledOpacity, initialValue, onValueChange, accessibilityLabel } = arg0);
        const tmp5 = closure_4();
        let num = 1;
        if (tmp4) {
          num = 0.5;
        }
        if (cResult[0] !== num) {
          const obj2 = { opacity: num };
          cResult[0] = num;
          cResult[1] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === tmp5.slider) {
          if (cResult[3] === tmp6) {
            let tmp7 = cResult[4];
          }
          if (cResult[5] === accessibilityLabel) {
            if (cResult[6] === disabled) {
              if (cResult[7] === initialValue.current) {
                if (cResult[8] === onValueChange) {
                  let tmp8 = cResult[9];
                }
                if (cResult[10] === tmp7) {
                  if (cResult[11] === tmp8) {
                    let tmp11 = cResult[12];
                  }
                  return tmp11;
                }
                const obj3 = { style: tmp7, children: tmp8 };
                const tmp14 = <View style={tmp7}>{tmp8}</View>;
                cResult[10] = tmp7;
                cResult[11] = tmp8;
                cResult[12] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
          const obj4 = {
            disabled,
            defaultValue: initialValue.current,
            minValue: 0,
            maxValue: 1,
            onChange: onValueChange,
            accessibilityLabel,
          };
          const tmp10 = jsx(Slider.Slider, {
            disabled,
            defaultValue: initialValue.current,
            minValue: 0,
            maxValue: 1,
            onChange: onValueChange,
            accessibilityLabel,
          });
          cResult[5] = accessibilityLabel;
          cResult[6] = disabled;
          cResult[7] = initialValue.current;
          cResult[8] = onValueChange;
          cResult[9] = tmp10;
          tmp8 = tmp10;
        }
        const items = [tmp5.slider, tmp6];
        cResult[2] = tmp5.slider;
        cResult[3] = tmp6;
        cResult[4] = items;
        tmp7 = items;
        tmp4 = undefined !== disabledOpacity && disabledOpacity;
      }
    : function VEVOOSlider(disabled) {
        let flag = disabled.disabledOpacity;
        if (flag === undefined) {
          flag = false;
        }
        ({ initialValue, onValueChange, accessibilityLabel } = disabled);
        const items = [closure_4().slider];
        let num = 1;
        if (flag) {
          num = 0.5;
        }
        const obj = {
          style: items,
          children: jsx(Slider.Slider, {
            disabled: disabled.disabled,
            defaultValue: initialValue.current,
            minValue: 0,
            maxValue: 1,
            onChange: onValueChange,
            accessibilityLabel,
          }),
        };
        items[1] = { opacity: num };
        return (
          <View style={items}>
            {jsx(Slider.Slider, {
              disabled: disabled.disabled,
              defaultValue: initialValue.current,
              minValue: 0,
              maxValue: 1,
              onChange: onValueChange,
              accessibilityLabel,
            })}
          </View>
        );
      },
);
let obj = { slider: { marginTop: num } };

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VEVOOSlider(arg0) {
        const cResult = c.c(13);
        ({ disabled, disabledOpacity, initialValue, onValueChange, accessibilityLabel } = arg0);
        const tmp5 = closure_4();
        let num = 1;
        if (tmp4) {
          num = 0.5;
        }
        if (cResult[0] !== num) {
          const obj2 = { opacity: num };
          cResult[0] = num;
          cResult[1] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === tmp5.slider) {
          if (cResult[3] === tmp6) {
            let tmp7 = cResult[4];
          }
          if (cResult[5] === accessibilityLabel) {
            if (cResult[6] === disabled) {
              if (cResult[7] === initialValue.current) {
                if (cResult[8] === onValueChange) {
                  let tmp8 = cResult[9];
                }
                if (cResult[10] === tmp7) {
                  if (cResult[11] === tmp8) {
                    let tmp11 = cResult[12];
                  }
                  return tmp11;
                }
                const obj3 = { style: tmp7, children: tmp8 };
                const tmp14 = <View style={tmp7}>{tmp8}</View>;
                cResult[10] = tmp7;
                cResult[11] = tmp8;
                cResult[12] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
          const obj4 = {
            disabled,
            defaultValue: initialValue.current,
            minValue: 0,
            maxValue: 1,
            onChange: onValueChange,
            accessibilityLabel,
          };
          const tmp10 = jsx(Slider.Slider, {
            disabled,
            defaultValue: initialValue.current,
            minValue: 0,
            maxValue: 1,
            onChange: onValueChange,
            accessibilityLabel,
          });
          cResult[5] = accessibilityLabel;
          cResult[6] = disabled;
          cResult[7] = initialValue.current;
          cResult[8] = onValueChange;
          cResult[9] = tmp10;
          tmp8 = tmp10;
        }
        const items = [tmp5.slider, tmp6];
        cResult[2] = tmp5.slider;
        cResult[3] = tmp6;
        cResult[4] = items;
        tmp7 = items;
        tmp4 = undefined !== disabledOpacity && disabledOpacity;
      }
    : function VEVOOSlider(disabled) {
        let flag = disabled.disabledOpacity;
        if (flag === undefined) {
          flag = false;
        }
        ({ initialValue, onValueChange, accessibilityLabel } = disabled);
        const items = [closure_4().slider];
        let num = 1;
        if (flag) {
          num = 0.5;
        }
        const obj = {
          style: items,
          children: jsx(Slider.Slider, {
            disabled: disabled.disabled,
            defaultValue: initialValue.current,
            minValue: 0,
            maxValue: 1,
            onChange: onValueChange,
            accessibilityLabel,
          }),
        };
        items[1] = { opacity: num };
        return (
          <View style={items}>
            {jsx(Slider.Slider, {
              disabled: disabled.disabled,
              defaultValue: initialValue.current,
              minValue: 0,
              maxValue: 1,
              onChange: onValueChange,
              accessibilityLabel,
            })}
          </View>
        );
      },
);
