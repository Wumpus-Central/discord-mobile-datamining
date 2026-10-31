// === Module 18877: CheckpointToastUtils ===

// Module 18877 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5711 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(intl, failure) {
  if ("success" === failure) {
    const obj3 = { text: intl };
    ToastActionCreatorsDefault.open("CHECKPOINT_QA", obj3);
  } else {
    ToastUtils.presentError(intl);
  }
}