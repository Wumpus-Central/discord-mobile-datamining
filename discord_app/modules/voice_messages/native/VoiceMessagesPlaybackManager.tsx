// discord_app/modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
import set from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import initializeDefault from "../../../lib/LifecycleManager.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../stores/SelectedChannelStore.tsx";

({ AppState: c3, NativeModules: c4 } = get_ActivityIndicator);
initializeDefault;
class VoiceMessagesPlaybackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const result = callback(4813).handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
      id = id.id;
      if (id.channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        if (obj.isAndroid()) {
          const result = callback(14111).handleVoiceMessageDeleted(id);
          const obj2 = callback(14111);
        } else {
          const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
          if (DCDAudioPlayerManager != null) {
            const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
          }
        }
        obj = applyArgumentsResult(500);
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      if (obj.isAndroid()) {
        callback(14111).pauseCurrentPlayer(false);
        const obj2 = callback(14111);
      } else {
        const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
        if (DCDAudioPlayerManager != null) {
          DCDAudioPlayerManager.pauseCurrentPlayer(false);
        }
      }
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      if (obj.isAndroid()) {
        const appState = applyArgumentsResult.appState;
        applyArgumentsResult.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            let tmpResult = tmp(tmp2[3]);
            if (tmpResult.isAndroid()) {
              const result = closure_1_1(tmp2[4]).maybePlayCurrentPlayer();
              const obj5 = closure_1_1(tmp2[4]);
            } else {
              const DCDAudioPlayerManager2 = closure_1_4.DCDAudioPlayerManager;
              if (DCDAudioPlayerManager2 != null) {
                const result1 = DCDAudioPlayerManager2.maybePlayCurrentPlayer();
              }
            }
          }
        }
        if (tmp4) {
          tmpResult = tmp(tmp2[3]);
          if (tmpResult.isAndroid()) {
            closure_1_1(tmp2[4]).pauseCurrentPlayer(true);
            const obj3 = closure_1_1(tmp2[4]);
          } else {
            const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
            if (DCDAudioPlayerManager != null) {
              DCDAudioPlayerManager.pauseCurrentPlayer(true);
            }
          }
        }
        tmp4 = "active" !== state && "active" === appState;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceMessagesPlaybackManager.prototype;
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
};
prototype["_initialize"] = function _initialize() {
  let obj = dispatcherDefault;
  const subscription = obj.subscribe("LOGOUT", this.handleLogout);
  const subscription1 = dispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const obj2 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const obj3 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: obj.rawPrefersReducedMotion };
  const result = this.handleSetPrefersReducedMotion(obj);
};
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = set.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    enforcingDefault.pauseCurrentPlayer(arg0);
    const obj2 = enforcingDefault;
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = enforcingDefault.maybePlayCurrentPlayer();
    const obj2 = enforcingDefault;
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  if (obj.isAndroid()) {
    const result = enforcingDefault.handleVoiceMessageDeleted(id);
    const obj2 = enforcingDefault;
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
    }
  }
};