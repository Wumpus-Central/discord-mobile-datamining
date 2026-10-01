// === Module 13999: ? ===

// Module 13999
import module_14000_mod from "module_14000" /* 14000 */;

const call = prototype.call;
let module_14000 = module_14000_mod;
if (module_14000) {
  const bind = prototype.bind;
  module_14000 = bind.bind(call, call);
}
if (!module_14000) {
  module_14000 = (arg0) => {
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

export default module_14000;