// === Module 14135: ? ===

// Module 14135
import _mod14132 from "module_14132" /* 14132 */;


export default (arg0, arg1) => {
  const tmp = new _mod14132(arg0, arg1);
  return new _mod14132(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};