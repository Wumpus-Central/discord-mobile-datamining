// === Module 14357: ? ===

// Module 14357
import module_14358 from "module_14358" /* 14358 */;

const call = prototype.call;
if (module_14358) {
  const bind = prototype.bind;
  module_14358 = bind.bind(call, call);
}
if (!module_14358) {
  module_14358 = (arg0) => {
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

export default module_14358;