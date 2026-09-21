// discord_app/design/components/Button/native/FloatingActionButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const styles = createStyles.createStyles(() => {
  const obj = { button: null, iconButtonPill: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.button = {};
  obj.iconButtonPill = {
    minWidth: ButtonConstants.FAB_BUTTON_SIZE,
    minHeight: ButtonConstants.FAB_BUTTON_SIZE,
    padding: 0,
    borderRadius: nativeDefault.radii.lg,
  };
  return obj;
});
const SPRING_CONFIG = { mass: 0.5, damping: 80, stiffness: 320 };
const __initData = {
  code: "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = function FloatingActionButton(positionRight) {
  ({ icon, positionBottom } = positionRight);
  positionRight = positionRight.positionRight;
  const merged = Object.assign(
    positionRight,
    Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, accessibilityLabel: 0 }),
  );
  const tmp2 = styles();
  class F {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[6]);
      num = positionBottom;
      if (positionBottom == null) {
        num = 16;
      }
      rect = { position: "absolute", bottom: obj.withSpring(num, closure_6), right: null };
      tmp3 = closure_6;
      tmpResult = tmp(tmp2[6]);
      num2 = positionRight;
      if (positionRight == null) {
        num2 = 16;
      }
      rect.right = tmpResult.withSpring(num2, tmp3);
      return rect;
    }
  }
  let obj = positionBottom(4492);
  F.__closure = {
    withSpring: positionBottom(5185).withSpring,
    positionBottom,
    DEFAULT_POSITION_OFFSET: 16,
    SPRING_CONFIG,
    positionRight,
  };
  F.__workletHash = 10762818944671;
  F.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(F);
  const obj3 = { style: animatedStyle, children: null };
  const obj6 = {};
  const merged1 = Object.assign(merged);
  obj6.accessibilityLabel = positionRight.accessibilityLabel;
  obj6.size = "lg";
  obj6.variant = "primary";
  let cloneElementResult = icon;
  if (noop.isValidElement(icon)) {
    const obj10 = { color: positionRight(576).colors.WHITE };
    cloneElementResult = noop.cloneElement(icon, obj10);
  }
  obj6.icon = cloneElementResult;
  ({ button: obj4.style, iconButtonPill: obj4.pillStyle } = tmp2);
  obj3.children = jsx(positionBottom(8180).BaseIconButton, {});
  return jsx(positionRight(4492).View, { style: animatedStyle, children: null });
};
