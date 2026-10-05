// === Module 14384: VoiceMessagesPlaybackManager ===

// Module 14384 (VoiceMessagesPlaybackManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 5711 */;
import react_nativeDefault2 from "react-native" /* 14385 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AppState: c3, NativeModules: closure_4 } = react_native);
class VoiceMessagesPlaybackManager extends LifecycleManager {
  constructor() {
    let currentlySelectedChannelId;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.appState = currentState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const obj = react_nativeDefault;
      const result = obj.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
      id = id.id;
      if (id.channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const obj2 = react_nativeDefault2;
          const result = obj2.handleVoiceMessageDeleted(id);
        } else {
          const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
          if (DCDAudioPlayerManager != null) {
            const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
          }
        }
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const obj2 = react_nativeDefault2;
        obj2.pauseCurrentPlayer(false);
      } else {
        const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
        if (DCDAudioPlayerManager != null) {
          DCDAudioPlayerManager.pauseCurrentPlayer(false);
        }
      }
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const appState = require.appState;
        require.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            const tmpResult = PlatformUtils;
            if (tmpResult.isAndroid()) {
              const obj5 = react_nativeDefault2;
              const result = obj5.maybePlayCurrentPlayer();
            } else {
              const DCDAudioPlayerManager2 = React3.DCDAudioPlayerManager;
              if (DCDAudioPlayerManager2 != null) {
                const result1 = DCDAudioPlayerManager2.maybePlayCurrentPlayer();
              }
            }
          }
        }
        const tmp4 = "active" !== state && "active" === appState;
        if (tmp4) {
          const tmpResult2 = PlatformUtils;
          if (tmpResult2.isAndroid()) {
            const obj3 = react_nativeDefault2;
            obj3.pauseCurrentPlayer(true);
          } else {
            const DCDAudioPlayerManager = React3.DCDAudioPlayerManager;
            if (DCDAudioPlayerManager != null) {
              DCDAudioPlayerManager.pauseCurrentPlayer(true);
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("LOGOUT", this.handleLogout);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("LOGOUT", this.handleLogout);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
    const obj5 = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: AccessibilityStore.rawPrefersReducedMotion };
    const result = this.handleSetPrefersReducedMotion(obj5);
  }
}
const prototype = VoiceMessagesPlaybackManager.prototype;
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault2;
    obj2.pauseCurrentPlayer(arg0);
  } else {
    const DCDAudioPlayerManager = React3.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault2;
    const result = obj2.maybePlayCurrentPlayer();
  } else {
    const DCDAudioPlayerManager = React3.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault2;
    const result = obj2.handleVoiceMessageDeleted(id);
  } else {
    const DCDAudioPlayerManager = React3.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
    }
  }
};