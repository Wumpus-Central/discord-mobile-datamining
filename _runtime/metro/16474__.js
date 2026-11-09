// _runtime/metro/16474__.js
import _mod16449 from "16449__.js";

if (_mod16449) {
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
