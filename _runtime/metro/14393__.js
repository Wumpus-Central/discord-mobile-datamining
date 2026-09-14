// === Module 14393: ? ===

// Module 14393
import module_14394_mod from "module_14394" /* 14394 */;

const call = prototype.call;
let module_14394 = module_14394_mod;
if (module_14394) {
  const bind = prototype.bind;
  module_14394 = bind.bind(call, call);
}
if (!module_14394) {
  module_14394 = (arg0) => {
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

export default module_14394;