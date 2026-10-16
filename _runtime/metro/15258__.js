// _runtime/metro/15258__.js
import module_15259_mod from "15259__.js";

const call = prototype.call;
let module_15259 = module_15259_mod;
if (module_15259) {
  const bind = prototype.bind;
  module_15259 = bind.bind(call, call);
}
if (!module_15259) {
  module_15259 = (arg0) => {
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

export default module_15259;
