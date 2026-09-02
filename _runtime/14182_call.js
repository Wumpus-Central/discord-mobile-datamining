// _runtime/14182_call.js
import 14183__ from "metro/14183__.js";

const call = prototype.call;
if (module_14183) {
  const bind = prototype.bind;
  module_14183 = bind.bind(call, call);
}
if (!module_14183) {
  module_14183 = (arg0) => {
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

export default module_14183;