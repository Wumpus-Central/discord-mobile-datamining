// _runtime/metro/16631__.js
import module_16632_mod from "16632__.js";

const call = prototype.call;
let module_16632 = module_16632_mod;
if (module_16632) {
  const bind = prototype.bind;
  module_16632 = bind.bind(call, call);
}
if (!module_16632) {
  module_16632 = (arg0) => {
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

export default module_16632;
