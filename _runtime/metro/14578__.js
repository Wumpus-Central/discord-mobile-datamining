// === Module 14578: ? ===

// Module 14578
import module_14579_mod from "module_14579" /* 14579 */;

const call = prototype.call;
let module_14579 = module_14579_mod;
if (module_14579) {
  const bind = prototype.bind;
  module_14579 = bind.bind(call, call);
}
if (!module_14579) {
  module_14579 = (arg0) => {
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

export default module_14579;