// === Module 16164: ? ===

// Module 16164
import _mod16161 from "module_16161" /* 16161 */;


export default (arg0, arg1) => {
  const tmp = new _mod16161(arg0, arg1);
  return new _mod16161(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};