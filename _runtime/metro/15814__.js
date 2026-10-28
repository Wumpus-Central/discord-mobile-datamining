// === Module 15814: ? ===

// Module 15814
import module_15815_mod from "module_15815" /* 15815 */;

const call = prototype.call;
let module_15815 = module_15815_mod;
if (module_15815) {
  const bind = prototype.bind;
  module_15815 = bind.bind(call, call);
}
if (!module_15815) {
  module_15815 = (arg0) => {
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

export default module_15815;