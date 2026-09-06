// === Module 4608: HookErrorStore ===

// Module 4608 (HookErrorStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const MediaEngineHookTypes = Constants.MediaEngineHookTypes;
let closure_1 = {};
const Store = initializeDefault.Store;
class HookErrorStore extends Store {
}
HookErrorStore.prototype["getHookError"] = function getHookError(SOUND) {
  return closure_1[SOUND];
};
HookErrorStore.displayName = "HookErrorStore";
const hookErrorStore = new HookErrorStore(DispatcherDefault, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource() {
    closure_1 = {};
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function handleSoundshareTransmitting() {
    delete tmp2[tmp];
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function handleSoundshareFailed(errorMessage) {
    closure_1[MediaEngineHookTypes.SOUND] = { errorMessage: errorMessage.errorMessage, errorCode: errorMessage.errorCode };
  }
});
const result = size.fileFinishedImporting("stores/HookErrorStore.tsx");

export default hookErrorStore;