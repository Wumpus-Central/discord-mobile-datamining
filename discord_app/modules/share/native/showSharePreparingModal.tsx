// discord_app/modules/share/native/showSharePreparingModal.tsx
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SharePreparingModalConstants from "SharePreparingModalConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
          _true(6848).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(6848);
        }
      },
    };
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(10236, dependencyMap.paths),
      {
        onCancel() {
          if (!_true) {
            _true = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(dependencyMap);
            _true(6848).popWithKey(SHARE_PREPARING_MODAL_KEY);
            onCancel();
            const obj = _true(6848);
          }
        },
      },
      SHARE_PREPARING_MODAL_KEY,
      { animation: "fade", presentation: "transparentModal" },
    ).then(() => {
      if (_true) {
        _true(6848).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(6848);
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
