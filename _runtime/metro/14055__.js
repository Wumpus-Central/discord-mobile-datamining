// === Module 14055: ? ===

// Module 14055
import _mod14048 from "module_14048" /* 14048 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14048(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};