// === Module 17225: useFrame ===

// Module 17225 (useFrame)
import FramesStore from "FramesStore" /* 10772 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/utils/useFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFrame(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return FramesStore.getFrame(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useFrame(arg0) {
  _require = arg0;
  const items = [FramesStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => FramesStore.getFrame(closure_0), items1);
});