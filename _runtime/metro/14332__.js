// === Module 14332: ? ===

// Module 14332
import module_14333 from "module_14333" /* 14333 */;

const call = prototype.call;
if (module_14333) {
  const bind = prototype.bind;
  module_14333 = bind.bind(call, call);
}
if (!module_14333) {
  module_14333 = (arg0) => {
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

export default module_14333;