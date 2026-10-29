// === Module 16050: ? ===

// Module 16050
import module_16051_mod from "module_16051" /* 16051 */;

const call = prototype.call;
let module_16051 = module_16051_mod;
if (module_16051) {
  const bind = prototype.bind;
  module_16051 = bind.bind(call, call);
}
if (!module_16051) {
  module_16051 = (arg0) => {
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

export default module_16051;