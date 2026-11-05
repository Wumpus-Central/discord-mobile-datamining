// _runtime/metro/16393__.js
import module_16394_mod from "16394__.js";

const call = prototype.call;
let module_16394 = module_16394_mod;
if (module_16394) {
  const bind = prototype.bind;
  module_16394 = bind.bind(call, call);
}
if (!module_16394) {
  module_16394 = (arg0) => {
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

export default module_16394;
