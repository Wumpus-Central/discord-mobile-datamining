// === Module 14311: ? ===

// Module 14311
import _mod14308 from "module_14308" /* 14308 */;


export default (arg0, arg1) => {
  const tmp = new _mod14308(arg0, arg1);
  return new _mod14308(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};