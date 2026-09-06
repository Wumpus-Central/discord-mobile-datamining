// === Module 12615: TabItem ===

// Module 12615 (TabItem)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function TabItemCount(arg0) {
  ({ index, activeIndex, pressed } = arg0);
  let sharedValue;
  ({ count, variant } = arg0);
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj1 = sharedValue(4296);
  class T {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = closure_0(closure_2[6]);
      obj.opacity = obj2.withSpring(closure_0.get(), closure_8);
      obj = { translateX: null };
      obj4 = closure_0(closure_2[6]);
      obj5 = closure_0(closure_2[3]);
      obj.translateX = obj4.withSpring(obj5.interpolate(closure_0.get(), [0, 1], [-10, 0]), closure_8);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withSpring: sharedValue(4974).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG, interpolate: sharedValue(4296).interpolate };
  T.__closure = obj;
  T.__workletHash = 16666672974627;
  T.__initData = __initData2;
  closure_129_0 = index;
  closure_129_1 = activeIndex;
  closure_129_2 = pressed;
  closure_129_3 = undefined;
  const animatedStyle = obj1.useAnimatedStyle(T);
  let tmp7 = closure_10();
  if ("gradient-background" === variant) {
    tmp7 = closure_11();
  }
  closure_129_3 = tmp7;
  const tmp = closure_9();
  const fn = function c() {
    let active = inactive.inactive;
    value = setItemDimensions.get();
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: null };
    tmp2 = setItemDimensions.get() >= 0;
    tmp4 = index;
    obj.color = spring.withSpring(active, closure_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp7, pressed, index, activeIndex, withSpring: tmp2(4974).withSpring, TEXT_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 11643476765161;
  fn.__initData = __initData;
  const animatedStyle1 = sharedValue(4296).useAnimatedStyle(fn);
  obj1 = { style: null, children: closure_4(tmp2(4556).Text, { animated: true, variant: "text-sm/medium", style: animatedStyle1, lineClamp: 1, children: count }) };
  const items1 = [tmp.count, animatedStyle];
  obj1.style = items1;
  return closure_4(ReanimatedRexport.View, obj1);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const TEXT_SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
const COUNT_SPRING_CONFIG = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let createStyles = fn(4560);
let obj = { item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" }, count: null };
obj = { marginLeft: nativeDefault.space.PX_8 };
obj.count = obj;
let closure_9 = createStyles.createStyles(obj);
fn(4560);
createStyles = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_BRAND, pressed: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles.createStyleProperties(createStyles);
createStyles = fn(4560);
let closure_11 = createStyles.createStyleProperties({ inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_STRONG, pressed: nativeDefault.colors.TEXT_STRONG });
const __initData = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
const __initData2 = { code: "function TabItemNativeTsx2(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
const __initData3 = { code: "function TabItemNativeTsx3(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export const TabItem = function TabItem(arg0) {
  ({ count, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ label, itemCount, grow } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, count: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 }));
  const activeIndex = state.activeIndex;
  const setItemDimensions = state.setItemDimensions;
  let obj = index(setItemDimensions[3]);
  const fn = function f() {
    let obj = { accessibilityState: null };
    obj = { selected: activeIndex.get() === index };
    obj.accessibilityState = obj;
    return obj;
  };
  fn.__closure = { activeIndex, index };
  fn.__workletHash = 11618929630200;
  fn.__initData = __initData3;
  closure_129_0 = index;
  closure_129_1 = activeIndex;
  closure_129_2 = pressed;
  closure_129_3 = undefined;
  const animatedProps = obj.useAnimatedProps(fn);
  let tmp6 = closure_10();
  if ("gradient-background" === variant) {
    tmp6 = closure_11();
  }
  closure_129_3 = tmp6;
  let tmp3Result = tmp3(tmp4[3]);
  const fn2 = function c() {
    let active = inactive.inactive;
    value = setItemDimensions.get();
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: null };
    tmp2 = setItemDimensions.get() >= 0;
    tmp4 = index;
    obj.color = spring.withSpring(active, closure_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp6, pressed, index, activeIndex, withSpring: tmp3(tmp4[6]).withSpring, TEXT_SPRING_CONFIG };
  fn2.__closure = obj;
  fn2.__workletHash = 11643476765161;
  fn2.__initData = __initData;
  const items = [closure_9().item, ];
  let num = 0;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn2);
  if (grow) {
    num = 1;
  }
  obj = { style: items };
  items[1] = { flexGrow: num };
  const merged1 = Object.assign(merged);
  obj.onLayout = function onLayout(nativeEvent) {
    ReanimatedRexport2.runOnUI(setItemDimensions)(index, nativeEvent.nativeEvent.layout);
  };
  obj.accessibilityRole = "tab";
  tmp3Result = tmp3(tmp4[8]);
  let formatToPlainStringResult;
  if (tmp3Result.isAndroid()) {
    const intl = tmp3(tmp4[9]).intl;
    const obj1 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[9]).t["4EsQA1"], obj1);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  obj.animatedProps = animatedProps;
  const items1 = [closure_4(index(setItemDimensions[7]).Text, { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, children: label }), ];
  let tmp12Result = null;
  if (null != count) {
    const obj2 = { count, index, activeIndex, pressed, variant };
    tmp12Result = closure_4(TabItemCount, obj2);
  }
  items1[1] = tmp12Result;
  obj.children = items1;
  return closure_5(closure_6, obj);
};