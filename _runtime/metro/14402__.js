// === Module 14402: ? ===

// Module 14402
import module_14403_mod from "module_14403" /* 14403 */;

const call = prototype.call;
let module_14403 = module_14403_mod;
if (module_14403) {
  const bind = prototype.bind;
  module_14403 = bind.bind(call, call);
}
if (!module_14403) {
  module_14403 = (arg0) => {
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

export default module_14403;