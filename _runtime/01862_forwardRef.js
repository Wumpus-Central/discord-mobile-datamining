// _runtime/01862_forwardRef.js
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";

({ useMemo: c3, forwardRef } = noop);
noopDefault;
const jsx = jsxProd.jsx;
let closure_5 = {
  code: "function pnpm_indexTsx1(){const{interpolate,progress,closed,opened,enabled,height}=this.__closure;const offset=interpolate(progress.value,[0,1],[closed,opened]);return{transform:[{translateY:enabled?height.value+offset:closed}]};}",
};

export default forwardRef((offset, ref) => {
  offset = offset.offset;
  if (offset === undefined) {
    offset = {};
  }
  let num = offset.closed;
  if (num === undefined) {
    num = 0;
  }
  let num2 = offset.opened;
  if (num2 === undefined) {
    num2 = 0;
  }
  const style = offset.style;
  let flag = offset.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(offset, Object.create(null));
  let height;
  let progress;
  let animatedStyle;
  const reanimatedKeyboardAnimation = num(style[2]).useReanimatedKeyboardAnimation();
  height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  const obj2 = num(style[2]);
  const fn = function h() {
    num(style[3]);
    let sum = num;
    const items = [num, num2];
    if (flag) {
      sum = height.value + tmp3;
    }
    const transform = [{ translateY: sum }];
    return { transform };
  };
  let obj = { interpolate: num(style[3]).interpolate, progress, closed: num, opened: num2, enabled: flag, height };
  fn.__closure = obj;
  fn.__workletHash = 13627085806149;
  fn.__initData = progress;
  let items = [num, num2, flag];
  animatedStyle = num(style[3]).useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  const obj3 = num(style[3]);
  obj = {
    ref,
    style: flag(() => {
      const items = [style, animatedStyle];
      return items;
    }, items1),
  };
  const merged1 = Object.assign(merged);
  obj.children = offset.children;
  return height(num2(style[3]).View, obj);
});
