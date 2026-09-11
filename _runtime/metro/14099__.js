// === Module 14099: ? ===

// Module 14099
import _mod14096 from "module_14096" /* 14096 */;


export default (arg0, arg1) => {
  const tmp = new _mod14096(arg0, arg1);
  return new _mod14096(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};