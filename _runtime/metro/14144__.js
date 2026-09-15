// === Module 14144: ? ===

// Module 14144
import _mod14137 from "module_14137" /* 14137 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14137(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};