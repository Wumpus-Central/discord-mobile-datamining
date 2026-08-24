// _runtime/13738_call.js
import 13739__ from "metro/13739__.js";

const call = prototype.call;
if (module_13739) {
  const bind = prototype.bind;
  module_13739 = bind.bind(call, call);
}
if (!module_13739) {
  module_13739 = (arg0) => {
    closure_0 = arg0;
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

export default module_13739;