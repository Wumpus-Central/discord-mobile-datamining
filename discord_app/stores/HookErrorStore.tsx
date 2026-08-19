// discord_app/stores/HookErrorStore.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

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
const result = obj132.fileFinishedImporting("stores/HookErrorStore.tsx");

export default hookErrorStore;