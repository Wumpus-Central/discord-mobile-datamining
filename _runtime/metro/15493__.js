// _runtime/metro/15493__.js
import module_15494_mod from "15494__.js";

const call = prototype.call;
let module_15494 = module_15494_mod;
if (module_15494) {
  const bind = prototype.bind;
  module_15494 = bind.bind(call, call);
}
if (!module_15494) {
  module_15494 = (arg0) => {
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

export default module_15494;
