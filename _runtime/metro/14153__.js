// === Module 14153: ? ===

// Module 14153
import _mod14150 from "module_14150" /* 14150 */;


export default (arg0, arg1) => {
  const tmp = new _mod14150(arg0, arg1);
  return new _mod14150(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};