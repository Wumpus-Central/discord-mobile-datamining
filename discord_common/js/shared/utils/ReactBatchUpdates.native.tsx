// discord_common/js/shared/utils/ReactBatchUpdates.native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

const unstable_batchedUpdates = _mod17.unstable_batchedUpdates;
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(fn) {
  unstable_batchedUpdates(fn);
};
