// === Module 18095: useIsCheckpointOpen ===

// Module 18095 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12577 */;
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