// === Module 16891: useFrameBySurface ===

// Module 16891 (useFrameBySurface)
import FramesStore from "FramesStore" /* 10612 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFrameBySurface(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function c() {
    if (null != closure_0) {
      return FramesStore.getFrameBySurface(tmp, closure_1);
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useFrameBySurface(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [FramesStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      return FramesStore.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
});