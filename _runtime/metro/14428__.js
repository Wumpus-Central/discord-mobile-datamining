// _runtime/metro/14428__.js
import module_14429_mod from "14429__.js";

const call = prototype.call;
let module_14429 = module_14429_mod;
if (module_14429) {
  const bind = prototype.bind;
  module_14429 = bind.bind(call, call);
}
if (!module_14429) {
  module_14429 = (arg0) => {
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

export default module_14429;
