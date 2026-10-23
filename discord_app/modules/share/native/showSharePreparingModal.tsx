// === Module 8831: showSharePreparingModal ===

// Module 8831 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8829 */;
import size from "module_2" /* 2 */;

const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
const result = size.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  c1 = false;
  const timeout = setTimeout(() => {
    const obj2 = {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(6657).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6657);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8832, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(6657).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6657);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(6657).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(6657);
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
};