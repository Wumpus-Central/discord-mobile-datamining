// _runtime/metro/15248__.js
import module_15249_mod from "15249__.js";

const call = prototype.call;
let module_15249 = module_15249_mod;
if (module_15249) {
  const bind = prototype.bind;
  module_15249 = bind.bind(call, call);
}
if (!module_15249) {
  module_15249 = (arg0) => {
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

export default module_15249;
