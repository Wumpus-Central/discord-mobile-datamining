// discord_app/stores/HookErrorStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_1;

const MediaEngineHookTypes = Constants.MediaEngineHookTypes;
const Store = get_initializedDefault.Store;
class HookErrorStore extends Store {
  getHookError(SOUND) {
    return closure_1[SOUND];
  }
}
const prototype = HookErrorStore.prototype;
HookErrorStore.displayName = "HookErrorStore";
const obj = {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource() {
    closure_1 = {};
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function handleSoundshareTransmitting() {
    delete closure_1[MediaEngineHookTypes.SOUND];
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function handleSoundshareFailed(errorMessage) {
    closure_1[MediaEngineHookTypes.SOUND] = {
      errorMessage: errorMessage.errorMessage,
      errorCode: errorMessage.errorCode,
    };
  },
};
const hookErrorStore = new HookErrorStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/HookErrorStore.tsx");

export default hookErrorStore;
