// === Module 15377: ? ===

// Module 15377
import module_15378_mod from "module_15378" /* 15378 */;

const call = prototype.call;
let module_15378 = module_15378_mod;
if (module_15378) {
  const bind = prototype.bind;
  module_15378 = bind.bind(call, call);
}
if (!module_15378) {
  module_15378 = (arg0) => {
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

export default module_15378;