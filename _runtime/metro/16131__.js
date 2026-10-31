// _runtime/metro/16131__.js
import module_16132_mod from "16132__.js";

const call = prototype.call;
let module_16132 = module_16132_mod;
if (module_16132) {
  const bind = prototype.bind;
  module_16132 = bind.bind(call, call);
}
if (!module_16132) {
  module_16132 = (arg0) => {
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

export default module_16132;
