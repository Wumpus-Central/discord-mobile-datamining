// _runtime/13959_call.js
import 13960__ from "metro/13960__.js";

const call = prototype.call;
if (module_13960) {
  const bind = prototype.bind;
  module_13960 = bind.bind(call, call);
}
if (!module_13960) {
  module_13960 = (arg0) => {
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

export default module_13960;