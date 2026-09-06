// === Module 12615: TabItemCount ===

// Module 12615 (TabItemCount)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importDefaultResult from "module_4296" /* 4296 */;

const require = arg1;
function TabItemCount(arg0) {
  ({ index, activeIndex, pressed } = arg0);
  index = undefined;
  ({ count, variant } = arg0);
  let obj = index(pressed[3]);
  const sharedValue = obj.useSharedValue(0);
  index = sharedValue;
  let items = [sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    const result = index.set(1);
  }, items);
  obj1 = index(pressed[3]);
  class T {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = index(pressed[6]);
      obj[0] = obj2.withSpring(index.get(), closure_1_8);
      obj = { translateX: null };
      obj4 = index(pressed[6]);
      obj5 = index(pressed[3]);
      obj[0] = obj4.withSpring(obj5.interpolate(index.get(), [0, 1], [-10, 0]), closure_1_8);
      items = [];
      items[0] = obj;
      obj[1] = items;
      return obj;
    }
  }
  obj = { withSpring: index(pressed[6]).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG: closure_8, interpolate: index(pressed[3]).interpolate };
  T.__closure = obj;
  T.__workletHash = 16666672974627;
  T.__initData = closure_13;
  React = undefined;
  const animatedStyle = obj1.useAnimatedStyle(T);
  let tmp7 = callback3();
  if ("gradient-background" === variant) {
    tmp7 = callback4();
  }
  React = tmp7;
  const tmp = callback2();
  const fn = function c() {
    let active = inactive.inactive;
    const value = pressed.get();
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: null };
    tmp2 = pressed.get() >= 0;
    tmp4 = index;
    obj[0] = index(pressed[6]).withSpring(active, closure_1_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp7, pressed, index, activeIndex, withSpring: tmp2(tmp3[6]).withSpring, TEXT_SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 11643476765161;
  fn.__initData = closure_12;
  const animatedStyle1 = index(pressed[3]).useAnimatedStyle(fn);
  obj1 = { style: items1, children: callback(tmp2(tmp3[7]).Text, { animated: true, variant: "text-sm/medium", style: animatedStyle1, lineClamp: 1, children: count }) };
  items1 = [tmp.count, animatedStyle];
  return callback(activeIndex(pressed[3]).View, obj1);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_7 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let closure_8 = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let obj = { item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" }, count: null };
obj = { marginLeft: ThemesDefault.space.PX_8 };
obj[1] = obj;
let closure_9 = createCacheKey.createStyles(obj);
createCacheKey = { inactive: ThemesDefault.colors.TEXT_MUTED, active: ThemesDefault.colors.TEXT_BRAND, pressed: ThemesDefault.colors.TEXT_BRAND };
let closure_10 = createCacheKey.createStyleProperties(createCacheKey);
let closure_11 = createCacheKey.createStyleProperties({ inactive: ThemesDefault.colors.TEXT_MUTED, active: ThemesDefault.colors.TEXT_STRONG, pressed: ThemesDefault.colors.TEXT_STRONG });
let closure_12 = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
let closure_13 = { code: "function TabItemNativeTsx2(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
let closure_15 = { code: "function TabItemNativeTsx3(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
let obj2 = { inactive: ThemesDefault.colors.TEXT_MUTED, active: ThemesDefault.colors.TEXT_STRONG, pressed: ThemesDefault.colors.TEXT_STRONG };
let result = require("set").fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export const TabItem = function TabItem(arg0) {
  ({ count, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ label, itemCount, grow } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let activeIndex;
  pressed = undefined;
  activeIndex = state.activeIndex;
  pressed = state.setItemDimensions;
  let obj = index(pressed[3]);
  const fn = function f() {
    let obj = { accessibilityState: null };
    obj = { selected: activeIndex.get() === index };
    obj[0] = obj;
    return obj;
  };
  fn.__closure = { activeIndex, index };
  fn.__workletHash = 11618929630200;
  fn.__initData = closure_15;
  closure_3 = undefined;
  const animatedProps = obj.useAnimatedProps(fn);
  let tmp6 = callback3();
  if ("gradient-background" === variant) {
    tmp6 = callback4();
  }
  closure_3 = tmp6;
  let tmp3Result = tmp3(tmp4[3]);
  const fn2 = function c() {
    let active = inactive.inactive;
    const value = pressed.get();
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: null };
    tmp2 = pressed.get() >= 0;
    tmp4 = index;
    obj[0] = index(pressed[6]).withSpring(active, closure_1_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp6, pressed, index, activeIndex, withSpring: tmp3(tmp4[6]).withSpring, TEXT_SPRING_CONFIG: closure_7 };
  fn2.__closure = obj;
  fn2.__workletHash = 11643476765161;
  fn2.__initData = closure_12;
  const items = [callback2().item, ];
  let num = 0;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn2);
  if (grow) {
    num = 1;
  }
  obj = { style: items };
  items[1] = { flexGrow: num };
  const merged1 = Object.assign(merged);
  obj.onLayout = function onLayout(nativeEvent) {
    index(pressed[3]).runOnUI(pressed)(index, nativeEvent.nativeEvent.layout);
  };
  obj.accessibilityRole = "tab";
  tmp3Result = tmp3(tmp4[8]);
  let formatToPlainStringResult;
  if (tmp3Result.isAndroid()) {
    const intl = tmp3(tmp4[9]).intl;
    obj1 = { position: null, tabCount: null };
    obj1[0] = index + 1;
    obj1[1] = itemCount;
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[9]).t["4EsQA1"], obj1);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  obj.animatedProps = animatedProps;
  const items1 = [callback(index(pressed[7]).Text, { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, children: label }), ];
  let tmp12Result = null;
  if (null != count) {
    const obj2 = { count: null, index: null, activeIndex: null, pressed: null, variant: null };
    obj2[0] = count;
    obj2[1] = index;
    obj2[2] = activeIndex;
    obj2[3] = pressed;
    obj2[4] = variant;
    tmp12Result = callback(TabItemCount, obj2);
  }
  items1[1] = tmp12Result;
  obj.children = items1;
  return closure_5(closure_6, obj);
};