// _runtime/metro/15688__.js
import module_15689_mod from "15689__.js";

const call = prototype.call;
let module_15689 = module_15689_mod;
if (module_15689) {
  const bind = prototype.bind;
  module_15689 = bind.bind(call, call);
}
if (!module_15689) {
  module_15689 = (arg0) => {
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

export default module_15689;
