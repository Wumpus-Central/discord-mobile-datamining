// _runtime/10469_parallaxLayout.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_parallaxTs1(value){const{interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};}" };
arg5.parallaxLayout = function parallaxLayout(size) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  size = undefined;
  let vertical;
  let num;
  let num2;
  let parallaxAdjacentItemScale;
  size = size.size;
  vertical = size.vertical;
  const parallaxScrollingOffset = obj.parallaxScrollingOffset;
  num = 100;
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
    let obj = size(vertical[0]);
    const items = [-size + num, 0, size - num];
    const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
    const items1 = [0, size, 0];
    const zIndex = Math.round(size(vertical[0]).interpolate(arg0, [-1, 0, 1], items1, size(vertical[0]).Extrapolation.CLAMP));
    const obj2 = size(vertical[0]);
    const items2 = [parallaxAdjacentItemScale, num2, parallaxAdjacentItemScale];
    const obj3 = size(vertical[0]);
    if (vertical) {
      obj = { translateY: null };
      obj[0] = interpolateResult;
    } else {
      obj = { translateX: null };
      obj[0] = interpolateResult;
    }
    const transform = [obj, { scale: size(vertical[0]).interpolate(arg0, [-1, 0, 1], items2, size(vertical[0]).Extrapolation.CLAMP) }];
    return { transform, zIndex };
  };
  obj = { interpolate: size(vertical[0]).interpolate, size, parallaxScrollingOffset: num, Extrapolation: size(vertical[0]).Extrapolation, parallaxAdjacentItemScale, parallaxScrollingScale: num2, vertical };
  fn.__closure = obj;
  fn.__workletHash = 8790326555138;
  fn.__initData = num;
  return fn;
};