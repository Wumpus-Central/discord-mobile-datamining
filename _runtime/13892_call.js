// _runtime/13892_call.js
import 13893__ from "metro/13893__.js";

const call = prototype.call;
if (module_13893) {
  const bind = prototype.bind;
  module_13893 = bind.bind(call, call);
}
if (!module_13893) {
  module_13893 = (arg0) => {
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

export default module_13893;