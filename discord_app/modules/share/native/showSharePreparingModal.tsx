// === Module 8927: showSharePreparingModal ===

// Module 8927 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8925 */;
import size from "module_2" /* 2 */;

const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
const result = size.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  c1 = false;
  const timeout = setTimeout(() => {
    const obj2 = {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(6738).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6738);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8928, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(6738).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6738);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(6738).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(6738);
      }
    });
  }, 1000);
  return () => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      ModalActionCreatorsDefault.popWithKey(SHARE_PREPARING_MODAL_KEY);
    }
  };
}