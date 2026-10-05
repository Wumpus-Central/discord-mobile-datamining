// === Module 9284: SegmentedControlItem ===

// Module 9284 (SegmentedControlItem)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((arg0) => {
  let num;
  const item = { borderRadius: nativeDefault.radii.lg, paddingVertical: num, flexDirection: "row", justifyContent: "center" };
  num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  return { item, label: { flexDirection: "column", alignItems: "center", gap: 8 } };
});
createStyles = createStyles_mod;
let obj = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, pressed: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_9 = createStyles.createStyleProperties(obj);
const __initData = { code: "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else{if(isPressActive){color=colors.inactive;}else{if(isActive){color=colors.active;}}}return{color:withSpring(color,SPRING_CONFIG,\"animate-always\")};}" };
const __initData2 = { code: "function SegmentedControlItemNativeTsx2(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let activeIndex;
  let icon;
  let index;
  let itemCount;
  let items;
  let label;
  let onPress;
  let onPressIn;
  let onPressOut;
  let pressed;
  let style;
  let tmp6;
  let variant;
  let tmp2 = activeIndex;
  let obj = index(activeIndex[6]);
  const cResult = obj.c(24);
  ({ label, index } = state);
  ({ itemCount, icon, onPress, onPressIn, onPressOut, pressed } = state);
  ({ variant, style } = state);
  activeIndex = state.state.activeIndex;
  const tmp4 = closure_8(variant);
  const tmp5 = closure_9();
  const inactive = tmp5;
  if (cResult[0] !== index) {
    const fn = function o(arg0) {
      return { selected: arg0 === index };
    };
    cResult[0] = index;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = index(tmp2[7]);
  const derivedStateFromSharedValue = tmpResult.useDerivedStateFromSharedValue(activeIndex, tmp6);
  const tmpResult3 = index(tmp2[8]);
  class R {
    constructor() {
      let obj2;
      let active = inactive.inactive;
      const tmp2 = pressed.get() >= 0;
      const value = pressed.get();
      if (value === index) {
        active = inactive.pressed;
      } else if (tmp2) {
        active = inactive.inactive;
      } else if (tmp5 === index) {
        active = inactive.active;
      }
      const obj = { color: obj2.withSpring(active, SPRING_CONFIG, "animate-always") };
      obj2 = spring;
      return obj;
    }
  }
  let obj2 = { colors: tmp5, pressed, index, activeIndex, withSpring: index(tmp2[9]).withSpring, SPRING_CONFIG };
  R.__closure = obj2;
  R.__workletHash = 11849209842619;
  R.__initData = __initData;
  const animatedStyle = tmpResult3.useAnimatedStyle(R);
  if (cResult[2] === style) {
    let tmp9;
    if (cResult[3] === tmp4.item) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === index) {
      let tmp10;
      if (cResult[6] === itemCount) {
        tmp10 = cResult[7];
      }
      let num7;
      if ("experimental_Large" === variant) {
        num7 = 1.5;
      }
      if (cResult[8] === animatedStyle) {
        if (cResult[9] === label) {
          let tmp12;
          if (cResult[10] === num7) {
            tmp12 = cResult[11];
          }
          if (cResult[12] === icon) {
            if (cResult[13] === tmp4.label) {
              let tmp15;
              if (cResult[14] === tmp12) {
                tmp15 = cResult[15];
              }
              if (cResult[16] === derivedStateFromSharedValue) {
                if (cResult[17] === onPress) {
                  if (cResult[18] === onPressIn) {
                    if (cResult[19] === onPressOut) {
                      if (cResult[20] === tmp9) {
                        if (cResult[21] === tmp10) {
                          let tmp19;
                          if (cResult[22] === tmp15) {
                            tmp19 = cResult[23];
                          }
                          return tmp19;
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = { style: tmp9, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue, accessibilityHint: tmp10, children: tmp15 };
              const tmp22 = closure_5(inactive, obj3);
              cResult[16] = derivedStateFromSharedValue;
              cResult[17] = onPress;
              cResult[18] = onPressIn;
              cResult[19] = onPressOut;
              cResult[20] = tmp9;
              cResult[21] = tmp10;
              cResult[22] = tmp15;
              cResult[23] = tmp22;
              tmp19 = tmp22;
            }
          }
          const obj4 = { style: tmp4.label, children: items };
          items = [icon, tmp12];
          const tmp18 = closure_6(closure_4, obj4);
          cResult[12] = icon;
          cResult[13] = tmp4.label;
          cResult[14] = tmp12;
          cResult[15] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj5 = { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, maxFontSizeMultiplier: num7, children: label };
      const tmp14 = closure_5(index(tmp2[12]).Text, obj5);
      cResult[8] = animatedStyle;
      cResult[9] = label;
      cResult[10] = num7;
      cResult[11] = tmp14;
      tmp12 = tmp14;
    }
    let formatToPlainStringResult;
    const tmpResult4 = index(tmp2[10]);
    if (tmpResult4.isAndroid()) {
      const intl = index(tmp2[11]).intl;
      const obj6 = { position: index + 1, tabCount: itemCount };
      formatToPlainStringResult = intl.formatToPlainString(index(tmp2[11]).t["4EsQA1"], obj6);
    }
    cResult[5] = index;
    cResult[6] = itemCount;
    cResult[7] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  }
  const items1 = [tmp4.item, style];
  cResult[2] = style;
  cResult[3] = tmp4.item;
  cResult[4] = items1;
  tmp9 = items1;
}) : ((index) => {
  let formatToPlainStringResult;
  let icon;
  let itemCount;
  let items;
  let items1;
  let label;
  let num2;
  let obj7;
  let onPress;
  let onPressIn;
  let onPressOut;
  let style;
  index = index.index;
  const pressed = index.pressed;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
  const tmp = closure_8(variant);
  let tmp2 = closure_9();
  const inactive = tmp2;
  let obj = index(activeIndex[7]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === index }));
  let obj2 = index(activeIndex[8]);
  class T {
    constructor() {
      let obj2;
      let active = inactive.inactive;
      const tmp2 = pressed.get() >= 0;
      const value = pressed.get();
      if (value === index) {
        active = inactive.pressed;
      } else if (tmp2) {
        active = inactive.inactive;
      } else if (tmp5 === index) {
        active = inactive.active;
      }
      const obj = { color: obj2.withSpring(active, SPRING_CONFIG, "animate-always") };
      obj2 = spring;
      return obj;
    }
  }
  T.__closure = { colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[9]).withSpring, SPRING_CONFIG };
  T.__workletHash = 14224031980152;
  T.__initData = __initData2;
  const obj4 = { style: items, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue, accessibilityHint: formatToPlainStringResult, children: closure_6(closure_4, obj7) };
  items = [tmp.item, style];
  ({ colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[9]).withSpring, SPRING_CONFIG });
  const animatedStyle = obj2.useAnimatedStyle(T);
  formatToPlainStringResult = undefined;
  const obj5 = index(activeIndex[10]);
  const tmp8 = inactive;
  if (obj5.isAndroid()) {
    const intl = tmp3(tmp4[11]).intl;
    const obj6 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[11]).t["4EsQA1"], obj6);
  }
  obj7 = { style: tmp.label, children: items1 };
  items1 = [icon, ];
  const obj8 = { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, maxFontSizeMultiplier: num2, children: label };
  num2 = undefined;
  const Text = tmp3(tmp4[12]).Text;
  if ("experimental_Large" === variant) {
    num2 = 1.5;
  }
  items1[1] = closure_5(Text, obj8);
  return closure_5(tmp8, obj4);
});
const result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = tmp5;