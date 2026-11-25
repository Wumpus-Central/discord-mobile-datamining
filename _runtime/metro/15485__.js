// === Module 15485: ? ===

// Module 15485
import _mod15482 from "module_15482" /* 15482 */;


export default (arg0, arg1) => {
  const tmp = new _mod15482(arg0, arg1);
  return new _mod15482(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};