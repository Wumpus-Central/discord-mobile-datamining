// discord_app/modules/share/native/showSharePreparingModal.tsx
import set from "set" /* 2 */;
import SHARE_PREPARING_MODAL_KEY2 from "SHARE_PREPARING_MODAL_KEY" /* 9070 */;

const SHARE_PREPARING_MODAL_KEY = SHARE_PREPARING_MODAL_KEY2.SHARE_PREPARING_MODAL_KEY;
const result = set.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  let timeout;
  c1 = false;
  timeout = setTimeout(() => {
    let obj = callback(paths[1]);
    obj = {
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
    obj.pushLazy(onCancel(paths[3])(paths[2], paths.paths), obj, closure_1_3, { animation: "fade", presentation: "transparentModal" }).then(() => {
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
      callback(paths[1]).popWithKey(closure_1_3);
      const obj = callback(paths[1]);
    }
  };
};