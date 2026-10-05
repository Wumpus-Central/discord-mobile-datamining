// discord_app/design/components/Button/native/BaseTextButton.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ Text: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4890);
let closure_9 = createStyles.createStyles((arg0, sm) => {
  const obj = {
    grow: { flexGrow: 1, alignSelf: "stretch" },
    shrink: { flexShrink: 1 },
    buttonText: { flexShrink: 1, flexGrow: 0 },
    androidLineHeight: null,
    icon: null,
    iconLeft: null,
    iconRight: null,
    expressiveButtonContainer: null,
  };
  if (typeof getTextPlatformLineHeight === "function") {
    if (null != sm) {
      const obj2 = { sm, md: sm + 0.5, lg: sm + 1.9 };
      const tmp3 = obj2[arg0];
    }
    let tmp7;
    if (obj3.isAndroid()) {
      tmp7 = tmp3;
    }
    const obj4 = { lineHeight: tmp7 };
    obj.androidLineHeight = obj4;
    obj.icon = { flexShrink: 0, flexGrow: 0 };
    obj.iconLeft = { paddingLeft: 4 };
    obj.iconRight = { paddingRight: 4 };
    obj.expressiveButtonContainer = { position: "relative" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
createStyles = fn(4890);
let closure_10 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", position: "relative" },
  textCollapsed: { position: "absolute", left: 0 },
});
createStyles = fn(4890);
let obj = {
  entityWrapper: {
    borderWidth: 1,
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
  },
};
let closure_11 = createStyles.createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const redux = noop.createContext("md");
const __initData = {
  code: "function BaseTextButtonNativeTsx1(t1){const{containerWidth}=this.__closure;const{nativeEvent:nativeEvent}=t1;if(containerWidth.get()!==0){return;}const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
const __initData2 = {
  code: "function BaseTextButtonNativeTsx2({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(10);
      ({ children, collapseText } = arg0);
      const tmp3 = closure_10();
      const sharedValue = ReanimatedRexport2.useSharedValue(0);
      const fn = function n(nativeEvent) {
        if (0 === sharedValue.get()) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        }
      };
      fn.__closure = { containerWidth: sharedValue };
      fn.__workletHash = 14011826491350;
      fn.__initData = __initData;
      const items = [sharedValue];
      const workletCallback = ReanimatedRexport2.useWorkletCallback(fn, items);
      const tmp6 = closure_19(sharedValue, collapseText);
      const tmp7 = closure_22(sharedValue, collapseText);
      if (cResult[0] === tmp6) {
        if (cResult[1] === tmp3.container) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp7) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === workletCallback) {
            if (cResult[7] === tmp8) {
              if (cResult[8] === tmp9) {
                let tmp13 = cResult[9];
              }
              return tmp13;
            }
          }
          const obj4 = { style: tmp8, onLayout: workletCallback, children: tmp9 };
          const tmp16 = React5(ReanimatedRexport.View, obj4);
          cResult[6] = workletCallback;
          cResult[7] = tmp8;
          cResult[8] = tmp9;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        const obj5 = { style: tmp7, children };
        const tmp12 = React5(ReanimatedRexport.View, obj5);
        cResult[3] = children;
        cResult[4] = tmp7;
        cResult[5] = tmp12;
        tmp9 = tmp12;
      }
      const items1 = [tmp3.container, tmp6];
      cResult[0] = tmp6;
      cResult[1] = tmp3.container;
      cResult[2] = items1;
      tmp8 = items1;
    }
  : (children) => {
      const collapseText = children.collapseText;
      const tmp = closure_10();
      const sharedValue = ReanimatedRexport2.useSharedValue(0);
      const fn = function o(nativeEvent) {
        if (0 === sharedValue.get()) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        }
      };
      fn.__closure = { containerWidth: sharedValue };
      fn.__workletHash = 14617966668944;
      fn.__initData = __initData2;
      const items = [sharedValue];
      const workletCallback = ReanimatedRexport2.useWorkletCallback(fn, items);
      const tmp4 = closure_19(sharedValue, collapseText);
      const obj3 = {
        style: null,
        onLayout: workletCallback,
        children: React5(ReanimatedRexport.View, {
          style: closure_22(sharedValue, collapseText),
          children: children.children,
        }),
      };
      const items1 = [tmp.container, tmp4];
      obj3.style = items1;
      return React5(ReanimatedRexport.View, obj3);
    };
