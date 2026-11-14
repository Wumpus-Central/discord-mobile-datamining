// === Module 16906: VoiceNotificationManager ===

// Module 16906 (VoiceNotificationManager)
import nativeDefault from "native" /* 575 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8857 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 13080 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import LifecycleManager from "LifecycleManager" /* 2123 */;

let obj2 = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, processColor } = get_ActivityIndicator);
const GuildRecord = fn(5173);
({ getGuildAcronym: metroImportDefault, getGuildIconURL: closure_8 } = GuildRecord);
const InputModes = fn(1072).InputModes;
let closure_17 = processColor(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_18 = processColor(nativeDefault.unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "s", connectionState: "container", selfMute: false, deafened: 0, isPushToTalk: 0, embeddedActivity: 0, isStreaming: 0 };
    obj.handleVoiceStateChange = function handleVoiceStateChange() {
      const channelId = RTCConnectionStore.getChannelId();
      state = RTCConnectionStore.getState();
      if (!tmp3) {
        obj2 = {};
        const merged = Object.assign(obj.state);
        obj2.channelId = channelId;
        obj2.connectionState = state;
        obj.handleUpdate(obj2);
      }
    };
    obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
      const tmp = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
      const tmp2 = MediaEngineStore.isSelfDeaf() || MediaEngineStore.isDeaf();
      let tmp4 = MediaEngineStore.state.selfMute === tmp;
      const mode = MediaEngineStore.getMode();
      if (tmp4) {
        tmp4 = MediaEngineStore.state.deafened === tmp2;
      }
      if (tmp4) {
        tmp4 = MediaEngineStore.state.isPushToTalk === tmp5;
      }
      if (!tmp4) {
        const obj3 = {};
        const merged = Object.assign(MediaEngineStore.state);
        obj3.selfMute = tmp;
        obj3.deafened = tmp2;
        obj3.isPushToTalk = tmp5;
        MediaEngineStore.handleUpdate(obj3);
      }
    };
    obj.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
      if (null != obj.state.channelId) {
        obj2 = {};
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        const merged = Object.assign(obj.state);
        obj2.embeddedActivity = currentEmbeddedActivity;
        obj.handleUpdate(obj2);
      }
    };
    obj.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
      const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
      if (obj.state.isStreaming !== tmp) {
        obj2 = {};
        const merged = Object.assign(obj.state);
        obj2.isStreaming = tmp;
        obj.handleUpdate(obj2);
      }
    };
    obj.getIcon = function getIcon(state) {
      ({ deafened, selfMute, isPushToTalk } = state);
      const ServiceNotificationIcon = obj(dependencyMap[14]).ServiceNotificationIcon;
      if (deafened) {
        items = [ServiceNotificationIcon.DEAFENED, closure_1_18];
        let items3 = items;
      } else if (selfMute) {
        const items1 = [ServiceNotificationIcon.MUTED, closure_1_18];
        items3 = items1;
      } else if (isPushToTalk) {
        const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_17];
        items3 = items2;
      } else {
        items3 = [ServiceNotificationIcon.IDLE, closure_1_17];
      }
      return items3;
    };
    obj.handleUpdate = function handleUpdate(connectionState) {
      if (null != connectionState.connectionState) {
        let updateServiceHandlerResult = obj;
        [tmp4, tmp5] = obj.getIcon(obj.state);
        const tmp3 = _slicedToArray(obj.getIcon(obj.state), 2);
        [tmp7, tmp8] = obj.getIcon(connectionState);
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
                    if (tmp4 === stringResult1) {
                      if (tmp5 === callIcon) {
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
            str2 = " - " + tmp16(10859)(name);
            const tmp16Result = tmp16(10859);
          }
          obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null, acquireWifiLock: null, hangUpAction: null, callIcon: null };
          const obj3 = RTCConnectionUtilsDefault;
          obj.title = obj2(5954).computeChannelName(channel, UserStore, RelationshipStore);
          const _HermesInternal2 = HermesInternal;
          obj.content = "" + obj3.getStatus(connectionState).connectionStatusText + str2;
          obj.priority = obj2(8859).ServiceNotificationPriority.HIGH;
          obj.contentAction = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
          const intl = obj2(1113).intl;
          const string = intl.string;
          const t = obj2(1113).t;
          if (selfMute) {
            let stringResult = string(t.YqAjXy);
          } else {
            stringResult = string(t.w4m945);
          }
          items = [updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult), ];
          const intl2 = tmp23(1113).intl;
          const string2 = intl2.string;
          const t2 = tmp23(1113).t;
          if (deafened) {
            let string2Result = string2(t2["2US872"]);
          } else {
            string2Result = string2(t2.wjcRFX);
          }
          items[1] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
          obj.auxiliaryActions = items;
          let intl3 = tmp23(8859).ServiceNotificationType;
          obj.type = isStreaming ? intl3.SCREEN_SHARE : intl3.VOICE_CALL;
          obj.icon = stringResult1;
          obj.color = callIcon;
          const obj5 = obj2(5954);
          obj.acquireWifiLock = obj2(16907).shouldAcquireCallWifiLock();
          intl3 = tmp23(1113).intl;
          stringResult1 = intl3.string(obj2(1113).t["6vrfgt"]);
          obj.hangUpAction = updateServiceHandlerResult.createAction(channel, "Disconnect", stringResult1);
          callIcon = updateServiceHandlerResult.getCallIcon(channel);
          obj.callIcon = callIcon;
          tmp16 = tmp16(8857);
          updateServiceHandler = tmp16.updateServiceHandler;
          updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
          const tmp23Result = obj2(16907);
        } else {
          obj2 = ForegroundServiceManagerDefault;
          obj2.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
        }
        const tmp6 = _slicedToArray(obj.getIcon(connectionState), 2);
      } else {
        obj.state = connectionState;
      }
    };
    obj.createAction = function createAction(channel, Disconnect, string2Result) {
      return { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: string2Result, data: { channelId: channel.id } };
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
prototype["getCallIcon"] = function getCallIcon(channel) {
  guild = GuildStore.getGuild(channel.guild_id);
  if (null != guild) {
    let channelIconURL = React5(guild, 128);
  } else {
    channelIconURL = obj2(15561).getChannelIconURL(channel, 128);
    const obj = obj2(15561);
  }
  let tmp6 = channelIconURL;
  if (typeof channelIconURL === "number") {
    const assetSource = React4.resolveAssetSource(channelIconURL);
    let uri;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    tmp6 = uri;
  }
  obj2 = { url: tmp6, text: null };
  let tmp8;
  if (null != guild) {
    tmp8 = metroImportDefault(guild);
  }
  obj2.text = tmp8;
  return obj2;
};
obj2 = Object.create(VoiceNotificationManager.prototype);
obj2.voiceServiceHandlerId = 9000;
obj2.state = { channelId: "s", connectionState: "container", selfMute: false, deafened: 0, isPushToTalk: 0, embeddedActivity: 0, isStreaming: 0 };
obj2.handleVoiceStateChange = function handleVoiceStateChange() {
  const channelId = RTCConnectionStore.getChannelId();
  state = RTCConnectionStore.getState();
  if (!tmp3) {
    obj2 = {};
    const merged = Object.assign(obj.state);
    obj2.channelId = channelId;
    obj2.connectionState = state;
    obj.handleUpdate(obj2);
  }
};
obj2.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
  const tmp = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
  const tmp2 = MediaEngineStore.isSelfDeaf() || MediaEngineStore.isDeaf();
  let tmp4 = MediaEngineStore.state.selfMute === tmp;
  const mode = MediaEngineStore.getMode();
  if (tmp4) {
    tmp4 = MediaEngineStore.state.deafened === tmp2;
  }
  if (tmp4) {
    tmp4 = MediaEngineStore.state.isPushToTalk === tmp5;
  }
  if (!tmp4) {
    const obj3 = {};
    const merged = Object.assign(MediaEngineStore.state);
    obj3.selfMute = tmp;
    obj3.deafened = tmp2;
    obj3.isPushToTalk = tmp5;
    MediaEngineStore.handleUpdate(obj3);
  }
};
obj2.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
  if (null != obj.state.channelId) {
    obj2 = {};
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const merged = Object.assign(obj.state);
    obj2.embeddedActivity = currentEmbeddedActivity;
    obj.handleUpdate(obj2);
  }
};
obj2.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
  const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  if (obj.state.isStreaming !== tmp) {
    obj2 = {};
    const merged = Object.assign(obj.state);
    obj2.isStreaming = tmp;
    obj.handleUpdate(obj2);
  }
};
obj2.getIcon = function getIcon(state) {
  ({ deafened, selfMute, isPushToTalk } = state);
  const ServiceNotificationIcon = obj(dependencyMap[14]).ServiceNotificationIcon;
  if (deafened) {
    items = [ServiceNotificationIcon.DEAFENED, closure_1_18];
    let items3 = items;
  } else if (selfMute) {
    const items1 = [ServiceNotificationIcon.MUTED, closure_1_18];
    items3 = items1;
  } else if (isPushToTalk) {
    const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_17];
    items3 = items2;
  } else {
    items3 = [ServiceNotificationIcon.IDLE, closure_1_17];
  }
  return items3;
};
obj2.handleUpdate = function handleUpdate(connectionState) {
  if (null != connectionState.connectionState) {
    let updateServiceHandlerResult = obj;
    [tmp4, tmp5] = obj.getIcon(obj.state);
    const tmp3 = _slicedToArray(obj.getIcon(obj.state), 2);
    [tmp7, tmp8] = obj.getIcon(connectionState);
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
                if (tmp4 === stringResult1) {
                  if (tmp5 === callIcon) {
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
        str2 = " - " + tmp16(10859)(name);
        const tmp16Result = tmp16(10859);
      }
      obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null, acquireWifiLock: null, hangUpAction: null, callIcon: null };
      const obj3 = RTCConnectionUtilsDefault;
      obj.title = obj2(5954).computeChannelName(channel, UserStore, RelationshipStore);
      const _HermesInternal2 = HermesInternal;
      obj.content = "" + obj3.getStatus(connectionState).connectionStatusText + str2;
      obj.priority = obj2(8859).ServiceNotificationPriority.HIGH;
      obj.contentAction = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
      const intl = obj2(1113).intl;
      const string = intl.string;
      const t = obj2(1113).t;
      if (selfMute) {
        let stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      items = [updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult), ];
      const intl2 = tmp23(1113).intl;
      const string2 = intl2.string;
      const t2 = tmp23(1113).t;
      if (deafened) {
        let string2Result = string2(t2["2US872"]);
      } else {
        string2Result = string2(t2.wjcRFX);
      }
      items[1] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
      obj.auxiliaryActions = items;
      let intl3 = tmp23(8859).ServiceNotificationType;
      obj.type = isStreaming ? intl3.SCREEN_SHARE : intl3.VOICE_CALL;
      obj.icon = stringResult1;
      obj.color = callIcon;
      const obj5 = obj2(5954);
      obj.acquireWifiLock = obj2(16907).shouldAcquireCallWifiLock();
      intl3 = tmp23(1113).intl;
      stringResult1 = intl3.string(obj2(1113).t["6vrfgt"]);
      obj.hangUpAction = updateServiceHandlerResult.createAction(channel, "Disconnect", stringResult1);
      callIcon = updateServiceHandlerResult.getCallIcon(channel);
      obj.callIcon = callIcon;
      tmp16 = tmp16(8857);
      updateServiceHandler = tmp16.updateServiceHandler;
      updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
      const tmp23Result = obj2(16907);
    } else {
      obj2 = ForegroundServiceManagerDefault;
      obj2.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
    }
    const tmp6 = _slicedToArray(obj.getIcon(connectionState), 2);
  } else {
    obj.state = connectionState;
  }
};
obj2.createAction = function createAction(channel, Disconnect, string2Result) {
  return { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: string2Result, data: { channelId: channel.id } };
};
class VoiceNotificationLifecycleManager extends tmp5 {
}
const prototype2 = VoiceNotificationLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  obj2.initialize();
};
prototype2["_terminate"] = function _terminate() {
  obj2.terminate();
};
const voiceNotificationLifecycleManager = new VoiceNotificationLifecycleManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default voiceNotificationLifecycleManager;