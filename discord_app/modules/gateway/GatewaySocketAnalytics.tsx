// discord_app/modules/gateway/GatewaySocketAnalytics.tsx
import TTITrackerDefault from "../tti_analytics/TTITracker.tsx";
import AppStartPerformanceDefault from "../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0, closure_1, dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
function prettyPrintTrace_(calls, arg1) {
  let length;
  if (null == calls) {
    return "";
  } else {
    let str3 = "";
    let num = 0;
    let str4 = "";
    if (0 < calls.length) {
      do {
        let sum = num + 1;
        let _HermesInternal = HermesInternal;
        let str = "\n";
        let str2 = ": ";
        let text = `${"\n" + arg1 + calls[num] + ": " + calls[tmp].micros / 1000}`;
        str3 = `${"\n" + arg1 + calls[num] + ": " + calls[tmp].micros / 1000}${prettyPrintTrace_(calls[tmp].calls, arg1 + "|  ")}`;
        num = num + 2;
        str4 = str3;
        length = calls.length;
      } while (num < length);
    }
    return str4;
  }
}
function eachTraceCall(calls, fn) {
  let length;
  if (null != calls) {
    if (calls.length > 0) {
      let num4 = 0;
      if (0 < calls.length) {
        do {
          let tmp = calls[num4 + 1];
          let tmp2 = fn(calls[num4], tmp.micros);
          let tmp4 = eachTraceCall(tmp.calls, fn);
          num4 = num4 + 2;
          length = calls.length;
        } while (num4 < length);
      }
    }
  }
}
let closure_2 = [
  "guilds",
  "merged_presences",
  "merged_members",
  "read_state",
  "private_channels",
  "user_guild_settings",
  "user_settings",
  "user_settings_proto",
  "experiments",
  "guild_experiments",
  "relationships",
  "users",
];
let closure_3 = ["features"];
let closure_4 = ["threads", "guild_scheduled_events"];
({ AnalyticEvents: metroImportDefault, ChannelTypes: metroImportAll } = Constants);
let result = size.fileFinishedImporting("modules/gateway/GatewaySocketAnalytics.tsx");

