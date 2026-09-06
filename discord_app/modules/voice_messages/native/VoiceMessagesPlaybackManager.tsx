// === Module 14542: VoiceMessagesPlaybackManager ===

// Module 14542 (VoiceMessagesPlaybackManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 4908 */;
import NativeAudioPlayerModuleDefault from "NativeAudioPlayerModule" /* 14543 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

({ AppState: c3, NativeModules: closure_4 } = get_ActivityIndicator);
class VoiceMessagesPlaybackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const result = NativeDeviceAccessibilityModuleDefault.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
      id = id.id;
      if (id.channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        if (obj.isAndroid()) {
          const result = NativeAudioPlayerModuleDefault.handleVoiceMessageDeleted(id);
        } else {
          const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
          if (DCDAudioPlayerManager != null) {
            const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
          }
        }
        obj = applyArgumentsResult(1115);
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      if (obj.isAndroid()) {
        NativeAudioPlayerModuleDefault.pauseCurrentPlayer(false);
      } else {
        const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
        if (DCDAudioPlayerManager != null) {
          DCDAudioPlayerManager.pauseCurrentPlayer(false);
        }
      }
      obj = applyArgumentsResult(1115);
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      if (obj.isAndroid()) {
        const appState = applyArgumentsResult.appState;
        applyArgumentsResult.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            let tmpResult = PlatformUtils;
            if (tmpResult.isAndroid()) {
              const result = NativeAudioPlayerModuleDefault.maybePlayCurrentPlayer();
            } else {
              const DCDAudioPlayerManager2 = React4.DCDAudioPlayerManager;
              if (DCDAudioPlayerManager2 != null) {
                const result1 = DCDAudioPlayerManager2.maybePlayCurrentPlayer();
              }
            }
          }
        }
        if (tmp4) {
          tmpResult = PlatformUtils;
          if (tmpResult.isAndroid()) {
            NativeAudioPlayerModuleDefault.pauseCurrentPlayer(true);
          } else {
            const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
            if (DCDAudioPlayerManager != null) {
              DCDAudioPlayerManager.pauseCurrentPlayer(true);
            }
          }
        }
        tmp4 = "active" !== state && "active" === appState;
      }
      obj = PlatformUtils;
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceMessagesPlaybackManager.prototype;
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  DispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  DispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  DispatcherDefault.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
};
prototype["_initialize"] = function _initialize() {
  let obj = DispatcherDefault;
  const subscription = obj.subscribe("LOGOUT", this.handleLogout);
  const subscription1 = DispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const subscription2 = DispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const subscription3 = DispatcherDefault.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: AccessibilityStore.rawPrefersReducedMotion };
  const result = this.handleSetPrefersReducedMotion(obj);
};
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    NativeAudioPlayerModuleDefault.pauseCurrentPlayer(arg0);
  } else {
    const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
  obj = PlatformUtils;
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = NativeAudioPlayerModuleDefault.maybePlayCurrentPlayer();
  } else {
    const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
  obj = PlatformUtils;
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  if (obj.isAndroid()) {
    const result = NativeAudioPlayerModuleDefault.handleVoiceMessageDeleted(id);
  } else {
    const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
    }
  }
  obj = PlatformUtils;
};