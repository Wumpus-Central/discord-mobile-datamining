// _runtime/metro/15449__.js
import module_15450_mod from "15450__.js";

const call = prototype.call;
let module_15450 = module_15450_mod;
if (module_15450) {
  const bind = prototype.bind;
  module_15450 = bind.bind(call, call);
}
if (!module_15450) {
  module_15450 = (arg0) => {
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

export default module_15450;
