// === Module 14094: ? ===

// Module 14094
import _mod14069 from "module_14069" /* 14069 */;

let fn;
if (_mod14069) {
  fn = call.bind(call);
} else {
  fn = function() {
    return call(...arguments);
  };
}

export default fn;