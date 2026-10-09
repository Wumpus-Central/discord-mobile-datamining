// === Module 14284: ? ===

// Module 14284
import _mod14277 from "module_14277" /* 14277 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14277(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};