const __initData3 = {
  code: 'function BaseTextButtonNativeTsx3(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0){return{};}return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,"animate-always"),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,"animate-always")};}',
};
const __initData4 = {
  code: "function BaseTextButtonNativeTsx4(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}",
};
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (containerWidth, collapsed) => {
      _require = containerWidth;
      const fn = function o() {
        if (0 === containerWidth.get()) {
          let obj2 = {};
        } else {
          let num2 = 1;
          let num = 0;
          if (1 !== collapsed.get()) {
            num = containerWidth.get();
          }
          obj2 = { width: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), opacity: null };
          if (num2 === collapsed.get()) {
            num2 = 0;
          }
          obj2.opacity = spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always");
          const tmpResult = spring;
        }
        return obj2;
      };
      const obj = require("ReanimatedRexport");
      fn.__closure = {
        containerWidth,
        withSpring: require("spring").withSpring,
        collapsed,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 11030023180396;
      fn.__initData = __initData3;
      return obj.useAnimatedStyle(fn);
    }
  : (containerWidth, collapsed) => {
      _require = containerWidth;
      const fn = function o() {
        if (0 === containerWidth.get()) {
          let obj2 = {};
        } else {
          let num2 = 1;
          let num = 0;
          if (1 !== collapsed.get()) {
            num = containerWidth.get();
          }
          obj2 = { width: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), opacity: null };
          if (num2 === collapsed.get()) {
            num2 = 0;
          }
          obj2.opacity = spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always");
          const tmpResult = spring;
        }
        return obj2;
      };
      const obj = require("ReanimatedRexport");
      fn.__closure = {
        containerWidth,
        withSpring: require("spring").withSpring,
        collapsed,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 5528763277901;
      fn.__initData = __initData4;
      return obj.useAnimatedStyle(fn);
    };
const __initData5 = {
  code: "function BaseTextButtonNativeTsx5(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0){return{};}return{...textCollapsed,width:containerWidth.get()};}",
};
const __initData6 = {
  code: "function BaseTextButtonNativeTsx6(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}",
};
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (containerWidth, collapsed) => {
      const textCollapsed = closure_10().textCollapsed;
      const fn = function o() {
        if (0 === collapsed.get()) {
          let obj = {};
        } else {
          obj = {};
          const merged = Object.assign(textCollapsed);
          obj.width = containerWidth.get();
        }
        return obj;
      };
      fn.__closure = { collapsed, textCollapsed, containerWidth };
      fn.__workletHash = 15223478677680;
      fn.__initData = __initData5;
      return ReanimatedRexport2.useAnimatedStyle(fn);
    }
  : (containerWidth, collapsed) => {
      const textCollapsed = closure_10().textCollapsed;
      const fn = function o() {
        if (0 === collapsed.get()) {
          let obj = {};
        } else {
          obj = {};
          const merged = Object.assign(textCollapsed);
          obj.width = containerWidth.get();
        }
        return obj;
      };
      fn.__closure = { collapsed, textCollapsed, containerWidth };
      fn.__workletHash = 4732498665045;
      fn.__initData = __initData6;
      return ReanimatedRexport2.useAnimatedStyle(fn);
    };
