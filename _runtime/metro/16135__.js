// _runtime/metro/16135__.js
import module_16136_mod from "16136__.js";

const call = prototype.call;
let module_16136 = module_16136_mod;
if (module_16136) {
  const bind = prototype.bind;
  module_16136 = bind.bind(call, call);
}
if (!module_16136) {
  module_16136 = (arg0) => {
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

export default module_16136;
