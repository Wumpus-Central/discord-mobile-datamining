// _runtime/13645_call.js
import 13646__ from "metro/13646__.js";

const call = prototype.call;
if (module_13646) {
  const bind = prototype.bind;
  module_13646 = bind.bind(call, call);
}
if (!require("module_13646")) {
  module_13646 = (arg0) => {
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

export default module_13646;