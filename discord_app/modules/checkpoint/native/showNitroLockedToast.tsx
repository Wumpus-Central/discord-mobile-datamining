// === Module 12649: showNitroLockedToast ===

// Module 12649 (showNitroLockedToast)
import ToastUtils from "ToastUtils" /* 5473 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6215 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const nitroLockedMessage = CheckpointCustomizationUtils.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    ToastUtils.presentError(nitroLockedMessage);
    const tmpResult = ToastUtils;
  }
};