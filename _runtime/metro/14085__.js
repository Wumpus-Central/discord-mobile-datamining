// _runtime/metro/14085__.js
import _mod14083 from "14083__.js";
import _mod14086 from "14086__.js";
import _mod14088 from "14088__.js";

let fn = Object;
let closure_3 = _mod14086("".split);
if (
  _mod14083(() => {
    const obj = Object("z");
    return !obj.propertyIsEnumerable(0);
  })
) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14088(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
