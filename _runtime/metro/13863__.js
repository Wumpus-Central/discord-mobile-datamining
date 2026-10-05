// === Module 13863: ? ===

// Module 13863
import _mod13860 from "module_13860" /* 13860 */;

let set;


export default (arg0, arg1) => {
  set = new _mod13860(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};