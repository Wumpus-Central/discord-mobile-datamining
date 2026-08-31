// _runtime/01829_getRelativeCoords.js
import measureFabric from "01830_measureFabric.js";

require = arg1;
const dependencyMap = arg6;
function getRelativeCoords(arg0, arg1, arg2) {
  let obj = measureFabric;
  const measureResult = obj.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    obj = { x: null, y: null };
    obj[0] = arg1 - measureResult.pageX;
    obj[1] = arg2 - measureResult.pageY;
    tmp2 = obj;
  }
  return tmp2;
}
getRelativeCoords.__closure = { measure: require("measureFabric").measure };
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };
arg5.getRelativeCoords = getRelativeCoords;