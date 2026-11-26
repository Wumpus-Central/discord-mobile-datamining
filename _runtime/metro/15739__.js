// _runtime/metro/15739__.js
import module_15740_mod from "15740__.js";

const call = prototype.call;
let module_15740 = module_15740_mod;
if (module_15740) {
  const bind = prototype.bind;
  module_15740 = bind.bind(call, call);
}
if (!module_15740) {
  module_15740 = (arg0) => {
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

export default module_15740;
