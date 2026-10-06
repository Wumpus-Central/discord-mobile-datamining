// discord_app/modules/icymi/native/NativeICYMIUtils.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ICYMIInfoModalTypes from "info_modal/ICYMIInfoModalTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(16450, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
