// === Module 14428: ? ===

// Module 14428
import module_14429_mod from "module_14429" /* 14429 */;

const call = prototype.call;
let module_14429 = module_14429_mod;
if (module_14429) {
  const bind = prototype.bind;
  module_14429 = bind.bind(call, call);
}
if (!module_14429) {
  module_14429 = (arg0) => {
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

export default module_14429;