// === Module 14068: ? ===

// Module 14068
import module_14069_mod from "module_14069" /* 14069 */;

const call = prototype.call;
let module_14069 = module_14069_mod;
if (module_14069) {
  const bind = prototype.bind;
  module_14069 = bind.bind(call, call);
}
if (!module_14069) {
  module_14069 = (arg0) => {
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

export default module_14069;