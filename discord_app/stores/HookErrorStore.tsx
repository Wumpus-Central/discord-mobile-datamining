// discord_app/stores/HookErrorStore.tsx
import { MediaEngineHookTypes } from "ME";
import { Store } from "initialize";

let closure_1 = {};
class HookErrorStore extends Store {
}
HookErrorStore.prototype["getHookError"] = function getHookError(SOUND) {
  return table[SOUND];
};
HookErrorStore.displayName = "HookErrorStore";
const hookErrorStore = new HookErrorStore(require("dispatcher"), {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource() {
    let closure_1 = {};
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function handleSoundshareTransmitting() {
    delete tmp2[tmp];
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function handleSoundshareFailed(errorMessage) {
    closure_1[MediaEngineHookTypes.SOUND] = { errorMessage: errorMessage.errorMessage, errorCode: errorMessage.errorCode };
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/HookErrorStore.tsx");

export default hookErrorStore;