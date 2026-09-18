// === Module 7061: ? ===

// Module 7061
import _mod7062 from "module_7062" /* 7062 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod7062(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};