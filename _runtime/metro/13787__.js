// === Module 13787: ? ===

// Module 13787
import _mod13784 from "module_13784" /* 13784 */;


export default (arg0, arg1) => {
  const tmp = new _mod13784(arg0, arg1);
  return new _mod13784(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};