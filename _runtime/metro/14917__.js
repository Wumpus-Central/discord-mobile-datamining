// === Module 14917: ? ===

// Module 14917
import module_14918_mod from "module_14918" /* 14918 */;

const call = prototype.call;
let module_14918 = module_14918_mod;
if (module_14918) {
  const bind = prototype.bind;
  module_14918 = bind.bind(call, call);
}
if (!module_14918) {
  module_14918 = (arg0) => {
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

export default module_14918;