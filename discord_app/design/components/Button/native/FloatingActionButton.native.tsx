// discord_app/design/components/Button/native/FloatingActionButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["icon", "positionBottom", "positionRight", "accessibilityLabel"];
const jsx = fn(21).jsx;
let c7 = 16;
const createStyles = fn(5092);
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
  code: 'function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:"absolute",bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}',
};
const __initData2 = {
  code: "function FloatingActionButtonNativeTsx2(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function FloatingActionButton(positionRight) {
      const cResult = require("c").c(17);
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
            obj = closure_0(closure_2[9]);
            tmp3 = closure_0;
            if (closure_0 == null) {
              tmp3 = c7;
            }
            rect = { position: "absolute", bottom: obj.withSpring(tmp3, closure_9), right: null };
            tmp4 = closure_9;
            tmpResult = tmp(tmp2[9]);
            tmp5 = closure_1;
            if (closure_1 == null) {
              tmp5 = c7;
            }
            rect.right = tmpResult.withSpring(tmp5, tmp4);
            return rect;
          }
        }
        cResult[1] = accessibilityLabel;
        cResult[2] = icon;
        cResult[3] = positionBottom;
        cResult[4] = positionRight;
        cResult[5] = tmp11;
        let tmp8 = tmp11;
        let tmp5 = icon;
        let tmp4 = accessibilityLabel;
        const tmp7 = positionRight;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
        importDefault = cResult[4];
        tmp8 = cResult[5];
      }
      const tmp12 = styles();
      let obj = require("c");
      class T {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          tmp3 = closure_0;
          if (closure_0 == null) {
            tmp3 = c7;
          }
          rect = { position: "absolute", bottom: obj.withSpring(tmp3, closure_9), right: null };
          tmp4 = closure_9;
          tmpResult = tmp(tmp2[9]);
          tmp5 = closure_1;
          if (closure_1 == null) {
            tmp5 = c7;
          }
          rect.right = tmpResult.withSpring(tmp5, tmp4);
          return rect;
        }
      }
      const tmpResult = require("ReanimatedRexport");
      T.__closure = {
        withSpring: require("spring").withSpring,
        positionBottom,
        DEFAULT_POSITION_OFFSET,
        SPRING_CONFIG,
        positionRight: tmp7,
      };
      T.__workletHash = 10049262876607;
      T.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(T);
      if (cResult[6] !== tmp5) {
        let cloneElementResult = tmp5;
        if (noop.isValidElement(tmp5)) {
          const obj3 = { color: nativeDefault.colors.WHITE };
          cloneElementResult = noop.cloneElement(tmp5, obj3);
        }
        cResult[6] = tmp5;
        cResult[7] = cloneElementResult;
        let tmp14 = cloneElementResult;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp12.button) {
            if (cResult[11] === tmp12.iconButtonPill) {
              if (cResult[12] === tmp14) {
                let tmp17 = cResult[13];
              }
              if (cResult[14] === animatedStyle) {
                if (cResult[15] === tmp17) {
                  let tmp20 = cResult[16];
                }
                return tmp20;
              }
              const obj5 = { style: animatedStyle, children: tmp17 };
              const tmp23 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp17 });
              cResult[14] = animatedStyle;
              class T {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp3 = closure_0;
                  if (closure_0 == null) {
                    tmp3 = c7;
                  }
                  rect = { position: "absolute", bottom: obj.withSpring(tmp3, closure_9), right: null };
                  tmp4 = closure_9;
                  tmpResult = tmp(tmp2[9]);
                  tmp5 = closure_1;
                  if (closure_1 == null) {
                    tmp5 = c7;
                  }
                  rect.right = tmpResult.withSpring(tmp5, tmp4);
                  return rect;
                }
              }
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
      }
      const obj7 = {};
      const merged = Object.assign(tmp8);
      obj7.accessibilityLabel = tmp4;
      obj7.size = "lg";
      obj7.variant = "primary";
      obj7.icon = tmp14;
      ({ button: obj6.style, iconButtonPill: obj6.pillStyle } = tmp12);
      const tmp19 = jsx(require("BaseIconButton").BaseIconButton, {});
      cResult[8] = tmp4;
      cResult[9] = tmp8;
      cResult[10] = tmp12.button;
      cResult[11] = tmp12.iconButtonPill;
      cResult[12] = tmp14;
      cResult[13] = tmp19;
      tmp17 = tmp19;
      const obj2 = {
        withSpring: require("spring").withSpring,
        positionBottom,
        DEFAULT_POSITION_OFFSET,
        SPRING_CONFIG,
        positionRight: tmp7,
      };
    }
  : function FloatingActionButton(positionRight) {
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
          obj = closure_0(closure_2[9]);
          tmp3 = positionBottom;
          if (positionBottom == null) {
            tmp3 = c7;
          }
          rect = { position: "absolute", bottom: obj.withSpring(tmp3, closure_9), right: null };
          tmp4 = closure_9;
          tmpResult = tmp(tmp2[9]);
          tmp5 = positionRight;
          if (positionRight == null) {
            tmp5 = c7;
          }
          rect.right = tmpResult.withSpring(tmp5, tmp4);
          return rect;
        }
      }
      let obj = positionBottom(4850);
      F.__closure = {
        withSpring: positionBottom(5378).withSpring,
        positionBottom,
        DEFAULT_POSITION_OFFSET,
        SPRING_CONFIG,
        positionRight,
      };
      F.__workletHash = 9924952956188;
      F.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(F);
      const obj3 = { style: animatedStyle, children: null };
      const obj6 = {};
      const merged1 = Object.assign(merged);
      obj6.accessibilityLabel = positionRight.accessibilityLabel;
      obj6.size = "lg";
      obj6.variant = "primary";
      let cloneElementResult = icon;
      if (noop.isValidElement(icon)) {
        const obj10 = { color: positionRight(587).colors.WHITE };
        cloneElementResult = noop.cloneElement(icon, obj10);
      }
      obj6.icon = cloneElementResult;
      ({ button: obj4.style, iconButtonPill: obj4.pillStyle } = tmp2);
      obj3.children = jsx(positionBottom(7574).BaseIconButton, {});
      return jsx(positionRight(4850).View, { style: animatedStyle, children: null });
    };
