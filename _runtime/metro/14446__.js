// _runtime/metro/14446__.js
import _mod14421 from "14421__.js";

if (_mod14421) {
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
