// _runtime/05626_Animated.js
import get_ActivityIndicator from "get ActivityIndicator";

let Animated;
let Platform;
let c3;
let obj1;
({ Animated, Platform } = get_ActivityIndicator);
({ add: obj1, multiply: c3 } = Animated);

export const forHorizontalIOS = function forHorizontalIOS(layouts) {
  let current;
  let inverted;
  let next;
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  let obj = { translateX: callback(progress.interpolate({ inputRange: [0, 1], outputRange: items, extrapolate: "clamp" }), inverted) };
  progress = current.progress;
  items = [screen.width, ];
  let num = 0;
  items[1] = 0;
  const items1 = [obj, ];
  if (next) {
    const progress2 = next.progress;
    obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    const items2 = [0, -0.3 * screen.width];
    obj[1] = items2;
    num = tmp(progress2.interpolate(obj), inverted);
  }
  obj = { cardStyle: { transform: items1 }, overlayStyle: null, shadowStyle: null };
  items1[1] = { translateX: num };
  const progress3 = current.progress;
  obj[1] = { opacity: progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.07], extrapolate: "clamp" }) };
  const obj1 = { opacity: progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.07], extrapolate: "clamp" }) };
  tmp = callback;
  const progress4 = current.progress;
  obj[2] = { shadowOpacity: progress4.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3], extrapolate: "clamp" }) };
  return obj;
};
export const forVerticalIOS = function forVerticalIOS(inverted) {
  let obj = { cardStyle: null };
  obj = { transform: null };
  obj = { translateY: callback(progress.interpolate({ inputRange: [0, 1], outputRange: items, extrapolate: "clamp" }), inverted.inverted) };
  progress = inverted.current.progress;
  items = [inverted.layouts.screen.height, 0];
  const items1 = [obj];
  obj[0] = items1;
  obj[0] = obj;
  return obj;
};
export const forModalPresentationIOS = function forModalPresentationIOS(next) {
  let current;
  let index;
  let insets;
  let inverted;
  next = next.next;
  const screen = next.layouts.screen;
  let num = 10;
  let num2 = 10;
  ({ index, current, inverted, insets } = next);
  if (screen.width > screen.height) {
    num2 = 0;
  }
  const top = insets.top;
  const progress = current.progress;
  const result = screen.height / screen.width;
  let num3 = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num3 = progress2.interpolate(obj);
  }
  const tmp3Result = closure_2(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num3);
  obj = { inputRange: [0, 1, 2], outputRange: null };
  const items = [screen.height, , ];
  let num4 = 0;
  if (0 !== index) {
    num4 = num2;
  }
  items[1] = num4;
  let num5 = 0;
  if (0 === index) {
    num5 = top;
  }
  items[2] = num5 - num2 * result;
  obj[1] = items;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const tmp3 = closure_2;
  const tmp6 = closure_3;
  let num6 = 1;
  const opacity = tmp3Result.interpolate({ inputRange: [0, 1, 1.0001, 2], outputRange: [0, 0.3, 1, 1] });
  if (screen.width <= screen.height) {
    obj = { inputRange: null, outputRange: null };
    obj[0] = [0, 1, 2];
    let num7 = 1;
    if (screen.width) {
      num7 = 1 - 2 * num2 / screen.width;
    }
    const items1 = [1, 1, num7];
    obj[1] = items1;
    num6 = tmp3Result.interpolate(obj);
  }
  let num9 = 0;
  if (screen.width <= screen.height) {
    if (tmp5) {
      const obj1 = { inputRange: null, outputRange: null };
      obj1[0] = [0, 1, 1.0001, 2];
      obj1[1] = [0, 0, 0, 10];
      num = tmp3Result.interpolate(obj1);
    }
    num9 = num;
  }
  const obj2 = { overflow: "hidden", borderTopLeftRadius: num9, borderTopRightRadius: num9, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, marginTop: null, marginBottom: null, transform: null };
  let num10 = 0;
  if (0 !== index) {
    num10 = top;
  }
  obj2[5] = num10;
  let num11 = 0;
  if (0 !== index) {
    num11 = num2;
  }
  obj2[6] = num11;
  const items2 = [{ translateY: closure_3(tmp3Result.interpolate(obj), inverted) }, { scale: num6 }];
  obj2[7] = items2;
  return { cardStyle: obj2, overlayStyle: { opacity } };
};
export const forFadeFromBottomAndroid = function forFadeFromBottomAndroid(current) {
  let closing;
  let inverted;
  current = current.current;
  const progress = current.progress;
  const items = [0.08 * current.layouts.screen.height, 0];
  ({ inverted, closing } = current);
  let obj = { cardStyle: null };
  obj = { opacity: null, transform: null };
  const progress2 = current.progress;
  const tmp = callback(progress.interpolate({ inputRange: [0, 1], outputRange: items, extrapolate: "clamp" }), inverted);
  obj[0] = importDefault(5627)(closing, current.progress, progress2.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1], extrapolate: "clamp" }));
  const items1 = [{ translateY: tmp }];
  obj[1] = items1;
  obj[0] = obj;
  return obj;
};
export const forRevealFromBottomAndroid = function forRevealFromBottomAndroid(layouts) {
  let current;
  let inverted;
  let next;
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  let obj = { containerStyle: null, cardStyle: null, overlayStyle: null };
  obj = { overflow: "hidden", transform: null };
  obj = { translateY: callback(progress.interpolate({ inputRange: [0, 1], outputRange: items, extrapolate: "clamp" }), inverted) };
  progress = current.progress;
  items = [screen.height, ];
  let num = 0;
  items[1] = 0;
  const items1 = [obj];
  obj[1] = items1;
  obj[0] = obj;
  const progress2 = current.progress;
  const items2 = [0.9590000000000001 * screen.height * -1, 0];
  const items3 = [{ translateY: callback(progress2.interpolate({ inputRange: [0, 1], outputRange: items2, extrapolate: "clamp" }), inverted) }, ];
  if (next) {
    const progress3 = next.progress;
    const obj2 = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj2[0] = [0, 1];
    const items4 = [0, 0.02 * screen.height * -1];
    obj2[1] = items4;
    num = tmp(progress3.interpolate(obj2), inverted);
  }
  items3[1] = { translateY: num };
  obj[1] = { transform: items3 };
  const obj1 = { translateY: callback(progress2.interpolate({ inputRange: [0, 1], outputRange: items2, extrapolate: "clamp" }), inverted) };
  tmp = callback;
  const progress4 = current.progress;
  obj[2] = { opacity: progress4.interpolate({ inputRange: [0, 0.36, 1], outputRange: [0, 0.1, 0.1], extrapolate: "clamp" }) };
  return obj;
};
export const forScaleFromCenterAndroid = function forScaleFromCenterAndroid(closing) {
  let current;
  let next;
  ({ current, next } = closing);
  const progress = current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num = progress2.interpolate(obj);
  }
  const tmpResult = closure_2(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  obj = { cardStyle: null };
  obj = { opacity: tmpResult.interpolate({ inputRange: [0, 0.75, 0.875, 1, 1.0825, 1.2075, 2], outputRange: [0, 0, 1, 1, 1, 1, 0] }), transform: null };
  const obj1 = { scale: null };
  const progress3 = current.progress;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const tmp = closure_2;
  const tmp3 = importDefault(5627);
  obj1[0] = tmp3(closing.closing, progress3.interpolate({ inputRange: [0, 1], outputRange: [0.925, 1], extrapolate: "clamp" }), tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0.85, 1, 1.075] }));
  const items = [obj1];
  obj[1] = items;
  obj[0] = obj;
  return obj;
};
export const forBottomSheetAndroid = function forBottomSheetAndroid(current) {
  let closing;
  let inverted;
  current = current.current;
  const progress = current.progress;
  const items = [0.8 * current.layouts.screen.height, 0];
  ({ inverted, closing } = current);
  let obj = { cardStyle: null, overlayStyle: null };
  obj = { opacity: null, transform: null };
  const progress2 = current.progress;
  const tmp = callback(progress.interpolate({ inputRange: [0, 1], outputRange: items, extrapolate: "clamp" }), inverted);
  obj[0] = importDefault(5627)(closing, current.progress, progress2.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }));
  const items1 = [{ translateY: tmp }];
  obj[1] = items1;
  obj[0] = obj;
  obj = { opacity: progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3], extrapolate: "clamp" }) };
  progress3 = current.progress;
  obj[1] = obj;
  return obj;
};
export const forFadeFromCenter = function forFadeFromCenter(current) {
  const progress = current.current.progress;
  let obj = { cardStyle: null, overlayStyle: null };
  obj = { opacity: progress.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1] }) };
  obj[0] = obj;
  obj = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 0.5], extrapolate: "clamp" }) };
  obj[1] = obj;
  return obj;
};
export function forNoAnimation() {
  return {};
}