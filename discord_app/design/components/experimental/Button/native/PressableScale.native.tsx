// discord_app/design/components/experimental/Button/native/PressableScale.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ReanimatedRexport2 from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import ButtonHooks from "../../../Button/native/ButtonHooks.native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_2 = ["style", "scaleAmountInPx", "onLayout", "onPressIn", "onPressOut", "ref"];
let closure_3 = ["style"];
let closure_4 = ["style"];
const jsx = fn(21).jsx;
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = ReactCompilerGating.isReactCompilerEnabled()
  ? function PressableScale(arg0) {
      const cResult = c.c(19);
      if (cResult[0] !== arg0) {
        ({ style, scaleAmountInPx, onLayout, onPressIn, onPressOut, ref } = arg0);
        const tmp13 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = onLayout;
        cResult[2] = onPressIn;
        cResult[3] = onPressOut;
        cResult[4] = tmp13;
        cResult[5] = ref;
        cResult[6] = style;
        cResult[7] = scaleAmountInPx;
        let tmp10 = scaleAmountInPx;
        let tmp9 = style;
        let tmp8 = ref;
        let tmp7 = tmp13;
        let tmp6 = onPressOut;
        let tmp5 = onPressIn;
        let tmp4 = onLayout;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      let num9 = 8;
      if (undefined !== tmp10) {
        num9 = tmp10;
      }
      const sharedValue = ReanimatedRexport2.useSharedValue(0);
      const tmpResult = ReanimatedRexport2;
      const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(sharedValue, num9, tmp4, tmp5, tmp6);
      if (cResult[8] !== buttonPressAnimationProps) {
        const style2 = buttonPressAnimationProps.style;
        const tmp20 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
        cResult[8] = buttonPressAnimationProps;
        cResult[9] = style2;
        cResult[10] = tmp20;
        let tmp17 = tmp20;
        let tmp16 = style2;
      } else {
        tmp16 = cResult[9];
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp16) {
        if (cResult[12] === tmp9) {
          let tmp21 = cResult[13];
        }
        if (cResult[14] === tmp17) {
          if (cResult[15] === tmp7) {
            if (cResult[16] === tmp8) {
              if (cResult[17] === tmp21) {
                let tmp22 = cResult[18];
              }
              return tmp22;
            }
          }
        }
        const obj2 = {};
        const merged = Object.assign(tmp17);
        const merged1 = Object.assign(tmp7);
        obj2.ref = tmp8;
        obj2.accessibilityRole = "button";
        obj2.style = tmp21;
        const tmp31 = <closure_7 />;
        cResult[14] = tmp17;
        cResult[15] = tmp7;
        cResult[16] = tmp8;
        cResult[17] = tmp21;
        cResult[18] = tmp31;
        tmp22 = tmp31;
      }
      const items = [tmp16, tmp9];
      cResult[11] = tmp16;
      cResult[12] = tmp9;
      cResult[13] = items;
      tmp21 = items;
      const tmpResult2 = ButtonHooks;
    }
  : function PressableScale(scaleAmountInPx) {
      let num = scaleAmountInPx.scaleAmountInPx;
      if (num === undefined) {
        num = 8;
      }
      ({ onPressIn, onPressOut, ref } = scaleAmountInPx);
      const merged = Object.assign(
        scaleAmountInPx,
        Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0, ref: 0 }),
      );
      const sharedValue = ReanimatedRexport2.useSharedValue(0);
      const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(
        sharedValue,
        num,
        scaleAmountInPx.onLayout,
        onPressIn,
        onPressOut,
      );
      const obj3 = {};
      const merged1 = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_4));
      const merged2 = Object.assign(merged);
      obj3.ref = ref;
      obj3.accessibilityRole = "button";
      const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
      obj3.style = items;
      return <closure_7 />;
    };
