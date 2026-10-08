// discord_app/design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../tokens/native/useToken.tsx";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import VisualEffectViewAnimatedDefault from "../../../../../modules/visual_effect_view/native/VisualEffectViewAnimated.tsx";
import VisualEffectView from "../../../../../modules/visual_effect_view/native/VisualEffectView.tsx";
import spring from "../../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../animation/reanimated/spring/springPresets.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const VisualEffectViewDefault = VisualEffectView;

require = fn;
let closure_3 = ["style", "blurTheme", "pressed"];
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = fn(4927);
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = fn(4927);
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = fn(4927);
let closure_10 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = fn(4927);
let closure_11 = ColorUtils.hexWithOpacity(BLACK, 0.5);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBlurTheme(arg0) {
      let theme = arg0;
      if (arg0 == null) {
        theme = obj.useThemeContext().theme;
      }
      return theme;
    }
  : function useBlurTheme(arg0) {
      let theme = arg0;
      if (arg0 == null) {
        theme = obj.useThemeContext().theme;
      }
      return theme;
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBlurStyle(arg0, arg1) {
      let str = "ultra-thin";
      if (obj.isBlurThemeLight(arg0)) {
        str = "default";
      }
      let tmp = arg1;
      if (arg1 == null) {
        tmp = str;
      }
      return tmp;
    }
  : function useBlurStyle(arg0, arg1) {
      closure_0 = arg0;
      let memo = arg1;
      const items = [arg0];
      if (arg1 == null) {
        memo = noop.useMemo(() => {
          let str = "ultra-thin";
          if (obj.isBlurThemeLight(closure_0)) {
            str = "default";
          }
          return str;
        }, items);
      }
      return memo;
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTintColor(arg0, arg1) {
      let tmp = arg1;
      if (arg1 == null) {
        tmp = obj.isBlurThemeLight(arg0) ? closure_8 : closure_10;
      }
      return tmp;
    }
  : function useTintColor(arg0, arg1) {
      closure_0 = arg0;
      let memo = arg1;
      const items = [arg0];
      if (arg1 == null) {
        memo = noop.useMemo(() => (VisualEffectView.isBlurThemeLight(closure_0) ? closure_8 : closure_10), items);
      }
      return memo;
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBlurFallback(arg0, arg1) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const normalizeBlurThemeResult = VisualEffectView.normalizeBlurTheme(arg0);
        cResult[0] = arg0;
        cResult[1] = normalizeBlurThemeResult;
        let tmp4 = normalizeBlurThemeResult;
        const tmpResult = VisualEffectView;
      } else {
        tmp4 = cResult[1];
      }
      let token = arg1;
      if (arg1 == null) {
        token = tmpResult2.useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmp4);
      }
      return token;
    }
  : function useBlurFallback(arg0, arg1) {
      let token = arg1;
      const obj = useToken;
      if (arg1 == null) {
        token = obj.useToken(nativeDefault.colors.BACKGROUND_SCRIM, obj2.normalizeBlurTheme(arg0));
      }
      return token;
    };
