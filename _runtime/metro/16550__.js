// === Module 16550: ? ===

// Module 16550
import _mod16547 from "module_16547" /* 16547 */;


export default (arg0, arg1) => {
  const tmp = new _mod16547(arg0, arg1);
  return new _mod16547(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};