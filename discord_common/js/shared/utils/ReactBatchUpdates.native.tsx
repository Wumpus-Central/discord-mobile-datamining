// discord_common/js/shared/utils/ReactBatchUpdates.native.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import size from "../../../../_runtime/metro/00002__.js";

const unstable_batchedUpdates = react_native.unstable_batchedUpdates;
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(fn) {
  unstable_batchedUpdates(fn);
};
