// _runtime/13680_call.js
import 13681__ from "metro/13681__.js";

const call = prototype.call;
if (module_13681) {
  const bind = prototype.bind;
  module_13681 = bind.bind(call, call);
}
if (!require("module_13681")) {
  module_13681 = (arg0) => {
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

export default module_13681;