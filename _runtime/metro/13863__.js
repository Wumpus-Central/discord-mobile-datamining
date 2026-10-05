// === Module 13863: ? ===

// Module 13863
import _mod13860 from "module_13860" /* 13860 */;


export default (arg0, arg1) => {
  const tmp = new _mod13860(arg0, arg1);
  return new _mod13860(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};