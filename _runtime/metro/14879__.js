// _runtime/metro/14879__.js
import module_14880_mod from "14880__.js";

const call = prototype.call;
let module_14880 = module_14880_mod;
if (module_14880) {
  const bind = prototype.bind;
  module_14880 = bind.bind(call, call);
}
if (!module_14880) {
  module_14880 = (arg0) => {
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

export default module_14880;
