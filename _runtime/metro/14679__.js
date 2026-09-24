// _runtime/metro/14679__.js
import module_14680_mod from "14680__.js";

const call = prototype.call;
let module_14680 = module_14680_mod;
if (module_14680) {
  const bind = prototype.bind;
  module_14680 = bind.bind(call, call);
}
if (!module_14680) {
  module_14680 = (arg0) => {
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

export default module_14680;
