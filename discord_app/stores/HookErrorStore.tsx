// === Module 4473: getHookError ===

// Module 4473 (getHookError)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const MediaEngineHookTypes = ME.MediaEngineHookTypes;
let closure_1 = {};
const Store = initializeDefault.Store;
class HookErrorStore extends Store {
}
HookErrorStore.prototype["getHookError"] = function getHookError(SOUND) {
  return table[SOUND];
};
HookErrorStore.displayName = "HookErrorStore";
const hookErrorStore = new HookErrorStore(dispatcherDefault, {
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
const result = set.fileFinishedImporting("stores/HookErrorStore.tsx");

export default hookErrorStore;