// === Module 16385: text ===

// Module 16385 (text)
import _mod16386 from "module_16386" /* 16386 */;
import _mod16400 from "module_16400" /* 16400 */;


export default (arg0) => {
  const tmp = _mod16386(arg0, "string");
  let text = tmp;
  if (!_mod16400(tmp)) {
    text = `${tmp}`;
  }
  return text;
};