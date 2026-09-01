// discord_app/modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx
import resultDefault from "../../../../../components_native/common/MessageLoadingSpinner.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

let closure_3 = createCacheKey.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = importAllResult.memo(() => {
  const tmp = callback();
  return jsx(resultDefault, { style: callback().spinner, animate: true });
});
const result = require("set").fileFinishedImporting(
  "modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx",
);

export default memoResult;
