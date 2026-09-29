// _runtime/metro/13964__.js
import module_13965_mod from "13965__.js";

const call = prototype.call;
let module_13965 = module_13965_mod;
if (module_13965) {
  const bind = prototype.bind;
  module_13965 = bind.bind(call, call);
}
if (!module_13965) {
  module_13965 = (arg0) => {
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

export default module_13965;
