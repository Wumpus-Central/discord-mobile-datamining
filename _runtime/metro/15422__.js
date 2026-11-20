// _runtime/metro/15422__.js
import module_15423_mod from "15423__.js";

const call = prototype.call;
let module_15423 = module_15423_mod;
if (module_15423) {
  const bind = prototype.bind;
  module_15423 = bind.bind(call, call);
}
if (!module_15423) {
  module_15423 = (arg0) => {
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

export default module_15423;
