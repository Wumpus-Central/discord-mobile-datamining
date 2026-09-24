// === Module 14413: ? ===

// Module 14413
import _mod14410 from "module_14410" /* 14410 */;


export default (arg0, arg1) => {
  const tmp = new _mod14410(arg0, arg1);
  return new _mod14410(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};