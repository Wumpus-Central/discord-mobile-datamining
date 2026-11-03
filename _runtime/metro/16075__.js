// === Module 16075: ? ===

// Module 16075
import _mod16072 from "module_16072" /* 16072 */;


export default (arg0, arg1) => {
  const tmp = new _mod16072(arg0, arg1);
  return new _mod16072(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};