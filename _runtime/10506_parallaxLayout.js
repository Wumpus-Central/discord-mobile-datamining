// === Module 10506: parallaxLayout ===

// Module 10506 (parallaxLayout)
import _mod1643 from "module_1643" /* 1643 */;

let closure_2 = { code: "function pnpm_parallaxTs1(value){const{interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};}" };

export const parallaxLayout = function parallaxLayout(size) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  size = undefined;
  let num2;
  let parallaxAdjacentItemScale;
  size = size.size;
  const vertical = size.vertical;
  const parallaxScrollingOffset = obj.parallaxScrollingOffset;
  let num = 100;
  if (undefined !== parallaxScrollingOffset) {
    num = parallaxScrollingOffset;
  }
  const parallaxScrollingScale = obj.parallaxScrollingScale;
  num2 = 0.8;
  if (undefined !== parallaxScrollingScale) {
    num2 = parallaxScrollingScale;
  }
  parallaxAdjacentItemScale = obj.parallaxAdjacentItemScale;
  if (undefined === parallaxAdjacentItemScale) {
    parallaxAdjacentItemScale = num2 ** 2;
  }
  const fn = function o(arg0) {
    let items3;
    let obj5;
    const items = [-size + num, 0, size - num];
    const obj = _mod1643;
    const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
    const items1 = [0, size, 0];
    const obj2 = _mod1643;
    const items2 = [parallaxAdjacentItemScale, num2, parallaxAdjacentItemScale];
    const roundResult = round(obj2.interpolate(arg0, [-1, 0, 1], items1, _mod1643.Extrapolation.CLAMP));
    const obj3 = _mod1643;
    const interpolateResult1 = obj3.interpolate(arg0, [-1, 0, 1], items2, _mod1643.Extrapolation.CLAMP);
    if (vertical) {
      obj5 = { translateY: interpolateResult };
      const obj4 = { translateY: interpolateResult };
    } else {
      obj5 = { translateX: interpolateResult };
    }
    const obj6 = { transform: items3, zIndex: roundResult };
    items3 = [obj5, { scale: interpolateResult1 }];
    return obj6;
  };
  let obj2 = { interpolate: size(vertical[0]).interpolate, size, parallaxScrollingOffset: num, Extrapolation: size(vertical[0]).Extrapolation, parallaxAdjacentItemScale, parallaxScrollingScale: num2, vertical };
  fn.__closure = obj2;
  fn.__workletHash = 8790326555138;
  fn.__initData = num;
  return fn;
};