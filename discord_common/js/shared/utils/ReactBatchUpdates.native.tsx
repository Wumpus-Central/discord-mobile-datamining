// === Module 1259: react-native ===

// Module 1259 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const unstable_batchedUpdates = react_native.unstable_batchedUpdates;
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(fn) {
  unstable_batchedUpdates(fn);
};