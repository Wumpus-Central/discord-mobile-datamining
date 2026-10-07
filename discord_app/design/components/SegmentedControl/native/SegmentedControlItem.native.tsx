// discord_app/design/components/SegmentedControl/native/SegmentedControlItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = fn(4896);
let closure_8 = createStyles.createStyles((arg0) => {
  const item = {
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: null,
    flexDirection: "row",
    justifyContent: "center",
  };
  let num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  item.paddingVertical = num;
  return { item, label: { flexDirection: "column", alignItems: "center", gap: 8 } };
});
createStyles = fn(4896);
let closure_9 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  pressed: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
});
const __initData = {
  code: 'function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else{if(isPressActive){color=colors.inactive;}else{if(isActive){color=colors.active;}}}return{color:withSpring(color,SPRING_CONFIG,"animate-always")};}',
};
const __initData2 = {
  code: "function SegmentedControlItemNativeTsx2(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  pressed: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const cResult = index(activeIndex[6]).c(24);
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      let obj = index(activeIndex[6]);
      const derivedStateFromSharedValue = index(activeIndex[7]).useDerivedStateFromSharedValue(activeIndex, tmp6);
      const tmpResult = index(activeIndex[7]);
      class R {
        constructor() {
          tmp = closure_3;
          active = closure_3.inactive;
          tmp2 = pressed.get() >= 0;
          value = pressed.get();
          tmp4 = index;
          if (value === index) {
            active = tmp.pressed;
          } else if (tmp2) {
            active = tmp.inactive;
          } else if (tmp5 === tmp4) {
            active = tmp.active;
          }
          obj = { color: null };
          obj2 = closure_0(closure_2[9]);
          obj.color = obj2.withSpring(active, closure_7, "animate-always");
          return obj;
        }
      }
      const tmpResult3 = index(activeIndex[8]);
      R.__closure = {
        colors: tmp5,
        pressed,
        index,
        activeIndex,
        withSpring: index(activeIndex[9]).withSpring,
        SPRING_CONFIG,
      };
      R.__workletHash = 11849209842619;
      R.__initData = __initData;
      const animatedStyle = tmpResult3.useAnimatedStyle(R);
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.item) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === index) {
          if (cResult[6] === itemCount) {
            let tmp10 = cResult[7];
          }
          let num7;
          if ("experimental_Large" === variant) {
            num7 = 1.5;
          }
          if (cResult[8] === animatedStyle) {
            if (cResult[9] === label) {
              if (cResult[10] === num7) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === icon) {
                if (cResult[13] === tmp4.label) {
                  if (cResult[14] === tmp12) {
                    let tmp15 = cResult[15];
                  }
                  if (cResult[16] === derivedStateFromSharedValue) {
                    if (cResult[17] === onPress) {
                      if (cResult[18] === onPressIn) {
                        if (cResult[19] === onPressOut) {
                          if (cResult[20] === tmp9) {
                            if (cResult[21] === tmp10) {
                              if (cResult[22] === tmp15) {
                                let tmp19 = cResult[23];
                              }
                              return tmp19;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = {
                    style: tmp9,
                    onPress,
                    onPressIn,
                    onPressOut,
                    accessibilityRole: "tab",
                    accessibilityState: derivedStateFromSharedValue,
                    accessibilityHint: tmp10,
                    children: tmp15,
                  };
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
              const obj4 = { style: tmp4.label, children: null };
              const items = [icon, tmp12];
              obj4.children = items;
              const tmp18 = closure_6(closure_4, obj4);
              cResult[12] = icon;
              cResult[13] = tmp4.label;
              cResult[14] = tmp12;
              cResult[15] = tmp18;
              tmp15 = tmp18;
            }
          }
          const obj5 = {
            animated: true,
            variant: "text-sm/semibold",
            style: animatedStyle,
            lineClamp: 1,
            maxFontSizeMultiplier: num7,
            children: label,
          };
          const tmp14 = closure_5(index(tmp2[12]).Text, obj5);
          cResult[8] = animatedStyle;
          cResult[9] = label;
          cResult[10] = num7;
          cResult[11] = tmp14;
          tmp12 = tmp14;
        }
        let formatToPlainStringResult;
        if (tmpResult4.isAndroid()) {
          const intl = index(tmp2[11]).intl;
          const obj6 = { position: index + 1, tabCount: itemCount };
          formatToPlainStringResult = intl.formatToPlainString(index(tmp2[11]).t["4EsQA1"], obj6);
        }
        cResult[5] = index;
        cResult[6] = itemCount;
        cResult[7] = formatToPlainStringResult;
        tmp10 = formatToPlainStringResult;
        tmpResult4 = index(tmp2[10]);
      }
      const items1 = [tmp4.item, style];
      cResult[2] = style;
      cResult[3] = tmp4.item;
      cResult[4] = items1;
      tmp9 = items1;
      const obj2 = {
        colors: tmp5,
        pressed,
        index,
        activeIndex,
        withSpring: index(activeIndex[9]).withSpring,
        SPRING_CONFIG,
      };
    }
  : (index) => {
      index = index.index;
      const pressed = index.pressed;
      const variant = index.variant;
      const activeIndex = index.state.activeIndex;
      ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
      const tmp = closure_8(variant);
      let tmp2 = closure_9();
      const inactive = tmp2;
      const derivedStateFromSharedValue = index(activeIndex[7]).useDerivedStateFromSharedValue(activeIndex, (arg0) => ({
        selected: arg0 === index,
      }));
      let obj = index(activeIndex[7]);
      class T {
        constructor() {
          tmp = closure_3;
          active = closure_3.inactive;
          tmp2 = pressed.get() >= 0;
          value = pressed.get();
          tmp4 = index;
          if (value === index) {
            active = tmp.pressed;
          } else if (tmp2) {
            active = tmp.inactive;
          } else if (tmp5 === tmp4) {
            active = tmp.active;
          }
          obj = { color: null };
          obj2 = closure_0(closure_2[9]);
          obj.color = obj2.withSpring(active, closure_7, "animate-always");
          return obj;
        }
      }
      const obj2 = index(activeIndex[8]);
      T.__closure = {
        colors: tmp2,
        pressed,
        index,
        activeIndex,
        withSpring: index(activeIndex[9]).withSpring,
        SPRING_CONFIG,
      };
      T.__workletHash = 14224031980152;
      T.__initData = __initData2;
      const obj4 = {
        style: null,
        onPress,
        onPressIn,
        onPressOut,
        accessibilityRole: "tab",
        accessibilityState: derivedStateFromSharedValue,
        accessibilityHint: null,
        children: null,
      };
      const items = [tmp.item, style];
      obj4.style = items;
      const animatedStyle = obj2.useAnimatedStyle(T);
      const obj3 = {
        colors: tmp2,
        pressed,
        index,
        activeIndex,
        withSpring: index(activeIndex[9]).withSpring,
        SPRING_CONFIG,
      };
      const tmp8 = inactive;
      let formatToPlainStringResult;
      if (obj5.isAndroid()) {
        const intl = tmp3(tmp4[11]).intl;
        const obj6 = { position: index + 1, tabCount: itemCount };
        formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[11]).t["4EsQA1"], obj6);
      }
      obj4.accessibilityHint = formatToPlainStringResult;
      const obj7 = { style: tmp.label, children: null };
      const items1 = [icon];
      const obj8 = {
        animated: true,
        variant: "text-sm/semibold",
        style: animatedStyle,
        lineClamp: 1,
        maxFontSizeMultiplier: null,
        children: null,
      };
      let num2;
      if ("experimental_Large" === variant) {
        num2 = 1.5;
      }
      obj8.maxFontSizeMultiplier = num2;
      obj8.children = label;
      items1[1] = closure_5(index(activeIndex[12]).Text, obj8);
      obj7.children = items1;
      obj4.children = closure_6(closure_4, obj7);
      return closure_5(tmp8, obj4);
    };
