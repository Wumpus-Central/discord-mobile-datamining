// === Module 15472: ? ===

// Module 15472
import module_15473_mod from "module_15473" /* 15473 */;

const call = prototype.call;
let module_15473 = module_15473_mod;
if (module_15473) {
  const bind = prototype.bind;
  module_15473 = bind.bind(call, call);
}
if (!module_15473) {
  module_15473 = (arg0) => {
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

export default module_15473;