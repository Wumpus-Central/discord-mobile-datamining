// === Module 13892: call ===

// Module 13892 (call)
import module_13893 from "module_13893" /* 13893 */;

const call = prototype.call;
if (module_13893) {
  const bind = prototype.bind;
  module_13893 = bind.bind(call, call);
}
if (!module_13893) {
  module_13893 = (arg0) => {
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

export default module_13893;