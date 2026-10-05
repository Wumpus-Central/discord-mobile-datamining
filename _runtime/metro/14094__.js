// _runtime/metro/14094__.js
import _mod14069 from "14069__.js";

let fn;
if (_mod14069) {
  fn = call.bind(call);
} else {
  fn = function () {
    return call(...arguments);
  };
}

export default fn;
