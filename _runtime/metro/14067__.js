// === Module 14067: ? ===

// Module 14067
import _mod14065 from "module_14065" /* 14065 */;
import _mod14068 from "module_14068" /* 14068 */;
import _mod14070 from "module_14070" /* 14070 */;

let fn = Object;
let closure_3 = _mod14068("".split);
if (_mod14065(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14070(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;