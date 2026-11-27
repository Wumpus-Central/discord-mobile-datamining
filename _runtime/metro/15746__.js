// _runtime/metro/15746__.js
import module_15747_mod from "15747__.js";

const call = prototype.call;
let module_15747 = module_15747_mod;
if (module_15747) {
  const bind = prototype.bind;
  module_15747 = bind.bind(call, call);
}
if (!module_15747) {
  module_15747 = (arg0) => {
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

export default module_15747;
