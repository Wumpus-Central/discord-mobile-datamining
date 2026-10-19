// === Module 15359: ? ===

// Module 15359
import module_15360_mod from "module_15360" /* 15360 */;

const call = prototype.call;
let module_15360 = module_15360_mod;
if (module_15360) {
  const bind = prototype.bind;
  module_15360 = bind.bind(call, call);
}
if (!module_15360) {
  module_15360 = (arg0) => {
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

export default module_15360;