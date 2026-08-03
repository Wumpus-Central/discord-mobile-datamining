import { Platform } from "get ActivityIndicator";


export const getInputRangeFromIndexes = function getInputRangeFromIndexes(arg0, arg1, arg2) {
  let length;
  const items = [];
  let num = 0;
  if (0 < arg0.length) {
    do {
      let arr = items.push((arg1 - arg0[num]) * tmp);
      num = num + 1;
      length = arg0.length;
    } while (num < length);
  }
  return items;
};
export const defaultScrollInterpolator = function defaultScrollInterpolator(_getCustomIndexResult, arg1) {
  let length;
  const items = [1, 0, -1];
  const inputRange = [];
  let num = 0;
  if (0 < items.length) {
    do {
      let arr = inputRange.push((_getCustomIndexResult - items[num]) * tmp);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  return { inputRange, outputRange: [0, 1, 0] };
};
export const defaultAnimatedStyles = function defaultAnimatedStyles(index, interpolate, props) {
  let obj = {};
  if (props.inactiveSlideOpacity < 1) {
    obj = { opacity: null };
    obj = { inputRange: null, outputRange: null };
    obj[0] = [0, 1];
    const items = [props.inactiveSlideOpacity, 1];
    obj[1] = items;
    obj[0] = interpolate.interpolate(obj);
  }
  let obj1 = {};
  if (props.inactiveSlideScale < 1) {
    const obj2 = { transform: null };
    const obj3 = { scale: null };
    const obj4 = { inputRange: null, outputRange: null };
    obj4[0] = [0, 1];
    const items1 = [props.inactiveSlideScale, 1];
    obj4[1] = items1;
    obj3[0] = interpolate.interpolate(obj4);
    const items2 = [obj3];
    obj2[0] = items2;
    obj1 = obj2;
  }
  const merged = Object.assign(obj);
  const merged1 = Object.assign(obj1);
  return {};
};
export const shiftAnimatedStyles = function shiftAnimatedStyles(index, interpolate, props) {
  let obj = {};
  if (props.inactiveSlideOpacity < 1) {
    obj = { opacity: null };
    obj = { inputRange: null, outputRange: null };
    obj[0] = [0, 1];
    const items = [props.inactiveSlideOpacity, 1];
    obj[1] = items;
    obj[0] = interpolate.interpolate(obj);
  }
  let obj1 = {};
  if (props.inactiveSlideScale < 1) {
    const obj2 = { scale: null };
    const obj3 = { inputRange: null, outputRange: null };
    obj3[0] = [0, 1];
    const items1 = [props.inactiveSlideScale, 1];
    obj3[1] = items1;
    obj2[0] = interpolate.interpolate(obj3);
    obj1 = obj2;
  }
  let obj4 = {};
  if (0 !== props.inactiveSlideShift) {
    let str = "translateY";
    if (props.vertical) {
      str = "translateX";
    }
    const obj5 = {};
    const obj6 = { inputRange: null, outputRange: null };
    obj6[0] = [0, 1];
    const items2 = [props.inactiveSlideShift, 0];
    obj6[1] = items2;
    obj5[str] = interpolate.interpolate(obj6);
    obj4 = obj5;
  }
  const obj7 = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(obj1);
  const items3 = [{}, ];
  const merged2 = Object.assign(obj4);
  items3[1] = {};
  obj7.transform = items3;
  return obj7;
};
export const stackScrollInterpolator = function stackScrollInterpolator(_getCustomIndexResult, arg1) {
  let length;
  const outputRange = [1, 0, -1, -2, -3];
  const inputRange = [];
  let num = 0;
  if (0 < outputRange.length) {
    do {
      let arr = inputRange.push((_getCustomIndexResult - outputRange[num]) * tmp);
      num = num + 1;
      length = outputRange.length;
    } while (num < length);
  }
  return { inputRange, outputRange };
};
export const stackAnimatedStyles = function stackAnimatedStyles(index, interpolate, props, layoutCardOffset) {
  const tmp = props.vertical ? props.itemHeight : props.itemWidth;
  let str = "translateX";
  if (props.vertical) {
    str = "translateY";
  }
  if (layoutCardOffset) {
    let num = layoutCardOffset;
  } else {
    num = 18;
  }
  let obj = 1 === props.inactiveSlideOpacity ? [1, 1, 1, 0] : [1, 0.75, 0.5, 0];
  obj = { opacity: null, transform: null };
  obj = { inputRange: [-3, -2, -1, 0], outputRange: obj.reverse(), extrapolate: "clamp" };
  obj[0] = interpolate.interpolate(obj);
  const items = [{ scale: interpolate.interpolate({ inputRange: [-2, -1, 0, 1], outputRange: [0.8, 0.9, 1, 0.9], extrapolate: "clamp" }) }, ];
  const obj2 = {};
  const obj3 = { inputRange: [-3, -2, -1, 0, 1], outputRange: null, extrapolate: "clamp" };
  const obj1 = { scale: interpolate.interpolate({ inputRange: [-2, -1, 0, 1], outputRange: [0.8, 0.9, 1, 0.9], extrapolate: "clamp" }) };
  const diff = -Math.round(tmp * -3.75) - Math.round((tmp - tmp * 0.8) / 2);
  const items1 = [diff - Math.round(num * Math.abs(-3) / 0.8), , , , ];
  const tmp2 = -Math.round(tmp * -3.75);
  const diff1 = -Math.round(tmp * -2.5) - Math.round((tmp - tmp * 0.8) / 2);
  items1[1] = diff1 - Math.round(num * Math.abs(-2) / 0.8);
  const tmp4 = -Math.round(tmp * -2.5);
  const diff2 = -Math.round(tmp * -1.1111111111111112) - Math.round((tmp - tmp * 0.9) / 2);
  items1[2] = diff2 - Math.round(num * Math.abs(-1) / 0.9);
  items1[3] = 0;
  items1[4] = 0.5 * tmp;
  obj3[1] = items1;
  obj2[str] = interpolate.interpolate(obj3);
  items[1] = obj2;
  obj[1] = items;
  return obj;
};
export const tinderScrollInterpolator = function tinderScrollInterpolator(_getCustomIndexResult, arg1) {
  let length;
  const outputRange = [1, 0, -1, -2, -3];
  const inputRange = [];
  let num = 0;
  if (0 < outputRange.length) {
    do {
      let arr = inputRange.push((_getCustomIndexResult - outputRange[num]) * tmp);
      num = num + 1;
      length = outputRange.length;
    } while (num < length);
  }
  return { inputRange, outputRange };
};
export const tinderAnimatedStyles = function tinderAnimatedStyles(index, interpolate, props, layoutCardOffset) {
  const tmp = props.vertical ? props.itemHeight : props.itemWidth;
  let str = "translateX";
  if (props.vertical) {
    str = "translateY";
  }
  let str2 = "translateY";
  if (props.vertical) {
    str2 = "translateX";
  }
  if (layoutCardOffset) {
    let num = layoutCardOffset;
  } else {
    num = 9;
  }
  let obj = { opacity: interpolate.interpolate({ inputRange: [-3, -2, -1, 0, 1], outputRange: [0, 0.92, 0.92, 1, 0], extrapolate: "clamp" }), transform: null };
  obj = { scale: interpolate.interpolate({ inputRange: [-3, -2, -1, 0], outputRange: items, extrapolate: "clamp" }) };
  items = [0.88, 0.92, 0.96, 1];
  const items1 = [obj, , , ];
  obj = { rotate: interpolate.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "22deg"], extrapolate: "clamp" }) };
  items1[1] = obj;
  const obj1 = {};
  const obj2 = { inputRange: [-3, -2, -1, 0, 1], outputRange: null, extrapolate: "clamp" };
  const items2 = [-Math.round(tmp * -3.409090909090909), -Math.round(tmp * -2.1739130434782608), -Math.round(tmp * -1.0416666666666667), 0, 1.1 * tmp];
  obj2[1] = items2;
  obj1[str] = interpolate.interpolate(obj2);
  items1[2] = obj1;
  const obj3 = {};
  const obj4 = { inputRange: [-3, -2, -1, 0], outputRange: null, extrapolate: "clamp" };
  const items3 = [Math.round(num * Math.abs(-3) / 0.88), Math.round(num * Math.abs(-2) / 0.92), Math.round(num * Math.abs(-1) / 0.96), 0];
  obj4[1] = items3;
  obj3[str2] = interpolate.interpolate(obj4);
  items1[3] = obj3;
  obj[1] = items1;
  return obj;
};