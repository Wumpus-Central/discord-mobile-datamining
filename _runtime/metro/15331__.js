// _runtime/metro/15331__.js
import module_15332_mod from "15332__.js";

const call = prototype.call;
let module_15332 = module_15332_mod;
if (module_15332) {
  const bind = prototype.bind;
  module_15332 = bind.bind(call, call);
}
if (!module_15332) {
  module_15332 = (arg0) => {
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

export default module_15332;
