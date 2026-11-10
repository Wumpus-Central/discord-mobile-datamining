// === Module 16475: ? ===

// Module 16475
import module_16476_mod from "module_16476" /* 16476 */;

const call = prototype.call;
let module_16476 = module_16476_mod;
if (module_16476) {
  const bind = prototype.bind;
  module_16476 = bind.bind(call, call);
}
if (!module_16476) {
  module_16476 = (arg0) => {
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

export default module_16476;