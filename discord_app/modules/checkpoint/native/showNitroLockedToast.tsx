// === Module 14496: showNitroLockedToast ===

// Module 14496 (showNitroLockedToast)
import ToastUtils from "ToastUtils" /* 6014 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const nitroLockedMessage = CheckpointCustomizationUtils.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    ToastUtils.presentError(nitroLockedMessage);
    const tmpResult = ToastUtils;
  }
};