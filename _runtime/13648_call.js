// _runtime/13648_call.js
import 13649__ from "metro/13649__.js";

const call = prototype.call;
if (module_13649) {
  const bind = prototype.bind;
  module_13649 = bind.bind(call, call);
}
if (!require("module_13649")) {
  module_13649 = (arg0) => {
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

export default module_13649;