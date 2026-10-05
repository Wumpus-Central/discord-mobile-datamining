// === Module 12283: TabItem ===

// Module 12283 (TabItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, obj1;

let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["label", "count", "index", "itemCount", "state", "pressed", "grow", "variant"];
const Pressable = react_native.Pressable;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
const TEXT_SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
const COUNT_SPRING_CONFIG = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let createStyles = createStyles_mod;
let obj = { item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" }, count: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_BRAND, pressed: nativeDefault.colors.TEXT_BRAND };
let closure_12 = createStyles.createStyleProperties(obj3);
createStyles = createStyles_mod;
let obj4 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_STRONG, pressed: nativeDefault.colors.TEXT_STRONG };
let closure_13 = createStyles.createStyleProperties(obj4);
const __initData = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else{if(isPressActive){color=colors.inactive;}else{if(isActive){color=colors.active;}}}return{color:withSpring(color,TEXT_SPRING_CONFIG,\"animate-always\")};}" };
const __initData2 = { code: "function TabItemNativeTsx2(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  const variant = index.variant;
  let tmp = closure_12();
  if ("overlay" === variant) {
    tmp = closure_13();
  }
  const inactive = tmp;
  let obj = index(pressed[4]);
  const fn = function n() {
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
    const obj = { color: obj2.withSpring(active, TEXT_SPRING_CONFIG, "animate-always") };
    obj2 = spring;
    return obj;
  };
  let obj2 = { colors: tmp, pressed, index, activeIndex, withSpring: index(pressed[8]).withSpring, TEXT_SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 3501288786345;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : ((index) => {
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  let inactive;
  const variant = index.variant;
  let tmp = closure_12();
  if ("overlay" === variant) {
    tmp = closure_13();
  }
  inactive = tmp;
  let obj = index(pressed[4]);
  const fn = function c() {
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
    const obj = { color: obj2.withSpring(active, TEXT_SPRING_CONFIG, "animate-always") };
    obj2 = spring;
    return obj;
  };
  let obj2 = { colors: tmp, pressed, index, activeIndex, withSpring: index(pressed[8]).withSpring, TEXT_SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 376048369930;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
const __initData3 = { code: "function TabItemNativeTsx3(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
const __initData4 = { code: "function TabItemNativeTsx4(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activeIndex;
  let count;
  let index;
  let pressed;
  let sharedValue;
  let tmp6;
  let tmp7;
  let variant;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(17);
  ({ count, index, activeIndex, pressed, variant } = arg0);
  const tmp4 = closure_11();
  let obj2 = sharedValue(4612);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      const result = sharedValue.set(1);
    };
    let items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
  const fn2 = function w() {
    let items;
    let obj2;
    let obj4;
    let withSpring;
    const obj = { opacity: obj2.withSpring(sharedValue.get(), COUNT_SPRING_CONFIG), transform: items };
    obj2 = spring;
    const obj3 = { translateX: withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [-10, 0]), COUNT_SPRING_CONFIG) };
    withSpring = spring.withSpring;
    spring;
    items = [obj3];
    obj4 = ReanimatedRexport2;
    return obj;
  };
  const tmpResult = tmp(4612);
  let obj3 = { withSpring: tmp(5597).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG, interpolate: tmp(4612).interpolate };
  fn2.__closure = obj3;
  fn2.__workletHash = 5074862072194;
  fn2.__initData = __initData3;
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[3] === activeIndex) {
    if (cResult[4] === index) {
      if (cResult[5] === pressed) {
        let tmp10;
        if (cResult[6] === variant) {
          tmp10 = cResult[7];
        }
        const tmp12 = closure_16(tmp10);
        if (cResult[8] === animatedStyle) {
          let tmp13;
          if (cResult[9] === tmp4.count) {
            tmp13 = cResult[10];
          }
          if (cResult[11] === tmp12) {
            let tmp14;
            if (cResult[12] === count) {
              tmp14 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              let tmp17;
              if (cResult[15] === tmp14) {
                tmp17 = cResult[16];
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
          const tmp16 = closure_6(tmp(4886).Text, obj5);
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
}) : ((arg0) => {
  let activeIndex;
  let count;
  let index;
  let items1;
  let pressed;
  let tmp5;
  let variant;
  let sharedValue;
  ({ count, index, activeIndex, pressed, variant } = arg0);
  const tmp = closure_11();
  let obj = sharedValue(4612);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj2 = sharedValue(4612);
  class I {
    constructor() {
      let items;
      let obj2;
      let obj4;
      let withSpring;
      const obj = { opacity: obj2.withSpring(sharedValue.get(), COUNT_SPRING_CONFIG), transform: items };
      obj2 = spring;
      const obj3 = { translateX: withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [-10, 0]), COUNT_SPRING_CONFIG) };
      withSpring = spring.withSpring;
      spring;
      items = [obj3];
      obj4 = ReanimatedRexport2;
      return obj;
    }
  }
  let obj3 = { withSpring: sharedValue(5597).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG, interpolate: sharedValue(4612).interpolate };
  I.__closure = obj3;
  I.__workletHash = 8384757524453;
  I.__initData = __initData4;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj4 = { style: items1, children: closure_6(sharedValue(4886).Text, { animated: true, variant: "text-sm/medium", style: tmp5, lineClamp: 1, children: count }) };
  items1 = [tmp.count, animatedStyle];
  tmp5 = closure_16({ index, activeIndex, pressed, variant });
  const View = ReanimatedRexport.View;
  return closure_6(View, obj4);
});
const __initData5 = { code: "function TabItemNativeTsx5(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
const __initData6 = { code: "function TabItemNativeTsx6(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let count;
  let grow;
  let index;
  let itemCount;
  let label;
  let pressed;
  let setItemDimensions;
  let state;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp9;
  let variant;
  let obj = require("react");
  const cResult = obj.c(43);
  const tmp = _require;
  const tmp2 = setItemDimensions;
  if (cResult[0] !== arg0) {
    ({ label, count, index } = arg0);
    _require = index;
    ({ itemCount, state, pressed, grow, variant } = arg0);
    cResult[0] = arg0;
    const tmp15 = _objectWithoutProperties(arg0, closure_3);
    class P {
      constructor() {
        obj = { accessibilityState: null };
        obj1 = { selected: activeIndex.get() === closure_0 };
        obj.accessibilityState = obj1;
        return obj;
      }
    }
    cResult[2] = grow;
    cResult[3] = index;
    cResult[4] = itemCount;
    cResult[5] = label;
    cResult[6] = pressed;
    cResult[7] = tmp15;
    cResult[8] = state;
    cResult[9] = variant;
    tmp12 = variant;
    tmp11 = state;
    tmp9 = pressed;
    tmp5 = grow;
  } else {
    tmp5 = cResult[2];
    _require = cResult[3];
    tmp9 = cResult[6];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
  }
  const activeIndex = tmp11.activeIndex;
  setItemDimensions = tmp11.setItemDimensions;
  const tmp16 = closure_11();
  const tmpResult = tmp(tmp2[4]);
  class P {
    constructor() {
      obj = { accessibilityState: null };
      obj1 = { selected: activeIndex.get() === closure_0 };
      obj.accessibilityState = obj1;
      return obj;
    }
  }
  P.__closure = { activeIndex, index };
  P.__workletHash = 4443106768702;
  P.__initData = __initData5;
  const animatedProps = tmpResult.useAnimatedProps(P);
  if (cResult[10] === activeIndex) {
    if (cResult[11] === index) {
      if (cResult[12] === tmp9) {
        let tmp18;
        if (cResult[13] === tmp12) {
          tmp18 = cResult[14];
        }
        closure_16(tmp18);
        if (cResult[15] === index) {
          let tmp22;
          let num14 = 0;
          if (tmp5) {
            num14 = 1;
          }
          if (cResult[18] !== num14) {
            const obj2 = { flexGrow: num14 };
            cResult[18] = num14;
            class X {
              constructor(arg0) {
                obj = closure_0(closure_2[4]);
                tmp = obj.runOnUI(setItemDimensions)(closure_0, arg0.nativeEvent.layout);
                return;
              }
            }
            cResult[19] = obj2;
            tmp22 = obj2;
          } else {
            tmp22 = cResult[19];
          }
          class X {
            constructor(arg0) {
              obj = closure_0(closure_2[4]);
              tmp = obj.runOnUI(setItemDimensions)(closure_0, arg0.nativeEvent.layout);
              return;
            }
          }
          const items = [tmp16.item, tmp22];
          cResult[20] = tmp16.item;
          cResult[21] = tmp22;
          cResult[22] = items;
        }
        class X {
          constructor(arg0) {
            obj = closure_0(closure_2[4]);
            tmp = obj.runOnUI(setItemDimensions)(closure_0, arg0.nativeEvent.layout);
            return;
          }
        }
        cResult[15] = index;
        cResult[16] = setItemDimensions;
        cResult[17] = X;
      }
    }
  }
  const obj3 = { index, activeIndex, pressed: tmp9, variant: tmp12 };
  cResult[10] = activeIndex;
  cResult[11] = index;
  cResult[12] = tmp9;
  cResult[13] = tmp12;
  cResult[14] = obj3;
  tmp18 = obj3;
}) : ((arg0) => {
  let count;
  let formatToPlainStringResult;
  let grow;
  let index;
  let itemCount;
  let items1;
  let label;
  let pressed;
  let state;
  let variant;
  ({ count, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ label, itemCount, grow } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, count: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 }));
  const activeIndex = state.activeIndex;
  const setItemDimensions = state.setItemDimensions;
  const tmp2 = closure_11();
  let obj = index(setItemDimensions[4]);
  class T {
    constructor() {
      const obj = { accessibilityState: { selected: activeIndex.get() === index } };
      ({ selected: activeIndex.get() === index });
      return obj;
    }
  }
  T.__closure = { activeIndex, index };
  T.__workletHash = 16424800592413;
  T.__initData = __initData6;
  const animatedProps = obj.useAnimatedProps(T);
  const items = [tmp2.item, ];
  let num = 0;
  const tmp6 = closure_16({ index, activeIndex, pressed, variant });
  if (grow) {
    num = 1;
  }
  const obj2 = {
    style: items,
    onLayout(nativeEvent) {
      const obj = ReanimatedRexport2;
      obj.runOnUI(setItemDimensions)(index, nativeEvent.nativeEvent.layout);
    },
    accessibilityRole: "tab",
    accessibilityHint: formatToPlainStringResult,
    animatedProps,
    children: items1
  };
  items[1] = { flexGrow: num };
  const merged1 = Object.assign(merged);
  formatToPlainStringResult = undefined;
  const tmp3Result = index(setItemDimensions[11]);
  if (tmp3Result.isAndroid()) {
    const intl = index(tmp4[12]).intl;
    const obj3 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(index(tmp4[12]).t["4EsQA1"], obj3);
  }
  items1 = [closure_6(index(setItemDimensions[10]).Text, { animated: true, variant: "text-sm/semibold", style: tmp6, lineClamp: 1, children: label }), ];
  let tmp11Result = null;
  if (null != count) {
    const obj4 = { count, index, activeIndex, pressed, variant };
    tmp11Result = closure_6(closure_19, obj4);
  }
  items1[1] = tmp11Result;
  return closure_7(closure_8, obj2);
});
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export const TabItem = tmp3;