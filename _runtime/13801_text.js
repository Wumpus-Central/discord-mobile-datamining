// === Module 13801: text ===

// Module 13801 (text)
import _mod13802 from "module_13802" /* 13802 */;
import _mod13816 from "module_13816" /* 13816 */;


export default (arg0) => {
  const tmp = _mod13802(arg0, "string");
  let text = tmp;
  if (!_mod13816(tmp)) {
    text = `${tmp}`;
  }
  return text;
};