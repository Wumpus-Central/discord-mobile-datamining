// _runtime/metro/13796__.js
import module_13797_mod from "13797__.js";

const call = prototype.call;
let module_13797 = module_13797_mod;
if (module_13797) {
  const bind = prototype.bind;
  module_13797 = bind.bind(call, call);
}
if (!module_13797) {
  module_13797 = (arg0) => {
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

export default module_13797;
