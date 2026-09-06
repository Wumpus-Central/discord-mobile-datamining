// === Module 7017: forHorizontalIOS ===

// Module 7017 (forHorizontalIOS)
import conditional from "conditional" /* 7018 */;
import get_ActivityIndicator from "module_17" /* 17 */;

function forHorizontalIOS(layouts) {
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  let obj = { translateX: null };
  const progress = current.progress;
  obj = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
  const items = [screen.width, ];
  let num = 0;
  items[1] = 0;
  obj.outputRange = items;
  obj.translateX = React4(progress.interpolate(obj), inverted);
  const items1 = [obj, ];
  if (next) {
    const progress2 = next.progress;
    obj = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
    const items2 = [0, -0.3 * screen.width];
    obj.outputRange = items2;
    num = React4(progress2.interpolate(obj), inverted);
  }
  const obj1 = { cardStyle: { transform: items1 }, overlayStyle: null, shadowStyle: null };
  items1[1] = { translateX: num };
  const obj2 = { opacity: null };
  const progress3 = current.progress;
  obj2.opacity = progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.07], extrapolate: "clamp" });
  obj1.overlayStyle = obj2;
  const obj3 = { shadowOpacity: null };
  const progress4 = current.progress;
  obj3.shadowOpacity = progress4.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3], extrapolate: "clamp" });
  obj1.shadowStyle = obj3;
  return obj1;
}
const Animated = get_ActivityIndicator.Animated;
({ add: c3, multiply: closure_4 } = Animated);

