// === Module 14453: VoiceNotificationManager ===

// Module 14453 (VoiceNotificationManager)
import nativeDefault from "native" /* 576 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7756 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 10040 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

let size = fn;
const processColor = fn(17).processColor;
const InputModes = fn(1074).InputModes;
let closure_13 = processColor(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_14 = processColor(nativeDefault.unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "flexDirection", connectionState: "content", selfMute: false, deafened: "15.30", isPushToTalk: "3.30", embeddedActivity: "halv fire", isStreaming: "klokkesl\u00E6t" };
    obj.handleVoiceStateChange = function handleVoiceStateChange() {
      const channelId = RTCConnectionStore.getChannelId();
      const state = RTCConnectionStore.getState();
      if (!tmp3) {
        obj = {};
        const merged = Object.assign(obj.state);
        obj.channelId = channelId;
        obj.connectionState = state;
        obj.handleUpdate(obj);
      }
    };
    obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
      obj = MediaEngineStore;
      const tmp = MediaEngineStore.isSelfMute() || obj.isSelfMutedTemporarily();
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
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        const merged = Object.assign(obj.state);
        obj.embeddedActivity = currentEmbeddedActivity;
        obj.handleUpdate(obj);
      }
    };
    obj.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
      const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
      if (obj.state.isStreaming !== tmp) {
        obj = {};
        const merged = Object.assign(obj.state);
        obj.isStreaming = tmp;
        obj.handleUpdate(obj);
      }
    };
    obj.getIcon = function getIcon(state) {
      ({ deafened, selfMute, isPushToTalk } = state);
      const ServiceNotificationIcon = obj(dependencyMap[12]).ServiceNotificationIcon;
      if (deafened) {
        const items = [ServiceNotificationIcon.DEAFENED, closure_1_14];
        let items3 = items;
      } else if (selfMute) {
        const items1 = [ServiceNotificationIcon.MUTED, closure_1_14];
        items3 = items1;
      } else if (isPushToTalk) {
        const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_13];
        items3 = items2;
      } else {
        items3 = [ServiceNotificationIcon.IDLE, closure_1_13];
      }
      return items3;
    };
    obj.handleUpdate = function handleUpdate(connectionState) {
      if (null != connectionState.connectionState) {
        let updateServiceHandlerResult = obj;
        [tmp4, tmp5] = _slicedToArray(obj.getIcon(obj.state), 2);
        const tmp3 = _slicedToArray(obj.getIcon(obj.state), 2);
        [tmp7, tmp8] = _slicedToArray(obj.getIcon(connectionState), 2);
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
        const channel = ChannelStore.getChannel(connectionState.channelId);
        if (null != channel) {
          let tmp16 = importDefault;
          let updateServiceHandler = dependencyMap;
          let str2 = "";
          if (null != embeddedActivity3) {
            let applicationId;
            if (embeddedActivity3 != null) {
              applicationId = embeddedActivity3.applicationId;
            }
            const application = ApplicationStore.getApplication(applicationId);
            let name;
            if (application != null) {
              name = application.name;
            }
            const _HermesInternal = HermesInternal;
            str2 = " - " + tmp16(10890)(name);
            const tmp16Result = tmp16(10890);
          }
          const obj3 = RTCConnectionUtilsDefault;
          obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
          const channelName = size(4713).computeChannelName(channel, UserStore, RelationshipStore);
          const intl = size(1114).intl;
          obj = { callState: obj3.getStatus(connectionState).connectionStatusText };
          obj.title = intl.formatToPlainString(size(1114).t["aUT3+M"], obj);
          const _HermesInternal2 = HermesInternal;
          obj.content = "" + channelName + str2;
          obj.priority = size(7758).ServiceNotificationPriority.HIGH;
          obj.contentAction = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
          const intl2 = size(1114).intl;
          const items = [updateServiceHandlerResult.createAction(channel, "Disconnect", intl2.string(size(1114).t["6vrfgt"])), , ];
          const intl3 = size(1114).intl;
          const string = intl3.string;
          const t = size(1114).t;
          if (selfMute) {
            let stringResult = string(t.YqAjXy);
          } else {
            stringResult = string(t.w4m945);
          }
          items[1] = updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult);
          const intl4 = tmp23(1114).intl;
          const string2 = intl4.string;
          const t2 = tmp23(1114).t;
          if (deafened) {
            let string2Result = string2(t2["2US872"]);
          } else {
            string2Result = string2(t2.wjcRFX);
          }
          items[2] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
          obj.auxiliaryActions = items;
          const ServiceNotificationType = tmp23(7758).ServiceNotificationType;
          obj.type = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
          obj.icon = tmp7;
          obj.color = tmp8;
          tmp16 = tmp16(7756);
          updateServiceHandler = tmp16.updateServiceHandler;
          updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
          const obj4 = size(4713);
        } else {
          ForegroundServiceManagerDefault.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
        }
        const tmp6 = _slicedToArray(obj.getIcon(connectionState), 2);
      } else {
        obj.state = connectionState;
      }
    };
    obj.createAction = function createAction(channel, Disconnect, intl2) {
      return { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: { channelId: channel.id } };
    };
    return obj;
  }
}
const prototype = VoiceNotificationManager.prototype;
prototype["initialize"] = function initialize() {
  RTCConnectionStore.addChangeListener(this.handleVoiceStateChange);
  MediaEngineStore.addChangeListener(this.handleMediaEngineStateChange);
  EmbeddedActivitiesStore.addChangeListener(this.handleEmbeddedActivityStateChange);
  ApplicationStreamingStore.addChangeListener(this.handleApplicationStreamStateChange);
};
prototype["terminate"] = function terminate() {
  RTCConnectionStore.removeChangeListener(this.handleVoiceStateChange);
  MediaEngineStore.removeChangeListener(this.handleMediaEngineStateChange);
  EmbeddedActivitiesStore.removeChangeListener(this.handleEmbeddedActivityStateChange);
  ApplicationStreamingStore.removeChangeListener(this.handleApplicationStreamStateChange);
};
size = Object.create(VoiceNotificationManager.prototype);
size.voiceServiceHandlerId = 9000;
size.state = { channelId: "flexDirection", connectionState: "content", selfMute: false, deafened: "15.30", isPushToTalk: "3.30", embeddedActivity: "halv fire", isStreaming: "klokkesl\u00E6t" };
size.handleVoiceStateChange = function handleVoiceStateChange() {
  const channelId = RTCConnectionStore.getChannelId();
  const state = RTCConnectionStore.getState();
  if (!tmp3) {
    obj = {};
    const merged = Object.assign(obj.state);
    obj.channelId = channelId;
    obj.connectionState = state;
    obj.handleUpdate(obj);
  }
};
size.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
  obj = MediaEngineStore;
  const tmp = MediaEngineStore.isSelfMute() || obj.isSelfMutedTemporarily();
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
size.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
  if (null != obj.state.channelId) {
    obj = {};
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const merged = Object.assign(obj.state);
    obj.embeddedActivity = currentEmbeddedActivity;
    obj.handleUpdate(obj);
  }
};
size.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
  const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  if (obj.state.isStreaming !== tmp) {
    obj = {};
    const merged = Object.assign(obj.state);
    obj.isStreaming = tmp;
    obj.handleUpdate(obj);
  }
};
size.getIcon = function getIcon(state) {
  ({ deafened, selfMute, isPushToTalk } = state);
  const ServiceNotificationIcon = obj(dependencyMap[12]).ServiceNotificationIcon;
  if (deafened) {
    const items = [ServiceNotificationIcon.DEAFENED, closure_1_14];
    let items3 = items;
  } else if (selfMute) {
    const items1 = [ServiceNotificationIcon.MUTED, closure_1_14];
    items3 = items1;
  } else if (isPushToTalk) {
    const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_13];
    items3 = items2;
  } else {
    items3 = [ServiceNotificationIcon.IDLE, closure_1_13];
  }
  return items3;
};
size.handleUpdate = function handleUpdate(connectionState) {
  if (null != connectionState.connectionState) {
    let updateServiceHandlerResult = obj;
    [tmp4, tmp5] = _slicedToArray(obj.getIcon(obj.state), 2);
    const tmp3 = _slicedToArray(obj.getIcon(obj.state), 2);
    [tmp7, tmp8] = _slicedToArray(obj.getIcon(connectionState), 2);
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
    const channel = ChannelStore.getChannel(connectionState.channelId);
    if (null != channel) {
      let tmp16 = importDefault;
      let updateServiceHandler = dependencyMap;
      let str2 = "";
      if (null != embeddedActivity3) {
        let applicationId;
        if (embeddedActivity3 != null) {
          applicationId = embeddedActivity3.applicationId;
        }
        const application = ApplicationStore.getApplication(applicationId);
        let name;
        if (application != null) {
          name = application.name;
        }
        const _HermesInternal = HermesInternal;
        str2 = " - " + tmp16(10890)(name);
        const tmp16Result = tmp16(10890);
      }
      const obj3 = RTCConnectionUtilsDefault;
      obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
      const channelName = size(4713).computeChannelName(channel, UserStore, RelationshipStore);
      const intl = size(1114).intl;
      obj = { callState: obj3.getStatus(connectionState).connectionStatusText };
      obj.title = intl.formatToPlainString(size(1114).t["aUT3+M"], obj);
      const _HermesInternal2 = HermesInternal;
      obj.content = "" + channelName + str2;
      obj.priority = size(7758).ServiceNotificationPriority.HIGH;
      obj.contentAction = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
      const intl2 = size(1114).intl;
      const items = [updateServiceHandlerResult.createAction(channel, "Disconnect", intl2.string(size(1114).t["6vrfgt"])), , ];
      const intl3 = size(1114).intl;
      const string = intl3.string;
      const t = size(1114).t;
      if (selfMute) {
        let stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      items[1] = updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult);
      const intl4 = tmp23(1114).intl;
      const string2 = intl4.string;
      const t2 = tmp23(1114).t;
      if (deafened) {
        let string2Result = string2(t2["2US872"]);
      } else {
        string2Result = string2(t2.wjcRFX);
      }
      items[2] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
      obj.auxiliaryActions = items;
      const ServiceNotificationType = tmp23(7758).ServiceNotificationType;
      obj.type = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
      obj.icon = tmp7;
      obj.color = tmp8;
      tmp16 = tmp16(7756);
      updateServiceHandler = tmp16.updateServiceHandler;
      updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
      const obj4 = size(4713);
    } else {
      ForegroundServiceManagerDefault.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
    }
    const tmp6 = _slicedToArray(obj.getIcon(connectionState), 2);
  } else {
    obj.state = connectionState;
  }
};
size.createAction = function createAction(channel, Disconnect, intl2) {
  return { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: { channelId: channel.id } };
};
class VoiceNotificationLifecycleManager extends tmp3 {
}
const prototype2 = VoiceNotificationLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  size.initialize();
};
prototype2["_terminate"] = function _terminate() {
  size.terminate();
};
const voiceNotificationLifecycleManager = new VoiceNotificationLifecycleManager();
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default voiceNotificationLifecycleManager;