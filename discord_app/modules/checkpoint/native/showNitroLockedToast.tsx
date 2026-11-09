// === Module 13932: showNitroLockedToast ===

// Module 13932 (showNitroLockedToast)
import ToastUtils from "ToastUtils" /* 5836 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6566 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const nitroLockedMessage = CheckpointCustomizationUtils.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    ToastUtils.presentError(nitroLockedMessage);
    const tmpResult = ToastUtils;
  }
};