createStyles = fn(4890);
let closure_23 = createStyles.createStyles((arg0, marginLeft) => {
  if (0 === marginLeft) {
    const obj2 = { offset: {} };
    return obj2;
  } else if ("start" === arg0) {
    const obj3 = { offset: null };
    const obj4 = { marginLeft };
    obj3.offset = obj4;
    return obj3;
  } else if ("end" === arg0) {
    const obj5 = { offset: null };
    obj6 = { marginRight: marginLeft };
    obj5.offset = obj6;
    return obj5;
  } else {
    const obj = { offset: {} };
    return obj;
  }
});
let obj6 = { sm: null, md: null, lg: null };
const LARGE_BUTTON_HEIGHT = fn(5600).LARGE_BUTTON_HEIGHT;
const bound = Math.max((fn(5600).MINIMUM_HIT_AREA - fn(5600).SMALL_BUTTON_HEIGHT) / 2, 0);
const rect = { top: bound, left: "Array", right: "toCharArray$esjava$1", bottom: bound };
obj6.sm = rect;
const LARGE_BUTTON_HEIGHT2 = fn(5600).LARGE_BUTTON_HEIGHT;
const bound1 = Math.max((fn(5600).MINIMUM_HIT_AREA - fn(5600).MEDIUM_BUTTON_HEIGHT) / 2, 0);
const rect1 = { top: bound1, left: "Array", right: "toCharArray$esjava$1", bottom: bound1 };
obj6.md = rect1;
const bound2 = Math.max((fn(5600).MINIMUM_HIT_AREA - fn(5600).LARGE_BUTTON_HEIGHT) / 2, 0);
const rect2 = { top: bound2, left: "Array", right: "toCharArray$esjava$1", bottom: bound2 };
obj6.lg = rect2;
function getTextPlatformLineHeight(arg0, arg1) {}
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ icon, style, size, iconPosition, iconOpticalOffsetMargin } = arg0);
      const iconSizeStyles = ButtonHooks.useIconSizeStyles(size);
      const tmp3 = closure_23(iconPosition, iconOpticalOffsetMargin);
      if (cResult[0] === tmp3.offset) {
        if (cResult[1] === iconSizeStyles) {
          if (cResult[2] === style) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] === icon) {
            if (cResult[5] === tmp4) {
              let tmp5 = cResult[6];
            }
            return tmp5;
          }
          const obj3 = { source: icon, style: tmp4 };
          const tmp8 = React5(Icon, obj3);
          cResult[4] = icon;
          cResult[5] = tmp4;
          cResult[6] = tmp8;
          tmp5 = tmp8;
        }
      }
      const items = [style, iconSizeStyles, tmp3.offset];
      cResult[0] = tmp3.offset;
      cResult[1] = iconSizeStyles;
      cResult[2] = style;
      cResult[3] = items;
      tmp4 = items;
    }
  : (arg0) => {
      ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
      const iconSizeStyles = ButtonHooks.useIconSizeStyles(size);
      const obj2 = { source: icon, style: null };
      const items = [style, iconSizeStyles, closure_23(iconPosition, iconOpticalOffsetMargin).offset];
      obj2.style = items;
      return React5(Icon, obj2);
    };
