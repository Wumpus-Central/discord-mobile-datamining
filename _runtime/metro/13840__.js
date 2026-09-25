// _runtime/metro/13840__.js
import module_13841_mod from "13841__.js";

const call = prototype.call;
let module_13841 = module_13841_mod;
if (module_13841) {
  const bind = prototype.bind;
  module_13841 = bind.bind(call, call);
}
if (!module_13841) {
  module_13841 = (arg0) => {
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

export default module_13841;
