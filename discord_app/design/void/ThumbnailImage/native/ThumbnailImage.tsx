// === Module 13912: ThumbnailImage ===

// Module 13912 (ThumbnailImage)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
let _default = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1369);
if (PlatformUtils.isAndroid()) {
  _default = fn(13913).default;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = <_default />;
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return <_default />;
});