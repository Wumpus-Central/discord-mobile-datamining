// === Module 14317: ? ===

// Module 14317
import _mod14314 from "module_14314" /* 14314 */;


export default (arg0, arg1) => {
  const tmp = new _mod14314(arg0, arg1);
  return new _mod14314(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};