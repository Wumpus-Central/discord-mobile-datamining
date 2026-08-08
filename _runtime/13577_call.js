// _runtime/13577_call.js
import 13578__ from "metro/13578__.js";

const call = prototype.call;
if (module_13578) {
  const bind = prototype.bind;
  module_13578 = bind.bind(call, call);
}
if (!require("module_13578")) {
  module_13578 = (arg0) => {
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

export default module_13578;