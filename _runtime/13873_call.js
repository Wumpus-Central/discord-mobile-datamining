// === Module 13873: call ===

// Module 13873 (call)
import module_13874 from "module_13874" /* 13874 */;

const call = prototype.call;
if (module_13874) {
  const bind = prototype.bind;
  module_13874 = bind.bind(call, call);
}
if (!module_13874) {
  module_13874 = (arg0) => {
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

export default module_13874;