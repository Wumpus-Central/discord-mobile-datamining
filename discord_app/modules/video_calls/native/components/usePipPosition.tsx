// === Module 10676: usePipPosition ===

// Module 10676 (usePipPosition)
import Storage2 from "Storage" /* 510 */;
import c from "c" /* 576 */;
import PictureInPicture from "PictureInPicture" /* 10677 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const CameraPreviewPosition = "CameraPreviewPosition";
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePipPosition() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const Storage = Storage2.Storage;
      return Storage.get(CameraPreviewPosition, PictureInPicture.DEFAULT_PIP_POSITION);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  [tmp4, require] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(arg0) {
      const Storage = Storage2.Storage;
      const result = Storage.set(CameraPreviewPosition, arg0);
      closure_1_0(arg0);
    };
    cResult[1] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const items = [tmp4, tmp5];
    cResult[2] = tmp4;
    cResult[3] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function usePipPosition() {
  const tmp = _slicedToArray(noop.useState(() => {
    const Storage = closure_0(510).Storage;
    return Storage.get(CameraPreviewPosition, closure_0(10677).DEFAULT_PIP_POSITION);
  }), 2);
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    noop.useCallback((arg0) => {
      const Storage = Storage2.Storage;
      const result = Storage.set(CameraPreviewPosition, arg0);
      closure_0(arg0);
    }, [])
  ];
  return items;
});