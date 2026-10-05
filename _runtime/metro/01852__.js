// _runtime/metro/01852__.js
import Fragment from "../react/00021_Fragment.js";
import _mod1643 from "01643__.js";
import react_mod from "../00019_react.js";

let c3;
let forwardRef;
let react = react_mod;
({ useMemo: c3, forwardRef } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_5 = {
  code: "function pnpm_indexTsx1(){const{interpolate,progress,closed,opened,enabled,height}=this.__closure;const offset=interpolate(progress.value,[0,1],[closed,opened]);return{transform:[{translateY:enabled?height.value+offset:closed}]};}",
};

export default forwardRef((offset, ref) => {
  offset = offset.offset;
  const children = offset.children;
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
  const merged = Object.assign(offset, Object.assign({ children: 0, offset: 0, style: 0, enabled: 0 }));
  const obj2 = num(style[2]);
  const reanimatedKeyboardAnimation = obj2.useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  const progress = reanimatedKeyboardAnimation.progress;
  const fn = function h() {
    let items1;
    _mod1643;
    let sum = num;
    const items = [num, num2];
    if (flag) {
      sum = height.value + tmp3;
    }
    const obj = { transform: items1 };
    items1 = [{ translateY: sum }];
    return obj;
  };
  const obj3 = num(style[3]);
  let obj = { interpolate: num(style[3]).interpolate, progress, closed: num, opened: num2, enabled: flag, height };
  fn.__closure = obj;
  fn.__workletHash = 13627085806149;
  fn.__initData = progress;
  let items = [num, num2, flag];
  const animatedStyle = obj3.useAnimatedStyle(fn, items);
  let items1 = [style, animatedStyle];
  const obj4 = {
    ref,
    style: flag(() => {
      const items = [style, animatedStyle];
      return items;
    }, items1),
    children,
  };
  const View = num2(style[3]).View;
  const merged1 = Object.assign(merged);
  return height(View, obj4);
});
