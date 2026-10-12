// _runtime/metro/14558__.js
import module_14559_mod from "14559__.js";

const call = prototype.call;
let module_14559 = module_14559_mod;
if (module_14559) {
  const bind = prototype.bind;
  module_14559 = bind.bind(call, call);
}
if (!module_14559) {
  module_14559 = (arg0) => {
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

export default module_14559;
