// === Module 8713: showSharePreparingModal ===

// Module 8713 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8711 */;
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
          _true(6152).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6152);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8714, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(6152).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6152);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(6152).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(6152);
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