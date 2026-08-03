import _slicedToArray from "_slicedToArray";
import { processColor } from "getSystemLocale";
import participantFromServer from "participantFromServer";
import addApplication from "addApplication";
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { InputModes } from "ME";
import "initialize";
import set from "participantFromServer";

let closure_13 = processColor(require("Themes").unsafe_rawColors.BRAND_500);
let closure_14 = processColor(require("Themes").unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    VoiceNotificationManager = obj;
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "flex", connectionState: "container", selfMute: false, deafened: true, isPushToTalk: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", embeddedActivity: null, isStreaming: "b4c9ac154b2122e14fc424ce2fde282f" };
    obj.handleVoiceStateChange = function handleVoiceStateChange() {
      const channelId = outer1_9.getChannelId();
      const state = outer1_9.getState();
      if (!tmp3) {
        const obj = {};
        const merged = Object.assign(obj.state);
        obj.channelId = channelId;
        obj.connectionState = state;
        obj.handleUpdate(obj);
      }
    };
    obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
      let obj = outer1_8;
      const tmp = outer1_8.isSelfMute() || obj.isSelfMutedTemporarily();
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
        const currentEmbeddedActivity = outer1_4.getCurrentEmbeddedActivity();
        const merged = Object.assign(obj.state);
        obj.embeddedActivity = currentEmbeddedActivity;
        obj.handleUpdate(obj);
      }
    };
    obj.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
      const tmp = null != outer1_6.getCurrentUserActiveStream();
      if (obj.state.isStreaming !== tmp) {
        obj = {};
        const merged = Object.assign(obj.state);
        obj.isStreaming = tmp;
        obj.handleUpdate(obj);
      }
    };
    obj.getIcon = function getIcon(state) {
      let deafened;
      let isPushToTalk;
      let selfMute;
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
      let deafened;
      let isStreaming;
      let selfMute;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      if (null != connectionState.connectionState) {
        let updateServiceHandlerResult = obj;
        [tmp4, tmp5] = outer1_3(obj.getIcon(obj.state), 2);
        const tmp3 = outer1_3(obj.getIcon(obj.state), 2);
        [tmp7, tmp8] = outer1_3(obj.getIcon(connectionState), 2);
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
        const channel = outer1_7.getChannel(connectionState.channelId);
        if (null != channel) {
          let tmp16 = outer1_1;
          let updateServiceHandler = outer1_2;
          let str2 = "";
          if (null != embeddedActivity3) {
            let applicationId;
            if (embeddedActivity3 != null) {
              applicationId = embeddedActivity3.applicationId;
            }
            const application = outer1_5.getApplication(applicationId);
            let name;
            if (application != null) {
              name = application.name;
            }
            const _HermesInternal = HermesInternal;
            str2 = " - " + tmp16(updateServiceHandler[15])(name);
            const tmp16Result = tmp16(updateServiceHandler[15]);
          }
          const obj3 = outer1_1(outer1_2[14]);
          obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
          const channelName = obj(updateServiceHandler[16]).computeChannelName(channel, outer1_11, outer1_10);
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
          outer1_1(outer1_2[13]).removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
          const obj2 = outer1_1(outer1_2[13]);
        }
        const tmp6 = outer1_3(obj.getIcon(connectionState), 2);
      } else {
        obj.state = connectionState;
      }
    };
    obj.createAction = function createAction(channel, Disconnect, intl2) {
      obj = { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: obj };
      obj = { channelId: channel.id };
      return obj;
    };
    return obj;
  }
}
const prototype = VoiceNotificationManager.prototype;
prototype["initialize"] = function initialize() {
  createRTCConnection.addChangeListener(this.handleVoiceStateChange);
  _detectH265HardwareDecode.addChangeListener(this.handleMediaEngineStateChange);
  participantFromServer.addChangeListener(this.handleEmbeddedActivityStateChange);
  reset.addChangeListener(this.handleApplicationStreamStateChange);
};
prototype["terminate"] = function terminate() {
  createRTCConnection.removeChangeListener(this.handleVoiceStateChange);
  _detectH265HardwareDecode.removeChangeListener(this.handleMediaEngineStateChange);
  participantFromServer.removeChangeListener(this.handleEmbeddedActivityStateChange);
  reset.removeChangeListener(this.handleApplicationStreamStateChange);
};
let set = Object.create(VoiceNotificationManager.prototype);
set.voiceServiceHandlerId = 9000;
set.state = { channelId: "flex", connectionState: "container", selfMute: false, deafened: true, isPushToTalk: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", embeddedActivity: null, isStreaming: "b4c9ac154b2122e14fc424ce2fde282f" };
set.handleVoiceStateChange = function handleVoiceStateChange() {
  const channelId = outer1_9.getChannelId();
  const state = outer1_9.getState();
  if (!tmp3) {
    const obj = {};
    const merged = Object.assign(obj.state);
    obj.channelId = channelId;
    obj.connectionState = state;
    obj.handleUpdate(obj);
  }
};
set.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
  let obj = outer1_8;
  const tmp = outer1_8.isSelfMute() || obj.isSelfMutedTemporarily();
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
set.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
  if (null != obj.state.channelId) {
    obj = {};
    const currentEmbeddedActivity = outer1_4.getCurrentEmbeddedActivity();
    const merged = Object.assign(obj.state);
    obj.embeddedActivity = currentEmbeddedActivity;
    obj.handleUpdate(obj);
  }
};
set.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
  const tmp = null != outer1_6.getCurrentUserActiveStream();
  if (obj.state.isStreaming !== tmp) {
    obj = {};
    const merged = Object.assign(obj.state);
    obj.isStreaming = tmp;
    obj.handleUpdate(obj);
  }
};
set.getIcon = function getIcon(state) {
  let deafened;
  let isPushToTalk;
  let selfMute;
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
set.handleUpdate = function handleUpdate(connectionState) {
  let deafened;
  let isStreaming;
  let selfMute;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  if (null != connectionState.connectionState) {
    let updateServiceHandlerResult = obj;
    [tmp4, tmp5] = outer1_3(obj.getIcon(obj.state), 2);
    const tmp3 = outer1_3(obj.getIcon(obj.state), 2);
    [tmp7, tmp8] = outer1_3(obj.getIcon(connectionState), 2);
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
    const channel = outer1_7.getChannel(connectionState.channelId);
    if (null != channel) {
      let tmp16 = outer1_1;
      let updateServiceHandler = outer1_2;
      let str2 = "";
      if (null != embeddedActivity3) {
        let applicationId;
        if (embeddedActivity3 != null) {
          applicationId = embeddedActivity3.applicationId;
        }
        const application = outer1_5.getApplication(applicationId);
        let name;
        if (application != null) {
          name = application.name;
        }
        const _HermesInternal = HermesInternal;
        str2 = " - " + tmp16(updateServiceHandler[15])(name);
        const tmp16Result = tmp16(updateServiceHandler[15]);
      }
      const obj3 = outer1_1(outer1_2[14]);
      obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
      const channelName = obj(updateServiceHandler[16]).computeChannelName(channel, outer1_11, outer1_10);
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
      outer1_1(outer1_2[13]).removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
      const obj2 = outer1_1(outer1_2[13]);
    }
    const tmp6 = outer1_3(obj.getIcon(connectionState), 2);
  } else {
    obj.state = connectionState;
  }
};
set.createAction = function createAction(channel, Disconnect, intl2) {
  obj = { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: obj };
  obj = { channelId: channel.id };
  return obj;
};
class VoiceNotificationLifecycleManager extends tmp3 {
}
const prototype2 = VoiceNotificationLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  obj.initialize();
};
prototype2["_terminate"] = function _terminate() {
  obj.terminate();
};
const voiceNotificationLifecycleManager = new VoiceNotificationLifecycleManager();
const result = set.fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default voiceNotificationLifecycleManager;