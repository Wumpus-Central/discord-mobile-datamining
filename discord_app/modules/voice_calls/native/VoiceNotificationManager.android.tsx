// === Module 13828: processColor ===

// Module 13828 (processColor)
import ThemesDefault from "Themes" /* 712 */;
import initializeDefault from "initialize" /* 4720 */;
import initializeDefault2 from "initialize" /* 7504 */;
import _modDef12598 from "module_12598" /* 12598 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { processColor } from "get ActivityIndicator" /* 17 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import addApplication from "addApplication" /* 4478 */;
import reset from "reset" /* 4652 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { InputModes } from "ME" /* 676 */;
import obj132 from "obj132" /* 2 */;

let obj132 = fn;
let closure_13 = processColor(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_14 = processColor(ThemesDefault.unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "flex", connectionState: "context", selfMute: false, deafened: null, isPushToTalk: "RCTView", embeddedActivity: "face_with_spiral_eyes", isStreaming: "woozy_face" };
    obj.handleVoiceStateChange = function handleVoiceStateChange() {
      const channelId = closure_1_9.getChannelId();
      const state = closure_1_9.getState();
      if (!tmp3) {
        obj = {};
        const merged = Object.assign(obj.state);
        obj.channelId = channelId;
        obj.connectionState = state;
        obj.handleUpdate(obj);
      }
    };
    obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
      obj = closure_1_8;
      const tmp = closure_1_8.isSelfMute() || obj.isSelfMutedTemporarily();
      const tmp2 = obj.isSelfDeaf() || obj.isDeaf();
      let tmp4 = obj.state.selfMute === tmp;
      const mode = obj.getMode();
      if (tmp4) {
        tmp4 = obj2.state.deafened === tmp2;
      }
      if (tmp4) {
        tmp4 = obj2.state.isPushToTalk === tmp5;
      }
      if (!tmp4) {
        obj = {};
        const merged = Object.assign(obj2.state);
        obj.selfMute = tmp;
        obj.deafened = tmp2;
        obj.isPushToTalk = tmp5;
        obj2.handleUpdate(obj);
      }
    };
    obj.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
      if (null != obj.state.channelId) {
        obj = {};
        const currentEmbeddedActivity = closure_1_4.getCurrentEmbeddedActivity();
        const merged = Object.assign(obj.state);
        obj.embeddedActivity = currentEmbeddedActivity;
        obj.handleUpdate(obj);
      }
    };
    obj.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
      const tmp = null != closure_1_6.getCurrentUserActiveStream();
      if (obj.state.isStreaming !== tmp) {
        obj = {};
        const merged = Object.assign(obj.state);
        obj.isStreaming = tmp;
        obj.handleUpdate(obj);
      }
    };
    obj.getIcon = function getIcon(state) {
      ({ deafened, selfMute, isPushToTalk } = state);
      const ServiceNotificationIcon = obj(table[12]).ServiceNotificationIcon;
      if (deafened) {
        const items = [ServiceNotificationIcon.DEAFENED, closure_14];
        let items3 = items;
      } else if (selfMute) {
        const items1 = [ServiceNotificationIcon.MUTED, closure_14];
        items3 = items1;
      } else if (isPushToTalk) {
        const items2 = [ServiceNotificationIcon.DEFAULT, closure_13];
        items3 = items2;
      } else {
        items3 = [ServiceNotificationIcon.IDLE, closure_13];
      }
      return items3;
    };
    obj.handleUpdate = function handleUpdate(connectionState) {
      if (null != connectionState.connectionState) {
        let updateServiceHandlerResult = obj;
        [tmp4, tmp5] = closure_1_3(obj.getIcon(obj.state), 2);
        const tmp3 = closure_1_3(obj.getIcon(obj.state), 2);
        [tmp7, tmp8] = closure_1_3(obj.getIcon(connectionState), 2);
        if (obj.state.channelId === connectionState.channelId) {
          if (updateServiceHandlerResult.state.connectionState === connectionState.connectionState) {
            if (updateServiceHandlerResult.state.selfMute === connectionState.selfMute) {
              if (updateServiceHandlerResult.state.deafened === connectionState.deafened) {
                const embeddedActivity = updateServiceHandlerResult.state.embeddedActivity;
                let compositeInstanceId;
                if (embeddedActivity != null) {
                  compositeInstanceId = embeddedActivity.compositeInstanceId;
                }
                const embeddedActivity2 = connectionState.embeddedActivity;
                let compositeInstanceId1;
                if (embeddedActivity2 != null) {
                  compositeInstanceId1 = embeddedActivity2.compositeInstanceId;
                }
                if (compositeInstanceId === compositeInstanceId1) {
                  if (updateServiceHandlerResult.state.isStreaming === connectionState.isStreaming) {
                    if (tmp4 === tmp7) {
                      if (tmp5 === tmp8) {
                        updateServiceHandlerResult.state = connectionState;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const embeddedActivity3 = connectionState.embeddedActivity;
        updateServiceHandlerResult.state = connectionState;
        ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
        const channel = closure_1_7.getChannel(connectionState.channelId);
        if (null != channel) {
          let tmp16 = importDefault;
          let updateServiceHandler = dependencyMap;
          let str2 = "";
          if (null != embeddedActivity3) {
            let applicationId;
            if (embeddedActivity3 != null) {
              applicationId = embeddedActivity3.applicationId;
            }
            const application = closure_1_5.getApplication(applicationId);
            let name;
            if (application != null) {
              name = application.name;
            }
            const _HermesInternal = HermesInternal;
            str2 = " - " + tmp16(updateServiceHandler[15])(name);
            const tmp16Result = tmp16(updateServiceHandler[15]);
          }
          const obj3 = _modDef12598;
          obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
          const channelName = obj(updateServiceHandler[16]).computeChannelName(channel, closure_1_11, closure_1_10);
          const intl = obj(updateServiceHandler[17]).intl;
          obj = { callState: null };
          obj[0] = obj3.getStatus(connectionState).connectionStatusText;
          obj[0] = intl.formatToPlainString(obj(updateServiceHandler[17]).t["aUT3+M"], obj);
          const _HermesInternal2 = HermesInternal;
          obj[1] = "" + channelName + str2;
          obj[2] = obj(updateServiceHandler[12]).ServiceNotificationPriority.HIGH;
          obj[3] = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
          const intl2 = obj(updateServiceHandler[17]).intl;
          const items = [updateServiceHandlerResult.createAction(channel, "Disconnect", intl2.string(obj(updateServiceHandler[17]).t["6vrfgt"])), , ];
          const intl3 = obj(updateServiceHandler[17]).intl;
          const string = intl3.string;
          const t = obj(updateServiceHandler[17]).t;
          if (selfMute) {
            let stringResult = string(t.YqAjXy);
          } else {
            stringResult = string(t.w4m945);
          }
          items[1] = updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult);
          const intl4 = tmp23(updateServiceHandler[17]).intl;
          const string2 = intl4.string;
          const t2 = tmp23(updateServiceHandler[17]).t;
          if (deafened) {
            let string2Result = string2(t2["2US872"]);
          } else {
            string2Result = string2(t2.wjcRFX);
          }
          items[2] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
          obj[4] = items;
          const ServiceNotificationType = tmp23(updateServiceHandler[12]).ServiceNotificationType;
          obj[5] = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
          obj[7] = tmp7;
          obj[8] = tmp8;
          tmp16 = tmp16(updateServiceHandler[13]);
          updateServiceHandler = tmp16.updateServiceHandler;
          updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
          const obj4 = obj(updateServiceHandler[16]);
        } else {
          initializeDefault2.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
        }
        const tmp6 = closure_1_3(obj.getIcon(connectionState), 2);
      } else {
        obj.state = connectionState;
      }
    };
    obj.createAction = function createAction(channel, Disconnect, intl2) {
      { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: obj };
      obj = { channelId: channel.id };
      return obj;
    };
    return obj;
  }
}
const prototype = VoiceNotificationManager.prototype;
prototype["initialize"] = function initialize() {
  closure_9.addChangeListener(this.handleVoiceStateChange);
  closure_8.addChangeListener(this.handleMediaEngineStateChange);
  closure_4.addChangeListener(this.handleEmbeddedActivityStateChange);
  closure_6.addChangeListener(this.handleApplicationStreamStateChange);
};
prototype["terminate"] = function terminate() {
  closure_9.removeChangeListener(this.handleVoiceStateChange);
  closure_8.removeChangeListener(this.handleMediaEngineStateChange);
  closure_4.removeChangeListener(this.handleEmbeddedActivityStateChange);
  closure_6.removeChangeListener(this.handleApplicationStreamStateChange);
};
obj132 = Object.create(VoiceNotificationManager.prototype);
obj132.voiceServiceHandlerId = 9000;
obj132.state = { channelId: "flex", connectionState: "context", selfMute: false, deafened: null, isPushToTalk: "RCTView", embeddedActivity: "face_with_spiral_eyes", isStreaming: "woozy_face" };
obj132.handleVoiceStateChange = function handleVoiceStateChange() {
  const channelId = closure_1_9.getChannelId();
  const state = closure_1_9.getState();
  if (!tmp3) {
    obj = {};
    const merged = Object.assign(obj.state);
    obj.channelId = channelId;
    obj.connectionState = state;
    obj.handleUpdate(obj);
  }
};
obj132.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
  obj = closure_1_8;
  const tmp = closure_1_8.isSelfMute() || obj.isSelfMutedTemporarily();
  const tmp2 = obj.isSelfDeaf() || obj.isDeaf();
  let tmp4 = obj.state.selfMute === tmp;
  const mode = obj.getMode();
  if (tmp4) {
    tmp4 = obj2.state.deafened === tmp2;
  }
  if (tmp4) {
    tmp4 = obj2.state.isPushToTalk === tmp5;
  }
  if (!tmp4) {
    obj = {};
    const merged = Object.assign(obj2.state);
    obj.selfMute = tmp;
    obj.deafened = tmp2;
    obj.isPushToTalk = tmp5;
    obj2.handleUpdate(obj);
  }
};
obj132.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
  if (null != obj.state.channelId) {
    obj = {};
    const currentEmbeddedActivity = closure_1_4.getCurrentEmbeddedActivity();
    const merged = Object.assign(obj.state);
    obj.embeddedActivity = currentEmbeddedActivity;
    obj.handleUpdate(obj);
  }
};
obj132.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
  const tmp = null != closure_1_6.getCurrentUserActiveStream();
  if (obj.state.isStreaming !== tmp) {
    obj = {};
    const merged = Object.assign(obj.state);
    obj.isStreaming = tmp;
    obj.handleUpdate(obj);
  }
};
obj132.getIcon = function getIcon(state) {
  ({ deafened, selfMute, isPushToTalk } = state);
  const ServiceNotificationIcon = obj(table[12]).ServiceNotificationIcon;
  if (deafened) {
    const items = [ServiceNotificationIcon.DEAFENED, closure_14];
    let items3 = items;
  } else if (selfMute) {
    const items1 = [ServiceNotificationIcon.MUTED, closure_14];
    items3 = items1;
  } else if (isPushToTalk) {
    const items2 = [ServiceNotificationIcon.DEFAULT, closure_13];
    items3 = items2;
  } else {
    items3 = [ServiceNotificationIcon.IDLE, closure_13];
  }
  return items3;
};
obj132.handleUpdate = function handleUpdate(connectionState) {
  if (null != connectionState.connectionState) {
    let updateServiceHandlerResult = obj;
    [tmp4, tmp5] = closure_1_3(obj.getIcon(obj.state), 2);
    const tmp3 = closure_1_3(obj.getIcon(obj.state), 2);
    [tmp7, tmp8] = closure_1_3(obj.getIcon(connectionState), 2);
    if (obj.state.channelId === connectionState.channelId) {
      if (updateServiceHandlerResult.state.connectionState === connectionState.connectionState) {
        if (updateServiceHandlerResult.state.selfMute === connectionState.selfMute) {
          if (updateServiceHandlerResult.state.deafened === connectionState.deafened) {
            const embeddedActivity = updateServiceHandlerResult.state.embeddedActivity;
            let compositeInstanceId;
            if (embeddedActivity != null) {
              compositeInstanceId = embeddedActivity.compositeInstanceId;
            }
            const embeddedActivity2 = connectionState.embeddedActivity;
            let compositeInstanceId1;
            if (embeddedActivity2 != null) {
              compositeInstanceId1 = embeddedActivity2.compositeInstanceId;
            }
            if (compositeInstanceId === compositeInstanceId1) {
              if (updateServiceHandlerResult.state.isStreaming === connectionState.isStreaming) {
                if (tmp4 === tmp7) {
                  if (tmp5 === tmp8) {
                    updateServiceHandlerResult.state = connectionState;
                  }
                }
              }
            }
          }
        }
      }
    }
    const embeddedActivity3 = connectionState.embeddedActivity;
    updateServiceHandlerResult.state = connectionState;
    ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
    const channel = closure_1_7.getChannel(connectionState.channelId);
    if (null != channel) {
      let tmp16 = importDefault;
      let updateServiceHandler = dependencyMap;
      let str2 = "";
      if (null != embeddedActivity3) {
        let applicationId;
        if (embeddedActivity3 != null) {
          applicationId = embeddedActivity3.applicationId;
        }
        const application = closure_1_5.getApplication(applicationId);
        let name;
        if (application != null) {
          name = application.name;
        }
        const _HermesInternal = HermesInternal;
        str2 = " - " + tmp16(updateServiceHandler[15])(name);
        const tmp16Result = tmp16(updateServiceHandler[15]);
      }
      const obj3 = _modDef12598;
      obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
      const channelName = obj(updateServiceHandler[16]).computeChannelName(channel, closure_1_11, closure_1_10);
      const intl = obj(updateServiceHandler[17]).intl;
      obj = { callState: null };
      obj[0] = obj3.getStatus(connectionState).connectionStatusText;
      obj[0] = intl.formatToPlainString(obj(updateServiceHandler[17]).t["aUT3+M"], obj);
      const _HermesInternal2 = HermesInternal;
      obj[1] = "" + channelName + str2;
      obj[2] = obj(updateServiceHandler[12]).ServiceNotificationPriority.HIGH;
      obj[3] = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
      const intl2 = obj(updateServiceHandler[17]).intl;
      const items = [updateServiceHandlerResult.createAction(channel, "Disconnect", intl2.string(obj(updateServiceHandler[17]).t["6vrfgt"])), , ];
      const intl3 = obj(updateServiceHandler[17]).intl;
      const string = intl3.string;
      const t = obj(updateServiceHandler[17]).t;
      if (selfMute) {
        let stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      items[1] = updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult);
      const intl4 = tmp23(updateServiceHandler[17]).intl;
      const string2 = intl4.string;
      const t2 = tmp23(updateServiceHandler[17]).t;
      if (deafened) {
        let string2Result = string2(t2["2US872"]);
      } else {
        string2Result = string2(t2.wjcRFX);
      }
      items[2] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
      obj[4] = items;
      const ServiceNotificationType = tmp23(updateServiceHandler[12]).ServiceNotificationType;
      obj[5] = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
      obj[7] = tmp7;
      obj[8] = tmp8;
      tmp16 = tmp16(updateServiceHandler[13]);
      updateServiceHandler = tmp16.updateServiceHandler;
      updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
      const obj4 = obj(updateServiceHandler[16]);
    } else {
      initializeDefault2.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
    }
    const tmp6 = closure_1_3(obj.getIcon(connectionState), 2);
  } else {
    obj.state = connectionState;
  }
};
obj132.createAction = function createAction(channel, Disconnect, intl2) {
  { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: obj };
  obj = { channelId: channel.id };
  return obj;
};
initializeDefault;
class VoiceNotificationLifecycleManager extends tmp3 {
}
const prototype2 = VoiceNotificationLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  obj132.initialize();
};
prototype2["_terminate"] = function _terminate() {
  obj132.terminate();
};
const voiceNotificationLifecycleManager = new VoiceNotificationLifecycleManager();
const result = obj132.fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default voiceNotificationLifecycleManager;