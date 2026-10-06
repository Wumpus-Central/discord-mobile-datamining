// === Module 6512: react-native ===

// Module 6512 (react-native)
import react_native from "react-native" /* 17 */;

let Animated;
let Platform;
let _window;
let map;
({ Animated, Platform } = react_native);
({ add: _window, multiply: map } = Animated);

export const forUIKit = function forUIKit(arg0) {
  let current;
  let direction;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let layouts;
  let next;
  let obj10;
  let obj11;
  let obj13;
  let obj4;
  let obj6;
  let obj8;
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
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num8 = progress2.interpolate(obj);
  }
  const tmp2Result = React(interpolateResult, num8);
  const obj2 = { leftButtonStyle: { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) }, leftLabelStyle: obj4, rightButtonStyle: { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) }, titleStyle: obj8, backgroundStyle: obj11 };
  obj4 = { transform: items1 };
  const obj5 = { translateX: map(num7, tmp2Result.interpolate(obj6)) };
  obj6 = { inputRange: [0, 1, 2], outputRange: items };
  items = [num2, 0, -result];
  ({ opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) });
  items1 = [obj5];
  ({ opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) });
  obj8 = { opacity: tmp2Result.interpolate({ inputRange: [0, 0.5, 0.75, 1, 1.5], outputRange: [0, 0, 0.1, 1, 0] }), transform: items3 };
  const obj9 = { translateX: map(num7, tmp2Result.interpolate(obj10)) };
  obj10 = { inputRange: [0.5, 1, 2], outputRange: items2 };
  items2 = [result, 0, -num];
  items3 = [obj9];
  obj11 = { transform: items5 };
  const obj12 = { translateX: map(num7, tmp2Result.interpolate(obj13)) };
  obj13 = { inputRange: [0, 1, 2], outputRange: items4 };
  items4 = [layouts.screen.width, 0, -layouts.screen.width];
  items5 = [obj12];
  return obj2;
};
export const forFade = function forFade(next) {
  next = next.next;
  const progress = next.current.progress;
  let num = 0;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = React(interpolateResult, num);
  const interpolateResult1 = tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0, 1, 0] });
  const obj2 = { leftButtonStyle: { opacity: interpolateResult1 }, rightButtonStyle: { opacity: interpolateResult1 }, titleStyle: { opacity: interpolateResult1 }, backgroundStyle: { opacity: tmpResult.interpolate({ inputRange: [0, 1, 1.9, 2], outputRange: [0, 1, 1, 0] }) } };
  ({ opacity: tmpResult.interpolate({ inputRange: [0, 1, 1.9, 2], outputRange: [0, 1, 1, 0] }) });
  return obj2;
};
export const forSlideLeft = function forSlideLeft(next) {
  let items1;
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  const direction = next.direction;
  let num = 0;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const obj2 = { inputRange: [0, 1, 2], outputRange: items1 };
  const interpolate = React(interpolateResult, num).interpolate;
  React(interpolateResult, num);
  if ("rtl" === direction) {
    const items = [-screen.width, 0, screen.width];
    items1 = items;
  } else {
    items1 = [screen.width, 0, -screen.width];
  }
  const items2 = [{ translateX: interpolate(obj2) }];
  ({ translateX: interpolate(obj2) });
  return { leftButtonStyle: { transform: items2 }, rightButtonStyle: { transform: items2 }, titleStyle: { transform: items2 }, backgroundStyle: { transform: items2 } };
};
export const forSlideRight = function forSlideRight(next) {
  let items1;
  next = next.next;
  const screen = next.layouts.screen;
  const progress = next.current.progress;
  const direction = next.direction;
  let num = 0;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const obj2 = { inputRange: [0, 1, 2], outputRange: items1 };
  const interpolate = React(interpolateResult, num).interpolate;
  React(interpolateResult, num);
  if ("rtl" === direction) {
    const items = [screen.width, 0, -screen.width];
    items1 = items;
  } else {
    items1 = [-screen.width, 0, screen.width];
  }
  const items2 = [{ translateX: interpolate(obj2) }];
  ({ translateX: interpolate(obj2) });
  return { leftButtonStyle: { transform: items2 }, rightButtonStyle: { transform: items2 }, titleStyle: { transform: items2 }, backgroundStyle: { transform: items2 } };
};
export const forSlideUp = function forSlideUp(next) {
  let items;
  let obj3;
  let tmpResult;
  next = next.next;
  const header = next.layouts.header;
  const progress = next.current.progress;
  let num = 0;
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  if (next) {
    const progress2 = next.progress;
    const obj = { inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const obj2 = { translateY: tmpResult.interpolate(obj3) };
  obj3 = { inputRange: [0, 1, 2], outputRange: items };
  items = [-header.height, 0, -header.height];
  const items1 = [obj2];
  tmpResult = React(interpolateResult, num);
  return { leftButtonStyle: { transform: items1 }, rightButtonStyle: { transform: items1 }, titleStyle: { transform: items1 }, backgroundStyle: { transform: items1 } };
};
export function forNoAnimation() {
  return {};
}