// _runtime/10771_normalLayout.js
import cancelAnimation from "01636_cancelAnimation.js";

require = arg1;
const dependencyMap = arg6;
const __initData = {
  code: "function pnpm_normalTs1(value){const{interpolate,size,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};}",
};

export const normalLayout = function normalLayout(size) {
  size = size.size;
  const vertical = size.vertical;
  const fn = function l(arg0) {
    let obj = cancelAnimation;
    const items = [-size, 0, size];
    const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
    if (vertical) {
      obj = { translateY: interpolateResult };
    } else {
      obj = { translateX: interpolateResult };
    }
    const obj1 = { transform: null };
    const items1 = [obj];
    obj1.transform = items1;
    return obj1;
  };
  fn.__closure = { interpolate: size(vertical[0]).interpolate, size, vertical };
  fn.__workletHash = 8970171423653;
  fn.__initData = __initData;
  return fn;
};
