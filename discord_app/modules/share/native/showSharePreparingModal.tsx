// discord_app/modules/share/native/showSharePreparingModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import SHARE_PREPARING_MODAL_KEY2 from "SharePreparingModalConstants.tsx";

const SHARE_PREPARING_MODAL_KEY = SHARE_PREPARING_MODAL_KEY2.SHARE_PREPARING_MODAL_KEY;
const result = obj132.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  c1 = false;
  const timeout = setTimeout(() => {
    callback(paths[1]);
    let obj = {
      onCancel() {
        if (!c1) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          closure_1_1(closure_1_2[1]).popWithKey(closure_1_3);
          callback();
          const obj = closure_1_1(closure_1_2[1]);
        }
      }
    };
    obj.pushLazy(onCancel(paths[3])(paths[2], paths.paths), obj, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then((result) => {
      if (closure_1) {
        closure_1_1(closure_1_2[1]).popWithKey(closure_1_3);
        const obj = closure_1_1(closure_1_2[1]);
      }
    });
  }, 1000);
  return () => {
    if (!callback) {
      callback = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(paths);
      callback(paths[1]).popWithKey(SHARE_PREPARING_MODAL_KEY);
      const obj = callback(paths[1]);
    }
  };
};