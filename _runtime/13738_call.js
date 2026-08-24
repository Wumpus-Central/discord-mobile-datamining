// === Module 13738: call ===

// Module 13738 (call)
import module_13739 from "module_13739" /* 13739 */;

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