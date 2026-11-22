// _runtime/metro/15543__.js
import module_15544_mod from "15544__.js";

const call = prototype.call;
let module_15544 = module_15544_mod;
if (module_15544) {
  const bind = prototype.bind;
  module_15544 = bind.bind(call, call);
}
if (!module_15544) {
  module_15544 = (arg0) => {
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

export default module_15544;
