// _runtime/13507_call.js
import 13508__ from "metro/13508__.js";

const call = prototype.call;
if (module_13508) {
  const bind = prototype.bind;
  module_13508 = bind.bind(call, call);
}
if (!require("module_13508")) {
  module_13508 = (arg0) => {
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

export default module_13508;