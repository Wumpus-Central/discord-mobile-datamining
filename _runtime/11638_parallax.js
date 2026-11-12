// _runtime/11638_parallax.js
import _mod1652 from "metro/01652__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function pnpm_parallaxTs1(value){let[interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical]=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};})",
};

export function parallaxLayout(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const parallaxScrollingOffset = obj.parallaxScrollingOffset;
  let num = 100;
  ({ size, vertical } = arg0);
  if (undefined !== parallaxScrollingOffset) {
    num = parallaxScrollingOffset;
  }
  const parallaxScrollingScale = obj.parallaxScrollingScale;
  let num2 = 0.8;
  if (undefined !== parallaxScrollingScale) {
    num2 = parallaxScrollingScale;
  }
  let parallaxAdjacentItemScale = obj.parallaxAdjacentItemScale;
  if (undefined === parallaxAdjacentItemScale) {
    parallaxAdjacentItemScale = num2 ** 2;
  }
  items = [
    closure_2,
    _mod1652.interpolate,
    size,
    num,
    _mod1652.Extrapolation,
    parallaxAdjacentItemScale,
    num2,
    vertical,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_parallaxTs1(arg0) {
    items = [-c1 + c2, 0, c1 - c2];
    const tmp = _undefined(arg0, [-1, 0, 1], items);
    const items1 = [0, c1, 0];
    const items2 = [c4, c5, c4];
    const rounded = Math.round(_undefined(arg0, [-1, 0, 1], items1, _undefined2.CLAMP));
    if (c6) {
      const obj2 = { translateY: tmp };
      let obj = obj2;
    } else {
      obj = { translateX: tmp };
    }
    const obj3 = { transform: null, zIndex: rounded };
    const items3 = [obj, { scale: _undefined(arg0, [-1, 0, 1], items2, _undefined2.CLAMP) }];
    obj3.transform = items3;
    return obj3;
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_parallaxTs1.__closure = items1;
  pnpm_parallaxTs1.__workletHash = 1463912377211;
  pnpm_parallaxTs1.__initData = tmp2;
  return pnpm_parallaxTs1;
}
