// _runtime/metro/16390__.js
import module_16391_mod from "16391__.js";

const call = prototype.call;
let module_16391 = module_16391_mod;
if (module_16391) {
  const bind = prototype.bind;
  module_16391 = bind.bind(call, call);
}
if (!module_16391) {
  module_16391 = (arg0) => {
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

export default module_16391;
