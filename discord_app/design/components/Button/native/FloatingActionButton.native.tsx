// === Module 8909: styles ===

// Module 8909 (styles)
import ThemesDefault from "Themes" /* 576 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4980 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
const styles = createCacheKey.createStyles(() => {
  let obj = { button: null, iconButtonPill: null };
  obj = {};
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
  obj[0] = obj;
  obj = { minWidth: MINIMUM_HIT_AREA.FAB_BUTTON_SIZE, minHeight: MINIMUM_HIT_AREA.FAB_BUTTON_SIZE, padding: 0, borderRadius: ThemesDefault.radii.lg };
  obj[1] = obj;
  return obj;
});
let closure_6 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_7 = { code: "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}" };
const result = require("set").fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = function FloatingActionButton(positionRight) {
  ({ icon, positionBottom } = positionRight);
  positionRight = positionRight.positionRight;
  const merged = Object.assign(positionRight, Object.create(null));
  let obj = positionBottom(4296);
  class F {
    constructor() {
      tmp = positionBottom;
      tmp2 = closure_1_2;
      obj = positionBottom(closure_1_2[6]);
      num = positionBottom;
      if (positionBottom == null) {
        num = 16;
      }
      obj = { position: "absolute", bottom: obj.withSpring(num, closure_1_6), right: null };
      tmp3 = closure_1_6;
      tmpResult = tmp(tmp2[6]);
      num2 = positionRight;
      if (positionRight == null) {
        num2 = 16;
      }
      obj[2] = tmpResult.withSpring(num2, tmp3);
      return obj;
    }
  }
  obj = { withSpring: positionBottom(4974).withSpring, positionBottom, DEFAULT_POSITION_OFFSET: 16, SPRING_CONFIG: closure_6, positionRight };
  F.__closure = obj;
  F.__workletHash = 10762818944671;
  F.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(F);
  obj = { style: animatedStyle, children: null };
  obj1 = {};
  const merged1 = Object.assign(merged);
  obj1.accessibilityLabel = positionRight.accessibilityLabel;
  obj1.size = "lg";
  obj1.variant = "primary";
  let cloneElementResult = icon;
  if (validElement.isValidElement(icon)) {
    const obj2 = { color: null };
    obj2[0] = positionRight(576).colors.WHITE;
    cloneElementResult = validElement.cloneElement(icon, obj2);
  }
  obj1.icon = cloneElementResult;
  ({ button: obj4.style, iconButtonPill: obj4.pillStyle } = styles());
  obj[1] = jsx(positionBottom(8098).BaseIconButton, {});
  return jsx(positionRight(4296).View, { style: animatedStyle, children: null });
};