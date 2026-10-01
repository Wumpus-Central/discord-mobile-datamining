// === Module 13795: ? ===

// Module 13795
import _mod13792 from "module_13792" /* 13792 */;


export default (arg0, arg1) => {
  const tmp = new _mod13792(arg0, arg1);
  return new _mod13792(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};