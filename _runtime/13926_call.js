// _runtime/13926_call.js
import 13927__ from "metro/13927__.js";

const call = prototype.call;
if (module_13927) {
  const bind = prototype.bind;
  module_13927 = bind.bind(call, call);
}
if (!module_13927) {
  module_13927 = (arg0) => {
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

export default module_13927;