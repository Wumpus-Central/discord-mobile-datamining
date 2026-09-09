// === Module 14078: ? ===

// Module 14078
import _mod14071 from "module_14071" /* 14071 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14071(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};