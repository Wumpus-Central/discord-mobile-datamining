// === Module 13764: call ===

// Module 13764 (call)
import _mod13739 from "module_13739" /* 13739 */;

if (_mod13739) {
  let fn = call.bind(call);
} else {
  fn = () => {
    const apply = call.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(tmp);
    } else {
      applyArgumentsResult = apply(tmp, arguments);
    }
    return applyArgumentsResult;
  };
}

export default fn;