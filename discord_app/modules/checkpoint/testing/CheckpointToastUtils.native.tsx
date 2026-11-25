// === Module 15000: CheckpointToastUtils ===

// Module 15000 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5693 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(string, success) {
  if ("success" === success) {
    const obj3 = { text: string };
    ToastActionCreatorsDefault.open("CHECKPOINT_QA", obj3);
  } else {
    ToastUtils.presentError(string);
  }
}