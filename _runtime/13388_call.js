// _runtime/13388_call.js
import module_13389 from "module_13389";

const call = prototype.call;
if (module_13389) {
  const bind = prototype.bind;
  module_13389 = bind.bind(call, call);
}
if (!require("module_13389")) {
  module_13389 = (arg0) => {
    let closure_0 = arg0;
    return () => {
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_13389;