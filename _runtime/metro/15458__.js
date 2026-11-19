// _runtime/metro/15458__.js
import module_15459_mod from "15459__.js";

const call = prototype.call;
let module_15459 = module_15459_mod;
if (module_15459) {
  const bind = prototype.bind;
  module_15459 = bind.bind(call, call);
}
if (!module_15459) {
  module_15459 = (arg0) => {
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

export default module_15459;
