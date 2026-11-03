// === Module 16079: ? ===

// Module 16079
import _mod16072 from "module_16072" /* 16072 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16072(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};