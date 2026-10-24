// === Module 15547: ? ===

// Module 15547
import module_15548_mod from "module_15548" /* 15548 */;

const call = prototype.call;
let module_15548 = module_15548_mod;
if (module_15548) {
  const bind = prototype.bind;
  module_15548 = bind.bind(call, call);
}
if (!module_15548) {
  module_15548 = (arg0) => {
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

export default module_15548;