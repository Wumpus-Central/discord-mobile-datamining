// _runtime/13636_call.js
import 13637__ from "metro/13637__.js";

const call = prototype.call;
if (module_13637) {
  const bind = prototype.bind;
  module_13637 = bind.bind(call, call);
}
if (!require("module_13637")) {
  module_13637 = (arg0) => {
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

export default module_13637;