// === Module 16116: ? ===

// Module 16116
import _mod16091 from "module_16091" /* 16091 */;

if (_mod16091) {
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