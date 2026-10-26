// === Module 15421: NitroWheel ===

// Module 15421 (NitroWheel)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5669 */;
import _modDef9901 from "module_9901" /* 9901 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NitroWheel(style) {
  const cResult = c.c(2);
  style = style.style;
  if (cResult[0] !== style) {
    const obj2 = { source: _modDef9901, style, resizeMode: "contain" };
    const tmp7 = jsx(FastImageDefault, { source: _modDef9901, style, resizeMode: "contain" });
    cResult[0] = style;
    cResult[1] = tmp7;
    let tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function NitroWheel(style) {
  const obj = { source: _modDef9901, style: style.style, resizeMode: "contain" };
  return jsx(FastImageDefault, { source: _modDef9901, style: style.style, resizeMode: "contain" });
});