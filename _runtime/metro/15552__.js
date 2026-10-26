// === Module 15552: ? ===

// Module 15552
import module_15553_mod from "module_15553" /* 15553 */;

const call = prototype.call;
let module_15553 = module_15553_mod;
if (module_15553) {
  const bind = prototype.bind;
  module_15553 = bind.bind(call, call);
}
if (!module_15553) {
  module_15553 = (arg0) => {
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

export default module_15553;