// === Module 15566: ? ===

// Module 15566
import module_15567_mod from "module_15567" /* 15567 */;

const call = prototype.call;
let module_15567 = module_15567_mod;
if (module_15567) {
  const bind = prototype.bind;
  module_15567 = bind.bind(call, call);
}
if (!module_15567) {
  module_15567 = (arg0) => {
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

export default module_15567;