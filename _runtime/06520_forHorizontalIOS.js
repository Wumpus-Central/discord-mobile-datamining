// === Module 6520: forHorizontalIOS ===

// Module 6520 (forHorizontalIOS)
import react_native from "react-native" /* 6521 */;
import react_native2 from "react-native" /* 17 */;

let c3;
let closure_4;
function forHorizontalIOS(layouts) {
  let current;
  let inverted;
  let items;
  let items2;
  let next;
  let obj2;
  let obj5;
  let obj6;
  let progress;
  let progress3;
  let progress4;
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  const obj = { translateX: React3(progress.interpolate(obj2), inverted) };
  progress = current.progress;
  obj2 = { inputRange: [0, 1], outputRange: items, extrapolate: "clamp" };
  items = [screen.width, ];
  let num = 0;
  items[1] = 0;
  const items1 = [obj, ];
  if (next) {
    const progress2 = next.progress;
    const obj3 = { inputRange: [0, 1], outputRange: items2, extrapolate: "clamp" };
    items2 = [0, -0.3 * screen.width];
    num = React3(progress2.interpolate(obj3), inverted);
  }
  const obj4 = { cardStyle: { transform: items1 }, overlayStyle: obj5, shadowStyle: obj6 };
  items1[1] = { translateX: num };
  obj5 = { opacity: progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.07], extrapolate: "clamp" }) };
  progress3 = current.progress;
  obj6 = { shadowOpacity: progress4.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3], extrapolate: "clamp" }) };
  progress4 = current.progress;
  return obj4;
}
const Animated = react_native2.Animated;
({ add: c3, multiply: closure_4 } = Animated);

