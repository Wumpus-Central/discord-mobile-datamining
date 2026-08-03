// === Module 5668: forUIKit ===

// Module 5668 (forUIKit)
import get_ActivityIndicator from "get ActivityIndicator";

const I18nManager = get_ActivityIndicator.I18nManager;
const add = get_ActivityIndicator.Animated.add;

export const forUIKit = function forUIKit(current) {
  let layouts;
  let next;
  ({ next, layouts } = current);
  let num = 100;
  let num2 = 100;
  if (layouts.leftLabel) {
    num2 = (layouts.screen.width - layouts.leftLabel.width) / 2 - 27;
  }
  if (layouts.title) {
    num = (layouts.screen.width - layouts.title.width) / 2 - 27;
  }
  const result = layouts.screen.width / 4;
  const progress = current.current.progress;
  let num7 = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    obj[0] = [0, 1];
    obj[1] = [0, 1];
    num7 = progress2.interpolate(obj);
  }
  const tmp2Result = add(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num7);
  obj = { leftButtonStyle: null, leftLabelStyle: null, rightButtonStyle: null, titleStyle: null, backgroundStyle: null };
  obj = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  obj[0] = obj;
  const obj1 = { inputRange: [0, 1, 2], outputRange: null };
  let obj5 = I18nManager;
  const items = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items[0] = tmp4;
    items[1] = 0;
    items[2] = num2;
    let tmp5 = items;
  } else {
    items[0] = num2;
    items[1] = 0;
    items[2] = tmp4;
    tmp5 = items;
  }
  const obj2 = { transform: null };
  const interpolateResult = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" });
  const tmp2 = add;
  obj1[1] = tmp5;
  const items1 = [{ translateX: tmp2Result.interpolate(obj1) }];
  obj2[0] = items1;
  obj[1] = obj2;
  const obj3 = { translateX: tmp2Result.interpolate(obj1) };
  obj[2] = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  obj5 = { opacity: tmp2Result.interpolate({ inputRange: [0, 0.4, 1, 1.5], outputRange: [0, 0.1, 1, 0] }), transform: null };
  const obj6 = { inputRange: [0.5, 1, 2], outputRange: null };
  const items2 = [, , ];
  if (obj5.getConstants().isRTL) {
    items2[0] = tmp6;
    items2[1] = 0;
    items2[2] = result;
    let tmp7 = items2;
  } else {
    items2[0] = result;
    items2[1] = 0;
    items2[2] = tmp6;
    tmp7 = items2;
  }
  const obj4 = { opacity: tmp2Result.interpolate({ inputRange: [0.3, 1, 1.5], outputRange: [0, 1, 0] }) };
  obj6[1] = tmp7;
  const items3 = [{ translateX: tmp2Result.interpolate(obj6) }];
  obj5[1] = items3;
  obj[3] = obj5;
  const obj8 = { inputRange: [0, 1, 2], outputRange: null };
  const width = layouts.screen.width;
  const items4 = [, , ];
  if (obj5.getConstants().isRTL) {
    items4[0] = -width;
    items4[1] = 0;
    items4[2] = layouts.screen.width;
    let tmp8 = items4;
  } else {
    items4[0] = width;
    items4[1] = 0;
    items4[2] = -layouts.screen.width;
    tmp8 = items4;
  }
  const obj9 = { transform: null };
  const obj7 = { translateX: tmp2Result.interpolate(obj6) };
  obj8[1] = tmp8;
  const items5 = [{ translateX: tmp2Result.interpolate(obj8) }];
  obj9[0] = items5;
  obj[4] = obj9;
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
  const tmpResult = add(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num);
  const interpolateResult1 = tmpResult.interpolate({ inputRange: [0, 1, 2], outputRange: [0, 1, 0] });
  obj = { leftButtonStyle: { opacity: interpolateResult1 }, rightButtonStyle: { opacity: interpolateResult1 }, titleStyle: { opacity: interpolateResult1 }, backgroundStyle: null };
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
  const tmp = add;
  obj = { inputRange: [0, 1, 2], outputRange: null };
  const width = screen.width;
  const items = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items[0] = -width;
    items[1] = 0;
    items[2] = screen.width;
    let tmp3 = items;
  } else {
    items[0] = width;
    items[1] = 0;
    items[2] = -screen.width;
    tmp3 = items;
  }
  obj = { translateX: add(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj) };
  obj[1] = tmp3;
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
  const tmp = add;
  obj = { inputRange: [0, 1, 2], outputRange: null };
  const width = screen.width;
  const items = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items[0] = width;
    items[1] = 0;
    items[2] = -screen.width;
    let tmp3 = items;
  } else {
    items[0] = -width;
    items[1] = 0;
    items[2] = screen.width;
    tmp3 = items;
  }
  obj = { translateX: add(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate(obj) };
  obj[1] = tmp3;
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
  const tmp = add;
  const items = [-header.height, 0, -header.height];
  obj[0] = add(progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: "clamp" }), num).interpolate({ inputRange: [0, 1, 2], outputRange: items });
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export function forNoAnimation() {
  return {};
}