export { forHorizontalIOS };
export const forHorizontalIOSInverted = function forHorizontalIOSInverted(inverted) {
  const obj = {};
  const merged = Object.assign(Object.assign(inverted, Object.assign({ inverted: 0 })));
  obj.inverted = Animated.multiply(inverted.inverted, -1);
  return forHorizontalIOS(obj);
};
export const forVerticalIOS = function forVerticalIOS(current) {
  let obj = { cardStyle: null };
  obj = { transform: null };
  obj = { translateY: null };
  const progress = current.current.progress;
  const obj1 = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
  const items = [current.layouts.screen.height, 0];
  obj1.outputRange = items;
  obj.translateY = React4(progress.interpolate(obj1), current.inverted);
  const items1 = [obj];
  obj.transform = items1;
  obj.cardStyle = obj;
  return obj;
};
export const forModalPresentationIOS = function forModalPresentationIOS(next) {
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
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num3 = progress2.interpolate(obj);
  }
  const tmp3Result = React3(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num3);
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
  obj.outputRange = items;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  let num6 = 1;
  const tmp6Result = React4(tmp3Result.interpolate(obj), inverted);
  if (screen.width <= screen.height) {
    obj = { inputRange: [0, 1, 2], outputRange: null };
    let num7 = 1;
    if (screen.width) {
      num7 = 1 - 2 * num2 / screen.width;
    }
    const items1 = [1, 1, num7];
    obj.outputRange = items1;
    num6 = tmp3Result.interpolate(obj);
  }
  let num9 = 0;
  if (screen.width <= screen.height) {
    if (tmp5) {
      const obj1 = { inputRange: [0, 1, 1.0001, 2], outputRange: [0, 0, 0, 10] };
      num = tmp3Result.interpolate(obj1);
    }
    num9 = num;
  }
  const obj2 = { overflow: "hidden", borderCurve: "continuous", borderTopLeftRadius: num9, borderTopRightRadius: num9, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, marginTop: null, marginBottom: null, transform: null };
  let num10 = 0;
  if (0 !== index) {
    num10 = top;
  }
  obj2.marginTop = num10;
  let num11 = 0;
  if (0 !== index) {
    num11 = num2;
  }
  const interpolateResult1 = tmp3Result.interpolate({ inputRange: [0, 1, 1.0001, 2], outputRange: [0, 0.3, 1, 1] });
  obj2.marginBottom = num11;
  const items2 = [{ translateY: tmp6Result }, { scale: num6 }];
  obj2.transform = items2;
  return { cardStyle: obj2, overlayStyle: { opacity: tmp3Result.interpolate({ inputRange: [0, 1, 1.0001, 2], outputRange: [0, 0.3, 1, 1] }) } };
};
export const forFadeFromBottomAndroid = function forFadeFromBottomAndroid(current) {
  current = current.current;
  const progress = current.progress;
  let obj = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
  const items = [0.08 * current.layouts.screen.height, 0];
  obj.outputRange = items;
  ({ inverted, closing } = current);
  obj = { cardStyle: null };
  obj = { opacity: null, transform: null };
  const tmp = React4(progress.interpolate(obj), inverted);
  const progress2 = current.progress;
  obj.opacity = conditional.conditional(closing, current.progress, progress2.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1], extrapolate: "clamp" }));
  const items1 = [{ translateY: tmp }];
  obj.transform = items1;
  obj.cardStyle = obj;
  return obj;
};
export const forRevealFromBottomAndroid = function forRevealFromBottomAndroid(layouts) {
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  let obj = { containerStyle: null, cardStyle: null, overlayStyle: null };
  obj = { overflow: "hidden", transform: null };
  obj = { translateY: null };
  const progress = current.progress;
  const obj1 = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
  const items = [screen.height, ];
  let num = 0;
  items[1] = 0;
  obj1.outputRange = items;
  obj.translateY = React4(progress.interpolate(obj1), inverted);
  const items1 = [obj];
  obj.transform = items1;
  obj.containerStyle = obj;
  const obj2 = { translateY: null };
  const progress2 = current.progress;
  const obj3 = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
  const items2 = [0.9590000000000001 * screen.height * -1, 0];
  obj3.outputRange = items2;
  obj2.translateY = React4(progress2.interpolate(obj3), inverted);
  const items3 = [obj2, ];
  if (next) {
    const progress3 = next.progress;
    const obj4 = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
    const items4 = [0, 0.02 * screen.height * -1];
    obj4.outputRange = items4;
    num = React4(progress3.interpolate(obj4), inverted);
  }
  items3[1] = { translateY: num };
  obj.cardStyle = { transform: items3 };
  const obj5 = { opacity: null };
  const progress4 = current.progress;
  obj5.opacity = progress4.interpolate({ inputRange: [0, 0.36, 1], outputRange: [0, 0.1, 0.1], extrapolate: "clamp" });
  obj.overlayStyle = obj5;
  return obj;
};
export const forScaleFromCenterAndroid = function forScaleFromCenterAndroid(closing) {
  ({ current, next } = closing);
  const progress = current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = React3(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  obj = { cardStyle: null };
  obj = { opacity: tmpResult.interpolate({ inputRange: [0, 0.75, 0.875, 1, 1.0825, 1.2075, 2], outputRange: [0, 0, 1, 1, 1, 1, 0] }), transform: null };
  const obj1 = { scale: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const progress3 = current.progress;
  const obj6 = conditional;
  obj1.scale = obj6.conditional(closing.closing, progress3.interpolate({ inputRange: [0, 1], outputRange: [0.925, 1], extrapolate: "clamp" }), tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0.85, 1, 1.075] }));
  const items = [obj1];
  obj.transform = items;
  obj.cardStyle = obj;
  return obj;
};
export const forFadeFromRightAndroid = function forFadeFromRightAndroid(closing) {
  ({ current, next, inverted } = closing);
  const progress = current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [0, 1], outputRange: [0, -96], extrapolate: "clamp" };
    num = tmp(progress2.interpolate(obj), inverted);
  }
  obj = { cardStyle: null };
  obj = { opacity: null, transform: null };
  tmp = React4;
  const tmp2 = React4(progress.interpolate({ inputRange: [0, 1], outputRange: [96, 0], extrapolate: "clamp" }), inverted);
  const progress3 = current.progress;
  obj.opacity = conditional.conditional(closing.closing, progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), current.progress);
  const items = [{ translateX: tmp2 }, { translateX: num }];
  obj.transform = items;
  obj.cardStyle = obj;
  return obj;
};
export const forBottomSheetAndroid = function forBottomSheetAndroid(current) {
  current = current.current;
  const progress = current.progress;
  let obj = { inputRange: [0, 1], outputRange: null, extrapolate: "clamp" };
  const items = [0.8 * current.layouts.screen.height, 0];
  obj.outputRange = items;
  ({ inverted, closing } = current);
  obj = { cardStyle: null, overlayStyle: null };
  obj = { opacity: null, transform: null };
  const tmp = React4(progress.interpolate(obj), inverted);
  const progress2 = current.progress;
  obj.opacity = conditional.conditional(closing, current.progress, progress2.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }));
  const items1 = [{ translateY: tmp }];
  obj.transform = items1;
  obj.cardStyle = obj;
  const obj1 = { opacity: null };
  const progress3 = current.progress;
  obj1.opacity = progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3], extrapolate: "clamp" });
  obj.overlayStyle = obj1;
  return obj;
};
export const forFadeFromCenter = function forFadeFromCenter(current) {
  const progress = current.current.progress;
  let obj = { cardStyle: null, overlayStyle: null };
  obj = { opacity: progress.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1] }) };
  obj.cardStyle = obj;
  obj = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 0.5], extrapolate: "clamp" }) };
  obj.overlayStyle = obj;
  return obj;
};
export function forNoAnimation() {
  return {};
}