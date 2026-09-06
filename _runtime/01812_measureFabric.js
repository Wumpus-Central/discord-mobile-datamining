// _runtime/01812_measureFabric.js
import _mod1813 from "metro/01813__.js";

require = fn;
const dependencyMap = arg6;
function getRelativeCoords(arg0, arg1, arg2) {
  const measureResult = _mod1813.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
getRelativeCoords.__closure = { measure: fn(1813).measure };
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = {
  code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}",
};

export { getRelativeCoords };
