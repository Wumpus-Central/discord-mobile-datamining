// === Module 13773: call ===

// Module 13773 (call)
import module_13774 from "module_13774" /* 13774 */;

const call = prototype.call;
if (module_13774) {
  const bind = prototype.bind;
  module_13774 = bind.bind(call, call);
}
if (!module_13774) {
  module_13774 = (arg0) => {
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

export default module_13774;