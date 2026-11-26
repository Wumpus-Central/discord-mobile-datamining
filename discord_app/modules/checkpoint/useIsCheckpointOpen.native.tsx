// discord_app/modules/checkpoint/useIsCheckpointOpen.native.tsx
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import CheckpointModalConstants from "CheckpointModalConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  return NavigationRouteUtils.useIsModalOpen(CHECKPOINT_MODAL_KEY);
}
