// === Module 14304: call ===

// Module 14304 (call)
import module_14305 from "module_14305" /* 14305 */;

const call = prototype.call;
if (module_14305) {
  const bind = prototype.bind;
  module_14305 = bind.bind(call, call);
}
if (!module_14305) {
  module_14305 = (arg0) => {
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

export default module_14305;