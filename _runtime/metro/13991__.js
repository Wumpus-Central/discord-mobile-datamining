// === Module 13991: ? ===

// Module 13991
import module_13992_mod from "module_13992" /* 13992 */;

const call = prototype.call;
let module_13992 = module_13992_mod;
if (module_13992) {
  const bind = prototype.bind;
  module_13992 = bind.bind(call, call);
}
if (!module_13992) {
  module_13992 = (arg0) => {
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

export default module_13992;