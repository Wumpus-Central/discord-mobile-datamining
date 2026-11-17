// discord_app/modules/checkpoint/useIsCheckpointOpen.native.tsx
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import CheckpointModalConstants from "CheckpointModalConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ CHECKPOINT_MODAL_KEY: c2, CHECKPOINT_UNAVAILABLE_MODAL_KEY: c3 } = CheckpointModalConstants);
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  let isModalOpen = NavigationRouteUtils.useIsModalOpen(React2);
  if (!isModalOpen) {
    isModalOpen = obj2.useIsModalOpen(React3);
  }
  return isModalOpen;
}
