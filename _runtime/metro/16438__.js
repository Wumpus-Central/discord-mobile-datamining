// === Module 16438: ? ===

// Module 16438
import module_16439_mod from "module_16439" /* 16439 */;

const call = prototype.call;
let module_16439 = module_16439_mod;
if (module_16439) {
  const bind = prototype.bind;
  module_16439 = bind.bind(call, call);
}
if (!module_16439) {
  module_16439 = (arg0) => {
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

export default module_16439;