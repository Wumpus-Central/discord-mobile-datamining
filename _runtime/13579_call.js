// _runtime/13579_call.js
import 13580__ from "metro/13580__.js";

const call = prototype.call;
if (module_13580) {
  const bind = prototype.bind;
  module_13580 = bind.bind(call, call);
}
if (!require("module_13580")) {
  module_13580 = (arg0) => {
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

export default module_13580;