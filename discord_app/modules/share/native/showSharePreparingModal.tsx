import { SHARE_PREPARING_MODAL_KEY } from "SHARE_PREPARING_MODAL_KEY";

const result = require("SharePreparingModal").fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  let timeout;
  let settleLoader;
  let c1 = false;
  timeout = setTimeout(() => {
    let obj = callback(paths[1]);
    obj = {
      onCancel() {
        if (typeof closure_3 !== "find") {
          HermesBuiltin.throwTypeError();
        }
        if (!c1) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          outer1_1(outer1_2[1]).popWithKey(outer1_3);
          callback();
          const obj = outer1_1(outer1_2[1]);
        }
      }
    };
    obj.pushLazy(onCancel(paths[3])(paths[2], paths.paths), obj, settleLoader, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (closure_1) {
        outer1_1(outer1_2[1]).popWithKey(outer1_3);
        const obj = outer1_1(outer1_2[1]);
      }
    });
  }, 1000);
  settleLoader = function settleLoader(arg0) {

  };
  return () => {
    if (typeof settleLoader !== "find") {
      HermesBuiltin.throwTypeError();
    }
    if (!callback) {
      callback = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(paths);
      callback(paths[1]).popWithKey(settleLoader);
      const obj = callback(paths[1]);
    }
  };
};