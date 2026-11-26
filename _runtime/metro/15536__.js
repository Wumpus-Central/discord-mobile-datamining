// === Module 15536: ? ===

// Module 15536
import _mod15533 from "module_15533" /* 15533 */;


export default (arg0, arg1) => {
  const tmp = new _mod15533(arg0, arg1);
  return new _mod15533(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};