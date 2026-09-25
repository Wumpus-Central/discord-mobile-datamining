// === Module 13574: ? ===

// Module 13574
import _mod13571 from "module_13571" /* 13571 */;


export default (arg0, arg1) => {
  const tmp = new _mod13571(arg0, arg1);
  return new _mod13571(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};