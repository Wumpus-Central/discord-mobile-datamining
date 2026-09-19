// _runtime/11033_parallaxLayout.js
import cancelAnimation from "01637_cancelAnimation.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "function pnpm_parallaxTs1(value){const{interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};}",
};

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
    const items = [-size + num, 0, size - num];
    const interpolateResult = cancelAnimation.interpolate(arg0, [-1, 0, 1], items);
    const items1 = [0, size, 0];
    const rounded = Math.round(
      cancelAnimation.interpolate(arg0, [-1, 0, 1], items1, cancelAnimation.Extrapolation.CLAMP),
    );
    const items2 = [parallaxAdjacentItemScale, num2, parallaxAdjacentItemScale];
    if (vertical) {
      const obj4 = { translateY: interpolateResult };
      let obj5 = obj4;
    } else {
      obj5 = { translateX: interpolateResult };
    }
    const obj6 = { transform: null, zIndex: rounded };
    const items3 = [
      obj5,
      { scale: cancelAnimation.interpolate(arg0, [-1, 0, 1], items2, cancelAnimation.Extrapolation.CLAMP) },
    ];
    obj6.transform = items3;
    return obj6;
  };
  fn.__closure = {
    interpolate: size(vertical[0]).interpolate,
    size,
    parallaxScrollingOffset: num,
    Extrapolation: size(vertical[0]).Extrapolation,
    parallaxAdjacentItemScale,
    parallaxScrollingScale: num2,
    vertical,
  };
  fn.__workletHash = 8790326555138;
  fn.__initData = num;
  return fn;
};
