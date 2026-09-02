// === Module 14208: call ===

// Module 14208 (call)
import _mod14183 from "module_14183" /* 14183 */;

if (_mod14183) {
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