// _runtime/metro/14307__.js
import 14308__ from "14308__.js";

const call = prototype.call;
if (module_14308) {
  const bind = prototype.bind;
  module_14308 = bind.bind(call, call);
}
if (!module_14308) {
  module_14308 = (arg0) => {
    closure_0 = arg0;
    return () => {
      const apply = call.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(closure_0);
      } else {
        applyArgumentsResult = apply(closure_0, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_14308;