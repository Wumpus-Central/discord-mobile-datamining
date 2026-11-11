// === Module 16636: ? ===

// Module 16636
import module_16637_mod from "module_16637" /* 16637 */;

const call = prototype.call;
let module_16637 = module_16637_mod;
if (module_16637) {
  const bind = prototype.bind;
  module_16637 = bind.bind(call, call);
}
if (!module_16637) {
  module_16637 = (arg0) => {
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

export default module_16637;