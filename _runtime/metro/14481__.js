// _runtime/metro/14481__.js
import module_14482_mod from "14482__.js";

const call = prototype.call;
let module_14482 = module_14482_mod;
if (module_14482) {
  const bind = prototype.bind;
  module_14482 = bind.bind(call, call);
}
if (!module_14482) {
  module_14482 = (arg0) => {
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

export default module_14482;
