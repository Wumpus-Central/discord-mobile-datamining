import { result } from "../../../../../components_native/common/MessageLoadingSpinner.tsx";
// discord_app/modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = require("noop").memo(() => {
  const tmp = callback();
  return jsx(result, { style: callback().spinner, animate: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;