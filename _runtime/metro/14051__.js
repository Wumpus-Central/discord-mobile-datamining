// === Module 14051: ? ===

// Module 14051
import _mod14048 from "module_14048" /* 14048 */;


export default (arg0, arg1) => {
  const tmp = new _mod14048(arg0, arg1);
  return new _mod14048(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};