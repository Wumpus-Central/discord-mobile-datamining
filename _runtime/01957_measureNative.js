// _runtime/01957_measureNative.js
import _mod1958 from "metro/01958__.js";

const items = [
  {
    code: "(function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){let[measure]=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};})",
  },
  _mod1958.measure,
];
let c0;
[tmp2, tmp3] = items;
function getRelativeCoords(arg0, arg1, arg2) {
  const tmp = _undefined(arg0);
  let tmp2 = null;
  if (null !== tmp) {
    const point = { x: arg1 - tmp.pageX, y: arg2 - tmp.pageY };
    tmp2 = point;
  }
  return tmp2;
}
const items1 = [tmp3];
getRelativeCoords.__closure = items1;
getRelativeCoords.__workletHash = 12536215291759;
getRelativeCoords.__initData = tmp2;

export { getRelativeCoords };
