// === Module 10900: normalLayout ===

// Module 10900 (normalLayout)
import cancelAnimation from "cancelAnimation" /* 1636 */;

require = arg1;
const dependencyMap = arg6;
const __initData = { code: "function pnpm_normalTs1(value){const{interpolate,size,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};}" };

export const normalLayout = function normalLayout(size) {
  size = size.size;
  const vertical = size.vertical;
  const fn = function l(arg0) {
    const items = [-size, 0, size];
    const interpolateResult = cancelAnimation.interpolate(arg0, [-1, 0, 1], items);
    if (vertical) {
      const obj2 = { translateY: interpolateResult };
      let obj3 = obj2;
    } else {
      obj3 = { translateX: interpolateResult };
    }
    const obj4 = { transform: null };
    const items1 = [obj3];
    obj4.transform = items1;
    return obj4;
  };
  fn.__closure = { interpolate: size(vertical[0]).interpolate, size, vertical };
  fn.__workletHash = 8970171423653;
  fn.__initData = __initData;
  return fn;
};