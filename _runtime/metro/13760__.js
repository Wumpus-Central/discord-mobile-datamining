// === Module 13760: ? ===

// Module 13760
import _mod13757 from "module_13757" /* 13757 */;


export default (arg0, arg1) => {
  const tmp = new _mod13757(arg0, arg1);
  return new _mod13757(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};