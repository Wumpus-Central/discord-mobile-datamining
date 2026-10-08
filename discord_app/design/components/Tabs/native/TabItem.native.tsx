// discord_app/design/components/Tabs/native/TabItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_3 = ["label", "count", "index", "itemCount", "state", "pressed", "grow", "variant"];
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const TEXT_SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
const COUNT_SPRING_CONFIG = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let createStyles = fn(5090);
let obj = {
  item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" },
  count: { marginLeft: nativeDefault.space.PX_8 },
};
let closure_11 = createStyles.createStyles(obj);
createStyles = fn(5090);
let obj3 = { marginLeft: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_BRAND,
  pressed: nativeDefault.colors.TEXT_BRAND,
});
createStyles = fn(5090);
let obj4 = {
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_BRAND,
  pressed: nativeDefault.colors.TEXT_BRAND,
};
let closure_13 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_STRONG,
  pressed: nativeDefault.colors.TEXT_STRONG,
});
const __initData = {
  code: 'function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else{if(isPressActive){color=colors.inactive;}else{if(isActive){color=colors.active;}}}return{color:withSpring(color,TEXT_SPRING_CONFIG,"animate-always")};}',
};
const __initData2 = {
  code: "function TabItemNativeTsx2(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}",
};
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnimatedTextStyle(index) {
      index = index.index;
      const activeIndex = index.activeIndex;
      const pressed = index.pressed;
      let tmp = closure_12();
      if ("overlay" === index.variant) {
        tmp = closure_13();
      }
      const inactive = tmp;
      const fn = function n() {
        let active = inactive.inactive;
        value = pressed.get();
        if (value === index) {
          active = inactive.pressed;
        } else if (tmp2) {
          active = inactive.inactive;
        } else if (tmp5 === index) {
          active = inactive.active;
        }
        const obj = { color: null };
        tmp2 = pressed.get() >= 0;
        obj.color = spring.withSpring(active, closure_9, "animate-always");
        return obj;
      };
      let obj = index(pressed[4]);
      fn.__closure = {
        colors: tmp,
        pressed,
        index,
        activeIndex,
        withSpring: index(pressed[8]).withSpring,
        TEXT_SPRING_CONFIG,
      };
      fn.__workletHash = 3501288786345;
      fn.__initData = __initData;
      return obj.useAnimatedStyle(fn);
    }
  : function useAnimatedTextStyle(index) {
      index = index.index;
      const activeIndex = index.activeIndex;
      const pressed = index.pressed;
      let inactive;
      let tmp = closure_12();
      if ("overlay" === index.variant) {
        tmp = closure_13();
      }
      inactive = tmp;
      const fn = function c() {
        let active = inactive.inactive;
        value = pressed.get();
        if (value === index) {
          active = inactive.pressed;
        } else if (tmp2) {
          active = inactive.inactive;
        } else if (tmp5 === index) {
          active = inactive.active;
        }
        const obj = { color: null };
        tmp2 = pressed.get() >= 0;
        obj.color = spring.withSpring(active, closure_9, "animate-always");
        return obj;
      };
      let obj = index(pressed[4]);
      fn.__closure = {
        colors: tmp,
        pressed,
        index,
        activeIndex,
        withSpring: index(pressed[8]).withSpring,
        TEXT_SPRING_CONFIG,
      };
      fn.__workletHash = 376048369930;
      fn.__initData = __initData2;
      return obj.useAnimatedStyle(fn);
    };
