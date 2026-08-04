const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4490);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(15455, dependencyMap.paths), obj, require(15456) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};