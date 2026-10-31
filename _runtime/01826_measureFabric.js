// === Module 1826: measureFabric ===

// Module 1826 (measureFabric)
import _mod1827 from "module_1827" /* 1827 */;

require = fn;
const dependencyMap = arg6;
function getRelativeCoords(arg0, arg1, arg2) {
  const measureResult = _mod1827.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
getRelativeCoords.__closure = { measure: fn(1827).measure };
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };

export { getRelativeCoords };