// discord_app/modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleConnectionOpen from "handleConnectionOpen";
import "initialize";
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";

let c3;
let c4;
({ AppState: c3, NativeModules: c4 } = get_ActivityIndicator);
class VoiceMessagesPlaybackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      if (obj.isAndroid()) {
        const result = callback(4742).handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
        const obj2 = callback(4742);
      } else {
        const DCDAccessibilityManager = closure_4.DCDAccessibilityManager;
        const result1 = DCDAccessibilityManager.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
      }
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
      id = id.id;
      if (id.channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        if (obj.isAndroid()) {
          const result = callback(13873).handleVoiceMessageDeleted(id);
          const obj2 = callback(13873);
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
        callback(13873).pauseCurrentPlayer(false);
        const obj2 = callback(13873);
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
              const result = outer1_1(tmp2[4]).maybePlayCurrentPlayer();
              const obj5 = outer1_1(tmp2[4]);
            } else {
              const DCDAudioPlayerManager2 = outer1_4.DCDAudioPlayerManager;
              if (DCDAudioPlayerManager2 != null) {
                const result1 = DCDAudioPlayerManager2.maybePlayCurrentPlayer();
              }
            }
          }
        }
        if (tmp4) {
          tmpResult = tmp(tmp2[3]);
          if (tmpResult.isAndroid()) {
            outer1_1(tmp2[4]).pauseCurrentPlayer(true);
            const obj3 = outer1_1(tmp2[4]);
          } else {
            const DCDAudioPlayerManager = outer1_4.DCDAudioPlayerManager;
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
  dispatcher.unsubscribe("LOGOUT", this.handleLogout);
  const obj = dispatcher;
  dispatcher.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const obj2 = dispatcher;
  dispatcher.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const obj3 = dispatcher;
  dispatcher.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
};
prototype["_initialize"] = function _initialize() {
  let obj = dispatcher;
  const subscription = obj.subscribe("LOGOUT", this.handleLogout);
  const subscription1 = dispatcher.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const obj2 = dispatcher;
  const subscription2 = dispatcher.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const obj3 = dispatcher;
  const subscription3 = dispatcher.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: obj.rawPrefersReducedMotion };
  const result = this.handleSetPrefersReducedMotion(obj);
};
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = require("handleConnectionOpen").fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    enforcing.pauseCurrentPlayer(arg0);
    const obj2 = enforcing;
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = enforcing.maybePlayCurrentPlayer();
    const obj2 = enforcing;
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  if (obj.isAndroid()) {
    const result = enforcing.handleVoiceMessageDeleted(id);
    const obj2 = enforcing;
  } else {
    const DCDAudioPlayerManager = closure_4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
    }
  }
};