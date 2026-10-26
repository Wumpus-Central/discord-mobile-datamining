// === Module 15350: ? ===

// Module 15350
import _mod15347 from "module_15347" /* 15347 */;


export default (arg0, arg1) => {
  const tmp = new _mod15347(arg0, arg1);
  return new _mod15347(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};