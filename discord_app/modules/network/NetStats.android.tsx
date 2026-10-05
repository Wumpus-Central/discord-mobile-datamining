// === Module 6968: NetStats ===

// Module 6968 (NetStats)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import configure from "configure" /* 1470 */;
import react_nativeDefault from "react-native" /* 4743 */;
import RTCBandwidthMonitor from "RTCBandwidthMonitor" /* 6983 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 6969 */;
import GuildStore from "GuildStore" /* 2074 */;
import NetworkUtils_mod from "utils/NetworkUtils" /* 1469 */;
import Dispatcher_mod from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c14, c2, c3, c6, c7, closure_1_11, fileOnly, nativeStats, sendMessageOptions;

let AppState;
let closure_4;
const f93792 = (arg0) => {
  let obj2;
  nativeStats = arg0;
  if (null == closure_1_11) {
    closure_1_11 = arg0;
  }
  fileOnly = fileOnly.fileOnly;
  obj = { state, nativeStats, rtc: obj2.getRTCTotalBytes() };
  obj2 = RTCBandwidthMonitor;
  fileOnly("Updating Network Info", obj);
};
function receiveNetworkInfoformation(result) {
  if (null == c13) {
    c13 = result;
  }
  const SystemResourceManager = React3.SystemResourceManager;
  const getNetworkUsage = SystemResourceManager.getNetworkUsage;
  if (getNetworkUsage != null) {
    const networkUsage = getNetworkUsage(f93792);
  }
}
function updateNetworkUsage() {
  let state;
  const SystemResourceManager = React3.SystemResourceManager;
  const getNetworkUsage = SystemResourceManager.getNetworkUsage;
  if (getNetworkUsage != null) {
    const networkUsage = getNetworkUsage(f93792);
  }
}
({ NativeModules: closure_4, AppState } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const tmp3 = new LoggerDefault("NetStats");
let closure_9 = tmp3;
let closure_10 = { signalStrengthLevel: null, isNetworkRoaming: false, cellularReceiveBytes: 0, cellularSendBytes: 0, totalReceiveBytes: 0, totalSendBytes: 0, uidReceiveBytes: 0, uidSendBytes: 0, socketBytesReceived: 0, otaBytesReceived: 0, otaNumRequests: 0, xhrBytesReceived: 0, xhrNumRequests: 0, frescoBytesReceived: 0, frescoNumRequests: 0, downloadBytesReceived: 0, downloadNumRequests: 0, mediaPlayerBytesReceived: 0 };
let c11 = null;
let obj = { type: configure.NetInfoStateType.unknown, effectiveSpeed: null, serviceProvider: null };
let c13 = null;
let closure_14 = "active" === AppState.currentState;
let closure_15 = 0;
let closure_16 = 0;
let closure_17 = 0;
let closure_18 = 0;
let NetworkUtils = NetworkUtils_mod;
NetworkUtils.addChangeCallback(receiveNetworkInfoformation);
NetworkUtils = NetworkUtils_mod;
NetworkUtils = NetworkUtils.getNetworkInformation();
let nextPromise = NetworkUtils.then(receiveNetworkInfoformation);
class EventTracker {
  constructor() {
    obj = Object.create(new.target.prototype);
    let num = 0;
    if (closure_14) {
      let tmp = globalThis;
      const _setTimeout = setTimeout;
      num = setTimeout(() => obj.track(), DurationsDefault.Millis.MINUTE);
    }
    obj.trackTimeout = num;
    let num3 = 0;
    if (closure_14) {
      const _setInterval = setInterval;
      num3 = setInterval(() => obj.writeExistingEventStorage(), 5 * DurationsDefault.Millis.SECOND);
    }
    obj.flushStorageInterval = num3;
    obj.didEverTrack = false;
    const Storage = obj(510).Storage;
    let items = Storage.get("previousNetStatsEvents");
    if (items == null) {
      items = [];
    }
    obj.existingEvents = items;
    obj.trackExistingEvents = function trackExistingEvents() {
      let tmp;
      if (obj.existingEvents.length > 0) {
        let result = AnalyticsTrackingStore.submitEventsImmediately(tmp.existingEvents);
        const nextPromise = result.then(() => {
          closure_2_9.fileOnly("Successfully logged existing network usage events", obj.existingEvents);
          obj.existingEvents = [];
          const result = obj.writeExistingEventStorage();
        });
        nextPromise.catch((error) => {
          const tmp = 429 === error.status || false;
          if (tmp) {
            closure_2_9.error("Failed to log log existing network usage events", obj.existingEvents, error);
          }
        });
      }
    };
    if (GatewayConnectionStore.isConnected()) {
      obj.trackExistingEvents();
    } else {
      const obj2 = Dispatcher;
      const subscription = obj2.subscribe("CONNECTION_OPEN", obj.trackExistingEvents);
    }
    return obj;
  }
  handleAppStateChange(arg0) {
    const self = this;
    if (!this.didEverTrack) {
      if (arg0) {
        if (!c14) {
          c14 = true;
          const _setTimeout = setTimeout;
          self.trackTimeout = setTimeout(() => closure_1_20.track(), DurationsDefault.Millis.MINUTE);
          const _setInterval = setInterval;
          self.flushStorageInterval = setInterval(() => self.writeExistingEventStorage(), 5000);
        }
      } else if (c14) {
        self.track();
      }
    }
  }
  writeExistingEventStorage() {
    const self = this;
    return (async () => {
      let closure_0;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let items;
          let length;
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
              items = undefined;
              length = undefined;
              if (!self.didEverTrack) {
                if (closure_1_14) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: self.getQueuedEvent(), done: false };
                  return obj4;
                }
              }
              items = [];
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            items = [value];
          }
          const existingEvents = closure_129_0.existingEvents;
          length = existingEvents.concat(items);
          if (0 === length.length) {
            const Storage2 = tmp2(c2[11]).Storage;
            Storage2.remove("previousNetStatsEvents");
          } else {
            const Storage = tmp2(c2[11]).Storage;
            const result = Storage.set("previousNetStatsEvents", length);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp23) {
          c3 = 3;
          throw tmp23;
        }
      }
    })();
  }
  track() {
    const self = this;
    return (async () => {
      let tmp;
      if (c3 === 2) {
        c3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let items;
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
              let closure_1 = tmp4;
              let closure_0 = tmp;
              items = undefined;
              if (!self.didEverTrack) {
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
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            items = [value];
            let result = AnalyticsTrackingStore.submitEventsImmediately(items);
            const nextPromise = result.then(() => {
              closure_3_9.fileOnly("Successfully tracked latest network usage", closure_1_0);
              const result = self.writeExistingEventStorage();
            });
            nextPromise.catch((error) => {
              const tmp = 429 === error.status || false;
              if (!tmp) {
                closure_3_9.error("Failed to track latest network usage", closure_1_0, error);
              }
              const existingEvents = self.existingEvents;
              existingEvents.push(closure_1_0[0]);
              const result = self.writeExistingEventStorage();
            });
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  }
  getQueuedEvent() {
    return (async () => {
      let initial_cellular_generation;
      let initial_network_type;
      let initial_signal_strength_level;
      let obj12;
      let obj2;
      let obj5;
      let obj8;
      let ready;
      let renderLatestMessages;
      let tmp55;
      let tmp59;
      let uuid;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          let final_signal_strength_level;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_5 = tmp4;
              let closure_4 = tmp;
              closure_0 = undefined;
              final_signal_strength_level = undefined;
              updateNetworkUsage();
              c6 = 1;
              c7 = 1;
              const obj6 = { value: obj8.getAppFirstVisibleTimestamp(), done: false };
              obj8 = react_nativeDefault;
              return obj6;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_0 = value;
              c6 = 2;
              c7 = 1;
              const obj9 = { value: obj5.getSession(), done: false };
              obj5 = closure_133_0(closure_133_2[14]);
              return obj9;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            final_signal_strength_level = value;
            const obj11 = { type: closure_133_8.APP_NETWORK_USAGE, properties: obj12 };
            obj12 = { client_track_timestamp: Date.now(), client_heartbeat_session_id: uuid, load_id: obj.currentLoadId(), num_guilds: closure_133_7.getGuildCount(), was_authenticated: closure_133_1(closure_133_2[16]).wasAuthenticated, did_background_app: closure_133_1(closure_133_2[16]).didBackgroundApp, headless_task_ran: closure_133_1(closure_133_2[16]).extraProperties.headless_task_ran, ready_payload_duration_ms: ready.serializeEnd(closure_0), initial_signal_strength_level, final_signal_strength_level, initial_network_type, final_network_type: closure_133_12.type, initial_cellular_generation, final_cellular_generation: closure_133_12.effectiveSpeed, is_network_roaming: closure_133_10.isNetworkRoaming, cellular_receive_bytes: closure_133_10.cellularReceiveBytes, cellular_send_bytes: closure_133_10.cellularSendBytes, total_receive_bytes: closure_133_10.totalReceiveBytes, total_send_bytes: closure_133_10.totalSendBytes, uid_receive_bytes: closure_133_10.uidReceiveBytes, uid_send_bytes: closure_133_10.uidSendBytes, socket_bytes_received: closure_133_10.socketBytesReceived, ota_bytes_received: closure_133_10.otaBytesReceived, ota_num_requests: closure_133_10.otaNumRequests, xhr_bytes_received: closure_133_10.xhrBytesReceived, xhr_num_requests: closure_133_10.xhrNumRequests, fresco_bytes_received: closure_133_10.frescoBytesReceived, fresco_num_requests: closure_133_10.frescoNumRequests, download_bytes_received: closure_133_10.downloadBytesReceived, download_num_requests: closure_133_10.downloadNumRequests, media_player_bytes_received: closure_133_10.mediaPlayerBytesReceived, rtc_bytes: obj2.getRTCTotalBytes(), num_message_sends: closure_133_15, max_message_send_duration: tmp55, max_message_queue_length: tmp59, num_message_send_fails: closure_133_18, num_identifies: closure_133_5.getSocket().identifyCount, render_latest_messages_duration_ms: renderLatestMessages.serialize(closure_0) };
            const obj14 = closure_133_0(closure_133_2[15]);
            const merged = Object.assign(obj14.getDeviceMetadata());
            const _Date = Date;
            uuid = undefined;
            if (final_signal_strength_level != null) {
              uuid = final_signal_strength_level.uuid;
            }
            obj = closure_133_0(closure_133_2[15]);
            ready = closure_133_1(closure_133_2[16]).ready;
            let signalStrengthLevel1;
            if (closure_133_11 != null) {
              signalStrengthLevel1 = closure_133_11.signalStrengthLevel;
            }
            initial_signal_strength_level = signalStrengthLevel1;
            if (signalStrengthLevel1 == null) {
              initial_signal_strength_level = undefined;
            }
            const signalStrengthLevel = closure_133_10.signalStrengthLevel;
            final_signal_strength_level = signalStrengthLevel;
            if (signalStrengthLevel == null) {
              final_signal_strength_level = undefined;
            }
            let type;
            if (closure_133_13 != null) {
              type = closure_133_13.type;
            }
            initial_network_type = type;
            if (type == null) {
              initial_network_type = undefined;
            }
            let effectiveSpeed;
            if (closure_133_13 != null) {
              effectiveSpeed = closure_133_13.effectiveSpeed;
            }
            initial_cellular_generation = effectiveSpeed;
            if (effectiveSpeed == null) {
              initial_cellular_generation = undefined;
            }
            obj2 = closure_133_0(closure_133_2[9]);
            tmp55 = undefined;
            if (0 !== closure_133_15) {
              tmp55 = closure_133_16;
            }
            tmp59 = undefined;
            if (0 !== closure_133_15) {
              tmp59 = closure_133_17;
            }
            renderLatestMessages = closure_133_1(closure_133_2[16]).renderLatestMessages;
            c7 = 3;
            const obj13 = { value: obj11, done: true };
            return obj13;
          }
        } catch (tmp76) {
          c7 = 3;
          throw tmp76;
        }
      }
    })();
  }
}
const prototype = EventTracker.prototype;
let closure_20 = new EventTracker();
let Dispatcher = Dispatcher_mod;
let subscription = Dispatcher.subscribe("APP_STATE_UPDATE", (state) => {
  closure_20.handleAppStateChange("active" === state.state);
});
Dispatcher = Dispatcher_mod;
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
Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("MESSAGE_SEND_FAILED", (arg0) => {
  closure_18 = closure_18 + 1;
});
let result = size.fileFinishedImporting("modules/network/NetStats.android.tsx");

export const isSlowNetwork = function isSlowNetwork() {
  let tmp = obj.type === configure.NetInfoStateType.cellular;
  if (tmp) {
    const isNetworkRoaming = null != closure_10.signalStrengthLevel && closure_10.signalStrengthLevel <= 2 || "2g" === obj.effectiveSpeed || closure_10.isNetworkRoaming;
    tmp = isNetworkRoaming;
  }
  return tmp;
};
export const getSignalStrength = function getSignalStrength() {
  return closure_10.signalStrengthLevel;
};