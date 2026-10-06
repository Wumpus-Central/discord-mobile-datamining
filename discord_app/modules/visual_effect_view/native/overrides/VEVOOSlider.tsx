// discord_app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef7963 from "../../../../../_runtime/metro/07963__.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let obj = { slider: { marginTop: num } };
let closure_4 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (initialValue) => {
        let disabled;
        let disabledOpacity;
        let onValueChange;
        let tmp6;
        const obj = react2;
        const cResult = obj.c(11);
        ({ disabled, disabledOpacity, onValueChange } = initialValue);
        let tmp4 = undefined !== disabledOpacity;
        initialValue = initialValue.initialValue;
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
          tmp6 = obj2;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === tmp5.slider) {
          let tmp7;
          let tmp10;
          if (cResult[3] === tmp6) {
            tmp7 = cResult[4];
          }
          const current = initialValue.current;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let fn;
            const tmpResult = PlatformUtils;
            if (tmpResult.isAndroid()) {
              fn = () => true;
            }
            cResult[5] = fn;
            tmp10 = fn;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] === disabled) {
            if (cResult[7] === onValueChange) {
              if (cResult[8] === tmp7) {
                let tmp11;
                if (cResult[9] === current) {
                  tmp11 = cResult[10];
                }
                return tmp11;
              }
            }
          }
          _modDef7963;
          const tmp15 = (
            <tmp14
              style={tmp7}
              disabled={disabled}
              value={current}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={nativeDefault.unsafe_rawColors.BRAND_500}
              maximumTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_400}
              onValueChange={onValueChange}
              onResponderGrant={tmp10}
            />
          );
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
    : (disabledOpacity) => {
        let initialValue;
        let onValueChange;
        let flag = disabledOpacity.disabledOpacity;
        const disabled = disabledOpacity.disabled;
        if (flag === undefined) {
          flag = false;
        }
        ({ initialValue, onValueChange } = disabledOpacity);
        const items = [closure_4().slider];
        let num = 1;
        closure_4();
        _modDef7963;
        if (flag) {
          num = 0.5;
        }
        items[1] = { opacity: num };
        const current = initialValue.current;
        let fn;
        const obj2 = PlatformUtils;
        if (obj2.isAndroid()) {
          fn = () => true;
        }
        return (
          <tmp5
            style={items}
            disabled={disabled}
            value={current}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={nativeDefault.unsafe_rawColors.BRAND_500}
            maximumTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_400}
            onValueChange={onValueChange}
            onResponderGrant={fn}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default memoResult;
