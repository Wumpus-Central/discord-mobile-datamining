// === Module 15588: ? ===

// Module 15588
import module_15589_mod from "module_15589" /* 15589 */;

const call = prototype.call;
let module_15589 = module_15589_mod;
if (module_15589) {
  const bind = prototype.bind;
  module_15589 = bind.bind(call, call);
}
if (!module_15589) {
  module_15589 = (arg0) => {
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

export default module_15589;