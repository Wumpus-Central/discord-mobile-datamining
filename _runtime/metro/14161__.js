// === Module 14161: ? ===

// Module 14161
import _mod14158 from "module_14158" /* 14158 */;


export default (arg0, arg1) => {
  const tmp = new _mod14158(arg0, arg1);
  return new _mod14158(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};