export { forHorizontalIOS };
export const forHorizontalIOSInverted = function forHorizontalIOSInverted(inverted) {
  inverted = inverted.inverted;
  const obj = { inverted: Animated.multiply(inverted, -1) };
  const merged = Object.assign(Object.assign(inverted, Object.assign({ inverted: 0 })));
  return forHorizontalIOS(obj);
};
export const forVerticalIOS = function forVerticalIOS(current) {
  let items;
  let items1;
  let obj2;
  let obj4;
  let progress;
  const obj = { cardStyle: obj2 };
  obj2 = { transform: items1 };
  const obj3 = { translateY: React3(progress.interpolate(obj4), current.inverted) };
  progress = current.current.progress;
  obj4 = { inputRange: [0, 1], outputRange: items, extrapolate: "clamp" };
  items = [current.layouts.screen.height, 0];
  items1 = [obj3];
  return obj;
};
export const forModalPresentationIOS = function forModalPresentationIOS(next) {
  let current;
  let index;
  let insets;
  let inverted;
  let items;
  let items1;
  let items2;
  let num10;
  let num11;
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
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num3 = progress2.interpolate(obj);
  }
  const tmp3Result = _false(interpolateResult, num3);
  const obj2 = { inputRange: [0, 1, 2], outputRange: items };
  items = [screen.height, , ];
  let num4 = 0;
  const interpolate = tmp3Result.interpolate;
  if (0 !== index) {
    num4 = num2;
  }
  items[1] = num4;
  let num5 = 0;
  if (0 === index) {
    num5 = top;
  }
  items[2] = num5 - num2 * result;
  let num6 = 1;
  const tmp6Result = React3(interpolate(obj2), inverted);
  const interpolateResult1 = tmp3Result.interpolate({ inputRange: [0, 1, 1.0001, 2], outputRange: [0, 0.3, 1, 1] });
  if (screen.width <= screen.height) {
    let num7 = 1;
    const interpolate2 = tmp3Result.interpolate;
    const obj3 = { inputRange: [0, 1, 2], outputRange: items1 };
    if (screen.width) {
      num7 = 1 - 2 * num2 / screen.width;
    }
    items1 = [1, 1, num7];
    num6 = interpolate2(obj3);
  }
  let num9 = 0;
  if (screen.width <= screen.height) {
    if (0 === index) {
      const obj4 = { inputRange: [0, 1, 1.0001, 2], outputRange: [0, 0, 0, 10] };
      num = tmp3Result.interpolate(obj4);
    }
    num9 = num;
  }
  const obj5 = { overflow: "hidden", borderCurve: "continuous", borderTopLeftRadius: num9, borderTopRightRadius: num9, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, marginTop: num10, marginBottom: num11, transform: items2 };
  num10 = 0;
  if (0 !== index) {
    num10 = top;
  }
  num11 = 0;
  if (0 !== index) {
    num11 = num2;
  }
  items2 = [{ translateY: tmp6Result }, { scale: num6 }];
  return { cardStyle: obj5, overlayStyle: { opacity: interpolateResult1 } };
};
export const forFadeFromBottomAndroid = function forFadeFromBottomAndroid(current) {
  let closing;
  let inverted;
  let items;
  let items1;
  let obj3;
  let obj4;
  let progress2;
  current = current.current;
  const progress = current.progress;
  const obj = { inputRange: [0, 1], outputRange: items, extrapolate: "clamp" };
  items = [0.08 * current.layouts.screen.height, 0];
  ({ inverted, closing } = current);
  const obj2 = { cardStyle: obj3 };
  obj3 = { opacity: obj4.conditional(closing, current.progress, progress2.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1], extrapolate: "clamp" })), transform: items1 };
  progress2 = current.progress;
  const tmp = React3(progress.interpolate(obj), inverted);
  items1 = [{ translateY: tmp }];
  obj4 = react_native;
  return obj2;
};
export const forRevealFromBottomAndroid = function forRevealFromBottomAndroid(layouts) {
  let current;
  let inverted;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let next;
  let obj2;
  let obj4;
  let obj6;
  let obj8;
  let progress;
  let progress2;
  let progress4;
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  const obj = { containerStyle: obj2, cardStyle: { transform: items3 }, overlayStyle: obj8 };
  obj2 = { overflow: "hidden", transform: items1 };
  const obj3 = { translateY: React3(progress.interpolate(obj4), inverted) };
  progress = current.progress;
  obj4 = { inputRange: [0, 1], outputRange: items, extrapolate: "clamp" };
  items = [screen.height, ];
  let num = 0;
  items[1] = 0;
  items1 = [obj3];
  const obj5 = { translateY: React3(progress2.interpolate(obj6), inverted) };
  progress2 = current.progress;
  obj6 = { inputRange: [0, 1], outputRange: items2, extrapolate: "clamp" };
  items2 = [0.9590000000000001 * screen.height * -1, 0];
  items3 = [obj5, ];
  if (next) {
    const progress3 = next.progress;
    const obj7 = { inputRange: [0, 1], outputRange: items4, extrapolate: "clamp" };
    items4 = [0, 0.02 * screen.height * -1];
    num = React3(progress3.interpolate(obj7), inverted);
  }
  items3[1] = { translateY: num };
  obj8 = { opacity: progress4.interpolate({ inputRange: [0, 0.36, 1], outputRange: [0, 0.1, 0.1], extrapolate: "clamp" }) };
  progress4 = current.progress;
  return obj;
};
export const forScaleFromCenterAndroid = function forScaleFromCenterAndroid(closing) {
  let conditional;
  let current;
  let interpolateResult1;
  let items;
  let next;
  let obj3;
  ({ current, next } = closing);
  const progress = current.progress;
  closing = closing.closing;
  let num = 0;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = _false(interpolateResult, num);
  const obj2 = { cardStyle: obj3 };
  obj3 = { opacity: tmpResult.interpolate({ inputRange: [0, 0.75, 0.875, 1, 1.0825, 1.2075, 2], outputRange: [0, 0, 1, 1, 1, 1, 0] }), transform: items };
  const progress3 = current.progress;
  const obj4 = { scale: conditional(closing, interpolateResult1, tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0.85, 1, 1.075] })) };
  conditional = react_native.conditional;
  react_native;
  items = [obj4];
  interpolateResult1 = progress3.interpolate({ inputRange: [0, 1], outputRange: [0.925, 1], extrapolate: "clamp" });
  return obj2;
};
export const forFadeFromRightAndroid = function forFadeFromRightAndroid(closing) {
  let current;
  let inverted;
  let items;
  let next;
  let obj3;
  let obj4;
  let progress3;
  ({ current, next, inverted } = closing);
  const progress = current.progress;
  closing = closing.closing;
  let num = 0;
  const tmp2 = React3(progress.interpolate({ inputRange: [0, 1], outputRange: [96, 0], extrapolate: "clamp" }), inverted);
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, -96], extrapolate: "clamp" };
    num = React3(progress2.interpolate(obj), inverted);
  }
  const obj2 = { cardStyle: obj3 };
  obj3 = { opacity: obj4.conditional(closing, progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), current.progress), transform: items };
  progress3 = current.progress;
  items = [{ translateX: tmp2 }, { translateX: num }];
  obj4 = react_native;
  return obj2;
};
export const forBottomSheetAndroid = function forBottomSheetAndroid(current) {
  let closing;
  let inverted;
  let items;
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let progress2;
  let progress3;
  current = current.current;
  const progress = current.progress;
  const obj = { inputRange: [0, 1], outputRange: items, extrapolate: "clamp" };
  items = [0.8 * current.layouts.screen.height, 0];
  ({ inverted, closing } = current);
  const obj2 = { cardStyle: obj3, overlayStyle: obj5 };
  obj3 = { opacity: obj4.conditional(closing, current.progress, progress2.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" })), transform: items1 };
  progress2 = current.progress;
  const tmp = React3(progress.interpolate(obj), inverted);
  items1 = [{ translateY: tmp }];
  obj4 = react_native;
  obj5 = { opacity: progress3.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3], extrapolate: "clamp" }) };
  progress3 = current.progress;
  return obj2;
};
export const forFadeFromCenter = function forFadeFromCenter(current) {
  const progress = current.current.progress;
  const obj = { cardStyle: { opacity: progress.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1] }) }, overlayStyle: { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 0.5], extrapolate: "clamp" }) } };
  ({ opacity: progress.interpolate({ inputRange: [0, 0.5, 0.9, 1], outputRange: [0, 0.25, 0.7, 1] }) });
  ({ opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 0.5], extrapolate: "clamp" }) });
  return obj;
};
export function forNoAnimation() {
  return {};
}