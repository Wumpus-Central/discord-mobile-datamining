// === Module 15046: ? ===

// Module 15046
import _mod15043 from "module_15043" /* 15043 */;


export default (arg0, arg1) => {
  const tmp = new _mod15043(arg0, arg1);
  return new _mod15043(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};