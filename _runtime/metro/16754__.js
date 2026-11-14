// _runtime/metro/16754__.js
import module_16755_mod from "16755__.js";

const call = prototype.call;
let module_16755 = module_16755_mod;
if (module_16755) {
  const bind = prototype.bind;
  module_16755 = bind.bind(call, call);
}
if (!module_16755) {
  module_16755 = (arg0) => {
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

export default module_16755;
