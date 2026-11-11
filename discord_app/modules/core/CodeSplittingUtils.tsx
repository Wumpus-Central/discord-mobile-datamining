// === Module 5059: core/CodeSplittingUtils ===

// Module 5059 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1477 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 5060 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}