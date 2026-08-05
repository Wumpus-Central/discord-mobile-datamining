// _runtime/13484_call.js
import 13485__ from "metro/13485__.js";

const call = prototype.call;
if (module_13485) {
  const bind = prototype.bind;
  module_13485 = bind.bind(call, call);
}
if (!require("module_13485")) {
  module_13485 = (arg0) => {
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

export default module_13485;