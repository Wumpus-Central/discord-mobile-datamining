// === Module 14610: CheckpointToastUtils ===

// Module 14610 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5594 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(intl, success) {
  if ("success" === success) {
    const obj3 = { text: intl };
    ToastActionCreatorsDefault.open("CHECKPOINT_QA", obj3);
  } else {
    ToastUtils.presentError(intl);
  }
}