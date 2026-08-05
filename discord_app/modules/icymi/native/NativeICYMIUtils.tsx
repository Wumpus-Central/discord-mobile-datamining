// discord_app/modules/icymi/native/NativeICYMIUtils.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15455, dependencyMap.paths), obj, require("info_modal/ICYMIInfoModalTypes.tsx") /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};