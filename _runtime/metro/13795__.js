// === Module 13795: ? ===

// Module 13795
import module_13796_mod from "module_13796" /* 13796 */;

const call = prototype.call;
let module_13796 = module_13796_mod;
if (module_13796) {
  const bind = prototype.bind;
  module_13796 = bind.bind(call, call);
}
if (!module_13796) {
  module_13796 = (arg0) => {
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

export default module_13796;