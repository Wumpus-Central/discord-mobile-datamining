// === Module 14523: ? ===

// Module 14523
import module_14524_mod from "module_14524" /* 14524 */;

const call = prototype.call;
let module_14524 = module_14524_mod;
if (module_14524) {
  const bind = prototype.bind;
  module_14524 = bind.bind(call, call);
}
if (!module_14524) {
  module_14524 = (arg0) => {
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

export default module_14524;