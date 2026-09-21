// === Module 7701: NetStats ===

// Module 7701 (NetStats)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1091 */;
import configure from "configure" /* 1464 */;
import NativeTTIManagerModuleDefault from "NativeTTIManagerModule" /* 4620 */;
import RTCBandwidthMonitor from "RTCBandwidthMonitor" /* 7716 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5494 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 7702 */;
import GuildStore from "GuildStore" /* 2063 */;
import NetworkUtils_mod from "utils/NetworkUtils" /* 1463 */;
import Dispatcher_mod from "Dispatcher" /* 573 */;

require = fn;
function receiveNetworkInfoformation(result) {
  global = result;
  if (null == global) {
    global = result;
  }
  const SystemResourceManager = React4.SystemResourceManager;
  const getNetworkUsage = SystemResourceManager.getNetworkUsage;
  if (getNetworkUsage != null) {
    const networkUsage = getNetworkUsage((arg0) => {
      nativeStats = arg0;
      if (null == closure_11) {
        closure_11 = arg0;
      }
      const obj = { state, nativeStats, rtc: RTCBandwidthMonitor.getRTCTotalBytes() };
      closure_1_9.fileOnly("Updating Network Info", obj);
    });
  }
}
function updateNetworkUsage() {
  const SystemResourceManager = React4.SystemResourceManager;
  const getNetworkUsage = SystemResourceManager.getNetworkUsage;
  if (getNetworkUsage != null) {
    const networkUsage = getNetworkUsage((arg0) => {
      nativeStats = arg0;
      if (null == closure_11) {
        closure_11 = arg0;
      }
      const obj = { state, nativeStats, rtc: RTCBandwidthMonitor.getRTCTotalBytes() };
      closure_1_9.fileOnly("Updating Network Info", obj);
    });
  }
}
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, AppState } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_9 = new LoggerDefault("NetStats");
let closure_10 = { signalStrengthLevel: null, isNetworkRoaming: false, cellularReceiveBytes: 0, cellularSendBytes: 0, totalReceiveBytes: 0, totalSendBytes: 0, uidReceiveBytes: 0, uidSendBytes: 0, socketBytesReceived: 0, otaBytesReceived: 0, otaNumRequests: 0, xhrBytesReceived: 0, xhrNumRequests: 0, frescoBytesReceived: 0, frescoNumRequests: 0, downloadBytesReceived: 0, downloadNumRequests: 0, mediaPlayerBytesReceived: 0 };
let c11 = null;
const tmp3 = new LoggerDefault("NetStats");
let global = { type: fn(1464).NetInfoStateType.unknown, effectiveSpeed: null, serviceProvider: null };
global = null;
let closure_14 = "active" === AppState.currentState;
let closure_15 = 0;
let closure_16 = 0;
let closure_17 = 0;
let closure_18 = 0;
let NetworkUtils = NetworkUtils_mod;
NetworkUtils.addChangeCallback(receiveNetworkInfoformation);
let NetworkUtils = NetworkUtils_mod;
NetworkUtils = NetworkUtils.getNetworkInformation();
NetworkUtils.then(receiveNetworkInfoformation);
class EventTracker {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    num = 0;
    if (closure_14) {
      tmp = globalThis;
      _setTimeout = setTimeout;
      tmp2 = closure_1;
      tmp3 = closure_2;
      num2 = 1;
      num = setTimeout(() => obj.track(), closure_1(closure_2[10]).Millis.MINUTE);
    }
    obj.trackTimeout = num;
    num3 = 0;
    if (closure_14) {
      tmp4 = globalThis;
      _setInterval = setInterval;
      tmp5 = closure_1;
      tmp6 = closure_2;
      num4 = 5;
      num3 = setInterval(() => obj.writeExistingEventStorage(), 5 * closure_1(closure_2[10]).Millis.SECOND);
    }
    obj.flushStorageInterval = num3;
    obj.didEverTrack = false;
    tmp7 = closure_2;
    Storage = closure_0(closure_2[11]).Storage;
    value = Storage.get("previousNetStatsEvents");
    if (value == null) {
      value = [];
    }
    obj.existingEvents = value;
    obj.trackExistingEvents = function trackExistingEvents() {
      if (obj.existingEvents.length > 0) {
        let result = AnalyticsTrackingStore.submitEventsImmediately(tmp.existingEvents);
        result.then(() => {
          closure_2_9.fileOnly("Successfully logged existing network usage events", obj.existingEvents);
          obj.existingEvents = [];
          const result = obj.writeExistingEventStorage();
        }).catch((error) => {
          if (tmp) {
            closure_2_9.error("Failed to log log existing network usage events", obj.existingEvents, error);
          }
          tmp = 429 === error.status || false;
        });
        const nextPromise = result.then(() => {
          closure_2_9.fileOnly("Successfully logged existing network usage events", obj.existingEvents);
          obj.existingEvents = [];
          const result = obj.writeExistingEventStorage();
        });
      }
    };
    if (closure_5.isConnected()) {
      trackExistingEventsResult = obj.trackExistingEvents();
    } else {
      tmp8 = closure_1;
      obj2 = closure_1(tmp7[12]);
      str = "CONNECTION_OPEN";
      subscription = obj2.subscribe("CONNECTION_OPEN", obj.trackExistingEvents);
    }
    return obj;
  }
}
const prototype = EventTracker.prototype;
prototype["handleAppStateChange"] = function handleAppStateChange(arg0) {
  const self = this;
  if (!this.didEverTrack) {
    if (arg0) {
      if (!tmp2) {
        c14 = true;
        const _setTimeout = setTimeout;
        self.trackTimeout = setTimeout(() => closure_1_20.track(), DurationsDefault.Millis.MINUTE);
        const _setInterval = setInterval;
        self.flushStorageInterval = setInterval(() => self.writeExistingEventStorage(), 5000);
      }
    } else if (tmp2) {
      self.track();
    }
  }
};
prototype["writeExistingEventStorage"] = function writeExistingEventStorage() {
  const self = this;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (!self.didEverTrack) {
              if (closure_1_14) {
                dependencyMap = 1;
                c3 = 1;
                const obj4 = { value: self.getQueuedEvent(), done: false };
                return obj4;
              }
            }
            let items = [];
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          items = [value];
        }
        closure_128_0 = items;
        const existingEvents = closure_129_0.existingEvents;
        closure_128_1 = existingEvents.concat(closure_128_0);
        if (0 === closure_128_1.length) {
          const Storage2 = tmp3(510).Storage;
          Storage2.remove("previousNetStatsEvents");
        } else {
          const Storage = tmp3(510).Storage;
          const result = Storage.set("previousNetStatsEvents", closure_128_1);
        }
        c3 = 3;
      } catch (tmp24) {
        c3 = tmp;
        throw tmp24;
      }
    }
  })();
};
prototype["track"] = function track() {
  const self = this;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            if (self.didEverTrack) {
              c3 = 3;
            } else {
              self.didEverTrack = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(self.trackTimeout);
              const _clearInterval = clearInterval;
              clearInterval(self.flushStorageInterval);
              c2 = 1;
              c3 = 1;
              const obj4 = { value: self.getQueuedEvent(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const items = [value];
          closure_128_0 = items;
          let result = AnalyticsTrackingStore.submitEventsImmediately(closure_128_0);
          result.then(() => {
            closure_3_9.fileOnly("Successfully tracked latest network usage", closure_1_0);
            const result = closure_0.writeExistingEventStorage();
          }).catch((error) => {
            if (!tmp) {
              closure_3_9.error("Failed to track latest network usage", closure_1_0, error);
            }
            const existingEvents = closure_0.existingEvents;
            existingEvents.push(closure_1_0[0]);
            const result = closure_0.writeExistingEventStorage();
            tmp = 429 === error.status || false;
          });
          const nextPromise = result.then(() => {
            closure_3_9.fileOnly("Successfully tracked latest network usage", closure_1_0);
            const result = closure_0.writeExistingEventStorage();
          });
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype["getQueuedEvent"] = function getQueuedEvent() {
  return (async () => {
    closure_4 = tmp2;
    updateNetworkUsage();
    await NativeTTIManagerModuleDefault.getAppFirstVisibleTimestamp();
    closure_132_0 = value;
    await closure_133_0(closure_133_2[14]).getSession();
    closure_132_1 = value;
    const obj11 = { type: closure_133_8.APP_NETWORK_USAGE, properties: null };
    const obj12 = {};
    const merged = Object.assign(closure_133_0(closure_133_2[15]).getDeviceMetadata());
    const _Date = Date;
    obj12.client_track_timestamp = Date.now();
    if (closure_132_1 != null) {
      const uuid = closure_132_1.uuid;
    }
    obj12.client_heartbeat_session_id = uuid;
    closure_133_0(closure_133_2[15]);
    obj12.load_id = closure_133_0(closure_133_2[15]).currentLoadId();
    obj12.num_guilds = closure_133_7.getGuildCount();
    obj12.was_authenticated = closure_133_1(closure_133_2[16]).wasAuthenticated;
    obj12.did_background_app = closure_133_1(closure_133_2[16]).didBackgroundApp;
    obj12.headless_task_ran = closure_133_1(closure_133_2[16]).extraProperties.headless_task_ran;
    const ready = closure_133_1(closure_133_2[16]).ready;
    obj12.ready_payload_duration_ms = ready.serializeEnd(closure_132_0);
    if (closure_133_11 != null) {
      const signalStrengthLevel1 = closure_133_11.signalStrengthLevel;
    }
    let initial_signal_strength_level = signalStrengthLevel1;
    if (signalStrengthLevel1 == null) {
      initial_signal_strength_level = undefined;
    }
    obj12.initial_signal_strength_level = initial_signal_strength_level;
    const signalStrengthLevel = closure_133_10.signalStrengthLevel;
    let final_signal_strength_level = signalStrengthLevel;
    if (signalStrengthLevel == null) {
      final_signal_strength_level = undefined;
    }
    obj12.final_signal_strength_level = final_signal_strength_level;
    if (closure_133_13 != null) {
      const type = closure_133_13.type;
    }
    let initial_network_type = type;
    if (type == null) {
      initial_network_type = undefined;
    }
    obj12.initial_network_type = initial_network_type;
    obj12.final_network_type = closure_133_12.type;
    if (closure_133_13 != null) {
      const effectiveSpeed = closure_133_13.effectiveSpeed;
    }
    let initial_cellular_generation = effectiveSpeed;
    if (effectiveSpeed == null) {
      initial_cellular_generation = undefined;
    }
    obj12.initial_cellular_generation = initial_cellular_generation;
    obj12.final_cellular_generation = closure_133_12.effectiveSpeed;
    obj12.is_network_roaming = closure_133_10.isNetworkRoaming;
    obj12.cellular_receive_bytes = closure_133_10.cellularReceiveBytes;
    obj12.cellular_send_bytes = closure_133_10.cellularSendBytes;
    obj12.total_receive_bytes = closure_133_10.totalReceiveBytes;
    obj12.total_send_bytes = closure_133_10.totalSendBytes;
    obj12.uid_receive_bytes = closure_133_10.uidReceiveBytes;
    obj12.uid_send_bytes = closure_133_10.uidSendBytes;
    obj12.socket_bytes_received = closure_133_10.socketBytesReceived;
    obj12.ota_bytes_received = closure_133_10.otaBytesReceived;
    obj12.ota_num_requests = closure_133_10.otaNumRequests;
    obj12.xhr_bytes_received = closure_133_10.xhrBytesReceived;
    obj12.xhr_num_requests = closure_133_10.xhrNumRequests;
    obj12.fresco_bytes_received = closure_133_10.frescoBytesReceived;
    obj12.fresco_num_requests = closure_133_10.frescoNumRequests;
    obj12.download_bytes_received = closure_133_10.downloadBytesReceived;
    obj12.download_num_requests = closure_133_10.downloadNumRequests;
    obj12.media_player_bytes_received = closure_133_10.mediaPlayerBytesReceived;
    closure_133_0(closure_133_2[15]);
    obj12.rtc_bytes = closure_133_0(closure_133_2[9]).getRTCTotalBytes();
    obj12.num_message_sends = closure_133_15;
    if (0 !== closure_133_15) {
      const tmp56 = closure_133_16;
    }
    obj12.max_message_send_duration = tmp56;
    if (0 !== closure_133_15) {
      const tmp60 = closure_133_17;
    }
    obj12.max_message_queue_length = tmp60;
    obj12.num_message_send_fails = closure_133_18;
    obj12.num_identifies = closure_133_5.getSocket().identifyCount;
    const renderLatestMessages = closure_133_1(closure_133_2[16]).renderLatestMessages;
    obj12.render_latest_messages_duration_ms = renderLatestMessages.serialize(closure_132_0);
    obj11.properties = obj12;
    return obj11;
  })();
};
let closure_20 = new EventTracker();
let Dispatcher = Dispatcher_mod;
let subscription = Dispatcher.subscribe("APP_STATE_UPDATE", (state) => {
  closure_20.handleAppStateChange("active" === state.state);
});
let Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("MESSAGE_CREATE", (sendMessageOptions) => {
  sendMessageOptions = sendMessageOptions.sendMessageOptions;
  let sendAnalytics;
  if (sendMessageOptions != null) {
    sendAnalytics = sendMessageOptions.sendAnalytics;
  }
  if (null != sendAnalytics) {
    closure_15 = closure_15 + 1;
    const _Math = Math;
    closure_16 = Math.max(closure_16, sendMessageOptions.sendMessageOptions.sendAnalytics.duration);
    const _Math2 = Math;
    closure_17 = Math.max(closure_17, sendMessageOptions.sendMessageOptions.sendAnalytics.queueSize);
  }
});
let Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("MESSAGE_SEND_FAILED", (arg0) => {
  closure_18 = closure_18 + 1;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/network/NetStats.android.tsx");

export const isSlowNetwork = function isSlowNetwork() {
  let tmp = global.type === configure.NetInfoStateType.cellular;
  if (tmp) {
    let isNetworkRoaming = null != closure_10.signalStrengthLevel;
    if (isNetworkRoaming) {
      isNetworkRoaming = closure_10.signalStrengthLevel <= 2;
    }
    if (!isNetworkRoaming) {
      isNetworkRoaming = "2g" === global.effectiveSpeed;
    }
    if (!isNetworkRoaming) {
      isNetworkRoaming = closure_10.isNetworkRoaming;
    }
    tmp = isNetworkRoaming;
  }
  return tmp;
};
export const getSignalStrength = function getSignalStrength() {
  return closure_10.signalStrengthLevel;
};