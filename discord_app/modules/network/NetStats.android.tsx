// discord_app/modules/network/NetStats.android.tsx
import timestampDefault from "../debug/Logger.tsx";
import obj132Default from "../../utils/Durations.tsx";
import configure from "../../../_runtime/01476_configure.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import _handleConnectionOpen from "../gateway/GatewayConnectionStore.tsx";
import closure_6 from "../../stores/AnalyticsTrackingStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import importDefaultResult from "../../utils/native/NetworkUtils.tsx";
import importDefaultResult2 from "../../Dispatcher.tsx";

require = fn;
function receiveNetworkInfoformation(result) {
  closure_12 = result;
  if (null == closure_13) {
    closure_13 = result;
  }
  const SystemResourceManager = closure_4.SystemResourceManager;
  const getNetworkUsage = SystemResourceManager.getNetworkUsage;
  if (getNetworkUsage != null) {
    const networkUsage = getNetworkUsage((arg0) => {
      closure_10 = arg0;
      if (null == closure_11) {
        closure_11 = arg0;
      }
      obj = { state: closure_12, nativeStats: closure_10, rtc: callback(table[9]).getRTCTotalBytes() };
      closure_9.fileOnly("Updating Network Info", obj);
    });
  }
}
function updateNetworkUsage() {
  const SystemResourceManager = closure_4.SystemResourceManager;
  const getNetworkUsage = SystemResourceManager.getNetworkUsage;
  if (getNetworkUsage != null) {
    const networkUsage = getNetworkUsage((arg0) => {
      closure_10 = arg0;
      if (null == closure_11) {
        closure_11 = arg0;
      }
      obj = { state: closure_12, nativeStats: closure_10, rtc: callback(table[9]).getRTCTotalBytes() };
      closure_9.fileOnly("Updating Network Info", obj);
    });
  }
}
({ NativeModules: c4, AppState } = get_ActivityIndicator);
let closure_9 = new timestampDefault("NetStats");
let closure_10 = { signalStrengthLevel: null, isNetworkRoaming: false, cellularReceiveBytes: 0, cellularSendBytes: 0, totalReceiveBytes: 0, totalSendBytes: 0, uidReceiveBytes: 0, uidSendBytes: 0, socketBytesReceived: 0, otaBytesReceived: 0, otaNumRequests: 0, xhrBytesReceived: 0, xhrNumRequests: 0, frescoBytesReceived: 0, frescoNumRequests: 0, downloadBytesReceived: 0, downloadNumRequests: 0, mediaPlayerBytesReceived: 0 };
let c11 = null;
let obj = { type: require("configure").NetInfoStateType.unknown, effectiveSpeed: null, serviceProvider: null };
let c13 = null;
let closure_14 = "active" === AppState.currentState;
let c15 = 0;
let c16 = 0;
let c17 = 0;
let c18 = 0;
const tmp3 = new timestampDefault("NetStats");
importDefaultResult.addChangeCallback(receiveNetworkInfoformation);
const networkInformation = importDefaultResult.getNetworkInformation();
networkInformation.then(receiveNetworkInfoformation);
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
      num = setTimeout(() => obj.track(), require("obj132").Millis.MINUTE);
    }
    obj.trackTimeout = num;
    num3 = 0;
    if (closure_14) {
      tmp4 = globalThis;
      _setInterval = setInterval;
      tmp5 = closure_1;
      tmp6 = closure_2;
      num4 = 5;
      num3 = setInterval(() => obj.writeExistingEventStorage(), 5 * require("obj132").Millis.SECOND);
    }
    obj.flushStorageInterval = num3;
    obj.didEverTrack = false;
    tmp7 = closure_2;
    Storage = require("Storage").Storage;
    value = Storage.get("previousNetStatsEvents");
    if (value == null) {
      value = [];
    }
    obj.existingEvents = value;
    obj.trackExistingEvents = function trackExistingEvents() {
      if (obj.existingEvents.length > 0) {
        let result = closure_1_6.submitEventsImmediately(tmp.existingEvents);
        result.then((result) => {
          closure_1_9.fileOnly("Successfully logged existing network usage events", closure_0.existingEvents);
          closure_0.existingEvents = [];
          result = closure_0.writeExistingEventStorage();
        }).catch((error) => {
          if (tmp) {
            closure_1_9.error("Failed to log log existing network usage events", closure_0.existingEvents, error);
          }
          tmp = 429 === error.status || false;
        });
        const nextPromise = result.then((result) => {
          closure_1_9.fileOnly("Successfully logged existing network usage events", closure_0.existingEvents);
          closure_0.existingEvents = [];
          result = closure_0.writeExistingEventStorage();
        });
      }
    };
    if (closure_5.isConnected()) {
      trackExistingEventsResult = obj.trackExistingEvents();
    } else {
      tmp8 = closure_1;
      obj2 = require("dispatcher");
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
        self.trackTimeout = setTimeout(() => closure_20.track(), obj132Default.Millis.MINUTE);
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
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let length = tmp2;
            let items = tmp3;
            items = undefined;
            length = undefined;
            if (!self.didEverTrack) {
              if (closure_1_14) {
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = self.getQueuedEvent();
                return obj1;
              }
            }
            items = [];
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          items = [arg1];
        }
        const existingEvents = self.existingEvents;
        length = existingEvents.concat(items);
        if (0 === length.length) {
          const Storage2 = self(595).Storage;
          Storage2.remove("previousNetStatsEvents");
        } else {
          const Storage = self(595).Storage;
          const result = Storage.set("previousNetStatsEvents", length);
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
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            let items = tmp2;
            items = undefined;
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
              obj1 = { value: null, done: false };
              obj1[0] = self.getQueuedEvent();
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          items = [arg1];
          let result = closure_1_6.submitEventsImmediately(items);
          result.then((result) => {
            closure_2_9.fileOnly("Successfully tracked latest network usage", items);
            result = items.writeExistingEventStorage();
          }).catch((error) => {
            if (!tmp) {
              closure_2_9.error("Failed to track latest network usage", items, error);
            }
            const existingEvents = items.existingEvents;
            existingEvents.push(items[0]);
            const result = items.writeExistingEventStorage();
            tmp = 429 === error.status || false;
          });
          const nextPromise = result.then((result) => {
            closure_2_9.fileOnly("Successfully tracked latest network usage", items);
            result = items.writeExistingEventStorage();
          });
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype["getQueuedEvent"] = function getQueuedEvent() {
  return callback(function*() {
    closure_4 = tmp2;
    closure_1_19();
    const obj7 = closure_1_1(closure_1_2[13]);
    let callback = yield obj7.getAppFirstVisibleTimestamp();
    const obj4 = callback(5054);
    let lib = yield obj4.getSession();
    const obj5 = { type: null, properties: null };
    obj5[0] = constants.APP_NETWORK_USAGE;
    const obj6 = {};
    const merged = Object.assign(callback(5066).getDeviceMetadata());
    const _Date = Date;
    obj6.client_track_timestamp = Date.now();
    if (lib != null) {
      const uuid = lib.uuid;
    }
    obj6.client_heartbeat_session_id = uuid;
    obj = callback(5066);
    obj6.load_id = obj.currentLoadId();
    obj6.num_guilds = guildCount.getGuildCount();
    obj6.was_authenticated = lib(9).wasAuthenticated;
    obj6.did_background_app = lib(9).didBackgroundApp;
    obj6.headless_task_ran = lib(9).extraProperties.headless_task_ran;
    const ready = lib(9).ready;
    obj6.ready_payload_duration_ms = ready.serializeEnd(callback);
    if (signalStrengthLevel != null) {
      signalStrengthLevel = signalStrengthLevel.signalStrengthLevel;
    }
    callback = signalStrengthLevel;
    if (signalStrengthLevel == null) {
      callback = undefined;
    }
    obj6.initial_signal_strength_level = callback;
    signalStrengthLevel = closure_10.signalStrengthLevel;
    lib = signalStrengthLevel;
    if (signalStrengthLevel == null) {
      lib = undefined;
    }
    obj6.final_signal_strength_level = lib;
    if (closure_13 != null) {
      const type = closure_13.type;
    }
    dependencyMap = type;
    if (type == null) {
      dependencyMap = undefined;
    }
    obj6.initial_network_type = dependencyMap;
    obj6.final_network_type = closure_12.type;
    if (closure_13 != null) {
      const effectiveSpeed = closure_13.effectiveSpeed;
    }
    c3 = effectiveSpeed;
    if (effectiveSpeed == null) {
      c3 = undefined;
    }
    obj6.initial_cellular_generation = c3;
    obj6.final_cellular_generation = closure_12.effectiveSpeed;
    obj6.is_network_roaming = closure_10.isNetworkRoaming;
    obj6.cellular_receive_bytes = closure_10.cellularReceiveBytes;
    obj6.cellular_send_bytes = closure_10.cellularSendBytes;
    obj6.total_receive_bytes = closure_10.totalReceiveBytes;
    obj6.total_send_bytes = closure_10.totalSendBytes;
    obj6.uid_receive_bytes = closure_10.uidReceiveBytes;
    obj6.uid_send_bytes = closure_10.uidSendBytes;
    obj6.socket_bytes_received = closure_10.socketBytesReceived;
    obj6.ota_bytes_received = closure_10.otaBytesReceived;
    obj6.ota_num_requests = closure_10.otaNumRequests;
    obj6.xhr_bytes_received = closure_10.xhrBytesReceived;
    obj6.xhr_num_requests = closure_10.xhrNumRequests;
    obj6.fresco_bytes_received = closure_10.frescoBytesReceived;
    obj6.fresco_num_requests = closure_10.frescoNumRequests;
    obj6.download_bytes_received = closure_10.downloadBytesReceived;
    obj6.download_num_requests = closure_10.downloadNumRequests;
    obj6.media_player_bytes_received = closure_10.mediaPlayerBytesReceived;
    obj1 = callback(5065);
    obj6.rtc_bytes = obj1.getRTCTotalBytes();
    obj6.num_message_sends = closure_15;
    if (0 !== closure_15) {
      const tmp56 = closure_16;
    }
    obj6.max_message_send_duration = tmp56;
    if (0 !== closure_15) {
      const tmp60 = closure_17;
    }
    obj6.max_message_queue_length = tmp60;
    obj6.num_message_send_fails = closure_18;
    obj6.num_identifies = socket.getSocket().identifyCount;
    const renderLatestMessages = lib(9).renderLatestMessages;
    obj6.render_latest_messages_duration_ms = renderLatestMessages.serialize(callback);
    obj5[1] = obj6;
    return obj5;
  })();
};
let closure_20 = new EventTracker();
const importDefaultResult1 = importDefaultResult;
let subscription = importDefaultResult2.subscribe("APP_STATE_UPDATE", (state) => {
  closure_20.handleAppStateChange("active" === state.state);
});
const subscription1 = importDefaultResult2.subscribe("MESSAGE_CREATE", (sendMessageOptions) => {
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
const importDefaultResult3 = importDefaultResult2;
const subscription2 = importDefaultResult2.subscribe("MESSAGE_SEND_FAILED", (arg0) => {
  closure_18 = closure_18 + 1;
});
const importDefaultResult4 = importDefaultResult2;
let result = require("obj132").fileFinishedImporting("modules/network/NetStats.android.tsx");

export const isSlowNetwork = function isSlowNetwork() {
  let tmp = obj.type === configure.NetInfoStateType.cellular;
  if (tmp) {
    let isNetworkRoaming = null != closure_10.signalStrengthLevel;
    if (isNetworkRoaming) {
      isNetworkRoaming = closure_10.signalStrengthLevel <= 2;
    }
    if (!isNetworkRoaming) {
      isNetworkRoaming = "2g" === obj.effectiveSpeed;
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