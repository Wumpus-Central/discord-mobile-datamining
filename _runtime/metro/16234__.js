// === Module 16234: ? ===

// Module 16234
import _mod16231 from "module_16231" /* 16231 */;


export default (arg0, arg1) => {
  const tmp = new _mod16231(arg0, arg1);
  return new _mod16231(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};