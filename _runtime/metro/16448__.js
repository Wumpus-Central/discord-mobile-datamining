// === Module 16448: ? ===

// Module 16448
import module_16449_mod from "module_16449" /* 16449 */;

const call = prototype.call;
let module_16449 = module_16449_mod;
if (module_16449) {
  const bind = prototype.bind;
  module_16449 = bind.bind(call, call);
}
if (!module_16449) {
  module_16449 = (arg0) => {
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

export default module_16449;