// discord_app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import _modDef7952 from "../../../../../_runtime/metro/07952__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let closure_4 = createStyles.createStyles({ slider: { marginTop: num } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (initialValue) => {
        const cResult = c.c(11);
        ({ disabled, disabledOpacity, onValueChange } = initialValue);
        let tmp4 = undefined !== disabledOpacity;
        if (tmp4) {
          tmp4 = disabledOpacity;
        }
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
          const current = initialValue.initialValue.current;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let fn;
            if (tmpResult.isAndroid()) {
              fn = () => true;
            }
            cResult[5] = fn;
            let tmp10 = fn;
            tmpResult = PlatformUtils2;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] === disabled) {
            if (cResult[7] === onValueChange) {
              if (cResult[8] === tmp7) {
                if (cResult[9] === current) {
                  let tmp11 = cResult[10];
                }
                return tmp11;
              }
            }
          }
          const obj3 = {
            style: tmp7,
            disabled,
            value: current,
            minimumValue: 0,
            maximumValue: 1,
            minimumTrackTintColor: nativeDefault.unsafe_rawColors.BRAND_500,
            maximumTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_400,
            onValueChange,
            onResponderGrant: tmp10,
          };
          const tmp15 = jsx(_modDef7952, {
            style: tmp7,
            disabled,
            value: current,
            minimumValue: 0,
            maximumValue: 1,
            minimumTrackTintColor: nativeDefault.unsafe_rawColors.BRAND_500,
            maximumTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_400,
            onValueChange,
            onResponderGrant: tmp10,
          });
          cResult[6] = disabled;
          cResult[7] = onValueChange;
          cResult[8] = tmp7;
          cResult[9] = current;
          cResult[10] = tmp15;
          tmp11 = tmp15;
        }
        const items = [tmp5.slider, tmp6];
        cResult[2] = tmp5.slider;
        cResult[3] = tmp6;
        cResult[4] = items;
        tmp7 = items;
      }
    : (disabled) => {
        let flag = disabled.disabledOpacity;
        if (flag === undefined) {
          flag = false;
        }
        ({ initialValue, onValueChange } = disabled);
        const items = [closure_4().slider];
        let num = 1;
        const tmp = closure_4();
        if (flag) {
          num = 0.5;
        }
        const obj = {
          style: items,
          disabled: disabled.disabled,
          value: null,
          minimumValue: 0,
          maximumValue: 1,
          minimumTrackTintColor: nativeDefault.unsafe_rawColors.BRAND_500,
          maximumTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_400,
          onValueChange,
          onResponderGrant: null,
        };
        items[1] = { opacity: num };
        const current = initialValue.current;
        obj.value = current;
        let fn;
        if (obj2.isAndroid()) {
          fn = () => true;
        }
        obj.onResponderGrant = fn;
        return (
          <tmp5
            style={items}
            disabled={disabled.disabled}
            value={null}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={nativeDefault.unsafe_rawColors.BRAND_500}
            maximumTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_400}
            onValueChange={onValueChange}
            onResponderGrant={null}
          />
        );
      },
);
