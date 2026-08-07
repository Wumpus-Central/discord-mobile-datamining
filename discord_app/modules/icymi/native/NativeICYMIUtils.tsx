// discord_app/modules/icymi/native/NativeICYMIUtils.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { ICYMI_INFO_MODAL_KEY } from "info_modal/ICYMIInfoModalTypes.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = ModalActionCreators;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(15498, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};