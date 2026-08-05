// _runtime/13456_call.js
import 13457__ from "metro/13457__.js";

const call = prototype.call;
if (module_13457) {
  const bind = prototype.bind;
  module_13457 = bind.bind(call, call);
}
if (!require("module_13457")) {
  module_13457 = (arg0) => {
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

export default module_13457;