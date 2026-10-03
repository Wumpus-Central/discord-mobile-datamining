// === Module 13007: useCollectibleListLayout ===

// Module 13007 (useCollectibleListLayout)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useCallback: c3, useState: closure_4 } = noop);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  [tmp3, require] = React4(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(nativeEvent) {
      require((nativeEvent.nativeEvent.layout.width - 64) / 3);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const obj2 = { size: tmp3, onLayout: first };
    cResult[1] = tmp3;
    cResult[2] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (() => {
  const tmp = _slicedToArray(React4(0), 2);
  closure_0 = tmp[1];
  return {
    size: tmp[0],
    onLayout: React3((nativeEvent) => {
      closure_0((nativeEvent.nativeEvent.layout.width - 64) / 3);
    }, [])
  };
});
export const GUTTER_SIZE = 16;
export const ROW_SIZE = 3;
export const COLLECTIBLE_ROW_HEIGHT = 114;