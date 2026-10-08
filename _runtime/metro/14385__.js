// === Module 14385: ? ===

// Module 14385
import module_14386_mod from "module_14386" /* 14386 */;

const call = prototype.call;
let module_14386 = module_14386_mod;
if (module_14386) {
  const bind = prototype.bind;
  module_14386 = bind.bind(call, call);
}
if (!module_14386) {
  module_14386 = (arg0) => {
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

export default module_14386;