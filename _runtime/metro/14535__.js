// _runtime/metro/14535__.js
import module_14536_mod from "14536__.js";

const call = prototype.call;
let module_14536 = module_14536_mod;
if (module_14536) {
  const bind = prototype.bind;
  module_14536 = bind.bind(call, call);
}
if (!module_14536) {
  module_14536 = (arg0) => {
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

export default module_14536;
