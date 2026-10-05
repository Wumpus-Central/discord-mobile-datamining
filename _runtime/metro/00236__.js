// _runtime/metro/00236__.js
import _mod39 from "00039__.js";

let fn;
let closure_0;
if (true === global.RN$Bridgeless) {
  fn = (arg0, fn) => {
    let closure_0 = fn;
    if (typeof fn !== "function") {
      const result = global.RN$registerCallableModule(arg0, () => closure_0);
    } else {
      const result1 = global.RN$registerCallableModule(arg0, fn);
    }
  };
} else {
  closure_0 = _mod39.default;
  fn = (ReactFabric, fn) => {
    if (typeof fn !== "function") {
      const result = closure_0.registerCallableModule(ReactFabric, fn);
    } else {
      const result1 = closure_0.registerLazyCallableModule(ReactFabric, fn);
    }
  };
}

export default fn;
