// === Module 15327: ? ===

// Module 15327
import module_15328_mod from "module_15328" /* 15328 */;

const call = prototype.call;
let module_15328 = module_15328_mod;
if (module_15328) {
  const bind = prototype.bind;
  module_15328 = bind.bind(call, call);
}
if (!module_15328) {
  module_15328 = (arg0) => {
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

export default module_15328;