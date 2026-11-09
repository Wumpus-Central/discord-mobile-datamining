// === Module 16244: ? ===

// Module 16244
import _mod16241 from "module_16241" /* 16241 */;


export default (arg0, arg1) => {
  const tmp = new _mod16241(arg0, arg1);
  return new _mod16241(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};