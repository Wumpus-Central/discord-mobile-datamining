// discord_app/modules/icymi/native/NativeICYMIUtils.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ICYMIInfoModalTypes from "info_modal/ICYMIInfoModalTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16466, dependencyMap.paths), obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, {
    presentation: "fullScreenModal",
  });
};
