// discord_app/modules/checkpoint/testing/CheckpointToastUtils.native.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(intl, failure) {
  if ("success" === failure) {
    const obj3 = { text: intl };
    ToastActionCreatorsDefault.open("CHECKPOINT_QA", obj3);
  } else {
    ToastUtils.presentError(intl);
  }
}
