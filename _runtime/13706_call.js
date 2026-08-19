// === Module 13706: call ===

// Module 13706 (call)
import _mod13681 from "module_13681" /* 13681 */;

if (_mod13681) {
  let fn = call.bind(call);
} else {
  fn = () => {
    const apply = call.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(call);
    } else {
      applyArgumentsResult = apply(call, arguments);
    }
    return applyArgumentsResult;
  };
}

export default fn;