const __initData3 = {
  code: "function TabItemNativeTsx3(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}",
};
const __initData4 = {
  code: "function TabItemNativeTsx4(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}",
};
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TabItemCount(arg0) {
      const cResult = sharedValue(576).c(17);
      ({ count, index, activeIndex, pressed, variant } = arg0);
      const tmp4 = closure_11();
      let obj = sharedValue(576);
      sharedValue = sharedValue(4810).useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const fn = function n() {
          const result = sharedValue.set(1);
        };
        let items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
      let obj2 = sharedValue(4810);
      const fn2 = function y() {
        const obj = { opacity: spring.withSpring(sharedValue.get(), closure_10), transform: null };
        const obj3 = { translateX: null };
        const obj4 = spring;
        obj3.translateX = obj4.withSpring(
          ReanimatedRexport2.interpolate(sharedValue.get(), [0, 1], [-10, 0]),
          closure_10,
        );
        const items = [obj3];
        obj.transform = items;
        return obj;
      };
      const tmpResult = sharedValue(4810);
      fn2.__closure = {
        withSpring: sharedValue(5374).withSpring,
        countAnimationState: sharedValue,
        COUNT_SPRING_CONFIG,
        interpolate: sharedValue(4810).interpolate,
      };
      fn2.__workletHash = 5074862072194;
      fn2.__initData = __initData3;
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[3] === activeIndex) {
        if (cResult[4] === index) {
          if (cResult[5] === pressed) {
            if (cResult[6] === variant) {
              let tmp10 = cResult[7];
            }
            const tmp12 = closure_16(tmp10);
            if (cResult[8] === animatedStyle) {
              if (cResult[9] === tmp4.count) {
                let tmp13 = cResult[10];
              }
              if (cResult[11] === tmp12) {
                if (cResult[12] === count) {
                  let tmp14 = cResult[13];
                }
                if (cResult[14] === tmp13) {
                  if (cResult[15] === tmp14) {
                    let tmp17 = cResult[16];
                  }
                  return tmp17;
                }
                let obj4 = { style: tmp13, children: tmp14 };
                const tmp20 = closure_6(ReanimatedRexport.View, obj4);
                cResult[14] = tmp13;
                cResult[15] = tmp14;
                cResult[16] = tmp20;
                tmp17 = tmp20;
              }
              const obj5 = { animated: true, variant: "text-sm/medium", style: tmp12, lineClamp: 1, children: count };
              const tmp16 = closure_6(tmp(5086).Text, obj5);
              cResult[11] = tmp12;
              cResult[12] = count;
              cResult[13] = tmp16;
              tmp14 = tmp16;
            }
            const items1 = [tmp4.count, animatedStyle];
            cResult[8] = animatedStyle;
            cResult[9] = tmp4.count;
            cResult[10] = items1;
            tmp13 = items1;
          }
        }
      }
      const obj6 = { index, activeIndex, pressed, variant };
      cResult[3] = activeIndex;
      cResult[4] = index;
      cResult[5] = pressed;
      cResult[6] = variant;
      cResult[7] = obj6;
      tmp10 = obj6;
      let obj3 = {
        withSpring: sharedValue(5374).withSpring,
        countAnimationState: sharedValue,
        COUNT_SPRING_CONFIG,
        interpolate: sharedValue(4810).interpolate,
      };
    }
  : function TabItemCount(arg0) {
      let sharedValue;
      ({ count, index, activeIndex, pressed, variant } = arg0);
      const tmp = closure_11();
      sharedValue = sharedValue(4810).useSharedValue(0);
      let items = [sharedValue];
      const layoutEffect = noop.useLayoutEffect(() => {
        const result = sharedValue.set(1);
      }, items);
      let obj = sharedValue(4810);
      class I {
        constructor() {
          obj = { opacity: null, transform: null };
          obj2 = closure_0(closure_2[8]);
          obj.opacity = obj2.withSpring(closure_0.get(), closure_10);
          obj1 = { translateX: null };
          obj4 = closure_0(closure_2[8]);
          obj5 = closure_0(closure_2[4]);
          obj1.translateX = obj4.withSpring(obj5.interpolate(closure_0.get(), [0, 1], [-10, 0]), closure_10);
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      let obj2 = sharedValue(4810);
      I.__closure = {
        withSpring: sharedValue(5374).withSpring,
        countAnimationState: sharedValue,
        COUNT_SPRING_CONFIG,
        interpolate: sharedValue(4810).interpolate,
      };
      I.__workletHash = 8384757524453;
      I.__initData = __initData4;
      const animatedStyle = obj2.useAnimatedStyle(I);
      let obj3 = {
        withSpring: sharedValue(5374).withSpring,
        countAnimationState: sharedValue,
        COUNT_SPRING_CONFIG,
        interpolate: sharedValue(4810).interpolate,
      };
      let obj4 = {
        style: null,
        children: closure_6(sharedValue(5086).Text, {
          animated: true,
          variant: "text-sm/medium",
          style: closure_16({ index, activeIndex, pressed, variant }),
          lineClamp: 1,
          children: count,
        }),
      };
      const items1 = [tmp.count, animatedStyle];
      obj4.style = items1;
      return closure_6(ReanimatedRexport.View, obj4);
    };
const __initData5 = {
  code: "function TabItemNativeTsx5(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}",
};
const __initData6 = {
  code: "function TabItemNativeTsx6(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}",
};
ReactCompilerGating = fn(558);
let obj6 = {
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_STRONG,
  pressed: nativeDefault.colors.TEXT_STRONG,
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export const TabItem = ReactCompilerGating.isReactCompilerEnabled()
  ? function TabItem(arg0) {
      const cResult = require("c").c(43);
      if (cResult[0] !== arg0) {
        ({ label, count, index } = arg0);
        _require = index;
        ({ itemCount, state, pressed, grow, variant } = arg0);
        const tmp15 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = count;
        cResult[2] = grow;
        cResult[3] = index;
        cResult[4] = itemCount;
        cResult[5] = label;
        cResult[6] = pressed;
        cResult[7] = tmp15;
        cResult[8] = state;
        cResult[9] = variant;
        let tmp12 = variant;
        let tmp11 = state;
        let tmp10 = tmp15;
        let tmp9 = pressed;
        let tmp8 = label;
        let tmp7 = itemCount;
        let tmp5 = grow;
        let tmp4 = count;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
        tmp11 = cResult[8];
        tmp12 = cResult[9];
      }
      const activeIndex = tmp11.activeIndex;
      setItemDimensions = tmp11.setItemDimensions;
      const tmp16 = closure_11();
      let obj = require("c");
      const fn = function b() {
        const obj = { accessibilityState: { selected: activeIndex.get() === closure_0 } };
        return obj;
      };
      fn.__closure = { activeIndex, index };
      fn.__workletHash = 4443106768702;
      fn.__initData = __initData5;
      const animatedProps = require("ReanimatedRexport").useAnimatedProps(fn);
      if (cResult[10] === activeIndex) {
        if (cResult[11] === index) {
          if (cResult[12] === tmp9) {
            if (cResult[13] === tmp12) {
              let tmp18 = cResult[14];
            }
            const tmp20 = closure_16(tmp18);
            if (cResult[15] === index) {
              if (cResult[16] === setItemDimensions) {
                let tmp21 = cResult[17];
              }
              let num14 = 0;
              if (tmp5) {
                num14 = 1;
              }
              if (cResult[18] !== num14) {
                const obj2 = { flexGrow: num14 };
                cResult[18] = num14;
                cResult[19] = obj2;
                let tmp22 = obj2;
              } else {
                tmp22 = cResult[19];
              }
              if (cResult[20] === tmp16.item) {
                if (cResult[21] === tmp22) {
                  let tmp23 = cResult[22];
                }
                if (cResult[23] === index) {
                  if (cResult[24] === tmp7) {
                    let tmp24 = cResult[25];
                  }
                  if (cResult[26] === tmp20) {
                    if (cResult[27] === tmp8) {
                      let tmp26 = cResult[28];
                    }
                    if (cResult[29] === activeIndex) {
                      if (cResult[30] === tmp4) {
                        if (cResult[31] === index) {
                          if (cResult[32] === tmp9) {
                            if (cResult[33] === tmp12) {
                              let tmp29 = cResult[34];
                            }
                            if (cResult[35] === animatedProps) {
                              if (cResult[36] === tmp21) {
                                if (cResult[37] === tmp10) {
                                  if (cResult[38] === tmp23) {
                                    if (cResult[39] === tmp24) {
                                      if (cResult[40] === tmp26) {
                                        if (cResult[41] === tmp29) {
                                          let tmp33 = cResult[42];
                                        }
                                        return tmp33;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj3 = { style: tmp23 };
                            const merged = Object.assign(tmp10);
                            obj3.onLayout = tmp21;
                            obj3.accessibilityRole = "tab";
                            obj3.accessibilityHint = tmp24;
                            obj3.animatedProps = animatedProps;
                            const items = [tmp26, tmp29];
                            obj3.children = items;
                            const tmp39 = closure_7(closure_8, obj3);
                            cResult[35] = animatedProps;
                            cResult[36] = tmp21;
                            cResult[37] = tmp10;
                            cResult[38] = tmp23;
                            cResult[39] = tmp24;
                            cResult[40] = tmp26;
                            cResult[41] = tmp29;
                            cResult[42] = tmp39;
                            tmp33 = tmp39;
                          }
                        }
                      }
                    }
                    let tmp30 = null;
                    if (null != tmp4) {
                      const obj4 = { count: tmp4, index, activeIndex, pressed: tmp9, variant: tmp12 };
                      tmp30 = closure_6(closure_19, obj4);
                    }
                    cResult[29] = activeIndex;
                    cResult[30] = tmp4;
                    cResult[31] = index;
                    cResult[32] = tmp9;
                    cResult[33] = tmp12;
                    cResult[34] = tmp30;
                    tmp29 = tmp30;
                  }
                  const obj5 = {
                    animated: true,
                    variant: "text-sm/semibold",
                    style: tmp20,
                    lineClamp: 1,
                    children: tmp8,
                  };
                  const tmp28 = closure_6(tmp(tmp2[10]).Text, obj5);
                  cResult[26] = tmp20;
                  cResult[27] = tmp8;
                  cResult[28] = tmp28;
                  tmp26 = tmp28;
                }
                let formatToPlainStringResult;
                if (tmpResult2.isAndroid()) {
                  const intl = tmp(tmp2[12]).intl;
                  const obj6 = { position: index + 1, tabCount: tmp7 };
                  formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[12]).t["4EsQA1"], obj6);
                }
                cResult[23] = index;
                cResult[24] = tmp7;
                cResult[25] = formatToPlainStringResult;
                tmp24 = formatToPlainStringResult;
                tmpResult2 = tmp(tmp2[11]);
              }
              const items1 = [tmp16.item, tmp22];
              cResult[20] = tmp16.item;
              cResult[21] = tmp22;
              cResult[22] = items1;
              tmp23 = items1;
            }
            function handleLayout(nativeEvent) {
              ReanimatedRexport2.runOnUI(setItemDimensions)(closure_0, nativeEvent.nativeEvent.layout);
            }
            cResult[15] = index;
            cResult[16] = setItemDimensions;
            cResult[17] = handleLayout;
            tmp21 = handleLayout;
          }
        }
      }
      const obj7 = { index, activeIndex, pressed: tmp9, variant: tmp12 };
      cResult[10] = activeIndex;
      cResult[11] = index;
      cResult[12] = tmp9;
      cResult[13] = tmp12;
      cResult[14] = obj7;
      tmp18 = obj7;
      const tmpResult = require("ReanimatedRexport");
    }
  : function TabItem(arg0) {
      ({ count, index } = arg0);
      ({ state, pressed, variant } = arg0);
      ({ label, itemCount, grow } = arg0);
      const merged = Object.assign(
        arg0,
        Object.assign({ label: 0, count: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 }),
      );
      const activeIndex = state.activeIndex;
      const setItemDimensions = state.setItemDimensions;
      const tmp2 = closure_11();
      class T {
        constructor() {
          obj = { accessibilityState: null };
          obj1 = { selected: activeIndex.get() === index };
          obj.accessibilityState = obj1;
          return obj;
        }
      }
      T.__closure = { activeIndex, index };
      T.__workletHash = 16424800592413;
      T.__initData = __initData6;
      const animatedProps = index(setItemDimensions[4]).useAnimatedProps(T);
      const items = [tmp2.item];
      let num = 0;
      let obj = index(setItemDimensions[4]);
      if (grow) {
        num = 1;
      }
      const obj2 = { style: items };
      items[1] = { flexGrow: num };
      const merged1 = Object.assign(merged);
      obj2.onLayout = function handleLayout(nativeEvent) {
        ReanimatedRexport2.runOnUI(setItemDimensions)(index, nativeEvent.nativeEvent.layout);
      };
      obj2.accessibilityRole = "tab";
      const tmp6 = closure_16({ index, activeIndex, pressed, variant });
      let formatToPlainStringResult;
      if (tmp3Result.isAndroid()) {
        const intl = index(tmp4[12]).intl;
        const obj3 = { position: index + 1, tabCount: itemCount };
        formatToPlainStringResult = intl.formatToPlainString(index(tmp4[12]).t["4EsQA1"], obj3);
      }
      obj2.accessibilityHint = formatToPlainStringResult;
      obj2.animatedProps = animatedProps;
      const items1 = [
        closure_6(index(setItemDimensions[10]).Text, {
          animated: true,
          variant: "text-sm/semibold",
          style: tmp6,
          lineClamp: 1,
          children: label,
        }),
      ];
      let tmp11Result = null;
      if (null != count) {
        const obj4 = { count, index, activeIndex, pressed, variant };
        tmp11Result = closure_6(closure_19, obj4);
      }
      items1[1] = tmp11Result;
      obj2.children = items1;
      return closure_7(closure_8, obj2);
    };
