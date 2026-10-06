// === Module 4552: core/CodeSplittingUtils ===

// Module 4552 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1468 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4553 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}