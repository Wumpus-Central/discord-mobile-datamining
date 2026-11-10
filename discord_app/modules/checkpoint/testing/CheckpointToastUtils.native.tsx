// === Module 19283: CheckpointToastUtils ===

// Module 19283 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5838 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(string, failure) {
  if ("success" === failure) {
    const obj3 = { text: string };
    ToastActionCreatorsDefault.open("CHECKPOINT_QA", obj3);
  } else {
    ToastUtils.presentError(string);
  }
}