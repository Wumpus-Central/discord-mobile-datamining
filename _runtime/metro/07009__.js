// === Module 7009: ? ===

// Module 7009
import get_ActivityIndicator from "module_17" /* 17 */;

({ Animated, Platform } = get_ActivityIndicator);
({ add: closure_0, multiply: closure_1 } = Animated);

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
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num8 = progress2.interpolate(obj);
  }
  const tmp2Result = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num8);
  obj = { leftButtonStyle: null, leftLabelStyle: null, rightButtonStyle: null, titleStyle: null, backgroundStyle: null };
  obj = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  obj.leftButtonStyle = obj;
  const obj1 = { transform: null };
  const obj2 = { translateX: null };
  const obj3 = { inputRange: [0, 1, 2], outputRange: null };
  const items = [num2, 0, -result];
  obj3.outputRange = items;
  obj2.translateX = framebus(num7, tmp2Result.interpolate(obj3));
  const items1 = [obj2];
  obj1.transform = items1;
  obj.leftLabelStyle = obj1;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  obj.rightButtonStyle = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  const obj5 = { opacity: tmp2Result.interpolate({ inputRange: [0, 0.5, 0.75, 1, 1.5], outputRange: [0, 0, 0.1, 1, 0] }), transform: null };
  const obj6 = { translateX: null };
  const obj7 = { inputRange: [0.5, 1, 2], outputRange: null };
  const items2 = [result, 0, -num];
  obj7.outputRange = items2;
  obj6.translateX = framebus(num7, tmp2Result.interpolate(obj7));
  const items3 = [obj6];
  obj5.transform = items3;
  obj.titleStyle = obj5;
  const obj8 = { transform: null };
  const obj9 = { translateX: null };
  const obj10 = { inputRange: [0, 1, 2], outputRange: null };
  const items4 = [layouts.screen.width, 0, -layouts.screen.width];
  obj10.outputRange = items4;
  obj9.translateX = framebus(num7, tmp2Result.interpolate(obj10));
  const items5 = [obj9];
  obj8.transform = items5;
  obj.backgroundStyle = obj8;
  return obj;
};
export const forFade = function forFade(next) {
  next = next.next;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  const interpolateResult1 = tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0, 1, 0] });
  obj = { leftButtonStyle: { opacity: interpolateResult1 }, rightButtonStyle: { opacity: interpolateResult1 }, titleStyle: { opacity: interpolateResult1 }, backgroundStyle: null };
  obj = { opacity: tmpResult.interpolate({ inputRange: [0, 1, 1.9, 2], outputRange: [0, 1, 1, 0] }) };
  obj.backgroundStyle = obj;
  return obj;
};
export const forSlideLeft = function forSlideLeft(next) {
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
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
  obj = { translateX: React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj), outputRange: items1 };
  const items2 = [obj];
  return { leftButtonStyle: { transform: items2 }, rightButtonStyle: { transform: items2 }, titleStyle: { transform: items2 }, backgroundStyle: { transform: items2 } };
};
export const forSlideRight = function forSlideRight(next) {
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
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
  obj = { translateX: React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj), outputRange: items1 };
  const items2 = [obj];
  return { leftButtonStyle: { transform: items2 }, rightButtonStyle: { transform: items2 }, titleStyle: { transform: items2 }, backgroundStyle: { transform: items2 } };
};
export const forSlideUp = function forSlideUp(next) {
  next = next.next;
  const header = next.layouts.header;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  obj = { translateY: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  obj = { inputRange: [0, 1, 2], outputRange: null };
  const items = [-header.height, 0, -header.height];
  obj.outputRange = items;
  obj.translateY = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj);
  const items1 = [obj];
  return { leftButtonStyle: { transform: items1 }, rightButtonStyle: { transform: items1 }, titleStyle: { transform: items1 }, backgroundStyle: { transform: items1 } };
};
export function forNoAnimation() {
  return {};
}