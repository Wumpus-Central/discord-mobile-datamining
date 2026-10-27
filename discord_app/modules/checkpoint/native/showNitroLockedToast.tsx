// discord_app/modules/checkpoint/native/showNitroLockedToast.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const nitroLockedMessage = CheckpointCustomizationUtils.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    ToastUtils.presentError(nitroLockedMessage);
    const tmpResult = ToastUtils;
  }
}
