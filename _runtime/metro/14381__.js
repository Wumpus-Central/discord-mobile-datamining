// === Module 14381: ? ===

// Module 14381
import module_14382 from "module_14382" /* 14382 */;

const call = prototype.call;
if (module_14382) {
  const bind = prototype.bind;
  module_14382 = bind.bind(call, call);
}
if (!module_14382) {
  module_14382 = (arg0) => {
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

export default module_14382;