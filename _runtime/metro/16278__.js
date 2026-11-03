// === Module 16278: ? ===

// Module 16278
import module_16279_mod from "module_16279" /* 16279 */;

const call = prototype.call;
let module_16279 = module_16279_mod;
if (module_16279) {
  const bind = prototype.bind;
  module_16279 = bind.bind(call, call);
}
if (!module_16279) {
  module_16279 = (arg0) => {
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

export default module_16279;