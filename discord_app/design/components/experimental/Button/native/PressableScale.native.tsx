// discord_app/design/components/experimental/Button/native/PressableScale.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ReanimatedRexport2 from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import ButtonHooks from "../../../Button/native/ButtonHooks.native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_2 = ["style", "scaleAmountInPx", "onLayout", "onPressIn", "onPressOut"];
let closure_3 = ["style"];
let closure_4 = ["style"];
const jsx = fn(21).jsx;
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(18);
        if (cResult[0] !== arg0) {
          ({ style, scaleAmountInPx, onLayout, onPressIn, onPressOut } = arg0);
          const tmp12 = _objectWithoutProperties(arg0, closure_2);
          cResult[0] = arg0;
          cResult[1] = onLayout;
          cResult[2] = onPressIn;
          cResult[3] = onPressOut;
          cResult[4] = tmp12;
          cResult[5] = style;
          cResult[6] = scaleAmountInPx;
          let tmp9 = scaleAmountInPx;
          let tmp8 = style;
          let tmp7 = tmp12;
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
        }
        let num8 = 8;
        if (undefined !== tmp9) {
          num8 = tmp9;
        }
        const sharedValue = ReanimatedRexport2.useSharedValue(0);
        const tmpResult = ReanimatedRexport2;
        const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(sharedValue, num8, tmp4, tmp5, tmp6);
        if (cResult[7] !== buttonPressAnimationProps) {
          const style2 = buttonPressAnimationProps.style;
          const tmp19 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
          cResult[7] = buttonPressAnimationProps;
          cResult[8] = style2;
          cResult[9] = tmp19;
          let tmp16 = tmp19;
          let tmp15 = style2;
        } else {
          tmp15 = cResult[8];
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp15) {
          if (cResult[11] === tmp8) {
            let tmp20 = cResult[12];
          }
          if (cResult[13] === tmp16) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === ref) {
                if (cResult[16] === tmp20) {
                  let tmp22 = cResult[17];
                }
                return tmp22;
              }
            }
          }
          const obj2 = {};
          const merged = Object.assign(tmp16);
          const merged1 = Object.assign(tmp7);
          obj2.ref = ref;
          obj2.accessibilityRole = "button";
          obj2.style = tmp20;
          const tmp31 = <closure_7 />;
          cResult[13] = tmp16;
          cResult[14] = tmp7;
          cResult[15] = ref;
          cResult[16] = tmp20;
          cResult[17] = tmp31;
          tmp22 = tmp31;
        }
        const items = [tmp15, tmp8];
        cResult[10] = tmp15;
        cResult[11] = tmp8;
        cResult[12] = items;
        tmp20 = items;
        const tmpResult2 = ButtonHooks;
      }
    : (scaleAmountInPx, ref) => {
        let num = scaleAmountInPx.scaleAmountInPx;
        if (num === undefined) {
          num = 8;
        }
        ({ onPressIn, onPressOut } = scaleAmountInPx);
        const merged = Object.assign(
          scaleAmountInPx,
          Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0 }),
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
      },
);
