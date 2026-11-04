// === Module 16380: ? ===

// Module 16380
import module_16381_mod from "module_16381" /* 16381 */;

const call = prototype.call;
let module_16381 = module_16381_mod;
if (module_16381) {
  const bind = prototype.bind;
  module_16381 = bind.bind(call, call);
}
if (!module_16381) {
  module_16381 = (arg0) => {
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

export default module_16381;