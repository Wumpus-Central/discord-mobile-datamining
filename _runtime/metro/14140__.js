// === Module 14140: ? ===

// Module 14140
import _mod14137 from "module_14137" /* 14137 */;


export default (arg0, arg1) => {
  const tmp = new _mod14137(arg0, arg1);
  return new _mod14137(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};