// discord_app/design/components/Button/native/BaseTextButton.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let rect1;
let rect2;
let react = react_mod;
({ Text: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
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
    let tmp3;
    if (null != sm) {
      tmp3 = { sm, md: sm + 0.5, lg: sm + 1.9 }[arg0];
    }
    let tmp7;
    obj3 = PlatformUtils;
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
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", position: "relative" },
  textCollapsed: { position: "absolute", left: 0 },
});
createStyles = createStyles_mod;
let obj = { entityWrapper: obj2 };
obj2 = {
  borderWidth: 1,
  borderRadius: nativeDefault.radii.round,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
let closure_11 = createStyles.createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const redux = react.createContext("md");
const __initData = {
  code: "function BaseTextButtonNativeTsx1(t1){const{containerWidth}=this.__closure;const{nativeEvent:nativeEvent}=t1;if(containerWidth.get()!==0){return;}const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
const __initData2 = {
  code: "function BaseTextButtonNativeTsx2({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let collapseText;
      const obj = react2;
      const cResult = obj.c(10);
      ({ children, collapseText } = arg0);
      const tmp3 = closure_10();
      const obj2 = ReanimatedRexport2;
      const sharedValue = obj2.useSharedValue(0);
      const fn = function n(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        if (0 === sharedValue.get()) {
          const result = sharedValue.set(nativeEvent.layout.width);
        }
      };
      fn.__closure = { containerWidth: sharedValue };
      fn.__workletHash = 14011826491350;
      fn.__initData = __initData;
      const items = [sharedValue];
      obj3 = ReanimatedRexport2;
      const workletCallback = obj3.useWorkletCallback(fn, items);
      const tmp6 = closure_19(sharedValue, collapseText);
      const tmp7 = closure_22(sharedValue, collapseText);
      if (cResult[0] === tmp6) {
        let tmp8;
        if (cResult[1] === tmp3.container) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === children) {
          let tmp9;
          if (cResult[4] === tmp7) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === workletCallback) {
            if (cResult[7] === tmp8) {
              let tmp13;
              if (cResult[8] === tmp9) {
                tmp13 = cResult[9];
              }
              return tmp13;
            }
          }
          const obj4 = { style: tmp8, onLayout: workletCallback, children: tmp9 };
          const tmp16 = metroImportDefault(ReanimatedRexport.View, obj4);
          cResult[6] = workletCallback;
          cResult[7] = tmp8;
          cResult[8] = tmp9;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        const obj5 = { style: tmp7, children };
        const tmp12 = metroImportDefault(ReanimatedRexport.View, obj5);
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
  : (collapseText) => {
      let items1;
      let tmp5;
      collapseText = collapseText.collapseText;
      const children = collapseText.children;
      const tmp = closure_10();
      const obj = ReanimatedRexport2;
      const sharedValue = obj.useSharedValue(0);
      const fn = function o(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        if (0 === sharedValue.get()) {
          const result = sharedValue.set(nativeEvent.layout.width);
        }
      };
      fn.__closure = { containerWidth: sharedValue };
      fn.__workletHash = 14617966668944;
      fn.__initData = __initData2;
      const items = [sharedValue];
      const obj2 = ReanimatedRexport2;
      const workletCallback = obj2.useWorkletCallback(fn, items);
      const tmp4 = closure_19(sharedValue, collapseText);
      obj3 = {
        style: items1,
        onLayout: workletCallback,
        children: metroImportDefault(ReanimatedRexport.View, { style: tmp5, children }),
      };
      items1 = [tmp.container, tmp4];
      tmp5 = closure_22(sharedValue, collapseText);
      const View = ReanimatedRexport.View;
      return metroImportDefault(View, obj3);
    };
const __initData3 = {
  code: 'function BaseTextButtonNativeTsx3(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0){return{};}return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,"animate-always"),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,"animate-always")};}',
};
const __initData4 = {
  code: "function BaseTextButtonNativeTsx4(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (containerWidth, collapsed) => {
      _require = containerWidth;
      const fn = function o() {
        let obj2;
        let withSpring;
        if (0 === containerWidth.get()) {
          obj2 = {};
        } else {
          const withSpring2 = spring.withSpring;
          let num2 = 1;
          let num = 0;
          spring;
          if (1 !== collapsed.get()) {
            num = containerWidth.get();
          }
          obj2 = {
            width: withSpring2(num, springPresets.SUBTLE_SPRING, "animate-always"),
            opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"),
          };
          withSpring = spring.withSpring;
          spring;
          if (num2 === collapsed.get()) {
            num2 = 0;
          }
        }
        return obj2;
      };
      const obj = require("ReanimatedRexport");
      let obj2 = {
        containerWidth,
        withSpring: require("spring").withSpring,
        collapsed,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 11030023180396;
      fn.__initData = __initData3;
      return obj.useAnimatedStyle(fn);
    }
  : (containerWidth, collapsed) => {
      _require = containerWidth;
      const fn = function o() {
        let obj2;
        let withSpring;
        if (0 === containerWidth.get()) {
          obj2 = {};
        } else {
          const withSpring2 = spring.withSpring;
          let num2 = 1;
          let num = 0;
          spring;
          if (1 !== collapsed.get()) {
            num = containerWidth.get();
          }
          obj2 = {
            width: withSpring2(num, springPresets.SUBTLE_SPRING, "animate-always"),
            opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"),
          };
          withSpring = spring.withSpring;
          spring;
          if (num2 === collapsed.get()) {
            num2 = 0;
          }
        }
        return obj2;
      };
      const obj = require("ReanimatedRexport");
      let obj2 = {
        containerWidth,
        withSpring: require("spring").withSpring,
        collapsed,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__closure = obj2;
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (containerWidth, collapsed) => {
      let closure_0 = containerWidth;
      let closure_1 = collapsed;
      const textCollapsed = closure_10().textCollapsed;
      let obj = ReanimatedRexport2;
      const fn = function o() {
        let obj;
        if (0 === closure_1.get()) {
          obj = {};
        } else {
          obj = { width: closure_0.get() };
          const merged = Object.assign(textCollapsed);
        }
        return obj;
      };
      fn.__closure = { collapsed, textCollapsed, containerWidth };
      fn.__workletHash = 15223478677680;
      fn.__initData = __initData5;
      return obj.useAnimatedStyle(fn);
    }
  : (containerWidth, collapsed) => {
      let closure_0 = containerWidth;
      let closure_1 = collapsed;
      const textCollapsed = closure_10().textCollapsed;
      let obj = ReanimatedRexport2;
      const fn = function o() {
        let obj;
        if (0 === closure_1.get()) {
          obj = {};
        } else {
          obj = { width: closure_0.get() };
          const merged = Object.assign(textCollapsed);
        }
        return obj;
      };
      fn.__closure = { collapsed, textCollapsed, containerWidth };
      fn.__workletHash = 4732498665045;
      fn.__initData = __initData6;
      return obj.useAnimatedStyle(fn);
    };
createStyles = createStyles_mod;
let closure_23 = createStyles.createStyles((arg0, marginLeft) => {
  if (0 === marginLeft) {
    return { offset: {} };
  } else if ("start" === arg0) {
    obj3 = { offset: obj4 };
    return obj3;
  } else if ("end" === arg0) {
    const obj5 = { offset: obj6 };
    return obj5;
  } else {
    return { offset: {} };
  }
});
let obj3 = { sm: rect, md: rect1, lg: rect2 };
const LARGE_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.SMALL_BUTTON_HEIGHT) / 2, 0);
rect = { top: bound, left: "Array", right: "parent", bottom: bound };
const LARGE_BUTTON_HEIGHT2 = ButtonConstants.LARGE_BUTTON_HEIGHT;
const bound1 = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.MEDIUM_BUTTON_HEIGHT) / 2, 0);
rect1 = { top: bound1, left: "Array", right: "parent", bottom: bound1 };
const bound2 = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.LARGE_BUTTON_HEIGHT) / 2, 0);
rect2 = { top: bound2, left: "Array", right: "parent", bottom: bound2 };
function getTextPlatformLineHeight(arg0, arg1) {}
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let icon;
      let iconOpticalOffsetMargin;
      let iconPosition;
      let style;
      const obj = react2;
      const cResult = obj.c(7);
      ({ icon, style, size, iconPosition, iconOpticalOffsetMargin } = arg0);
      const obj2 = ButtonHooks;
      const iconSizeStyles = obj2.useIconSizeStyles(size);
      const tmp3 = closure_23(iconPosition, iconOpticalOffsetMargin);
      if (cResult[0] === tmp3.offset) {
        if (cResult[1] === iconSizeStyles) {
          let tmp4;
          if (cResult[2] === style) {
            tmp4 = cResult[3];
          }
          if (cResult[4] === icon) {
            let tmp5;
            if (cResult[5] === tmp4) {
              tmp5 = cResult[6];
            }
            return tmp5;
          }
          obj3 = { source: icon, style: tmp4 };
          const tmp8 = metroImportDefault(Icon, obj3);
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
      let icon;
      let iconOpticalOffsetMargin;
      let iconPosition;
      let items;
      let style;
      ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
      const obj = ButtonHooks;
      const iconSizeStyles = obj.useIconSizeStyles(size);
      const obj2 = { source: icon, style: items };
      items = [style, iconSizeStyles, closure_23(iconPosition, iconOpticalOffsetMargin).offset];
      return metroImportDefault(Icon, obj2);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onPressOut, ref) => {
        let accessibilityLabel;
        let accessibilityRole;
        let closure_4;
        let collapseText;
        let grow;
        let icon;
        let iconOpticalOffsetMargin;
        let iconPosition;
        let items;
        let items2;
        let items3;
        let loading;
        let maxFontSizeMultiplier;
        let onLayout;
        let onPressIn;
        let pillStyle;
        let shiny;
        let shrink;
        let style;
        let text;
        let textElement;
        let textVariant;
        let tmp12;
        let tmp13;
        let tmp9;
        let obj = onPressIn(onLayout[9]);
        const cResult = obj.c(72);
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
          textVariant = onPressOut.textVariant;
        } else {
          const tmpResult = onPressIn(onLayout[12]);
          textVariant = tmpResult.getButtonDefaultTextVariant(size);
        }
        const tmp5 = onPressIn(onLayout[15]).TextStyleSheet[textVariant];
        const tmp6 = closure_9(size, tmp5.fontSize);
        const enabled = react.useContext(onPressIn(tmp2[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
        let str3 = onPressOut.variant;
        if (str3 == null) {
          str3 = "primary";
        }
        if ("tertiary" === str3) {
          str3 = "secondary";
        }
        const tmpResult5 = onPressIn(onLayout[6]);
        const sharedValue = tmpResult5.useSharedValue(0);
        if (cResult[0] !== str3) {
          const startsWithResult = str3.startsWith("expressive");
          cResult[0] = str3;
          cResult[1] = startsWithResult;
          tmp9 = startsWithResult;
        } else {
          tmp9 = cResult[1];
        }
        react = tmp9;
        ref = obj3.useRef(null);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const size1 = { width: 0, height: 0 };
          cResult[2] = size1;
          tmp12 = size1;
        } else {
          tmp12 = cResult[2];
        }
        ref = obj3.useRef(tmp12);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { pressed: false, posx: 0, posy: 0 };
          cResult[3] = obj2;
          tmp13 = obj2;
        } else {
          tmp13 = cResult[3];
        }
        let closure_7 = enabled(react.useState(tmp13), 2)[1];
        enabled(react.useState(tmp13), 2);
        if (cResult[4] === tmp9) {
          let tmp16;
          if (cResult[5] === onLayout) {
            tmp16 = cResult[6];
          }
          if (cResult[7] === tmp9) {
            if (cResult[8] === onPressIn) {
              let tmp17;
              if (cResult[9] === enabled) {
                tmp17 = cResult[10];
              }
              if (cResult[11] === tmp9) {
                let tmp18;
                let obj11;
                if (cResult[12] === onPressOut) {
                  tmp18 = cResult[13];
                }
                const tmpResult6 = onPressIn(onLayout[14]);
                const buttonTextColorStyles = tmpResult6.useButtonTextColorStyles(str3);
                if (cResult[14] === icon) {
                  if (cResult[15] === str) {
                    let tmp20;
                    let tmp22;
                    if (cResult[16] === tmp6) {
                      tmp20 = cResult[17];
                    }
                    if (cResult[18] === icon) {
                      if (cResult[19] === num) {
                        if (cResult[20] === str) {
                          if (cResult[21] === size) {
                            if (cResult[22] === tmp6) {
                              let tmp21;
                              if (cResult[23] === buttonTextColorStyles) {
                                tmp21 = cResult[24];
                              }
                              if (cResult[25] === maxFontSizeMultiplier) {
                                if (cResult[26] === tmp6) {
                                  if (cResult[27] === text) {
                                    if (cResult[28] === buttonTextColorStyles) {
                                      if (cResult[29] === textElement) {
                                        if (cResult[30] === tmp20) {
                                          let tmp25;
                                          if (cResult[31] === tmp5) {
                                            tmp25 = cResult[32];
                                          }
                                          if (grow2) {
                                            grow2 = tmp6.grow;
                                          }
                                          if (shrink2) {
                                            shrink2 = tmp6.shrink;
                                          }
                                          if (cResult[33] === style) {
                                            if (cResult[34] === grow2) {
                                              if (cResult[35] === shrink2) {
                                                let tmp31;
                                                if (cResult[36] === (tmp9 && tmp6.expressiveButtonContainer)) {
                                                  tmp31 = cResult[37];
                                                }
                                                let str5 = "box-only";
                                                if (!tmp9) {
                                                  str5 = onPressOut.pointerEvents;
                                                }
                                                if (cResult[38] === accessibilityLabel) {
                                                  let tmp32;
                                                  if (cResult[39] === text) {
                                                    tmp32 = cResult[40];
                                                  }
                                                  if (cResult[41] === collapseText) {
                                                    let tmp37;
                                                    if (cResult[42] === tmp25) {
                                                      tmp37 = cResult[43];
                                                    }
                                                    if (cResult[44] === size) {
                                                      if (cResult[45] === (null != icon && "start" === str && tmp21)) {
                                                        if (cResult[46] === tmp37) {
                                                          let tmp42;
                                                          if (
                                                            cResult[47] === (null != icon && "end" === str && tmp21)
                                                          ) {
                                                            tmp42 = cResult[48];
                                                          }
                                                          if (cResult[49] === loading) {
                                                            if (cResult[50] === pillStyle) {
                                                              if (cResult[51] === sharedValue) {
                                                                if (cResult[52] === (undefined !== shiny && shiny)) {
                                                                  if (cResult[53] === size) {
                                                                    if (cResult[54] === tmp34) {
                                                                      if (cResult[55] === tmp15) {
                                                                        if (cResult[56] === tmp42) {
                                                                          let tmp46;
                                                                          if (cResult[57] === str3) {
                                                                            tmp46 = cResult[58];
                                                                          }
                                                                          if (cResult[59] === str2) {
                                                                            if (cResult[60] === tmp16) {
                                                                              if (cResult[61] === tmp17) {
                                                                                if (cResult[62] === tmp18) {
                                                                                  if (cResult[63] === obj3[size]) {
                                                                                    if (cResult[64] === sharedValue) {
                                                                                      if (cResult[65] === onPressOut) {
                                                                                        if (cResult[66] === ref) {
                                                                                          if (cResult[67] === tmp31) {
                                                                                            if (cResult[68] === str5) {
                                                                                              if (
                                                                                                cResult[69] === tmp32
                                                                                              ) {
                                                                                                let tmp50;
                                                                                                if (
                                                                                                  cResult[70] === tmp46
                                                                                                ) {
                                                                                                  tmp50 = cResult[71];
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
                                                                          const obj4 = {
                                                                            ref,
                                                                            onPressIn: tmp17,
                                                                            onPressOut: tmp18,
                                                                            onLayout: tmp16,
                                                                            style: tmp31,
                                                                            pointerEvents: str5,
                                                                            pressed: sharedValue,
                                                                            accessibilityRole: str2,
                                                                            accessibilityLabel: tmp32,
                                                                            hitSlop: obj3[size],
                                                                            children: tmp46,
                                                                          };
                                                                          const BaseButton = onPressIn(
                                                                            tmp2[20],
                                                                          ).BaseButton;
                                                                          let merged = Object.assign(onPressOut);
                                                                          const tmp55 = closure_7(BaseButton, obj4);
                                                                          cResult[59] = str2;
                                                                          cResult[60] = tmp16;
                                                                          cResult[61] = tmp17;
                                                                          cResult[62] = tmp18;
                                                                          cResult[63] = obj3[size];
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
                                                            shiny: undefined !== shiny && shiny,
                                                            expressiveRiveRef: tmp34,
                                                            expressivePressState: tmp15,
                                                            children: tmp42,
                                                          };
                                                          const tmp48 = closure_7(
                                                            onPressIn(onLayout[19]).ButtonPill,
                                                            obj5,
                                                          );
                                                          cResult[49] = loading;
                                                          cResult[50] = pillStyle;
                                                          cResult[51] = sharedValue;
                                                          cResult[52] = undefined !== shiny && shiny;
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
                                                    const obj6 = { value: size, children: items };
                                                    items = [null != icon && "start" === str && tmp21, tmp37, tmp41];
                                                    const tmp45 = closure_8(redux.Provider, obj6);
                                                    cResult[44] = size;
                                                    cResult[45] = null != icon && "start" === str && tmp21;
                                                    cResult[46] = tmp37;
                                                    cResult[47] = null != icon && "end" === str && tmp21;
                                                    cResult[48] = tmp45;
                                                    tmp42 = tmp45;
                                                  }
                                                  let tmp38 = tmp25;
                                                  if (undefined !== collapseText) {
                                                    const obj7 = { collapseText, children: tmp25 };
                                                    tmp38 = closure_7(closure_16, obj7);
                                                  }
                                                  cResult[41] = collapseText;
                                                  cResult[42] = tmp25;
                                                  cResult[43] = tmp38;
                                                  tmp37 = tmp38;
                                                }
                                                let nodeText = accessibilityLabel;
                                                if (accessibilityLabel == null) {
                                                  const tmpResult7 = onPressIn(onLayout[18]);
                                                  nodeText = tmpResult7.getNodeText(text);
                                                }
                                                cResult[38] = accessibilityLabel;
                                                cResult[39] = text;
                                                cResult[40] = nodeText;
                                                tmp32 = nodeText;
                                              }
                                            }
                                          }
                                          const items1 = [
                                            grow2,
                                            shrink2,
                                            style,
                                            tmp9 && tmp6.expressiveButtonContainer,
                                          ];
                                          cResult[33] = style;
                                          cResult[34] = grow2;
                                          cResult[35] = shrink2;
                                          cResult[36] = tmp9 && tmp6.expressiveButtonContainer;
                                          cResult[37] = items1;
                                          tmp31 = items1;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              let tmp27Result = textElement;
                              if (null == textElement) {
                                const obj8 = { maxFontSizeMultiplier, numberOfLines: 1, style: items2, children: text };
                                items2 = [tmp6.buttonText, tmp5, , ,];
                                let androidLineHeight = null;
                                const tmp27 = closure_7;
                                const tmp28 = ref;
                                const tmpResult8 = onPressIn(onLayout[13]);
                                if (tmpResult8.isAndroid()) {
                                  androidLineHeight = tmp6.androidLineHeight;
                                }
                                items2[2] = androidLineHeight;
                                items2[3] = buttonTextColorStyles;
                                items2[4] = tmp20;
                                tmp27Result = tmp27(tmp28, obj8);
                              }
                              cResult[25] = maxFontSizeMultiplier;
                              cResult[26] = tmp6;
                              cResult[27] = text;
                              cResult[28] = buttonTextColorStyles;
                              cResult[29] = textElement;
                              cResult[30] = tmp20;
                              cResult[31] = tmp5;
                              cResult[32] = tmp27Result;
                              tmp25 = tmp27Result;
                            }
                          }
                        }
                      }
                    }
                    if (null == icon) {
                      const obj9 = { icon, size, style: items3, iconOpticalOffsetMargin: num, iconPosition: str };
                      items3 = [tmp6.icon];
                      const obj10 = { tintColor: buttonTextColorStyles.color };
                      items3[1] = obj10;
                      tmp22 = closure_7(closure_26, obj9);
                    } else {
                      tmp22 = icon;
                    }
                    cResult[18] = icon;
                    cResult[19] = num;
                    cResult[20] = str;
                    cResult[21] = size;
                    cResult[22] = tmp6;
                    cResult[23] = buttonTextColorStyles;
                    cResult[24] = tmp22;
                    tmp21 = tmp22;
                  }
                }
                if (null == icon) {
                  obj11 = {};
                } else {
                  obj11 = "start" === str ? tmp6.iconLeft : tmp6.iconRight;
                }
                cResult[14] = icon;
                cResult[15] = str;
                cResult[16] = tmp6;
                cResult[17] = obj11;
                tmp20 = obj11;
              }
              function pe(arg0) {
                if (onPressOut != null) {
                  tmp(arg0);
                }
                if (closure_4) {
                  closure_7((arg0) => {
                    const obj = { pressed: false };
                    const merged = Object.assign(arg0);
                    return obj;
                  });
                  let obj = HapticUtils;
                  const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
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
                if (current2 != null) {
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
              const obj2 = HapticUtils;
              const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
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
            size = { width: null, height: null };
            ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
            ref.current = size;
          }
        }
        cResult[4] = tmp9;
        cResult[5] = onLayout;
        cResult[6] = ae;
        tmp16 = ae;
      }
    : (loading, ref) => {
        let ButtonPill;
        let Provider;
        let accessibilityLabel;
        let accessibilityRole;
        let collapseText;
        let icon;
        let iconPosition;
        let items3;
        let items4;
        let items5;
        let items6;
        let maxFontSizeMultiplier;
        let obj8;
        let obj9;
        let onLayout;
        let onPressIn;
        let pillStyle;
        let str4;
        let style;
        let text;
        let textElement;
        let textVariant;
        let tmp22;
        let tmp30;
        let tmp31;
        ({ text, textElement, size } = loading);
        ({ style, pillStyle } = loading);
        if (undefined === size) {
          const tmp = onPressIn;
          size = onPressIn(onLayout[12]).DEFAULT_BUTTON_SIZE;
        }
        ({ icon, iconPosition } = loading);
        let str = "start";
        loading = loading.loading;
        if (undefined !== iconPosition) {
          str = iconPosition;
        }
        const iconOpticalOffsetMargin = loading.iconOpticalOffsetMargin;
        let num = 0;
        if (undefined !== iconOpticalOffsetMargin) {
          num = iconOpticalOffsetMargin;
        }
        const grow = loading.grow;
        let grow2 = undefined !== grow && grow;
        const shrink = loading.shrink;
        let shrink2 = undefined !== shrink && shrink;
        ({ collapseText, accessibilityRole } = loading);
        let str2 = "button";
        if (undefined !== accessibilityRole) {
          str2 = accessibilityRole;
        }
        ({ accessibilityLabel, maxFontSizeMultiplier } = loading);
        if (undefined === maxFontSizeMultiplier) {
          maxFontSizeMultiplier = onPressIn(onLayout[12]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
        }
        const shiny = loading.shiny;
        onPressIn = loading.onPressIn;
        const onPressOut = loading.onPressOut;
        onLayout = loading.onLayout;
        const tmp5 = undefined !== shiny && shiny;
        if (null != loading.textVariant) {
          textVariant = loading.textVariant;
        } else {
          let obj = onPressIn(onLayout[12]);
          textVariant = obj.getButtonDefaultTextVariant(size);
        }
        const tmp10 = onPressIn(onLayout[15]).TextStyleSheet[textVariant];
        const tmp11 = closure_9(size, tmp10.fontSize);
        let obj2 = react;
        const tmp12 = obj3[size];
        const enabled = react.useContext(onPressIn(onLayout[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
        let str3 = loading.variant;
        if (str3 == null) {
          str3 = "primary";
        }
        if ("tertiary" === str3) {
          str3 = "secondary";
        }
        const tmp8Result = onPressIn(onLayout[6]);
        const sharedValue = tmp8Result.useSharedValue(0);
        const startsWithResult = str3.startsWith("expressive");
        react = startsWithResult;
        obj2.useRef(null);
        ref = obj2.useRef({ width: 0, height: 0 });
        const tmp16 = enabled(obj2.useState({ pressed: false, posx: 0, posy: 0 }), 2);
        let closure_7 = tmp16[1];
        const items = [onLayout, startsWithResult];
        const first = tmp16[0];
        const items1 = [startsWithResult, onPressIn, enabled];
        const callback = obj2.useCallback((nativeEvent) => {
          if (onLayout != null) {
            tmp(nativeEvent);
          }
          if (react) {
            size = { width: null, height: null };
            ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
            ref.current = size;
          }
        }, items);
        const items2 = [startsWithResult, onPressOut];
        const callback1 = obj2.useCallback((nativeEvent) => {
          if (onPressIn != null) {
            tmp(nativeEvent);
          }
          if (react) {
            if (enabled) {
              const current2 = ref.current;
              if (current2 != null) {
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
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
          }
        }, items1);
        const callback2 = obj2.useCallback((arg0) => {
          if (onPressOut != null) {
            tmp(arg0);
          }
          if (react) {
            closure_7((arg0) => {
              const obj = { pressed: false };
              const merged = Object.assign(arg0);
              return obj;
            });
            let obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          }
        }, items2);
        const tmp8Result4 = onPressIn(onLayout[14]);
        const buttonTextColorStyles = tmp8Result4.useButtonTextColorStyles(str3);
        if (null == icon) {
          obj3 = {};
        } else {
          obj3 = "start" === str ? tmp11.iconLeft : tmp11.iconRight;
        }
        if (null == icon) {
          const obj4 = { icon, size, style: items3, iconOpticalOffsetMargin: num, iconPosition: str };
          items3 = [tmp11.icon];
          const obj5 = { tintColor: buttonTextColorStyles.color };
          items3[1] = obj5;
          tmp22 = closure_7(closure_26, obj4);
        } else {
          tmp22 = icon;
        }
        if (null == textElement) {
          const obj6 = { maxFontSizeMultiplier, numberOfLines: 1, style: items4, children: text };
          items4 = [tmp11.buttonText, tmp10, , ,];
          let androidLineHeight = null;
          const tmp25 = closure_7;
          const tmp26 = ref;
          const tmp8Result5 = onPressIn(onLayout[13]);
          if (tmp8Result5.isAndroid()) {
            androidLineHeight = tmp11.androidLineHeight;
          }
          items4[2] = androidLineHeight;
          items4[3] = buttonTextColorStyles;
          items4[4] = obj3;
          textElement = tmp25(tmp26, obj6);
        }
        const obj7 = {
          ref,
          onPressIn: callback1,
          onPressOut: callback2,
          onLayout: callback,
          style: items5,
          pointerEvents: str4,
          pressed: sharedValue,
          accessibilityRole: str2,
          accessibilityLabel,
          hitSlop: tmp12,
          children: closure_7(ButtonPill, obj8),
        };
        const BaseButton = tmp8(tmp9[20]).BaseButton;
        let merged = Object.assign(loading);
        if (grow2) {
          grow2 = tmp11.grow;
        }
        items5 = [grow2, , ,];
        if (shrink2) {
          shrink2 = tmp11.shrink;
        }
        items5[1] = shrink2;
        items5[2] = style;
        items5[3] = startsWithResult && tmp11.expressiveButtonContainer;
        str4 = "box-only";
        if (!startsWithResult) {
          str4 = loading.pointerEvents;
        }
        if (accessibilityLabel == null) {
          const tmp8Result6 = onPressIn(onLayout[18]);
          accessibilityLabel = tmp8Result6.getNodeText(text);
        }
        obj8 = {
          variant: str3,
          size,
          loading,
          pressed: sharedValue,
          style: pillStyle,
          shiny: tmp5,
          expressiveRiveRef: tmp30,
          expressivePressState: tmp31,
          children: closure_8(Provider, obj9),
        };
        tmp30 = undefined;
        ButtonPill = tmp8(tmp9[19]).ButtonPill;
        if (startsWithResult) {
          tmp30 = ref;
        }
        tmp31 = undefined;
        if (startsWithResult) {
          tmp31 = first;
        }
        let tmp33 = null != icon;
        Provider = redux.Provider;
        obj9 = { value: size, children: items6 };
        if (tmp33) {
          tmp33 = "start" === str;
        }
        if (tmp33) {
          tmp33 = tmp22;
        }
        items6 = [tmp33, ,];
        let tmp28Result = textElement;
        if (undefined !== collapseText) {
          const obj10 = { collapseText, children: textElement };
          tmp28Result = tmp28(closure_16, obj10);
        }
        items6[1] = tmp28Result;
        const tmp36 = null != icon && "end" === str && tmp22;
        items6[2] = tmp36;
        return closure_7(BaseButton, obj7);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let obj4 = {
  Icon: ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let disableColor;
        let source;
        let variant;
        const obj = react2;
        const cResult = obj.c(7);
        ({ source, variant, disableColor } = arg0);
        let str = "icon";
        if (undefined !== variant) {
          str = variant;
        }
        const context = react.useContext(redux);
        const tmp6 = closure_11();
        const tmpResult = ButtonHooks;
        const iconSizeStyles = tmpResult.useIconSizeStyles(context);
        if (cResult[0] === (undefined === disableColor || disableColor)) {
          if (cResult[1] === iconSizeStyles) {
            let tmp8;
            if (cResult[2] === source) {
              tmp8 = cResult[3];
            }
            let tmp10 = tmp8;
            if ("entity" === str) {
              if (cResult[4] === tmp8) {
                let tmp11;
                if (cResult[5] === tmp6.entityWrapper) {
                  tmp11 = cResult[6];
                }
                tmp10 = tmp11;
              }
              const obj2 = { style: tmp6.entityWrapper, children: tmp8 };
              const tmp14 = metroImportDefault(metroRequire, obj2);
              cResult[4] = tmp8;
              cResult[5] = tmp6.entityWrapper;
              cResult[6] = tmp14;
              tmp11 = tmp14;
            }
            return tmp10;
          }
        }
        const tmp9 = metroImportDefault(Icon, {
          source,
          disableColor: undefined === disableColor || disableColor,
          style: iconSizeStyles,
        });
        cResult[0] = undefined === disableColor || disableColor;
        cResult[1] = iconSizeStyles;
        cResult[2] = source;
        cResult[3] = tmp9;
        tmp8 = tmp9;
      }
    : (variant) => {
        let str = variant.variant;
        const source = variant.source;
        if (str === undefined) {
          str = "icon";
        }
        let flag = variant.disableColor;
        if (flag === undefined) {
          flag = true;
        }
        const context = react.useContext(redux);
        const tmp2 = closure_11();
        const obj = ButtonHooks;
        const obj2 = { source, disableColor: flag, style: obj.useIconSizeStyles(context) };
        const tmp4 = metroImportDefault(Icon, obj2);
        let tmp3Result = tmp4;
        if ("entity" === str) {
          obj3 = { style: tmp2.entityWrapper, children: tmp4 };
          tmp3Result = metroImportDefault(metroRequire, obj3);
        }
        return tmp3Result;
      },
};
let merged = Object.assign({}, forwardRefResult, obj4);
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
