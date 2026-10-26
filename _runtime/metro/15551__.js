// === Module 15551: ? ===

// Module 15551
import module_15552_mod from "module_15552" /* 15552 */;

const call = prototype.call;
let module_15552 = module_15552_mod;
if (module_15552) {
  const bind = prototype.bind;
  module_15552 = bind.bind(call, call);
}
if (!module_15552) {
  module_15552 = (arg0) => {
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

export default module_15552;