// === Module 17983: useIsCheckpointOpen ===

// Module 17983 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12413 */;
import size from "module_2" /* 2 */;

({ CHECKPOINT_MODAL_KEY: c2, CHECKPOINT_UNAVAILABLE_MODAL_KEY: c3 } = CheckpointModalConstants);
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  let isModalOpen = NavigationRouteUtils.useIsModalOpen(React2);
  if (!isModalOpen) {
    isModalOpen = obj2.useIsModalOpen(React3);
  }
  return isModalOpen;
}