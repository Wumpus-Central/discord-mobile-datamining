// === Module 15422: ? ===

// Module 15422
import module_15423_mod from "module_15423" /* 15423 */;

const call = prototype.call;
let module_15423 = module_15423_mod;
if (module_15423) {
  const bind = prototype.bind;
  module_15423 = bind.bind(call, call);
}
if (!module_15423) {
  module_15423 = (arg0) => {
    closure_0 = arg0;
    return () => {
      const apply = call.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(closure_0);
      } else {
        applyArgumentsResult = apply(closure_0, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_15423;