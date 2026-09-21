// === Module 14584: ? ===

// Module 14584
import module_14585_mod from "module_14585" /* 14585 */;

const call = prototype.call;
let module_14585 = module_14585_mod;
if (module_14585) {
  const bind = prototype.bind;
  module_14585 = bind.bind(call, call);
}
if (!module_14585) {
  module_14585 = (arg0) => {
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

export default module_14585;