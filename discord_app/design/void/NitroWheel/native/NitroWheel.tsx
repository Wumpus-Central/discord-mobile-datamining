// === Module 13938: NitroWheel ===

// Module 13938 (NitroWheel)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _modDef8865 from "module_8865" /* 8865 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(2);
  style = style.style;
  if (cResult[0] !== style) {
    const obj2 = { source: _modDef8865, style, resizeMode: "contain" };
    const tmp7 = jsx(FastImageDefault, { source: _modDef8865, style, resizeMode: "contain" });
    cResult[0] = style;
    cResult[1] = tmp7;
    let tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((style) => {
  const obj = { source: _modDef8865, style: style.style, resizeMode: "contain" };
  return jsx(FastImageDefault, { source: _modDef8865, style: style.style, resizeMode: "contain" });
});