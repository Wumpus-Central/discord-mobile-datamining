// === Module 14004: text ===

// Module 14004 (text)
import _mod14005 from "module_14005" /* 14005 */;
import _mod14019 from "module_14019" /* 14019 */;


export default (arg0) => {
  const tmp = _mod14005(arg0, "string");
  let text = tmp;
  if (!_mod14019(tmp)) {
    text = `${tmp}`;
  }
  return text;
};