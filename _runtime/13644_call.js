// _runtime/13644_call.js
import 13645__ from "metro/13645__.js";

const call = prototype.call;
if (module_13645) {
  const bind = prototype.bind;
  module_13645 = bind.bind(call, call);
}
if (!require("module_13645")) {
  module_13645 = (arg0) => {
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

export default module_13645;