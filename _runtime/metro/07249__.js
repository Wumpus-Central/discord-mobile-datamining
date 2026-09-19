// === Module 7249: ? ===

// Module 7249
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
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num8 = progress2.interpolate(obj);
  }
  const tmp2Result = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num8);
  const obj2 = { leftButtonStyle: null, leftLabelStyle: null, rightButtonStyle: null, titleStyle: null, backgroundStyle: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  obj2.leftButtonStyle = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  const obj4 = { transform: null };
  const obj5 = { translateX: null };
  const obj6 = { inputRange: [0, 1, 2], outputRange: null };
  const items = [num2, 0, -result];
  obj6.outputRange = items;
  obj5.translateX = framebus(num7, tmp2Result.interpolate(obj6));
  const items1 = [obj5];
  obj4.transform = items1;
  obj2.leftLabelStyle = obj4;
  const obj3 = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  obj2.rightButtonStyle = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  const obj8 = { opacity: tmp2Result.interpolate({ inputRange: [0, 0.5, 0.75, 1, 1.5], outputRange: [0, 0, 0.1, 1, 0] }), transform: null };
  const obj9 = { translateX: null };
  const obj10 = { inputRange: [0.5, 1, 2], outputRange: null };
  const items2 = [result, 0, -num];
  obj10.outputRange = items2;
  obj9.translateX = framebus(num7, tmp2Result.interpolate(obj10));
  const items3 = [obj9];
  obj8.transform = items3;
  obj2.titleStyle = obj8;
  const obj11 = { transform: null };
  const obj12 = { translateX: null };
  const obj13 = { inputRange: [0, 1, 2], outputRange: null };
  const items4 = [layouts.screen.width, 0, -layouts.screen.width];
  obj13.outputRange = items4;
  obj12.translateX = framebus(num7, tmp2Result.interpolate(obj13));
  const items5 = [obj12];
  obj11.transform = items5;
  obj2.backgroundStyle = obj11;
  return obj2;
};
export const forFade = function forFade(next) {
  next = next.next;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  const interpolateResult1 = tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0, 1, 0] });
  const obj2 = { leftButtonStyle: { opacity: interpolateResult1 }, rightButtonStyle: { opacity: interpolateResult1 }, titleStyle: { opacity: interpolateResult1 }, backgroundStyle: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  obj2.backgroundStyle = { opacity: tmpResult.interpolate({ inputRange: [0, 1, 1.9, 2], outputRange: [0, 1, 1, 0] }) };
  return obj2;
};
export const forSlideLeft = function forSlideLeft(next) {
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const obj2 = { inputRange: [0, 1, 2], outputRange: null };
  if ("rtl" === next.direction) {
    const items = [-screen.width, 0, screen.width];
    let items1 = items;
  } else {
    items1 = [screen.width, 0, -screen.width];
  }
  const tmpResult = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  obj2.outputRange = items1;
  const items2 = [{ translateX: React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj2) }];
  return { leftButtonStyle: { transform: items2 }, rightButtonStyle: { transform: items2 }, titleStyle: { transform: items2 }, backgroundStyle: { transform: items2 } };
};
export const forSlideRight = function forSlideRight(next) {
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const obj2 = { inputRange: [0, 1, 2], outputRange: null };
  if ("rtl" === next.direction) {
    const items = [screen.width, 0, -screen.width];
    let items1 = items;
  } else {
    items1 = [-screen.width, 0, screen.width];
  }
  const tmpResult = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  obj2.outputRange = items1;
  const items2 = [{ translateX: React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj2) }];
  return { leftButtonStyle: { transform: items2 }, rightButtonStyle: { transform: items2 }, titleStyle: { transform: items2 }, backgroundStyle: { transform: items2 } };
};
export const forSlideUp = function forSlideUp(next) {
  next = next.next;
  const header = next.layouts.header;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const obj2 = { translateY: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const obj3 = { inputRange: [0, 1, 2], outputRange: null };
  const items = [-header.height, 0, -header.height];
  obj3.outputRange = items;
  obj2.translateY = React(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj3);
  const items1 = [obj2];
  return { leftButtonStyle: { transform: items1 }, rightButtonStyle: { transform: items1 }, titleStyle: { transform: items1 }, backgroundStyle: { transform: items1 } };
};
export function forNoAnimation() {
  return {};
}