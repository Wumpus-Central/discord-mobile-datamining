// _runtime/metro/14066__.js
import module_14067_mod from "14067__.js";

const call = prototype.call;
let module_14067 = module_14067_mod;
if (module_14067) {
  const bind = prototype.bind;
  module_14067 = bind.bind(call, call);
}
if (!module_14067) {
  module_14067 = (arg0) => {
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

export default module_14067;
