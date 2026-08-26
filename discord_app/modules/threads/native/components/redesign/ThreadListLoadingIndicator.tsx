// === Module 16139: ? ===

// Module 16139
import resultDefault from "result" /* 10858 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

let closure_3 = createCacheKey.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = importAllResult.memo(() => {
  const tmp = callback();
  return jsx(resultDefault, { style: callback().spinner, animate: true });
});
const result = require("set").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;