fn(558);
let obj5 = {
  borderWidth: 1,
  borderRadius: nativeDefault.radii.round,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onPressOut, ref) => {
        const cResult = onPressIn(onLayout[9]).c(72);
        ({
          style,
          pillStyle,
          text,
          textElement,
          size,
          loading,
          icon,
          iconPosition,
          iconOpticalOffsetMargin,
          grow,
          shrink,
          collapseText,
          accessibilityRole,
          accessibilityLabel,
          maxFontSizeMultiplier,
          shiny,
          onPressIn,
        } = onPressOut);
        onPressOut = onPressOut.onPressOut;
        onLayout = onPressOut.onLayout;
        if (undefined === size) {
          size = onPressIn(tmp2[12]).DEFAULT_BUTTON_SIZE;
        }
        let str = "start";
        if (undefined !== iconPosition) {
          str = iconPosition;
        }
        let num = 0;
        if (undefined !== iconOpticalOffsetMargin) {
          num = iconOpticalOffsetMargin;
        }
        let grow2 = undefined !== grow && grow;
        let shrink2 = undefined !== shrink && shrink;
        let str2 = "button";
        if (undefined !== accessibilityRole) {
          str2 = accessibilityRole;
        }
        if (undefined === maxFontSizeMultiplier) {
          maxFontSizeMultiplier = onPressIn(tmp2[12]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
        }
        if (null != onPressOut.textVariant) {
          let textVariant = onPressOut.textVariant;
        } else {
          textVariant = onPressIn(tmp2[12]).getButtonDefaultTextVariant(size);
          const tmpResult = onPressIn(tmp2[12]);
        }
        const tmp5 = onPressIn(onLayout[15]).TextStyleSheet[textVariant];
        const tmp6 = closure_9(size, tmp5.fontSize);
        const enabled = noop.useContext(onPressIn(tmp2[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
        let str3 = onPressOut.variant;
        if (str3 == null) {
          str3 = "primary";
        }
        if ("tertiary" === str3) {
          str3 = "secondary";
        }
        let obj = onPressIn(onLayout[9]);
        const sharedValue = onPressIn(onLayout[6]).useSharedValue(0);
        if (cResult[0] !== str3) {
          const startsWithResult = str3.startsWith("expressive");
          cResult[0] = str3;
          cResult[1] = startsWithResult;
          let tmp9 = startsWithResult;
        } else {
          tmp9 = cResult[1];
        }
        noop = tmp9;
        ref = obj3.useRef(null);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const size1 = { width: 0, height: 0 };
          cResult[2] = size1;
          let tmp12 = size1;
        } else {
          tmp12 = cResult[2];
        }
        ref = obj3.useRef(tmp12);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { pressed: false, posx: 0, posy: 0 };
          cResult[3] = obj2;
          let tmp13 = obj2;
        } else {
          tmp13 = cResult[3];
        }
        const tmpResult5 = onPressIn(onLayout[6]);
        closure_7 = enabled(noop.useState(tmp13), 2)[1];
        if (cResult[4] === tmp9) {
          if (cResult[5] === onLayout) {
            let tmp16 = cResult[6];
          }
          if (cResult[7] === tmp9) {
            if (cResult[8] === onPressIn) {
              if (cResult[9] === enabled) {
                let tmp17 = cResult[10];
              }
              if (cResult[11] === tmp9) {
                if (cResult[12] === onPressOut) {
                  let tmp18 = cResult[13];
                }
                const buttonTextColorStyles = onPressIn(tmp2[14]).useButtonTextColorStyles(str3);
                if (cResult[14] === icon) {
                  if (cResult[15] === str) {
                    if (cResult[16] === tmp6) {
                      if (cResult[18] === icon) {
                        if (cResult[19] === num) {
                          if (cResult[20] === str) {
                            if (cResult[21] === size) {
                              if (cResult[22] === tmp6) {
                                if (cResult[23] === buttonTextColorStyles) {
                                  let tmp22 = cResult[24];
                                }
                                if (cResult[25] === maxFontSizeMultiplier) {
                                  if (cResult[26] === tmp6) {
                                    if (cResult[27] === text) {
                                      if (cResult[28] === buttonTextColorStyles) {
                                        if (cResult[29] === textElement) {
                                          if (cResult[30] === tmp20) {
                                            if (cResult[31] === tmp5) {
                                              let tmp26 = cResult[32];
                                            }
                                            if (grow2) {
                                              grow2 = tmp6.grow;
                                            }
                                            if (shrink2) {
                                              shrink2 = tmp6.shrink;
                                            }
                                            let expressiveButtonContainer = tmp9;
                                            if (tmp9) {
                                              expressiveButtonContainer = tmp6.expressiveButtonContainer;
                                            }
                                            if (cResult[33] === style) {
                                              if (cResult[34] === grow2) {
                                                if (cResult[35] === shrink2) {
                                                  if (cResult[36] === expressiveButtonContainer) {
                                                    let tmp31 = cResult[37];
                                                  }
                                                  let str5 = "box-only";
                                                  if (!tmp9) {
                                                    str5 = onPressOut.pointerEvents;
                                                  }
                                                  if (cResult[38] === accessibilityLabel) {
                                                    if (cResult[39] === text) {
                                                      let tmp32 = cResult[40];
                                                    }
                                                    if (cResult[41] === collapseText) {
                                                      if (cResult[42] === tmp26) {
                                                        let tmp37 = cResult[43];
                                                      }
                                                      let tmp41 = null != icon;
                                                      if (tmp41) {
                                                        tmp41 = "end" === str;
                                                      }
                                                      if (tmp41) {
                                                        tmp41 = tmp22;
                                                      }
                                                      if (cResult[44] === size) {
                                                        if (cResult[45] === tmp36) {
                                                          if (cResult[46] === tmp37) {
                                                            if (cResult[47] === tmp41) {
                                                              let tmp42 = cResult[48];
                                                            }
                                                            if (cResult[49] === loading) {
                                                              if (cResult[50] === pillStyle) {
                                                                if (cResult[51] === sharedValue) {
                                                                  if (cResult[52] === tmp4) {
                                                                    if (cResult[53] === size) {
                                                                      if (cResult[54] === tmp34) {
                                                                        if (cResult[55] === tmp15) {
                                                                          if (cResult[56] === tmp42) {
                                                                            if (cResult[57] === str3) {
                                                                              let tmp46 = cResult[58];
                                                                            }
                                                                            if (cResult[59] === str2) {
                                                                              if (cResult[60] === tmp16) {
                                                                                if (cResult[61] === tmp17) {
                                                                                  if (cResult[62] === tmp18) {
                                                                                    if (cResult[63] === tmp7) {
                                                                                      if (cResult[64] === sharedValue) {
                                                                                        if (
                                                                                          cResult[65] === onPressOut
                                                                                        ) {
                                                                                          if (cResult[66] === ref) {
                                                                                            if (cResult[67] === tmp31) {
                                                                                              if (
                                                                                                cResult[68] === str5
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[69] === tmp32
                                                                                                ) {
                                                                                                  if (
                                                                                                    cResult[70] ===
                                                                                                    tmp46
                                                                                                  ) {
                                                                                                    let tmp50 =
                                                                                                      cResult[71];
                                                                                                  }
                                                                                                  return tmp50;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            const obj4 = { ref };
                                                                            let merged = Object.assign(onPressOut);
                                                                            obj4.onPressIn = tmp17;
                                                                            obj4.onPressOut = tmp18;
                                                                            obj4.onLayout = tmp16;
                                                                            obj4.style = tmp31;
                                                                            obj4.pointerEvents = str5;
                                                                            obj4.pressed = sharedValue;
                                                                            obj4.accessibilityRole = str2;
                                                                            obj4.accessibilityLabel = tmp32;
                                                                            obj4.hitSlop = tmp7;
                                                                            obj4.children = tmp46;
                                                                            const tmp55 = closure_7(
                                                                              onPressIn(tmp2[20]).BaseButton,
                                                                              obj4,
                                                                            );
                                                                            cResult[59] = str2;
                                                                            cResult[60] = tmp16;
                                                                            cResult[61] = tmp17;
                                                                            cResult[62] = tmp18;
                                                                            cResult[63] = tmp7;
                                                                            cResult[64] = sharedValue;
                                                                            cResult[65] = onPressOut;
                                                                            cResult[66] = ref;
                                                                            cResult[67] = tmp31;
                                                                            cResult[68] = str5;
                                                                            cResult[69] = tmp32;
                                                                            cResult[70] = tmp46;
                                                                            cResult[71] = tmp55;
                                                                            tmp50 = tmp55;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const obj5 = {
                                                              variant: str3,
                                                              size,
                                                              loading,
                                                              pressed: sharedValue,
                                                              style: pillStyle,
                                                              shiny: tmp4,
                                                              expressiveRiveRef: tmp34,
                                                              expressivePressState: tmp15,
                                                              children: tmp42,
                                                            };
                                                            const tmp48 = closure_7(
                                                              onPressIn(tmp2[19]).ButtonPill,
                                                              obj5,
                                                            );
                                                            cResult[49] = loading;
                                                            cResult[50] = pillStyle;
                                                            cResult[51] = sharedValue;
                                                            cResult[52] = tmp4;
                                                            cResult[53] = size;
                                                            cResult[54] = tmp34;
                                                            cResult[55] = tmp15;
                                                            cResult[56] = tmp42;
                                                            cResult[57] = str3;
                                                            cResult[58] = tmp48;
                                                            tmp46 = tmp48;
                                                          }
                                                        }
                                                      }
                                                      obj6 = { value: size, children: null };
                                                      const items = [tmp36, tmp37, tmp41];
                                                      obj6.children = items;
                                                      const tmp45 = closure_8(redux.Provider, obj6);
                                                      cResult[44] = size;
                                                      cResult[45] = tmp36;
                                                      cResult[46] = tmp37;
                                                      cResult[47] = tmp41;
                                                      cResult[48] = tmp45;
                                                      tmp42 = tmp45;
                                                    }
                                                    let tmp38 = tmp26;
                                                    if (undefined !== collapseText) {
                                                      const obj7 = { collapseText, children: tmp26 };
                                                      tmp38 = closure_7(closure_16, obj7);
                                                    }
                                                    cResult[41] = collapseText;
                                                    cResult[42] = tmp26;
                                                    cResult[43] = tmp38;
                                                    tmp37 = tmp38;
                                                  }
                                                  let nodeText = accessibilityLabel;
                                                  if (accessibilityLabel == null) {
                                                    nodeText = onPressIn(tmp2[18]).getNodeText(text);
                                                    const tmpResult7 = onPressIn(tmp2[18]);
                                                  }
                                                  cResult[38] = accessibilityLabel;
                                                  cResult[39] = text;
                                                  cResult[40] = nodeText;
                                                  tmp32 = nodeText;
                                                }
                                              }
                                            }
                                            const items1 = [grow2, shrink2, style, expressiveButtonContainer];
                                            cResult[33] = style;
                                            cResult[34] = grow2;
                                            cResult[35] = shrink2;
                                            cResult[36] = expressiveButtonContainer;
                                            cResult[37] = items1;
                                            tmp31 = items1;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                let tmp28Result = textElement;
                                if (null == textElement) {
                                  const obj8 = { maxFontSizeMultiplier, numberOfLines: 1, style: null, children: null };
                                  const items2 = [tmp6.buttonText, tmp5, , ,];
                                  let androidLineHeight = null;
                                  if (tmpResult8.isAndroid()) {
                                    androidLineHeight = tmp6.androidLineHeight;
                                  }
                                  items2[2] = androidLineHeight;
                                  items2[3] = buttonTextColorStyles;
                                  items2[4] = tmp20;
                                  obj8.style = items2;
                                  obj8.children = text;
                                  tmp28Result = closure_7(ref, obj8);
                                  tmpResult8 = onPressIn(tmp2[13]);
                                }
                                cResult[25] = maxFontSizeMultiplier;
                                cResult[26] = tmp6;
                                cResult[27] = text;
                                cResult[28] = buttonTextColorStyles;
                                cResult[29] = textElement;
                                cResult[30] = tmp20;
                                cResult[31] = tmp5;
                                cResult[32] = tmp28Result;
                                tmp26 = tmp28Result;
                              }
                            }
                          }
                        }
                      }
                      if (null == icon) {
                        const obj9 = { icon, size, style: null, iconOpticalOffsetMargin: null, iconPosition: null };
                        const items3 = [tmp6.icon];
                        const obj10 = { tintColor: buttonTextColorStyles.color };
                        items3[1] = obj10;
                        obj9.style = items3;
                        obj9.iconOpticalOffsetMargin = num;
                        obj9.iconPosition = str;
                        let tmp23 = closure_7(closure_26, obj9);
                      } else {
                        tmp23 = icon;
                      }
                      cResult[18] = icon;
                      cResult[19] = num;
                      cResult[20] = str;
                      cResult[21] = size;
                      cResult[22] = tmp6;
                      cResult[23] = buttonTextColorStyles;
                      cResult[24] = tmp23;
                      tmp22 = tmp23;
                    }
                  }
                }
                if (null == icon) {
                  let obj11 = {};
                } else {
                  obj11 = "start" === str ? tmp6.iconLeft : tmp6.iconRight;
                }
                cResult[14] = icon;
                cResult[15] = str;
                cResult[16] = tmp6;
                cResult[17] = obj11;
                const tmpResult6 = onPressIn(tmp2[14]);
              }
              function pe(arg0) {
                if (onPressOut != null) {
                  tmp(arg0);
                }
                if (closure_4) {
                  closure_7((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.pressed = false;
                    return obj;
                  });
                  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                }
              }
              cResult[11] = tmp9;
              cResult[12] = onPressOut;
              cResult[13] = pe;
              tmp18 = pe;
            }
          }
          function ue(nativeEvent) {
            if (onPressIn != null) {
              tmp(nativeEvent);
            }
            if (closure_4) {
              if (enabled) {
                const current2 = ref.current;
                if (current2 != tmp2) {
                  current2.play();
                }
              } else {
                nativeEvent = nativeEvent.nativeEvent;
                const current = ref.current;
                const obj = {
                  pressed: true,
                  posx: nativeEvent.locationX - current.width / 2,
                  posy: nativeEvent.locationY - current.height / 2,
                };
                closure_7(obj);
              }
              const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
            }
          }
          cResult[7] = tmp9;
          cResult[8] = onPressIn;
          cResult[9] = enabled;
          cResult[10] = ue;
          tmp17 = ue;
        }
        function ae(nativeEvent) {
          if (onLayout != null) {
            tmp(nativeEvent);
          }
          if (closure_4) {
            const size = { width: null, height: null };
            ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
            closure_6.current = size;
          }
        }
        cResult[4] = tmp9;
        cResult[5] = onLayout;
        cResult[6] = ae;
        tmp16 = ae;
        const tmp14 = enabled(noop.useState(tmp13), 2);
      }
    : (iconOpticalOffsetMargin, ref) => {
        ({ text, textElement, size } = iconOpticalOffsetMargin);
        ({ style, pillStyle } = iconOpticalOffsetMargin);
        if (undefined === size) {
          size = onPressIn(onLayout[12]).DEFAULT_BUTTON_SIZE;
        }
        ({ icon, iconPosition } = iconOpticalOffsetMargin);
        let str = "start";
        if (undefined !== iconPosition) {
          str = iconPosition;
        }
        iconOpticalOffsetMargin = iconOpticalOffsetMargin.iconOpticalOffsetMargin;
        let num = 0;
        if (undefined !== iconOpticalOffsetMargin) {
          num = iconOpticalOffsetMargin;
        }
        const grow = iconOpticalOffsetMargin.grow;
        let grow2 = undefined !== grow && grow;
        const shrink = iconOpticalOffsetMargin.shrink;
        let shrink2 = undefined !== shrink && shrink;
        ({ collapseText, accessibilityRole } = iconOpticalOffsetMargin);
        let str2 = "button";
        if (undefined !== accessibilityRole) {
          str2 = accessibilityRole;
        }
        ({ accessibilityLabel, maxFontSizeMultiplier } = iconOpticalOffsetMargin);
        if (undefined === maxFontSizeMultiplier) {
          maxFontSizeMultiplier = onPressIn(onLayout[12]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
        }
        const shiny = iconOpticalOffsetMargin.shiny;
        onPressIn = iconOpticalOffsetMargin.onPressIn;
        const onPressOut = iconOpticalOffsetMargin.onPressOut;
        onLayout = iconOpticalOffsetMargin.onLayout;
        if (null != iconOpticalOffsetMargin.textVariant) {
          let textVariant = iconOpticalOffsetMargin.textVariant;
        } else {
          textVariant = onPressIn(onLayout[12]).getButtonDefaultTextVariant(size);
          let obj = onPressIn(onLayout[12]);
        }
        const tmp10 = onPressIn(onLayout[15]).TextStyleSheet[textVariant];
        const tmp11 = closure_9(size, tmp10.fontSize);
        const enabled = noop.useContext(onPressIn(onLayout[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
        let str3 = iconOpticalOffsetMargin.variant;
        if (str3 == null) {
          str3 = "primary";
        }
        if ("tertiary" === str3) {
          str3 = "secondary";
        }
        const sharedValue = onPressIn(onLayout[6]).useSharedValue(0);
        const startsWithResult = str3.startsWith("expressive");
        noop = startsWithResult;
        obj2.useRef(null);
        ref = obj2.useRef({ width: 0, height: 0 });
        const tmp15 = enabled(noop.useState({ pressed: false, posx: 0, posy: 0 }), 2);
        closure_7 = tmp15[1];
        const items = [onLayout, startsWithResult];
        const items1 = [startsWithResult, onPressIn, enabled];
        const callback = obj2.useCallback((nativeEvent) => {
          if (onLayout != null) {
            tmp(nativeEvent);
          }
          if (startsWithResult) {
            const size = { width: null, height: null };
            ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
            closure_6.current = size;
          }
        }, items);
        const items2 = [startsWithResult, onPressOut];
        const callback1 = obj2.useCallback((nativeEvent) => {
          if (onPressIn != null) {
            tmp(nativeEvent);
          }
          if (startsWithResult) {
            if (enabled) {
              const current2 = ref.current;
              if (current2 != tmp2) {
                current2.play();
              }
            } else {
              nativeEvent = nativeEvent.nativeEvent;
              const current = ref.current;
              const obj = {
                pressed: true,
                posx: nativeEvent.locationX - current.width / 2,
                posy: nativeEvent.locationY - current.height / 2,
              };
              closure_7(obj);
            }
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
          }
        }, items1);
        const callback2 = obj2.useCallback((arg0) => {
          if (onPressOut != null) {
            tmp(arg0);
          }
          if (startsWithResult) {
            closure_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.pressed = false;
              return obj;
            });
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          }
        }, items2);
        const tmp5 = undefined !== shiny && shiny;
        const tmp8Result = onPressIn(onLayout[6]);
        const buttonTextColorStyles = onPressIn(onLayout[14]).useButtonTextColorStyles(str3);
        if (null == icon) {
          let obj3 = {};
        } else {
          obj3 = "start" === str ? tmp11.iconLeft : tmp11.iconRight;
        }
        if (null == icon) {
          const obj4 = { icon, size, style: null, iconOpticalOffsetMargin: null, iconPosition: null };
          const items3 = [tmp11.icon];
          const obj5 = { tintColor: buttonTextColorStyles.color };
          items3[1] = obj5;
          obj4.style = items3;
          obj4.iconOpticalOffsetMargin = num;
          obj4.iconPosition = str;
          let tmp20 = closure_7(closure_26, obj4);
        } else {
          tmp20 = icon;
        }
        if (null == textElement) {
          obj6 = { maxFontSizeMultiplier, numberOfLines: 1, style: null, children: null };
          const items4 = [tmp11.buttonText, tmp10, , ,];
          let androidLineHeight = null;
          if (tmp8Result5.isAndroid()) {
            androidLineHeight = tmp11.androidLineHeight;
          }
          items4[2] = androidLineHeight;
          items4[3] = buttonTextColorStyles;
          items4[4] = obj3;
          obj6.style = items4;
          obj6.children = text;
          textElement = closure_7(ref, obj6);
          tmp8Result5 = tmp8(tmp9[13]);
        }
        const obj7 = { ref };
        let merged = Object.assign(iconOpticalOffsetMargin);
        obj7.onPressIn = callback1;
        obj7.onPressOut = callback2;
        obj7.onLayout = callback;
        if (grow2) {
          grow2 = tmp11.grow;
        }
        const items5 = [grow2, , ,];
        if (shrink2) {
          shrink2 = tmp11.shrink;
        }
        items5[1] = shrink2;
        items5[2] = style;
        let expressiveButtonContainer = startsWithResult;
        if (startsWithResult) {
          expressiveButtonContainer = tmp11.expressiveButtonContainer;
        }
        items5[3] = expressiveButtonContainer;
        obj7.style = items5;
        let str4 = "box-only";
        if (!startsWithResult) {
          str4 = iconOpticalOffsetMargin.pointerEvents;
        }
        obj7.pointerEvents = str4;
        obj7.pressed = sharedValue;
        obj7.accessibilityRole = str2;
        if (accessibilityLabel == null) {
          accessibilityLabel = tmp8(tmp9[18]).getNodeText(text);
          const tmp8Result6 = tmp8(tmp9[18]);
        }
        obj7.accessibilityLabel = accessibilityLabel;
        obj7.hitSlop = obj6[size];
        const obj8 = {
          variant: str3,
          size,
          loading: iconOpticalOffsetMargin.loading,
          pressed: sharedValue,
          style: pillStyle,
          shiny: tmp5,
          expressiveRiveRef: null,
          expressivePressState: null,
          children: null,
        };
        let tmp28;
        if (startsWithResult) {
          tmp28 = ref;
        }
        obj8.expressiveRiveRef = tmp28;
        let first;
        if (startsWithResult) {
          first = tmp15[0];
        }
        obj8.expressivePressState = first;
        const obj9 = { value: size, children: null };
        let tmp31 = null != icon;
        if (tmp31) {
          tmp31 = "start" === str;
        }
        if (tmp31) {
          tmp31 = tmp20;
        }
        const items6 = [tmp31, ,];
        let tmp26Result = textElement;
        if (undefined !== collapseText) {
          const obj10 = { collapseText, children: textElement };
          tmp26Result = tmp26(closure_16, obj10);
        }
        items6[1] = tmp26Result;
        let tmp34 = null != icon;
        if (tmp34) {
          tmp34 = "end" === str;
        }
        if (tmp34) {
          tmp34 = tmp20;
        }
        items6[2] = tmp34;
        obj9.children = items6;
        obj8.children = closure_8(redux.Provider, obj9);
        obj7.children = closure_7(onPressIn(onLayout[19]).ButtonPill, obj8);
        return closure_7(onPressIn(onLayout[20]).BaseButton, obj7);
      },
);
let merged = Object.assign({}, forwardRefResult, {
  Icon: ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(7);
        ({ source, variant, disableColor } = arg0);
        let str = "icon";
        if (undefined !== variant) {
          str = variant;
        }
        const context = noop.useContext(closure_13);
        let entityWrapper = closure_11();
        const iconSizeStyles = ButtonHooks.useIconSizeStyles(context);
        if (cResult[0] === (undefined === disableColor || disableColor)) {
          if (cResult[1] === iconSizeStyles) {
            if (cResult[2] === source) {
              let tmp7 = cResult[3];
            }
            if ("entity" !== str) {
              return tmp7;
            } else {
              if (cResult[4] === tmp7) {
              }
              const obj2 = { style: entityWrapper.entityWrapper, children: tmp7 };
              const tmp13 = React5(timestampProducer, obj2);
              cResult[4] = tmp7;
              entityWrapper = entityWrapper.entityWrapper;
              cResult[5] = entityWrapper;
              cResult[6] = tmp13;
            }
          }
        }
        const tmp8 = React5(Icon, {
          source,
          disableColor: undefined === disableColor || disableColor,
          style: iconSizeStyles,
        });
        cResult[0] = undefined === disableColor || disableColor;
        cResult[1] = iconSizeStyles;
        cResult[2] = source;
        cResult[3] = tmp8;
        tmp7 = tmp8;
        const tmpResult = ButtonHooks;
      }
    : (source) => {
        let str = source.variant;
        if (str === undefined) {
          str = "icon";
        }
        let flag = source.disableColor;
        if (flag === undefined) {
          flag = true;
        }
        const context = noop.useContext(closure_13);
        const tmp2 = closure_11();
        const tmp4 = React5(Icon, {
          source: source.source,
          disableColor: flag,
          style: ButtonHooks.useIconSizeStyles(context),
        });
        let tmp3Result = tmp4;
        if ("entity" === str) {
          const obj3 = { style: tmp2.entityWrapper, children: tmp4 };
          tmp3Result = React5(timestampProducer, obj3);
        }
        return tmp3Result;
      },
});
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
