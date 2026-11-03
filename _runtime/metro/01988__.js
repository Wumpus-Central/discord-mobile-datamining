// === Module 1988: ? ===

// Module 1988
import jsxProd from "jsxProd" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1973 from "module_1973" /* 1973 */;
import noop_mod from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

let noop = noop_mod;
({ useMemo: c3, forwardRef } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
let closure_5 = { code: "(function pnpm_indexTsx1(){let[interpolate,progress,closed,opened,enabled,height]=this.__closure;const offset=interpolate(progress.value,[0,1],[closed,opened]);return{transform:[{translateY:enabled?height.value+offset:closed}]};})" };

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
  c0 = style;
  let flag = offset.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(offset, Object.assign({ children: 0, offset: 0, style: 0, enabled: 0 }));
  const reanimatedKeyboardAnimation = _mod1973.useReanimatedKeyboardAnimation();
  ({ height, progress } = reanimatedKeyboardAnimation);
  items = [_undefined, _mod1652.interpolate, progress, num, num2, flag, height];
  c0 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  function pnpm_indexTsx1() {
    let sum = c2;
    items = [c2, c3];
    if (c4) {
      sum = _undefined.value + tmp2;
    }
    const obj = { transform: null };
    const items1 = [{ translateY: sum }];
    obj.transform = items1;
    return obj;
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 10955093481628;
  pnpm_indexTsx1.__initData = tmp4;
  const items2 = [num, num2, flag];
  const animatedStyle = _mod1652.useAnimatedStyle(pnpm_indexTsx1, items2);
  const items3 = [style, animatedStyle];
  let obj = {
    ref,
    style: React3(() => {
      items = [c0, animatedStyle];
      return items;
    }, items3)
  };
  const merged1 = Object.assign(merged);
  obj.children = offset.children;
  return jsx(_modDef1652.View, {
    ref,
    style: React3(() => {
      items = [c0, animatedStyle];
      return items;
    }, items3)
  });
});