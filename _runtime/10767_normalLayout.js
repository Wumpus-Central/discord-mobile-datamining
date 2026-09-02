// === Module 10767: normalLayout ===

// Module 10767 (normalLayout)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_normalTs1(value){const{interpolate,size,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};}" };
arg5.normalLayout = function normalLayout(size) {
  size = size.size;
  const vertical = size.vertical;
  const fn = function l(arg0) {
    let obj = size(vertical[0]);
    const items = [-size, 0, size];
    const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
    if (vertical) {
      obj = { translateY: null };
      obj[0] = interpolateResult;
    } else {
      obj = { translateX: null };
      obj[0] = interpolateResult;
    }
    const transform = [obj];
    return { transform };
  };
  fn.__closure = { interpolate: size(vertical[0]).interpolate, size, vertical };
  fn.__workletHash = 8970171423653;
  fn.__initData = closure_2;
  return fn;
};