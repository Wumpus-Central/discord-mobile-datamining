// === Module 16367: ? ===

// Module 16367
import module_16368_mod from "module_16368" /* 16368 */;

const call = prototype.call;
let module_16368 = module_16368_mod;
if (module_16368) {
  const bind = prototype.bind;
  module_16368 = bind.bind(call, call);
}
if (!module_16368) {
  module_16368 = (arg0) => {
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

export default module_16368;