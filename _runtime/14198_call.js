// === Module 14198: call ===

// Module 14198 (call)
import module_14199 from "module_14199" /* 14199 */;

const call = prototype.call;
if (module_14199) {
  const bind = prototype.bind;
  module_14199 = bind.bind(call, call);
}
if (!module_14199) {
  module_14199 = (arg0) => {
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

export default module_14199;