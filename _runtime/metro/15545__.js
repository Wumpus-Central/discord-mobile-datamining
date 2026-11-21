// _runtime/metro/15545__.js
import module_15546_mod from "15546__.js";

const call = prototype.call;
let module_15546 = module_15546_mod;
if (module_15546) {
  const bind = prototype.bind;
  module_15546 = bind.bind(call, call);
}
if (!module_15546) {
  module_15546 = (arg0) => {
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

export default module_15546;
