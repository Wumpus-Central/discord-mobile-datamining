// === Module 1845: ? ===

// Module 1845
import jsxProd from "jsxProd" /* 21 */;
import cancelAnimation from "cancelAnimation" /* 1636 */;
import noop from "module_19" /* 19 */;

({ useMemo: c3, forwardRef } = noop);
const jsx = jsxProd.jsx;
let closure_5 = { code: "function pnpm_indexTsx1(){const{interpolate,progress,closed,opened,enabled,height}=this.__closure;const offset=interpolate(progress.value,[0,1],[closed,opened]);return{transform:[{translateY:enabled?height.value+offset:closed}]};}" };

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
  const merged = Object.assign(offset, Object.assign({ children: 0, offset: 0, style: 0, enabled: 0 }));
  const reanimatedKeyboardAnimation = num(style[2]).useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  const progress = reanimatedKeyboardAnimation.progress;
  const obj2 = num(style[2]);
  const fn = function h() {
    cancelAnimation;
    let sum = num;
    const items = [num, num2];
    if (flag) {
      sum = height.value + tmp3;
    }
    const obj = { transform: null };
    const items1 = [{ translateY: sum }];
    obj.transform = items1;
    return obj;
  };
  let obj = { interpolate: num(style[3]).interpolate, progress, closed: num, opened: num2, enabled: flag, height };
  fn.__closure = obj;
  fn.__workletHash = 13627085806149;
  fn.__initData = progress;
  let items = [num, num2, flag];
  const animatedStyle = num(style[3]).useAnimatedStyle(fn, items);
  let items1 = [style, animatedStyle];
  const obj3 = num(style[3]);
  obj = {
    ref,
    style: flag(() => {
      const items = [style, animatedStyle];
      return items;
    }, items1)
  };
  const merged1 = Object.assign(merged);
  obj.children = offset.children;
  return height(num2(style[3]).View, obj);
});