// discord_app/modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import NativeDeviceAccessibilityModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import NativeAudioPlayerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ AppState: c3, NativeModules: closure_4 } = get_ActivityIndicator);
class VoiceMessagesPlaybackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const result = NativeDeviceAccessibilityModuleDefault.handleSetPrefersReducedMotion(
        prefersReducedMotion.prefersReducedMotion,
      );
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
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      if (obj.isAndroid()) {
        const appState = applyArgumentsResult.appState;
        applyArgumentsResult.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            let tmpResult = tmp(1115);
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
          tmpResult = tmp(1115);
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
  const subscription3 = DispatcherDefault.subscribe(
    "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
    this.handleSetPrefersReducedMotion,
  );
  obj = {
    type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
    prefersReducedMotion: AccessibilityStore.rawPrefersReducedMotion,
  };
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
};
