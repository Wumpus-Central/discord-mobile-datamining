// _runtime/metro/15213__.js
import module_15214_mod from "15214__.js";

const call = prototype.call;
let module_15214 = module_15214_mod;
if (module_15214) {
  const bind = prototype.bind;
  module_15214 = bind.bind(call, call);
}
if (!module_15214) {
  module_15214 = (arg0) => {
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

export default module_15214;
