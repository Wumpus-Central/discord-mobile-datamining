// === Module 16055: text ===

// Module 16055 (text)
import _mod16056 from "module_16056" /* 16056 */;
import _mod16070 from "module_16070" /* 16070 */;


export default (arg0) => {
  const tmp = _mod16056(arg0, "string");
  let text = tmp;
  if (!_mod16070(tmp)) {
    text = `${tmp}`;
  }
  return text;
};