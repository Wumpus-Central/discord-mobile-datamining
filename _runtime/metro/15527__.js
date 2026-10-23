// === Module 15527: ? ===

// Module 15527
import module_15528_mod from "module_15528" /* 15528 */;

const call = prototype.call;
let module_15528 = module_15528_mod;
if (module_15528) {
  const bind = prototype.bind;
  module_15528 = bind.bind(call, call);
}
if (!module_15528) {
  module_15528 = (arg0) => {
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

export default module_15528;