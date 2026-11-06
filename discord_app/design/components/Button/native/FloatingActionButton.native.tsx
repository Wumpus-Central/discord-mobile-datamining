// === Module 9097: FloatingActionButton ===

// Module 9097 (FloatingActionButton)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5791 */;
import ButtonConstants from "ButtonConstants" /* 5794 */;
import BaseIconButton from "BaseIconButton" /* 8120 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
const styles = createStyles.createStyles(() => {
  const obj = { button: null, iconButtonPill: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.button = {};
  obj.iconButtonPill = { minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg };
  return obj;
});
let closure_6 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_7 = { code: "(function FloatingActionButtonNativeTsx1(){let[withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight]=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export function FloatingActionButton(icon) {
  icon = icon.icon;
  ({ positionBottom, positionRight, accessibilityLabel } = icon);
  const merged = Object.assign(icon, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, accessibilityLabel: 0 }));
  let tmp2 = styles();
  items = [closure_7, spring_spring.withSpring, positionBottom, 16, closure_6, positionRight];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class FloatingActionButtonNativeTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      if (closure_1 == null) {
        tmp2 = closure_2;
      }
      rect = { position: "absolute", bottom: tmp(tmp2, closure_3), right: null };
      tmp3 = closure_3;
      tmp4 = closure_4;
      if (closure_4 == null) {
        tmp4 = closure_2;
      }
      rect.right = tmp(tmp4, tmp3);
      return rect;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  FloatingActionButtonNativeTsx1.__closure = items1;
  FloatingActionButtonNativeTsx1.__workletHash = 14949608342118;
  FloatingActionButtonNativeTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(FloatingActionButtonNativeTsx1);
  const obj2 = { style: animatedStyle, children: null };
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.accessibilityLabel = accessibilityLabel;
  obj5.size = "lg";
  obj5.variant = "primary";
  let cloneElementResult = icon;
  if (noop.isValidElement(icon)) {
    const obj8 = { color: nativeDefault.colors.WHITE };
    cloneElementResult = noop.cloneElement(icon, obj8);
  }
  obj5.icon = cloneElementResult;
  ({ button: obj3.style, iconButtonPill: obj3.pillStyle } = tmp2);
  obj2.children = jsx(BaseIconButton.BaseIconButton, {});
  return jsx(_modDef1652.View, { style: animatedStyle, children: null });
}