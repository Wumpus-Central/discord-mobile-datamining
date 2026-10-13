// === Module 14679: ? ===

// Module 14679
import _mod14676 from "module_14676" /* 14676 */;


export default (arg0, arg1) => {
  const tmp = new _mod14676(arg0, arg1);
  return new _mod14676(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};