fn(558);
ReactCompilerGating = fn(558);
const __initData = {
  code: 'function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: 'function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData3 = {
  code: "function BackgroundBlurFillNativeTsx3(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}",
};
const __initData4 = {
  code: "function BackgroundBlurFillNativeTsx4(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BackgroundBlurFill(blurTheme) {
      const cResult = c.c(10);
      ({ style, blurAmount, android_blurTargetViewNativeId } = blurTheme);
      ({ blurStyle, tintColor, android_fallbackColor } = blurTheme);
      const tmp3 = closure_12(blurTheme.blurTheme);
      const tmp4 = closure_13(tmp3, blurStyle);
      const tmp5 = closure_14(tmp3, tintColor);
      const tmp6 = closure_15(tmp3, android_fallbackColor);
      if (cResult[0] !== style) {
        const items = [StyleSheet.absoluteFill, style];
        cResult[0] = style;
        cResult[1] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === android_blurTargetViewNativeId) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === blurAmount) {
            if (cResult[5] === tmp4) {
              if (cResult[6] === tmp3) {
                if (cResult[7] === tmp7) {
                  if (cResult[8] === tmp5) {
                    let tmp9 = cResult[9];
                  }
                  return tmp9;
                }
              }
            }
          }
        }
      }
      const tmp10 = jsx(VisualEffectViewDefault, {
        blurTheme: tmp3,
        blurStyle: tmp4,
        blurAmount,
        tintColor: tmp5,
        android_fallbackColor: tmp6,
        android_blurTargetViewNativeId,
        style: tmp7,
      });
      cResult[2] = android_blurTargetViewNativeId;
      cResult[3] = tmp6;
      cResult[4] = blurAmount;
      cResult[5] = tmp4;
      cResult[6] = tmp3;
      cResult[7] = tmp7;
      cResult[8] = tmp5;
      cResult[9] = tmp10;
      tmp9 = tmp10;
    }
  : function BackgroundBlurFill(blurTheme) {
      ({ style, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId } = blurTheme);
      const tmp = closure_12(blurTheme.blurTheme);
      const tmp2 = closure_13(tmp, blurStyle);
      const tmp3 = closure_14(tmp, tintColor);
      const obj = {
        blurTheme: tmp,
        blurStyle: tmp2,
        blurAmount,
        tintColor: tmp3,
        android_fallbackColor: closure_15(tmp, android_fallbackColor),
        android_blurTargetViewNativeId,
        style: null,
      };
      const items = [StyleSheet.absoluteFill, style];
      obj.style = items;
      return jsx(VisualEffectViewDefault, {
        blurTheme: tmp,
        blurStyle: tmp2,
        blurAmount,
        tintColor: tmp3,
        android_fallbackColor: closure_15(tmp, android_fallbackColor),
        android_blurTargetViewNativeId,
        style: null,
      });
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BackgroundBlurFillAnimated(blurTheme) {
      const cResult = c.c(13);
      ({ style, blurAmount, android_blurTargetViewNativeId, animatedProps } = blurTheme);
      ({ blurStyle, tintColor, android_fallbackColor } = blurTheme);
      const tmp3 = closure_12(blurTheme.blurTheme);
      const tmp4 = closure_13(tmp3, blurStyle);
      const tmp5 = closure_14(tmp3, tintColor);
      const tmp6 = closure_15(tmp3, android_fallbackColor);
      if (cResult[0] !== style) {
        const items = [StyleSheet.absoluteFill, style];
        cResult[0] = style;
        cResult[1] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== animatedProps) {
        let tmp11 = null != animatedProps;
        if (tmp11) {
          const obj2 = { animatedProps };
          tmp11 = obj2;
        }
        cResult[2] = animatedProps;
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === android_blurTargetViewNativeId) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === blurAmount) {
            if (cResult[7] === tmp4) {
              if (cResult[8] === tmp3) {
                if (cResult[9] === tmp7) {
                  if (cResult[10] === tmp9) {
                    if (cResult[11] === tmp5) {
                      let tmp12 = cResult[12];
                    }
                    return tmp12;
                  }
                }
              }
            }
          }
        }
      }
      const obj3 = {
        blurTheme: tmp3,
        blurStyle: tmp4,
        blurAmount,
        tintColor: tmp5,
        android_fallbackColor: tmp6,
        android_blurTargetViewNativeId,
        style: tmp7,
      };
      const merged = Object.assign(tmp9);
      const tmp15 = jsx(VisualEffectViewAnimatedDefault, {
        blurTheme: tmp3,
        blurStyle: tmp4,
        blurAmount,
        tintColor: tmp5,
        android_fallbackColor: tmp6,
        android_blurTargetViewNativeId,
        style: tmp7,
      });
      cResult[4] = android_blurTargetViewNativeId;
      cResult[5] = tmp6;
      cResult[6] = blurAmount;
      cResult[7] = tmp4;
      cResult[8] = tmp3;
      cResult[9] = tmp7;
      cResult[10] = tmp9;
      cResult[11] = tmp5;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
  : function BackgroundBlurFillAnimated(animatedProps) {
      animatedProps = animatedProps.animatedProps;
      ({ style, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId } =
        animatedProps);
      const tmp = closure_12(animatedProps.blurTheme);
      const tmp2 = closure_13(tmp, blurStyle);
      const tmp3 = closure_14(tmp, tintColor);
      const obj = {
        blurTheme: tmp,
        blurStyle: tmp2,
        blurAmount,
        tintColor: tmp3,
        android_fallbackColor: closure_15(tmp, android_fallbackColor),
        android_blurTargetViewNativeId,
        style: null,
      };
      const items = [StyleSheet.absoluteFill, style];
      obj.style = items;
      let tmp7 = null != animatedProps;
      const tmp4 = closure_15(tmp, android_fallbackColor);
      if (tmp7) {
        const obj2 = { animatedProps };
        tmp7 = obj2;
      }
      const merged = Object.assign(tmp7);
      return jsx(VisualEffectViewAnimatedDefault, {
        blurTheme: tmp,
        blurStyle: tmp2,
        blurAmount,
        tintColor: tmp3,
        android_fallbackColor: closure_15(tmp, android_fallbackColor),
        android_blurTargetViewNativeId,
        style: null,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx",
);

export const BlurTheme = fn(5363).BlurTheme;
export const BlurStyle = fn(5363).BlurStyle;
export const BackgroundBlurFill = tmp2;
export const BackgroundBlurFillAnimated = tmp3;
export const BackgroundBlurFillWithPress = ReactCompilerGating.isReactCompilerEnabled()
  ? function BackgroundBlurFillWithPress(blurTheme) {
      const cResult = pressed(576).c(16);
      ({ style, pressed } = blurTheme);
      let obj = pressed(576);
      const tmp5 = closure_12(blurTheme.blurTheme);
      const tmp6 = closure_13(tmp5, undefined);
      if (cResult[0] !== tmp5) {
        const normalizeBlurThemeResult = pressed(5363).normalizeBlurTheme(tmp5);
        cResult[0] = tmp5;
        cResult[1] = normalizeBlurThemeResult;
        let tmp7 = normalizeBlurThemeResult;
        const tmpResult = pressed(5363);
      } else {
        tmp7 = cResult[1];
      }
      const tmp4 = token1(blurTheme, token);
      const tmp9 = pressed(5363).isBlurThemeLight(tmp5) ? closure_8 : closure_10;
      importDefault = tmp9;
      const tmpResult8 = pressed(5363);
      const tmp10 = pressed(5363).isBlurThemeLight(tmp5) ? closure_9 : closure_11;
      dependencyMap = tmp10;
      const tmpResult9 = pressed(5363);
      token = pressed(4778).useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmp7);
      const tmpResult10 = pressed(4778);
      token1 = pressed(4778).useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, tmp7);
      const tmpResult11 = pressed(4778);
      const isBlurDisabledResult = pressed(5363).isBlurDisabled(tmp4);
      noop = isBlurDisabledResult;
      const tmpResult12 = pressed(5363);
      const fn = function w() {
        const obj = { backgroundColor: null };
        const obj2 = spring;
        const items = [token, token1];
        obj.backgroundColor = obj2.withSpring(
          ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], items),
          springPresets.ON_PRESS_SPRING,
          "animate-always",
        );
        return obj;
      };
      const tmpResult13 = pressed(4810);
      fn.__closure = {
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      fn.__workletHash = 8923865688660;
      fn.__initData = __initData;
      const animatedStyle = tmpResult13.useAnimatedStyle(fn);
      let obj2 = {
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      class I {
        constructor() {
          withSpringResult = undefined;
          if (!closure_5) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[13]);
            obj2 = closure_0(closure_2[12]);
            tmp4 = pressed;
            tmp5 = closure_1;
            items = [,];
            items[0] = closure_1;
            tmp6 = closure_2;
            items[1] = closure_2;
            interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
            str = "animate-always";
            withSpringResult = obj.withSpring(
              interpolateColorResult,
              closure_0(closure_2[14]).ON_PRESS_SPRING,
              "animate-always",
            );
          }
          return { tintColor: withSpringResult };
        }
      }
      const tmpResult14 = pressed(4810);
      I.__closure = {
        shouldUseFallback: isBlurDisabledResult,
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        restingTint: tmp9,
        pressedTint: tmp10,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      I.__workletHash = 15619337296749;
      I.__initData = __initData2;
      const animatedProps = tmpResult14.useAnimatedProps(I);
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === isBlurDisabledResult) {
          let tmp17 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp17) {
            let tmp18 = cResult[7];
          }
          if (cResult[8] === animatedProps) {
            if (cResult[9] === isBlurDisabledResult) {
              let tmp20 = cResult[10];
            }
            if (cResult[11] === tmp6) {
              if (cResult[12] === tmp18) {
                if (cResult[13] === tmp20) {
                  if (cResult[14] === tmp5) {
                    let tmp22 = cResult[15];
                  }
                  return tmp22;
                }
              }
            }
            const obj4 = { blurTheme: tmp5, blurStyle: tmp6, style: tmp18 };
            const merged = Object.assign(tmp20);
            const tmp28 = jsx(VisualEffectViewAnimatedDefault, { blurTheme: tmp5, blurStyle: tmp6, style: tmp18 });
            cResult[11] = tmp6;
            cResult[12] = tmp18;
            cResult[13] = tmp20;
            cResult[14] = tmp5;
            cResult[15] = tmp28;
            tmp22 = tmp28;
            const tmp11Result = VisualEffectViewAnimatedDefault;
          }
          let tmp21 = !isBlurDisabledResult;
          if (!isBlurDisabledResult) {
            const obj5 = { animatedProps };
            tmp21 = obj5;
          }
          cResult[8] = animatedProps;
          cResult[9] = isBlurDisabledResult;
          cResult[10] = tmp21;
          tmp20 = tmp21;
        }
        let items = [StyleSheet.absoluteFill, style, tmp17];
        cResult[5] = style;
        cResult[6] = tmp17;
        cResult[7] = items;
        tmp18 = items;
      }
      let obj6 = animatedStyle;
      if (!isBlurDisabledResult) {
        obj6 = {};
      }
      cResult[2] = animatedStyle;
      cResult[3] = isBlurDisabledResult;
      cResult[4] = obj6;
      tmp17 = obj6;
      let obj3 = {
        shouldUseFallback: isBlurDisabledResult,
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        restingTint: tmp9,
        pressedTint: tmp10,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
    }
  : function BackgroundBlurFillWithPress(pressed) {
      pressed = pressed.pressed;
      ({ style, blurTheme } = pressed);
      const merged = Object.assign(pressed, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
      const tmp2 = closure_12(blurTheme);
      const tmp3 = closure_13(tmp2, undefined);
      const normalizeBlurThemeResult = pressed(5363).normalizeBlurTheme(tmp2);
      let obj = pressed(5363);
      const tmp7 = pressed(5363).isBlurThemeLight(tmp2) ? closure_8 : closure_10;
      importDefault = tmp7;
      let obj2 = pressed(5363);
      const tmp8 = pressed(5363).isBlurThemeLight(tmp2) ? closure_9 : closure_11;
      dependencyMap = tmp8;
      const tmp4Result = pressed(5363);
      const token = pressed(4778).useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
      const tmp4Result6 = pressed(4778);
      const token1 = pressed(4778).useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
      const tmp4Result7 = pressed(4778);
      const isBlurDisabledResult = pressed(5363).isBlurDisabled(merged);
      c5 = isBlurDisabledResult;
      const tmp4Result8 = pressed(5363);
      class C {
        constructor() {
          obj = { backgroundColor: null };
          obj2 = closure_0(closure_2[13]);
          obj3 = closure_0(closure_2[12]);
          items = [,];
          items[0] = closure_3;
          items[1] = closure_4;
          interpolateColorResult = obj3.interpolateColor(pressed.get(), [0, 1], items);
          obj.backgroundColor = obj2.withSpring(
            interpolateColorResult,
            closure_0(closure_2[14]).ON_PRESS_SPRING,
            "animate-always",
          );
          return obj;
        }
      }
      const tmp4Result9 = pressed(4810);
      C.__closure = {
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      C.__workletHash = 16933322441398;
      C.__initData = __initData3;
      let animatedStyle = tmp4Result9.useAnimatedStyle(C);
      let obj3 = {
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      class T {
        constructor() {
          withSpringResult = undefined;
          if (!closure_5) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[13]);
            obj2 = closure_0(closure_2[12]);
            tmp4 = pressed;
            tmp5 = closure_1;
            items = [,];
            items[0] = closure_1;
            tmp6 = closure_2;
            items[1] = closure_2;
            interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
            str = "animate-always";
            withSpringResult = obj.withSpring(
              interpolateColorResult,
              closure_0(closure_2[14]).ON_PRESS_SPRING,
              "animate-always",
            );
          }
          return { tintColor: withSpringResult };
        }
      }
      const tmp4Result10 = pressed(4810);
      T.__closure = {
        shouldUseFallback: isBlurDisabledResult,
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        restingTint: tmp7,
        pressedTint: tmp8,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      T.__workletHash = 1826548941643;
      T.__initData = __initData4;
      const animatedProps = tmp4Result10.useAnimatedProps(T);
      const obj5 = { blurTheme: tmp2, blurStyle: tmp3, style: null };
      let items = [StyleSheet.absoluteFill, style];
      const obj4 = {
        shouldUseFallback: isBlurDisabledResult,
        withSpring: pressed(5374).withSpring,
        interpolateColor: pressed(4810).interpolateColor,
        pressed,
        restingTint: tmp7,
        pressedTint: tmp8,
        ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING,
      };
      if (!isBlurDisabledResult) {
        animatedStyle = {};
      }
      items[2] = animatedStyle;
      obj5.style = items;
      let tmp15 = !isBlurDisabledResult;
      if (!isBlurDisabledResult) {
        const obj6 = { animatedProps };
        tmp15 = obj6;
      }
      const merged1 = Object.assign(tmp15);
      return jsx(VisualEffectViewAnimatedDefault, { blurTheme: tmp2, blurStyle: tmp3, style: null });
    };
