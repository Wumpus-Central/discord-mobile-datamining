// _runtime/13493_call.js
import 13494__ from "metro/13494__.js";

const call = prototype.call;
if (module_13494) {
  const bind = prototype.bind;
  module_13494 = bind.bind(call, call);
}
if (!require("module_13494")) {
  module_13494 = (arg0) => {
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

export default module_13494;