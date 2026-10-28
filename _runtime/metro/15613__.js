// === Module 15613: ? ===

// Module 15613
import _mod15610 from "module_15610" /* 15610 */;


export default (arg0, arg1) => {
  const tmp = new _mod15610(arg0, arg1);
  return new _mod15610(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};