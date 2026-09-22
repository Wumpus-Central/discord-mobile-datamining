// _runtime/metro/14590__.js
import module_14591_mod from "14591__.js";

const call = prototype.call;
let module_14591 = module_14591_mod;
if (module_14591) {
  const bind = prototype.bind;
  module_14591 = bind.bind(call, call);
}
if (!module_14591) {
  module_14591 = (arg0) => {
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

export default module_14591;
