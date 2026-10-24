// === Module 15383: Checkbox/Checkbox ===

// Module 15383 (Checkbox/Checkbox)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5669 */;
import _modDef15384 from "module_15384" /* 15384 */;
import _modDef15385 from "module_15385" /* 15385 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Checkbox(style) {
  let tmp = dependencyMap;
  const cResult = c.c(4);
  style = style.style;
  if (style.selected) {
    if (cResult[0] !== style) {
      const obj2 = { style, source: null };
      tmp = _modDef15384;
      obj2.source = tmp;
      const tmp12 = jsx(FastImageDefault, { style, source: null });
      cResult[0] = style;
      cResult[1] = tmp12;
    }
  } else {
    if (cResult[2] !== style) {
      const obj3 = { style, source: _modDef15385 };
      const tmp7 = jsx(FastImageDefault, { style, source: _modDef15385 });
      cResult[2] = style;
      cResult[3] = tmp7;
      let tmp3 = tmp7;
    } else {
      tmp3 = cResult[3];
    }
    return tmp3;
  }
}) : (function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15384;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15385;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
});