// discord_app/design/components/Modal/native/ModalFloatingAction.native.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 },
  spacer: { height: 96 },
});
const __initData = {
  code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = function ModalFloatingAction(isVisible) {
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  let sharedValue;
  let enabled;
  let obj = isVisible(sharedValue[4]);
  let num = 0;
  if (isVisible) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  enabled = enabled.useContext(tmp3(tmp4[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp2 = closure_8();
  const effect = enabled.useEffect(() => {
    let num = 0;
    if (isVisible) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp7 = floatingBackgroundColor(sharedValue[6])();
  const fn = function y() {
    let obj = {
      opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]),
      borderBottomColor: floatingBackgroundColor,
      borderBottomWidth: 16,
      transform: null,
    };
    let num = 0;
    value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    obj = { translateY: null };
    const items = [num, 1];
    obj.translateY = ReanimatedRexport.interpolate(value, items, [32, 0]);
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: tmp3(tmp4[4]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 1679390676673;
  fn.__initData = __initData;
  const animatedStyle = isVisible(sharedValue[4]).useAnimatedStyle(fn);
  obj = { style: null, pointerEvents: null, children: null };
  let items1 = [animatedStyle, tmp2.floating, { paddingBottom: tmp7.bottom }];
  obj.style = items1;
  let str = "none";
  if (isVisible) {
    str = "auto";
  }
  obj.pointerEvents = str;
  const obj1 = { colors: null, locations: null, style: null };
  const tmp10 = closure_7;
  const tmp3Result = isVisible(sharedValue[4]);
  const tmp6Result = floatingBackgroundColor(sharedValue[9]);
  const obj6 = floatingBackgroundColor(sharedValue[10])(floatingBackgroundColor);
  const items2 = [
    floatingBackgroundColor(sharedValue[10])(floatingBackgroundColor).alpha(0).hex(),
    floatingBackgroundColor,
  ];
  obj1.colors = items2;
  obj1.locations = [0, 0.5];
  obj1.style = absoluteFill.absoluteFill;
  const items3 = [closure_6(tmp6Result, obj1)];
  let obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.variant = "primary";
  items3[1] = closure_6(isVisible(sharedValue[11]).ModalActionButton, obj2);
  obj.children = items3;
  return tmp10(floatingBackgroundColor(sharedValue[4]).View, obj);
};
export const ModalFloatingActionSpacer = function ModalFloatingActionSpacer() {
  return timestampProducer(hasOwnProperty, { style: closure_8().spacer });
};