export function reportDevtoolsEvent() {}
export const logReadyPayloadReceived = function logReadyPayloadReceived(
  socket,
  data,
  nowResult,
  compressionAnalytics,
  readyPayloadByteSizeAnalytics,
) {
  let c0;
  let c1;
  let flag;
  let flag2;
  function getReadyPayloadTraceAnalytics(data) {
    const obj = {};
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(tmp);
      let startsWithResult = null != parsed[0];
      if (startsWithResult) {
        startsWithResult = "" !== tmp4[0];
      }
      if (startsWithResult) {
        startsWithResult = typeof tmp4[0] === "string";
      }
      if (startsWithResult) {
        const first = tmp4[0];
        startsWithResult = first.startsWith("gateway-");
      }
      if (startsWithResult) {
        let num = 0;
        if (typeof parsed[1] === "object") {
          num = 0;
          if ("micros" in parsed[1]) {
            let _Math = Math;
            num = Math.floor(tmp4[1].micros / 1000);
          }
        }
        obj.identify_total_server_duration_ms = num;
      }
      eachTraceCall(parsed, (arg0, arg1) => {
        if ("start_session" === arg0) {
          const _Math2 = Math;
          obj.identify_api_duration_ms = Math.floor(arg1 / 1000);
        } else if ("guilds_connect" === arg0) {
          const _Math = Math;
          obj.identify_guilds_duration_ms = Math.floor(arg1 / 1000);
        }
      });
      return obj;
    } catch (err) {}
  }
  const tmp = getReadyPayloadTraceAnalytics(data);
  if (null != compressionAnalytics) {
    let tmp2 = importDefault;
    let obj = AppStartPerformanceDefault;
    const tmp4 = globalThis;
    let _Math = Math;
    let num = 1024;
    const str = "payload_size(kb)";
    obj.addDetail("payload_size(kb)", Math.round(compressionAnalytics.uncompressed_byte_size / 1024));
  }
  let num2 = tmp.identify_total_server_duration_ms;
  const addDetail = AppStartPerformanceDefault.addDetail;
  if (num2 == null) {
    num2 = 0;
  }
  addDetail("server_time(ms)", num2);
  const obj3 = {
    duration_ms_since_identify_start: nowResult - socket.identifyStartTime,
    duration_ms_since_connection_start: nowResult - socket.connectionStartTime,
    duration_ms_since_emit_start: Date.now() - nowResult,
    had_cache_at_startup: flag,
    used_cache_at_startup: flag2,
  };
  const merged = Object.assign(compressionAnalytics);
  const merged1 = Object.assign(tmp);
  const guilds = data.guilds;
  importDefault = 0;
  dependencyMap = 0;
  let item = guilds.forEach((unavailable) => {
    if (!unavailable.unavailable) {
      let channels;
      if ("partial" === unavailable.data_mode) {
        channels = unavailable.partial_updates.channels;
      } else {
        channels = unavailable.channels;
      }
      const tmp2 = null != channels && null != channels.forEach;
      if (tmp2) {
        const item = channels.forEach((type) => {
          closure_1 = closure_1 + 1;
          if (type.type === constants.GUILD_CATEGORY) {
            closure_0 = closure_0 + 1;
          }
        });
      }
    }
  });
  const obj4 = {
    num_guilds: guilds.length,
    num_guild_channels: dependencyMap,
    num_guild_category_channels: importDefault,
  };
  const merged2 = Object.assign(obj4);
  const merged3 = Object.assign(readyPayloadByteSizeAnalytics);
  ({
    hasConnectedOnce: obj2.is_reconnect,
    isFastConnect: obj2.is_fast_connect,
    didForceClearGuildHashes: obj2.did_force_clear_guild_hashes,
    identifyUncompressedByteSize: obj2.identify_uncompressed_byte_size,
    identifyCompressedByteSize: obj2.identify_compressed_byte_size,
  } = socket);
  flag = socket.analytics.hadCacheAtStartup;
  if (flag == null) {
    flag = false;
  }
  flag2 = socket.analytics.usedCacheAtStartup;
  if (flag2 == null) {
    flag2 = false;
  }
  const tmp6Result = TTITrackerDefault;
  const result = tmp6Result.attachReadyPayloadProperties(obj3);
  const tmp6Result2 = AnalyticsUtilsDefault;
  tmp6Result2.track(constants.READY_PAYLOAD_RECEIVED, obj3, { logEventProperties: true });
};
export const getConnectionPath = function getConnectionPath(_trace) {
  function prettyPrintTrace(arg0) {
    let length;
    let tmp = null;
    if (null != arg0) {
      const _JSON = JSON;
      const parsed = JSON.parse(arg0);
      let str2 = "";
      if (null != parsed) {
        let num5 = 0;
        let str7 = "";
        let str8 = "";
        if (0 < parsed.length) {
          do {
            let sum = num5 + 1;
            let _HermesInternal = HermesInternal;
            let str9 = "\n";
            let str10 = "";
            let str11 = ": ";
            let calls = parsed[sum].calls;
            let str12 = "";
            let text = `${"\n" + "" + arr[num5] + ": " + arr[tmp3].micros / 1000}`;
            if (null != calls) {
              let num6 = 0;
              let str13 = "";
              let str14 = "";
              if (0 < calls.length) {
                do {
                  let sum1 = num6 + 1;
                  let _HermesInternal2 = HermesInternal;
                  let str15 = "\n";
                  let str16 = "|  ";
                  let str17 = ": ";
                  let text1 = `${"\n" + "|  " + arr2[num6] + ": " + arr2[tmp6].micros / 1000}`;
                  str13 = `${"\n" + "|  " + arr2[num6] + ": " + arr2[tmp6].micros / 1000}${closure_1_9(arr2[tmp6].calls, "|  |  ")}`;
                  num6 = num6 + 2;
                  str14 = str13;
                  length = calls.length;
                } while (num6 < length);
              }
              str12 = str14;
            }
            str7 = text + str12;
            num5 = num5 + 2;
            str8 = str7;
          } while (num5 < parsed.length);
        }
        str2 = str8;
      }
      tmp = str2;
    }
    return tmp;
  }
  try {
    _trace = _trace._trace;
    let tmp = null;
    let first;
    if (_trace != null) {
      first = _trace[0];
    }
    const tmp3 = prettyPrintTrace(first);
    if (null != tmp3) {
      return tmp3;
    } else {
      let tmp5 = null;
      let str = "???";
      if (null != _trace._trace) {
        const _trace2 = _trace._trace;
        let str2 = " -> ";
        str = _trace2.join(" -> ");
      }
      return str;
    }
  } catch (err) {}
};
export const getReadyPayloadByteSizeAnalytics = function getReadyPayloadByteSizeAnalytics(data) {
  let experiments;
  let guild_experiments;
  let guilds;
  let guilds1;
  let items2;
  let items5;
  let length;
  let length2;
  let merged_members;
  let merged_presences;
  let private_channels;
  let read_state;
  let relationships;
  let stringify3;
  let stringify4;
  let stringify5;
  let stringify6;
  let user_guild_settings;
  let user_settings;
  let user_settings_proto;
  let users;
  if (Math.random() <= 0.01) {
    const _Date2 = Date;
    ({ guilds, merged_presences, merged_members, user_settings, user_settings_proto, experiments, guild_experiments } =
      data);
    let tmp4 = items2;
    const timestamp = Date.now();
    ({ read_state, private_channels, user_guild_settings, relationships, users } = data);
    let obj2 = items5(data, items2);
    const items = [];
    const items1 = [];
    items2 = [];
    const items3 = [];
    const items4 = [];
    items5 = [];
    const items6 = [];
    const items7 = [];
    const item = guilds.forEach((unavailable) => {
      let guild_scheduled_events;
      let threads;
      if (!unavailable.unavailable) {
        let channels;
        let roles;
        let emojis;
        let stickers;
        let properties = unavailable.properties;
        if (properties == null) {
          properties = {};
        }
        const features = properties.features;
        ({ threads, guild_scheduled_events } = unavailable);
        const push = items.push;
        const tmp4 = _objectWithoutProperties(properties, closure_3);
        const tmp6 = _objectWithoutProperties(unavailable, closure_4);
        if ("partial" === unavailable.data_mode) {
          channels = unavailable.partial_updates.channels;
        } else {
          channels = unavailable.channels;
        }
        push(channels);
        const push2 = items1.push;
        if ("partial" === unavailable.data_mode) {
          roles = unavailable.partial_updates.roles;
        } else {
          roles = unavailable.roles;
        }
        push2(roles);
        const push3 = items2.push;
        if ("partial" === unavailable.data_mode) {
          emojis = unavailable.partial_updates.emojis;
        } else {
          emojis = unavailable.emojis;
        }
        push3(emojis);
        items3.push(threads);
        const push4 = items4.push;
        if ("partial" === unavailable.data_mode) {
          stickers = unavailable.partial_updates.stickers;
        } else {
          stickers = unavailable.stickers;
        }
        push4(stickers);
        items5.push(features);
        items6.push(guild_scheduled_events);
        items7.push(tmp6, tmp4);
      }
    });
    let tmp6 = null;
    let friends;
    const _JSON20 = JSON;
    const stringify7 = JSON.stringify;
    if (merged_presences != null) {
      friends = merged_presences.friends;
    }
    if (friends == null) {
      friends = [];
    }
    const _JSON = JSON;
    const _JSON2 = JSON;
    const _JSON3 = JSON;
    const _JSON4 = JSON;
    const obj = {
      presences_size: stringify7(friends).length,
      users_size: JSON.stringify(users).length,
      read_states_size: JSON.stringify(read_state).length,
      private_channels_size: JSON.stringify(private_channels).length,
      user_settings_size: length + user_settings_proto.length,
      experiments_size: length2 + stringify3(guild_experiments).length,
      user_guild_settings_size: JSON.stringify(user_guild_settings).length,
      relationships_size: JSON.stringify(relationships).length,
      remaining_data_size: stringify4(obj2).length,
      guild_channels_size: JSON.stringify(items).length,
      guild_members_size: stringify5(merged_members).length,
      guild_presences_size: stringify6(guilds1).length,
      guild_roles_size: JSON.stringify(items1).length,
      guild_emojis_size: JSON.stringify(items2).length,
      guild_threads_size: JSON.stringify(items3).length,
      guild_stickers_size: JSON.stringify(items4).length,
      guild_events_size: JSON.stringify(items6).length,
      guild_features_size: JSON.stringify(items5).length,
      guild_remaining_data_size: JSON.stringify(items7).length,
      size_metrics_duration_ms: Date.now() - timestamp,
    };
    if (user_settings == null) {
      user_settings = "";
    }
    length = stringify(user_settings).length;
    if (user_settings_proto == null) {
      user_settings_proto = "";
    }
    const _JSON5 = JSON;
    const stringify2 = JSON.stringify;
    if (experiments == null) {
      experiments = [];
    }
    const _JSON6 = JSON;
    stringify3 = JSON.stringify;
    length2 = stringify2(experiments).length;
    if (guild_experiments == null) {
      guild_experiments = [];
    }
    const _JSON7 = JSON;
    const _JSON8 = JSON;
    const _JSON9 = JSON;
    stringify4 = JSON.stringify;
    if (obj2 == null) {
      obj2 = {};
    }
    const _JSON10 = JSON;
    const _JSON11 = JSON;
    stringify5 = JSON.stringify;
    if (merged_members == null) {
      merged_members = [];
    }
    guilds1 = undefined;
    const _JSON12 = JSON;
    stringify6 = JSON.stringify;
    if (merged_presences != null) {
      guilds1 = merged_presences.guilds;
    }
    if (guilds1 == null) {
      guilds1 = [];
    }
    const _JSON13 = JSON;
    const _JSON14 = JSON;
    const _JSON15 = JSON;
    const _JSON16 = JSON;
    const _JSON17 = JSON;
    const _JSON18 = JSON;
    const _JSON19 = JSON;
    const _Date = Date;
    return obj;
  }
};
export const logGatewayConnected = function logGatewayConnected(gatewayUrl) {
  let now;
  let socket;
  ({ socket, now } = gatewayUrl);
  gatewayUrl = gatewayUrl.gatewayUrl;
  const obj = AnalyticsUtilsDefault;
  const obj2 = {
    num_failed_connect_attempts: socket.failedConnectAttempts,
    gateway_url: gatewayUrl,
    is_reconnect: socket.hasConnectedOnce,
    is_fast_connect: socket.isFastConnect,
    duration_ms_since_first_connect_attempt: now - socket.firstConnectAttemptStartTime,
    duration_ms_since_connect_attempt_start: now - socket.connectionStartTime,
  };
  obj.track(metroImportDefault.GATEWAY_CONNECTED, obj2, { logEventProperties: true });
};
export const createResumeAnalytics = function createResumeAnalytics(arg0) {
  let num = arg0;
  if (arg0 == null) {
    num = 0;
  }
  const obj = {
    connectTime: num,
    numEvents: 0,
    largestWaitTime: 0,
    dispatchTime: 0,
    totalWaitTime: 0,
    initialWaitTime: 0,
    startTime: performance.now(),
    lastUpdateTime: performance.now(),
  };
  return obj;
};
export const logResumeAnalytics = function logResumeAnalytics(resumeAnalytics) {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let tmp2 = !isStaffResult;
  if (tmp2) {
    const _Math = Math;
    tmp2 = Math.random() < 0.5;
  }
  if (!tmp2) {
    const _Math2 = Math;
    const _performance = performance;
    const obj = {
      connect_time_ms: resumeAnalytics.connectTime,
      resume_time_ms: Math.floor(performance.now() - resumeAnalytics.startTime),
      num_events: resumeAnalytics.numEvents,
      largest_wait_time_ms: Math.floor(resumeAnalytics.largestWaitTime),
      initial_wait_time_ms: Math.floor(resumeAnalytics.initialWaitTime),
      total_wait_time_ms: Math.floor(resumeAnalytics.totalWaitTime),
      total_dispatch_time_ms: Math.floor(resumeAnalytics.dispatchTime),
    };
    const track = AnalyticsUtilsDefault.track;
    const CONNECTION_RESUMED = metroImportDefault.CONNECTION_RESUMED;
    AnalyticsUtilsDefault;
    const _Math3 = Math;
    const _Math4 = Math;
    const _Math5 = Math;
    const _Math6 = Math;
    track(CONNECTION_RESUMED, obj, { logEventProperties: true });
  }
};
