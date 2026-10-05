// === Module 8574: FloatingActionButton ===

// Module 8574 (FloatingActionButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, rect, tmp, withSpring2;

let closure_3 = ["icon", "positionBottom", "positionRight", "accessibilityLabel"];
const jsx = Fragment.jsx;
let c7 = 16;
const styles = createStyles.createStyles(() => {
  let obj2;
  const obj = { button: obj2, iconButtonPill: { minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg } };
  obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  ({ minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg });
  return obj;
});
const SPRING_CONFIG = { mass: 0.5, damping: 80, stiffness: 320 };
const __initData = { code: "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:\"absolute\",bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}" };
const __initData2 = { code: "function FloatingActionButtonNativeTsx2(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((positionRight) => {
  let closure_0;
  let closure_1;
  let icon;
  let positionBottom;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] !== positionRight) {
    ({ icon, positionBottom } = positionRight);
    _require = positionBottom;
    positionRight = positionRight.positionRight;
    importDefault = positionRight;
    const accessibilityLabel = positionRight.accessibilityLabel;
    const tmp11 = _objectWithoutProperties(positionRight, closure_3);
    cResult[0] = positionRight;
    class T {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        tmp3 = closure_0(closure_2[9]);
        tmp4 = closure_0;
        withSpring = tmp3.withSpring;
        if (closure_0 == null) {
          tmp4 = c7;
        }
        rect = { position: "absolute", bottom: withSpring(tmp4, closure_9), right: null };
        tmp5 = closure_9;
        tmpResult = tmp(tmp2[9]);
        tmp7 = closure_1;
        withSpring2 = tmpResult.withSpring;
        if (closure_1 == null) {
          tmp7 = c7;
        }
        rect.right = withSpring2(tmp7, tmp5);
        return rect;
      }
    }
    cResult[1] = accessibilityLabel;
    cResult[2] = icon;
    cResult[3] = positionBottom;
    cResult[4] = positionRight;
    cResult[5] = tmp11;
    tmp8 = tmp11;
    tmp7 = positionRight;
    tmp5 = icon;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    importDefault = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = styles();
  const tmpResult = tmp(4612);
  class T {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[9]);
      tmp4 = closure_0;
      withSpring = tmp3.withSpring;
      if (closure_0 == null) {
        tmp4 = c7;
      }
      rect = { position: "absolute", bottom: withSpring(tmp4, closure_9), right: null };
      tmp5 = closure_9;
      tmpResult = tmp(tmp2[9]);
      tmp7 = closure_1;
      withSpring2 = tmpResult.withSpring;
      if (closure_1 == null) {
        tmp7 = c7;
      }
      rect.right = withSpring2(tmp7, tmp5);
      return rect;
    }
  }
  T.__closure = { withSpring: require("spring").withSpring, positionBottom, DEFAULT_POSITION_OFFSET, SPRING_CONFIG, positionRight: tmp7 };
  T.__workletHash = 10049262876607;
  T.__initData = __initData;
  ({ withSpring: require("spring").withSpring, positionBottom, DEFAULT_POSITION_OFFSET, SPRING_CONFIG, positionRight: tmp7 });
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  if (cResult[6] !== tmp5) {
    let cloneElementResult = tmp5;
    if (react.isValidElement(tmp5)) {
      const cloneElement = react.cloneElement;
      const obj3 = { color: nativeDefault.colors.WHITE };
      cloneElementResult = cloneElement(tmp5, obj3);
    }
    cResult[6] = tmp5;
    cResult[7] = cloneElementResult;
    tmp14 = cloneElementResult;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp8) {
      if (cResult[10] === tmp12.button) {
        if (cResult[11] === tmp12.iconButtonPill) {
          let tmp18;
          if (cResult[12] === tmp14) {
            tmp18 = cResult[13];
          }
          if (cResult[14] === animatedStyle) {
            let tmp21;
            if (cResult[15] === tmp18) {
              tmp21 = cResult[16];
            }
            return tmp21;
          }
          const tmp24 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp18 });
          cResult[14] = animatedStyle;
          class T {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = closure_0(closure_2[9]);
              tmp4 = closure_0;
              withSpring = tmp3.withSpring;
              if (closure_0 == null) {
                tmp4 = c7;
              }
              rect = { position: "absolute", bottom: withSpring(tmp4, closure_9), right: null };
              tmp5 = closure_9;
              tmpResult = tmp(tmp2[9]);
              tmp7 = closure_1;
              withSpring2 = tmpResult.withSpring;
              if (closure_1 == null) {
                tmp7 = c7;
              }
              rect.right = withSpring2(tmp7, tmp5);
              return rect;
            }
          }
          cResult[16] = tmp24;
          tmp21 = tmp24;
        }
      }
    }
  }
  const BaseIconButton = tmp(7576).BaseIconButton;
  const merged = Object.assign(tmp8);
  ({ button: obj5.style, iconButtonPill: obj5.pillStyle } = tmp12);
  const tmp20 = <BaseIconButton accessibilityLabel={tmp4} size="lg" variant="primary" icon={tmp14} />;
  cResult[8] = tmp4;
  cResult[9] = tmp8;
  cResult[10] = tmp12.button;
  cResult[11] = tmp12.iconButtonPill;
  cResult[12] = tmp14;
  cResult[13] = tmp20;
  tmp18 = tmp20;
}) : ((positionRight) => {
  let icon;
  let positionBottom;
  ({ icon, positionBottom } = positionRight);
  positionRight = positionRight.positionRight;
  const accessibilityLabel = positionRight.accessibilityLabel;
  const merged = Object.assign(positionRight, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, accessibilityLabel: 0 }));
  const tmp2 = styles();
  const obj = positionBottom(4612);
  class F {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[9]);
      tmp4 = positionBottom;
      withSpring = tmp3.withSpring;
      if (positionBottom == null) {
        tmp4 = c7;
      }
      rect = { position: "absolute", bottom: withSpring(tmp4, closure_9), right: null };
      tmp5 = closure_9;
      tmpResult = tmp(tmp2[9]);
      tmp7 = positionRight;
      withSpring2 = tmpResult.withSpring;
      if (positionRight == null) {
        tmp7 = c7;
      }
      rect.right = withSpring2(tmp7, tmp5);
      return rect;
    }
  }
  F.__closure = { withSpring: positionBottom(5597).withSpring, positionBottom, DEFAULT_POSITION_OFFSET, SPRING_CONFIG, positionRight };
  F.__workletHash = 9924952956188;
  F.__initData = __initData2;
  ({ withSpring: positionBottom(5597).withSpring, positionBottom, DEFAULT_POSITION_OFFSET, SPRING_CONFIG, positionRight });
  const animatedStyle = obj.useAnimatedStyle(F);
  const View = positionRight(4612).View;
  const BaseIconButton = positionBottom(7576).BaseIconButton;
  const merged1 = Object.assign(merged);
  let cloneElementResult = icon;
  const tmp6 = positionRight;
  if (react.isValidElement(icon)) {
    const cloneElement = react.cloneElement;
    const obj9 = { color: tmp6(587).colors.WHITE };
    cloneElementResult = cloneElement(icon, obj9);
  }
  ({ button: obj4.style, iconButtonPill: obj4.pillStyle } = tmp2);
  return <View style={animatedStyle}>{null}</View>;
});
const result = size.fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = tmp3;