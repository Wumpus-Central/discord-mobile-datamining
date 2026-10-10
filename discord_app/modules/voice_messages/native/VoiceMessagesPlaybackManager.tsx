// === Module 14787: VoiceMessagesPlaybackManager ===

// Module 14787 (VoiceMessagesPlaybackManager)
import _mod17 from "module_17" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5303 */;
import NativeAudioPlayerModuleDefault from "NativeAudioPlayerModule" /* 14788 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
import size from "module_2" /* 2 */;

const AppState = _mod17.AppState;
class VoiceMessagesPlaybackManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const result = NativeDeviceAccessibilityModuleDefault.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(arg0) {
      ({ id, channelId } = arg0);
      if (channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        const result = NativeAudioPlayerModuleDefault.handleVoiceMessageDeleted(id);
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      NativeAudioPlayerModuleDefault.pauseCurrentPlayer(false);
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      if (obj.isAndroid()) {
        const appState = applyArgumentsResult.appState;
        applyArgumentsResult.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            const result = NativeAudioPlayerModuleDefault.maybePlayCurrentPlayer();
          }
        }
        if (tmp3) {
          NativeAudioPlayerModuleDefault.pauseCurrentPlayer(true);
        }
        tmp3 = "active" !== state && "active" === appState;
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
  const subscription = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const subscription1 = DispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const subscription2 = DispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const subscription3 = DispatcherDefault.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  const result = this.handleSetPrefersReducedMotion({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: AccessibilityStore.rawPrefersReducedMotion });
};
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  NativeAudioPlayerModuleDefault.pauseCurrentPlayer(arg0);
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  const result = NativeAudioPlayerModuleDefault.maybePlayCurrentPlayer();
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  const result = NativeAudioPlayerModuleDefault.handleVoiceMessageDeleted(id);
};