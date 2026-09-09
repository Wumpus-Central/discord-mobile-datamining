// === Module 14074: ? ===

// Module 14074
import _mod14071 from "module_14071" /* 14071 */;


export default (arg0, arg1) => {
  const tmp = new _mod14071(arg0, arg1);
  return new _mod14071(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};