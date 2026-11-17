// === Module 16789: ? ===

// Module 16789
import module_16790_mod from "module_16790" /* 16790 */;

const call = prototype.call;
let module_16790 = module_16790_mod;
if (module_16790) {
  const bind = prototype.bind;
  module_16790 = bind.bind(call, call);
}
if (!module_16790) {
  module_16790 = (arg0) => {
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

export default module_16790;