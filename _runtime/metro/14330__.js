// _runtime/metro/14330__.js
import _mod14305 from "14305__.js";

if (_mod14305) {
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
