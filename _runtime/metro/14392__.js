// === Module 14392: ? ===

// Module 14392
import module_14393 from "module_14393" /* 14393 */;

const call = prototype.call;
if (module_14393) {
  const bind = prototype.bind;
  module_14393 = bind.bind(call, call);
}
if (!module_14393) {
  module_14393 = (arg0) => {
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

export default module_14393;