// === Module 15506: ? ===

// Module 15506
import module_15507_mod from "module_15507" /* 15507 */;

const call = prototype.call;
let module_15507 = module_15507_mod;
if (module_15507) {
  const bind = prototype.bind;
  module_15507 = bind.bind(call, call);
}
if (!module_15507) {
  module_15507 = (arg0) => {
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

export default module_15507;