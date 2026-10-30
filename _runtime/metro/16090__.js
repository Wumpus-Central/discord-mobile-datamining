// _runtime/metro/16090__.js
import module_16091_mod from "16091__.js";

const call = prototype.call;
let module_16091 = module_16091_mod;
if (module_16091) {
  const bind = prototype.bind;
  module_16091 = bind.bind(call, call);
}
if (!module_16091) {
  module_16091 = (arg0) => {
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

export default module_16091;
