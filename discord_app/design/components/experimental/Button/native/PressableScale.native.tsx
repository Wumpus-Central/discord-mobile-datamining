// === Module 8607: PressableScale ===

// Module 8607 (PressableScale)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4618 */;
import ButtonHooks from "ButtonHooks" /* 5608 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let closure_2 = ["style", "scaleAmountInPx", "onLayout", "onPressIn", "onPressOut"];
let closure_3 = ["style"];
let closure_4 = ["style"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let onLayout;
  let onPressIn;
  let onPressOut;
  let scaleAmountInPx;
  let style;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(18);
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
    tmp9 = scaleAmountInPx;
    tmp8 = style;
    tmp7 = tmp12;
    tmp6 = onPressOut;
    tmp5 = onPressIn;
    tmp4 = onLayout;
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
  const tmpResult = ReanimatedRexport2;
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult2 = ButtonHooks;
  const buttonPressAnimationProps = tmpResult2.useButtonPressAnimationProps(sharedValue, num8, tmp4, tmp5, tmp6);
  if (cResult[7] !== buttonPressAnimationProps) {
    const style2 = buttonPressAnimationProps.style;
    const tmp19 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
    cResult[7] = buttonPressAnimationProps;
    cResult[8] = style2;
    cResult[9] = tmp19;
    tmp16 = tmp19;
    tmp15 = style2;
  } else {
    tmp15 = cResult[8];
    tmp16 = cResult[9];
  }
  if (cResult[10] === tmp15) {
    let tmp20;
    if (cResult[11] === tmp8) {
      tmp20 = cResult[12];
    }
    if (cResult[13] === tmp16) {
      if (cResult[14] === tmp7) {
        if (cResult[15] === ref) {
          let tmp22;
          if (cResult[16] === tmp20) {
            tmp22 = cResult[17];
          }
          return tmp22;
        }
      }
    }
    const merged = Object.assign(tmp16);
    const merged1 = Object.assign(tmp7);
    const tmp31 = <closure_7 ref={ref} accessibilityRole="button" style={tmp20} />;
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
}) : ((scaleAmountInPx, ref) => {
  let onPressIn;
  let onPressOut;
  let num = scaleAmountInPx.scaleAmountInPx;
  const style = scaleAmountInPx.style;
  if (num === undefined) {
    num = 8;
  }
  const onLayout = scaleAmountInPx.onLayout;
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0 }));
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ButtonHooks;
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue, num, onLayout, onPressIn, onPressOut);
  const style2 = buttonPressAnimationProps.style;
  const merged1 = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_4));
  const merged2 = Object.assign(merged);
  const items = [style2, style];
  return <closure_7 ref={ref} accessibilityRole="button" style={items} />;
}));
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = forwardRefResult;