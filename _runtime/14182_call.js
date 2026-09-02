// === Module 14182: call ===

// Module 14182 (call)
import module_14183 from "module_14183" /* 14183 */;

const call = prototype.call;
if (module_14183) {
  const bind = prototype.bind;
  module_14183 = bind.bind(call, call);
}
if (!module_14183) {
  module_14183 = (arg0) => {
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

export default module_14183;