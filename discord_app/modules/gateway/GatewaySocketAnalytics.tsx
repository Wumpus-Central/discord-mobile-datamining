// === Module 13201: prettyPrintTrace_ ===

// Module 13201 (prettyPrintTrace_)
import isTracingDefault from "isTracing" /* 10 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

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
        let tmp2 = arg1;
        let str2 = ": ";
        let tmp4 = prettyPrintTrace_;
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
function eachTraceCall(calls, arg1) {
  let length;
  if (null != calls) {
    if (calls.length > 0) {
      let num4 = 0;
      if (0 < calls.length) {
        do {
          let tmp = calls[num4 + 1];
          let tmp2 = arg1(calls[num4], tmp.micros);
          let tmp3 = eachTraceCall;
          let tmp4 = eachTraceCall(tmp.calls, arg1);
          num4 = num4 + 2;
          length = calls.length;
        } while (num4 < length);
      }
    }
  }
}
let closure_2 = ["guilds", "merged_presences", "merged_members", "read_state", "private_channels", "user_guild_settings", "user_settings", "user_settings_proto", "experiments", "guild_experiments", "relationships", "users"];
let closure_3 = ["features"];
let closure_4 = ["threads", "guild_scheduled_events"];
({ AnalyticEvents: error, ChannelTypes: closure_8 } = ME);
let result = require("set").fileFinishedImporting("modules/gateway/GatewaySocketAnalytics.tsx");

export function reportDevtoolsEvent() {

}
export const logReadyPayloadReceived = function logReadyPayloadReceived(socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics) {
  const tmp = (function getReadyPayloadTraceAnalytics(data) {
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
        if (typeof tmp4[1] === "object") {
          num = 0;
          if ("micros" in tmp4[1]) {
            let _Math = Math;
            num = Math.floor(tmp4[1].micros / 1000);
          }
        }
        obj.identify_total_server_duration_ms = num;
      }
      callback(parsed, (arg0, arg1) => {
        if ("start_session" === arg0) {
          const _Math2 = Math;
          obj.identify_api_duration_ms = Math.floor(arg1 / 1000);
        } else if ("guilds_connect" === arg0) {
          const _Math = Math;
          obj.identify_guilds_duration_ms = Math.floor(arg1 / 1000);
        }
      });
      return obj;
    } catch (err) {
    }
  })(data);
  if (null != compressionAnalytics) {
    let obj = isTracingDefault;
    let _Math = Math;
    obj.addDetail("payload_size(kb)", Math.round(compressionAnalytics.uncompressed_byte_size / 1024));
  }
  let num2 = tmp.identify_total_server_duration_ms;
  if (num2 == null) {
    num2 = 0;
  }
  isTracingDefault.addDetail("server_time(ms)", num2);
  obj = {};
  const merged = Object.assign(compressionAnalytics);
  const merged1 = Object.assign(tmp);
  const guilds = data.guilds;
  importDefault = 0;
  dependencyMap = 0;
  let item = guilds.forEach((unavailable) => {
    if (!unavailable.unavailable) {
      if ("partial" === unavailable.data_mode) {
        let channels = unavailable.partial_updates.channels;
      } else {
        channels = unavailable.channels;
      }
      if (tmp2) {
        const item = channels.forEach((type) => {
          closure_1 = closure_1 + 1;
          if (type.type === closure_1_8.GUILD_CATEGORY) {
            closure_0 = closure_0 + 1;
          }
        });
      }
      tmp2 = null != channels && null != channels.forEach;
    }
  });
  obj = { num_guilds: guilds.length, num_guild_channels: dependencyMap, num_guild_category_channels: importDefault };
  const merged2 = Object.assign(obj);
  const merged3 = Object.assign(readyPayloadByteSizeAnalytics);
  obj.duration_ms_since_identify_start = nowResult - socket.identifyStartTime;
  obj.duration_ms_since_connection_start = nowResult - socket.connectionStartTime;
  obj.duration_ms_since_emit_start = Date.now() - nowResult;
  ({ hasConnectedOnce: obj3.is_reconnect, isFastConnect: obj3.is_fast_connect, didForceClearGuildHashes: obj3.did_force_clear_guild_hashes, identifyUncompressedByteSize: obj3.identify_uncompressed_byte_size, identifyCompressedByteSize: obj3.identify_compressed_byte_size } = socket);
  let flag = socket.analytics.hadCacheAtStartup;
  if (flag == null) {
    flag = false;
  }
  obj.had_cache_at_startup = flag;
  let flag2 = socket.analytics.usedCacheAtStartup;
  if (flag2 == null) {
    flag2 = false;
  }
  obj.used_cache_at_startup = flag2;
  let tmp6Result = tmp6(9);
  const result = tmp6Result.attachReadyPayloadProperties(obj);
  tmp6Result = tmp6(698);
  tmp6Result.track(constants.READY_PAYLOAD_RECEIVED, obj, { logEventProperties: true });
};
export const getConnectionPath = function getConnectionPath(_trace) {
  try {
    _trace = _trace._trace;
    let first;
    if (_trace != null) {
      first = _trace[0];
    }
    const tmp3 = (function prettyPrintTrace(first) {
      let tmp = null;
      if (null != first) {
        const _JSON = JSON;
        const parsed = JSON.parse(first);
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
              let tmp5 = num5;
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
                    let tmp8 = callback;
                    let text1 = `${"\n" + "|  " + arr2[num6] + ": " + arr2[tmp6].micros / 1000}`;
                    str13 = `${"\n" + "|  " + arr2[num6] + ": " + arr2[tmp6].micros / 1000}${closure_9(arr2[tmp6].calls, "|  |  ")}`;
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
    })(first);
    if (null != tmp3) {
      return tmp3;
    } else {
      let str = "???";
      if (null != _trace._trace) {
        const _trace2 = _trace._trace;
        str = _trace2.join(" -> ");
      }
      return str;
    }
  } catch (err) {
  }
};
export const getReadyPayloadByteSizeAnalytics = function getReadyPayloadByteSizeAnalytics(data) {
  if (Math.random() <= 0.01) {
    const _Date2 = Date;
    ({ guilds, merged_presences, merged_members, user_settings, user_settings_proto, experiments, guild_experiments } = data);
    const timestamp = Date.now();
    ({ read_state, private_channels, user_guild_settings, relationships, users } = data);
    let obj = items5(data, items2);
    const items = [];
    const items1 = [];
    items2 = [];
    const items3 = [];
    const items4 = [];
    items5 = [];
    const items6 = [];
    const items7 = [];
    const item = guilds.forEach((unavailable) => {
      partial_updates = unavailable;
      if (!unavailable.unavailable) {
        let properties = partial_updates.properties;
        if (properties == null) {
          properties = {};
        }
        ({ threads, guild_scheduled_events } = partial_updates);
        const tmp4 = items5(properties, items3);
        if ("partial" === partial_updates.data_mode) {
          let channels = partial_updates.partial_updates.channels;
        } else {
          channels = partial_updates.channels;
        }
        items.push(channels);
        if ("partial" === partial_updates.data_mode) {
          let roles = partial_updates.partial_updates.roles;
        } else {
          roles = partial_updates.roles;
        }
        items1.push(roles);
        if ("partial" === partial_updates.data_mode) {
          let emojis = partial_updates.partial_updates.emojis;
        } else {
          emojis = partial_updates.emojis;
        }
        items2.push(emojis);
        items3.push(threads);
        let push = items4.push;
        if ("partial" === partial_updates.data_mode) {
          ({ partial_updates, stickers } = partial_updates);
        } else {
          stickers = partial_updates.stickers;
        }
        push(stickers);
        items5.push(properties.features);
        push = items6;
        items6.push(guild_scheduled_events);
        items7.push(items5(partial_updates, items4), tmp4);
        const tmp6 = items5(partial_updates, items4);
      }
    });
    let friends;
    if (merged_presences != null) {
      friends = merged_presences.friends;
    }
    if (friends == null) {
      friends = [];
    }
    obj = { presences_size: null, users_size: null, read_states_size: null, private_channels_size: null, user_settings_size: null, experiments_size: null, user_guild_settings_size: null, relationships_size: null, remaining_data_size: null, guild_channels_size: null, guild_members_size: null, guild_presences_size: null, guild_roles_size: null, guild_emojis_size: null, guild_threads_size: null, guild_stickers_size: null, guild_events_size: null, guild_features_size: null, guild_remaining_data_size: null, size_metrics_duration_ms: null };
    obj[0] = JSON.stringify(friends).length;
    const _JSON = JSON;
    obj[1] = JSON.stringify(users).length;
    const _JSON2 = JSON;
    obj[2] = JSON.stringify(read_state).length;
    const _JSON3 = JSON;
    obj[3] = JSON.stringify(private_channels).length;
    if (user_settings == null) {
      user_settings = "";
    }
    if (user_settings_proto == null) {
      user_settings_proto = "";
    }
    obj[4] = JSON.stringify(user_settings).length + user_settings_proto.length;
    if (experiments == null) {
      experiments = [];
    }
    if (guild_experiments == null) {
      guild_experiments = [];
    }
    obj[5] = JSON.stringify(experiments).length + JSON.stringify(guild_experiments).length;
    const _JSON4 = JSON;
    obj[6] = JSON.stringify(user_guild_settings).length;
    const _JSON5 = JSON;
    obj[7] = JSON.stringify(relationships).length;
    if (obj == null) {
      obj = {};
    }
    obj[8] = JSON.stringify(obj).length;
    const _JSON6 = JSON;
    obj[9] = JSON.stringify(items).length;
    if (merged_members == null) {
      merged_members = [];
    }
    obj[10] = JSON.stringify(merged_members).length;
    guilds = undefined;
    if (merged_presences != null) {
      guilds = merged_presences.guilds;
    }
    if (guilds == null) {
      guilds = [];
    }
    obj[11] = JSON.stringify(guilds).length;
    const _JSON7 = JSON;
    obj[12] = JSON.stringify(items1).length;
    const _JSON8 = JSON;
    obj[13] = JSON.stringify(items2).length;
    const _JSON9 = JSON;
    obj[14] = JSON.stringify(items3).length;
    const _JSON10 = JSON;
    obj[15] = JSON.stringify(items4).length;
    const _JSON11 = JSON;
    obj[16] = JSON.stringify(items6).length;
    const _JSON12 = JSON;
    obj[17] = JSON.stringify(items5).length;
    const _JSON13 = JSON;
    obj[18] = JSON.stringify(items7).length;
    const _Date = Date;
    obj[19] = Date.now() - timestamp;
    return obj;
  }
};
export const logGatewayConnected = function logGatewayConnected(gatewayUrl) {
  ({ socket, altGateway, now } = gatewayUrl);
  let obj = expandEventPropertiesDefault;
  obj = { num_failed_connect_attempts: socket.failedConnectAttempts, gateway_url: gatewayUrl.gatewayUrl, assigned_to_alt_gateway: altGateway.isAssignedToAltGateway(), did_fall_back_from_alt_gateway: altGateway.getDidFallBack(), is_reconnect: socket.hasConnectedOnce, is_fast_connect: socket.isFastConnect, duration_ms_since_first_connect_attempt: now - socket.firstConnectAttemptStartTime, duration_ms_since_connect_attempt_start: now - socket.connectionStartTime };
  obj.track(constants.GATEWAY_CONNECTED, obj, { logEventProperties: true });
};
export const createResumeAnalytics = function createResumeAnalytics(arg0) {
  let num = arg0;
  if (arg0 == null) {
    num = 0;
  }
  return { connectTime: num, numEvents: 0, largestWaitTime: 0, dispatchTime: 0, totalWaitTime: 0, initialWaitTime: 0, startTime: performance.now(), lastUpdateTime: performance.now() };
};
export const logResumeAnalytics = function logResumeAnalytics(resumeAnalytics) {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let tmp2 = !isStaffResult;
  if (!isStaffResult) {
    const _Math = Math;
    tmp2 = Math.random() < 0.5;
  }
  if (!tmp2) {
    const obj = { connect_time_ms: null, resume_time_ms: null, num_events: null, largest_wait_time_ms: null, initial_wait_time_ms: null, total_wait_time_ms: null, total_dispatch_time_ms: null };
    obj[0] = resumeAnalytics.connectTime;
    const _Math2 = Math;
    const _performance = performance;
    obj[1] = Math.floor(performance.now() - resumeAnalytics.startTime);
    obj[2] = resumeAnalytics.numEvents;
    const _Math3 = Math;
    obj[3] = Math.floor(resumeAnalytics.largestWaitTime);
    const _Math4 = Math;
    obj[4] = Math.floor(resumeAnalytics.initialWaitTime);
    const _Math5 = Math;
    obj[5] = Math.floor(resumeAnalytics.totalWaitTime);
    const _Math6 = Math;
    obj[6] = Math.floor(resumeAnalytics.dispatchTime);
    expandEventPropertiesDefault.track(constants.CONNECTION_RESUMED, obj, { logEventProperties: true });
    const obj2 = expandEventPropertiesDefault;
  }
};