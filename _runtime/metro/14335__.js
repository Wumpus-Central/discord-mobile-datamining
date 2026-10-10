// === Module 14335: ? ===

// Module 14335
import _mod14332 from "module_14332" /* 14332 */;


export default (arg0, arg1) => {
  const tmp = new _mod14332(arg0, arg1);
  return new _mod14332(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};