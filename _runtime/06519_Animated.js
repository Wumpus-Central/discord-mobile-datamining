// === Module 6519: Animated ===

// Module 6519 (Animated)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Animated, Platform } = get_ActivityIndicator);
({ add: c0, multiply: closure_1 } = Animated);

export const forUIKit = function forUIKit(arg0) {
  ({ next, layouts } = arg0);
  let num = 100;
  let num2 = 100;
  ({ current, direction } = arg0);
  if (layouts.leftLabel) {
    num2 = (layouts.screen.width - layouts.leftLabel.width) / 2 - 27;
  }
  if (layouts.title) {
    num = (layouts.screen.width - layouts.title.width) / 2 - 27;
  }
  const result = layouts.screen.width / 4;
  let num7 = 1;
  if ("rtl" === direction) {
    num7 = -1;
  }
  const progress = current.progress;
  let num8 = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num8 = progress2.interpolate(obj);
  }
  const tmp2Result = callback(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num8);
  obj = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  obj[0] = obj;
  obj1 = { transform: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const items = [num2, 0, -result];
  const items1 = [{ translateX: callback(num7, tmp2Result.interpolate({ inputRange: [0, 1, 2], outputRange: items })) }];
  obj1[0] = items1;
  obj[1] = obj1;
  const obj2 = { translateX: callback(num7, tmp2Result.interpolate({ inputRange: [0, 1, 2], outputRange: items })) };
  obj[2] = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  const obj4 = { opacity: tmp2Result.interpolate({ inputRange: [0, 0.5, 0.75, 1, 1.5], outputRange: [0, 0, 0.1, 1, 0] }), transform: null };
  const obj3 = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  const items2 = [result, 0, -num];
  const items3 = [{ translateX: callback(num7, tmp2Result.interpolate({ inputRange: [0.5, 1, 2], outputRange: items2 })) }];
  obj4[1] = items3;
  obj[3] = obj4;
  const obj6 = { transform: null };
  const obj5 = { translateX: callback(num7, tmp2Result.interpolate({ inputRange: [0.5, 1, 2], outputRange: items2 })) };
  const items4 = [layouts.screen.width, 0, -layouts.screen.width];
  const items5 = [{ translateX: callback(num7, tmp2Result.interpolate({ inputRange: [0, 1, 2], outputRange: items4 })) }];
  obj6[0] = items5;
  obj[4] = obj6;
  return obj;
};
export const forFade = function forFade(next) {
  next = next.next;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num = progress2.interpolate(obj);
  }
  const tmpResult = callback(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  const interpolateResult1 = tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0, 1, 0] });
  obj = { opacity: tmpResult.interpolate({ inputRange: [0, 1, 1.9, 2], outputRange: [0, 1, 1, 0] }) };
  obj[3] = obj;
  return obj;
};
export const forSlideLeft = function forSlideLeft(next) {
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  obj = { inputRange: [0, 1, 2], outputRange: null };
  if ("rtl" === next.direction) {
    const items = [-screen.width, 0, screen.width];
    let items1 = items;
  } else {
    items1 = [screen.width, 0, -screen.width];
  }
  obj = { translateX: callback(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj) };
  obj[1] = items1;
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export const forSlideRight = function forSlideRight(next) {
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  obj = { inputRange: [0, 1, 2], outputRange: null };
  if ("rtl" === next.direction) {
    const items = [screen.width, 0, -screen.width];
    let items1 = items;
  } else {
    items1 = [-screen.width, 0, screen.width];
  }
  obj = { translateX: callback(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj) };
  obj[1] = items1;
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export const forSlideUp = function forSlideUp(next) {
  next = next.next;
  const header = next.layouts.header;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num = progress2.interpolate(obj);
  }
  obj = { translateY: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const items = [-header.height, 0, -header.height];
  obj[0] = callback(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate({ inputRange: [0, 1, 2], outputRange: items });
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export function forNoAnimation() {
  return {};
}