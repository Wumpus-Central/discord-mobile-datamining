// discord_app/modules/icymi/native/NativeICYMIUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4723 from "../../../actions/ModalActionCreators.tsx";
import ICYMI_INFO_MODAL_KEY from "info_modal/ICYMIInfoModalTypes.tsx";

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4723;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16285, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, {
    presentation: "fullScreenModal",
  });
};
