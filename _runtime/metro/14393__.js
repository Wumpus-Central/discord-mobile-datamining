// _runtime/metro/14393__.js
import module_14394_mod from "14394__.js";

const call = prototype.call;
let module_14394 = module_14394_mod;
if (module_14394) {
  const bind = prototype.bind;
  module_14394 = bind.bind(call, call);
}
if (!module_14394) {
  module_14394 = (arg0) => {
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

export default module_14394;
