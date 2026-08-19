// discord_app/modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import initializeDefault from "../../../lib/LifecycleManager.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";

({ AppState: c3, NativeModules: c4 } = get_ActivityIndicator);
initializeDefault;
class VoiceMessagesPlaybackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      if (obj.isAndroid()) {
        const result = callback(4722).handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
        const obj2 = callback(4722);
      } else {
        const DCDAccessibilityManager = closure_4.DCDAccessibilityManager;
        const result1 = DCDAccessibilityManager.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
      }
      obj = applyArgumentsResult(500);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
      id = id.id;
      if (id.channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        if (obj.isAndroid()) {
          const result = callback(13908).handleVoiceMessageDeleted(id);
          const obj2 = callback(13908);
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
        callback(13908).pauseCurrentPlayer(false);
        const obj2 = callback(13908);
      } else {
        const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
        if (DCDAudioPlayerManager != null) {
          DCDAudioPlayerManager.pauseCurrentPlayer(false);
        }
      }
      obj = applyArgumentsResult(500);
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      if (obj.isAndroid()) {
        const appState = applyArgumentsResult.appState;
        applyArgumentsResult.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            let tmpResult = applyArgumentsResult(dependencyMap[3]);
            if (tmpResult.isAndroid()) {
              const result = enforcingDefault.maybePlayCurrentPlayer();
            } else {
              const DCDAudioPlayerManager2 = closure_1_4.DCDAudioPlayerManager;
              if (DCDAudioPlayerManager2 != null) {
                const result1 = DCDAudioPlayerManager2.maybePlayCurrentPlayer();
              }
            }
          }
        }
        if (tmp4) {
          tmpResult = applyArgumentsResult(dependencyMap[3]);
          if (tmpResult.isAndroid()) {
            enforcingDefault.pauseCurrentPlayer(true);
          } else {
            const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
            if (DCDAudioPlayerManager != null) {
              DCDAudioPlayerManager.pauseCurrentPlayer(true);
            }
          }
        }
        tmp4 = "active" !== state && "active" === appState;
      }
      obj = applyArgumentsResult(dependencyMap[3]);
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceMessagesPlaybackManager.prototype;
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  dispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  dispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  dispatcherDefault.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
};
prototype["_initialize"] = function _initialize() {
  let obj = dispatcherDefault;
  const subscription = obj.subscribe("LOGOUT", this.handleLogout);
  const subscription1 = dispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const subscription2 = dispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const subscription3 = dispatcherDefault.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: obj.rawPrefersReducedMotion };
  const result = this.handleSetPrefersReducedMotion(obj);
};
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = obj132.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    enforcingDefault.pauseCurrentPlayer(arg0);
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
  obj = obj1322;
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = enforcingDefault.maybePlayCurrentPlayer();
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
  obj = obj1322;
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  if (obj.isAndroid()) {
    const result = enforcingDefault.handleVoiceMessageDeleted(id);
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
    }
  }
  obj = obj1322;
};