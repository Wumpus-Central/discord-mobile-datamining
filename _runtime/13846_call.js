// === Module 13846: call ===

// Module 13846 (call)
import module_13847 from "module_13847" /* 13847 */;

const call = prototype.call;
if (module_13847) {
  const bind = prototype.bind;
  module_13847 = bind.bind(call, call);
}
if (!module_13847) {
  module_13847 = (arg0) => {
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

export default module_13847;