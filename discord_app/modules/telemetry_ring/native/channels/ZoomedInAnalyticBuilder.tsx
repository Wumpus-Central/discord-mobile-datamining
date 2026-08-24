// === Module 13622: buildZoomedInAnalyticsEvent ===

// Module 13622 (buildZoomedInAnalyticsEvent)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getHermesInstrumentedStatsSummaryDefault from "getHermesInstrumentedStatsSummary" /* 5427 */;
import noop from "noop" /* 13137 */;
import Opcode from "Opcode" /* 13248 */;

const AnalyticEvents = ME.AnalyticEvents;
let closure_3 = { Gateway: "gateway", RtcControl: "rtc_control", RemoteAuth: "remote_auth", Spotify: "spotify", Rpc: "rpc", GameServerPing: "game_server_ping" };
let closure_4 = {
  [AnalyticEvents.DEVICE_EVENT]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const _Object = Object;
      tmp = null;
      if (0 !== Object.keys(data).length) {
        const action = data.action;
        let tmp4 = null;
        if (typeof action === "string") {
          tmp4 = action;
        }
        if (tmp4 == null) {
          const message = data.message;
          let tmp3 = null;
          if (typeof message === "string") {
            tmp3 = message;
          }
          tmp4 = tmp3;
        }
        const message2 = data.message;
        let tmp5 = null;
        if (typeof message2 === "string") {
          tmp5 = message2;
        }
        if (tmp5 == null) {
          const description = data.description;
          let tmp6 = null;
          if (typeof description === "string") {
            tmp6 = description;
          }
          tmp5 = tmp6;
        }
        const _Object2 = Object;
        const entries = Object.entries(data);
        const found = entries.filter((arg0) => {
          [, tmp] = arg0;
          return null != tmp;
        });
        let joined = null;
        if (0 !== found.length) {
          const mapped = found.map((arg0) => {
            [tmp, tmp2] = arg0;
            return "" + tmp + "=" + tmp2;
          });
          joined = mapped.join(", ");
        }
        const obj = { action: null, description: null, metadata: null };
        obj[0] = tmp4;
        obj[1] = tmp5;
        obj[2] = joined;
        tmp = obj;
      }
    }
    return tmp;
  },
  [AnalyticEvents.REACT_SOFT_EXCEPTION]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const error_message = data.error_message;
      let tmp2 = null;
      if (typeof error_message === "string") {
        tmp2 = error_message;
      }
      if (tmp2 == null) {
        const message = data.message;
        let tmp3 = null;
        if (typeof message === "string") {
          tmp3 = message;
        }
        tmp2 = tmp3;
      }
      const obj = { error_message: null, component: null, stacktrace: null };
      obj[0] = tmp2;
      const component = data.component;
      let tmp4 = null;
      if (typeof component === "string") {
        tmp4 = component;
      }
      obj[1] = tmp4;
      const stacktrace = data.stacktrace;
      let tmp5 = null;
      if (typeof stacktrace === "string") {
        tmp5 = stacktrace;
      }
      obj[2] = tmp5;
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.NETWORK_CAPABILITIES_CHANGED]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const action = data.action;
      let tmp2 = null;
      if (typeof action === "string") {
        tmp2 = action;
      }
      const obj = { action: null, network_type: null, upload_bandwidth: null, download_bandwidth: null, vpn_active: null };
      obj[0] = tmp2;
      const network_type = data.network_type;
      let tmp3 = null;
      if (typeof network_type === "string") {
        tmp3 = network_type;
      }
      obj[1] = tmp3;
      const upload_bandwidth = data.upload_bandwidth;
      let tmp4 = null;
      if (typeof upload_bandwidth === "number") {
        const _Number = Number;
        tmp4 = null;
        if (Number.isFinite(upload_bandwidth)) {
          tmp4 = upload_bandwidth;
        }
      }
      obj[2] = tmp4;
      const download_bandwidth = data.download_bandwidth;
      let tmp5 = null;
      if (typeof download_bandwidth === "number") {
        const _Number2 = Number;
        tmp5 = null;
        if (Number.isFinite(download_bandwidth)) {
          tmp5 = download_bandwidth;
        }
      }
      obj[3] = tmp5;
      let vpn_active = null;
      if (typeof data.vpn_active === "boolean") {
        vpn_active = data.vpn_active;
      }
      obj[4] = vpn_active;
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.FOREGROUND_SERVICE]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const service_name = data.service_name;
      let tmp2 = null;
      if (typeof service_name === "string") {
        tmp2 = service_name;
      }
      const obj = { service_name: null, action: null, detail: null, fgs_operation: null, fgs_configuration_type: null, guard_allowed: null, fgs_guard_reason: null };
      obj[0] = tmp2;
      const action = data.action;
      let tmp3 = null;
      if (typeof action === "string") {
        tmp3 = action;
      }
      obj[1] = tmp3;
      const detail = data.detail;
      let tmp4 = null;
      if (typeof detail === "string") {
        tmp4 = detail;
      }
      if (tmp4 == null) {
        const message = data.message;
        let tmp5 = null;
        if (typeof message === "string") {
          tmp5 = message;
        }
        tmp4 = tmp5;
      }
      obj[2] = tmp4;
      const fgs_operation = data.fgs_operation;
      let tmp6 = null;
      if (typeof fgs_operation === "string") {
        tmp6 = fgs_operation;
      }
      obj[3] = tmp6;
      const fgs_configuration_type = data.fgs_configuration_type;
      let tmp7 = null;
      if (typeof fgs_configuration_type === "string") {
        tmp7 = fgs_configuration_type;
      }
      obj[4] = tmp7;
      let guard_allowed = null;
      if (typeof data.guard_allowed === "boolean") {
        guard_allowed = data.guard_allowed;
      }
      obj[5] = guard_allowed;
      const fgs_guard_reason = data.fgs_guard_reason;
      let tmp9 = null;
      if (typeof fgs_guard_reason === "string") {
        tmp9 = fgs_guard_reason;
      }
      obj[6] = tmp9;
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.APP_LIFECYCLE]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const state = data.state;
      let tmp2 = null;
      if (typeof state === "string") {
        tmp2 = state;
      }
      if (tmp2 == null) {
        const message = data.message;
        let tmp3 = null;
        if (typeof message === "string") {
          tmp3 = message;
        }
        tmp2 = tmp3;
      }
      const obj = { state: null, previous_state: null, details: null };
      obj[0] = tmp2;
      const previous_state = data.previous_state;
      let tmp4 = null;
      if (typeof previous_state === "string") {
        tmp4 = previous_state;
      }
      obj[1] = tmp4;
      const details = data.details;
      let tmp5 = null;
      if (typeof details === "string") {
        tmp5 = details;
      }
      obj[2] = tmp5;
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.UI_LIFECYCLE]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const activity_name = data.activity_name;
      let tmp2 = null;
      if (typeof activity_name === "string") {
        tmp2 = activity_name;
      }
      if (tmp2 == null) {
        const screen = data.screen;
        let tmp3 = null;
        if (typeof screen === "string") {
          tmp3 = screen;
        }
        tmp2 = tmp3;
      }
      const obj = { activity_name: null, stage: null, extra: null };
      obj[0] = tmp2;
      const stage = data.stage;
      let tmp4 = null;
      if (typeof stage === "string") {
        tmp4 = stage;
      }
      if (tmp4 == null) {
        const state = data.state;
        let tmp5 = null;
        if (typeof state === "string") {
          tmp5 = state;
        }
        tmp4 = tmp5;
      }
      obj[1] = tmp4;
      const extra = data.extra;
      let tmp6 = null;
      if (typeof extra === "string") {
        tmp6 = extra;
      }
      if (tmp6 == null) {
        const details = data.details;
        let tmp7 = null;
        if (typeof details === "string") {
          tmp7 = details;
        }
        tmp6 = tmp7;
      }
      if (tmp6 == null) {
        const detail = data.detail;
        let tmp8 = null;
        if (typeof detail === "string") {
          tmp8 = detail;
        }
        tmp6 = tmp8;
      }
      obj[2] = tmp6;
      tmp = obj;
    }
    return tmp;
  }
};
let closure_5 = {
  [AnalyticEvents.TOUCH_EVENT]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const touch_action_type = data.touch_action_type;
      let tmp2 = null;
      if (typeof touch_action_type === "string") {
        tmp2 = touch_action_type;
      }
      let obj = getHermesInstrumentedStatsSummaryDefault;
      let currentHermesInstrumentedStatsSummary = obj.getCurrentHermesInstrumentedStatsSummary();
      if (currentHermesInstrumentedStatsSummary == null) {
        currentHermesInstrumentedStatsSummary = null;
      }
      obj = { touch_action_type: null, client_timestamp_ms: null, screen_x: null, screen_y: null, view_x: null, view_y: null, total_memory_mb: null, memory_breakdown: null, hermes_instrumented_stats_summary: null, view_hierarchy: null, gesture: null, window_name: null, hit_test_duration_us: null, distance: null, duration_ms: null, velocity: null, scale_factor: null };
      obj[0] = tmp2;
      const client_timestamp_ms = data.client_timestamp_ms;
      let tmp6 = null;
      if (typeof client_timestamp_ms === "number") {
        const _Number = Number;
        tmp6 = null;
        if (Number.isFinite(client_timestamp_ms)) {
          tmp6 = client_timestamp_ms;
        }
      }
      obj[1] = tmp6;
      const screen_x = data.screen_x;
      let tmp7 = null;
      if (typeof screen_x === "number") {
        const _Number2 = Number;
        tmp7 = null;
        if (Number.isFinite(screen_x)) {
          tmp7 = screen_x;
        }
      }
      obj[2] = tmp7;
      const screen_y = data.screen_y;
      let tmp8 = null;
      if (typeof screen_y === "number") {
        const _Number3 = Number;
        tmp8 = null;
        if (Number.isFinite(screen_y)) {
          tmp8 = screen_y;
        }
      }
      obj[3] = tmp8;
      const view_x = data.view_x;
      let tmp9 = null;
      if (typeof view_x === "number") {
        const _Number4 = Number;
        tmp9 = null;
        if (Number.isFinite(view_x)) {
          tmp9 = view_x;
        }
      }
      obj[4] = tmp9;
      const view_y = data.view_y;
      let tmp10 = null;
      if (typeof view_y === "number") {
        const _Number5 = Number;
        tmp10 = null;
        if (Number.isFinite(view_y)) {
          tmp10 = view_y;
        }
      }
      obj[5] = tmp10;
      const total_memory_mb = data.total_memory_mb;
      let tmp11 = null;
      if (typeof total_memory_mb === "number") {
        const _Number6 = Number;
        tmp11 = null;
        if (Number.isFinite(total_memory_mb)) {
          tmp11 = total_memory_mb;
        }
      }
      obj[6] = tmp11;
      const memory_breakdown = data.memory_breakdown;
      let tmp12 = null;
      if (typeof memory_breakdown === "string") {
        tmp12 = memory_breakdown;
      }
      obj[7] = tmp12;
      obj[8] = currentHermesInstrumentedStatsSummary;
      const view_hierarchy = data.view_hierarchy;
      let tmp13 = null;
      if (typeof view_hierarchy === "string") {
        tmp13 = view_hierarchy;
      }
      obj[9] = tmp13;
      const gesture = data.gesture;
      let tmp14 = null;
      if (typeof gesture === "string") {
        tmp14 = gesture;
      }
      obj[10] = tmp14;
      const window_name = data.window_name;
      let tmp15 = null;
      if (typeof window_name === "string") {
        tmp15 = window_name;
      }
      obj[11] = tmp15;
      const hit_test_duration_us = data.hit_test_duration_us;
      let tmp16 = null;
      if (typeof hit_test_duration_us === "number") {
        const _Number7 = Number;
        tmp16 = null;
        if (Number.isFinite(hit_test_duration_us)) {
          tmp16 = hit_test_duration_us;
        }
      }
      obj[12] = tmp16;
      const distance = data.distance;
      let tmp17 = null;
      if (typeof distance === "number") {
        const _Number8 = Number;
        tmp17 = null;
        if (Number.isFinite(distance)) {
          tmp17 = distance;
        }
      }
      obj[13] = tmp17;
      const duration_ms = data.duration_ms;
      let tmp18 = null;
      if (typeof duration_ms === "number") {
        const _Number9 = Number;
        tmp18 = null;
        if (Number.isFinite(duration_ms)) {
          tmp18 = duration_ms;
        }
      }
      obj[14] = tmp18;
      const velocity = data.velocity;
      let tmp19 = null;
      if (typeof velocity === "number") {
        const _Number10 = Number;
        tmp19 = null;
        if (Number.isFinite(velocity)) {
          tmp19 = velocity;
        }
      }
      obj[15] = tmp19;
      const scale_factor = data.scale_factor;
      let tmp20 = null;
      if (typeof scale_factor === "number") {
        const _Number11 = Number;
        tmp20 = null;
        if (Number.isFinite(scale_factor)) {
          tmp20 = scale_factor;
        }
      }
      obj[16] = tmp20;
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.HTTP_REQUEST]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const url = data.url;
      let tmp2 = null;
      if (typeof url === "string") {
        tmp2 = url;
      }
      if (tmp2 == null) {
        const uri = data.uri;
        let tmp3 = null;
        if (typeof uri === "string") {
          tmp3 = uri;
        }
        tmp2 = tmp3;
      }
      if (tmp2 == null) {
        const request_url = data.request_url;
        let tmp4 = null;
        if (typeof request_url === "string") {
          tmp4 = request_url;
        }
        tmp2 = tmp4;
      }
      const method = data.method;
      let tmp5 = null;
      if (typeof method === "string") {
        tmp5 = method;
      }
      if (tmp5 == null) {
        const http_method = data.http_method;
        let tmp6 = null;
        if (typeof http_method === "string") {
          tmp6 = http_method;
        }
        tmp5 = tmp6;
      }
      let tmp7 = null;
      if (null != tmp2) {
        const obj = { url: null, method: null, status_code: null, duration_ms: null, source: null };
        obj[0] = tmp2;
        obj[1] = tmp5;
        const status_code = data.status_code;
        let tmp8 = null;
        if (typeof status_code === "number") {
          const _Number = Number;
          tmp8 = null;
          if (Number.isFinite(status_code)) {
            tmp8 = status_code;
          }
        }
        obj[2] = tmp8;
        const duration_ms = data.duration_ms;
        let tmp9 = null;
        if (typeof duration_ms === "number") {
          const _Number2 = Number;
          tmp9 = null;
          if (Number.isFinite(duration_ms)) {
            tmp9 = duration_ms;
          }
        }
        obj[3] = tmp9;
        const source = data.source;
        let tmp10 = null;
        if (typeof source === "string") {
          tmp10 = source;
        }
        obj[4] = tmp10;
        tmp7 = obj;
      }
      tmp = tmp7;
    }
    return tmp;
  },
  [AnalyticEvents.WEBSOCKET_MESSAGE_RECEIVED]: (data) => {
    data = data.data;
    if (null == data) {
      let obj = { message_identity: "unknown", socket_kind: "accessible" };
    } else {
      const url = data.url;
      let tmp61 = null;
      if (typeof url === "string") {
        tmp61 = url;
      }
      const socket_kind = data.socket_kind;
      let tmp = null;
      if (typeof socket_kind === "string") {
        tmp = socket_kind;
      }
      if (tmp == null) {
        if (null == tmp61) {
          tmp = null;
        } else {
          const formatted = tmp61.toLowerCase();
          if (formatted.includes("gateway")) {
            let Gateway = closure_3.Gateway;
          } else if (formatted.includes("discord.media")) {
            Gateway = closure_3.RtcControl;
          } else if (formatted.includes("remote-auth")) {
            Gateway = closure_3.RemoteAuth;
          } else if (formatted.includes("spotify")) {
            Gateway = closure_3.Spotify;
          } else if (formatted.includes("rtc")) {
            Gateway = closure_3.RtcControl;
          } else {
            if (!formatted.includes("127.0.0.1")) {
              if (!formatted.includes("localhost")) {
                Gateway = null;
                if (formatted.includes("game")) {
                  Gateway = null;
                  if (formatted.includes("ping")) {
                    Gateway = closure_3.GameServerPing;
                  }
                }
              }
            }
            Gateway = closure_3.Rpc;
          }
        }
      }
      if (tmp != null) {
        const message_identity = data.message_identity;
        let str10 = null;
        if (typeof message_identity === "string") {
          str10 = message_identity;
        }
        if (str10 != null) {
          if (str10 == null) {
            const category = data.category;
            let tmp67 = null;
            if (typeof category === "string") {
              tmp67 = category;
            }
            const type = data.type;
            let tmp58 = null;
            if (typeof type === "string") {
              tmp58 = type;
            }
            const name = data.name;
            let tmp59 = null;
            if (typeof name === "string") {
              tmp59 = name;
            }
            if (null == tmp67) {
              if (null == tmp58) {
                let joined = null;
              }
              str10 = joined;
            }
            const items = [tmp67, tmp58, tmp59];
            const found = items.filter((arg0) => null != arg0);
            joined = found.join("/");
          }
          if (str10 == null) {
            str10 = tmp61;
          }
          if (str10 == null) {
            str10 = "unknown";
          }
          obj = { message_identity: null, socket_kind: null };
          obj[0] = str10;
          obj[1] = tmp;
        } else {
          let evt = data.t;
          if (evt == null) {
            evt = data.type;
          }
          if (evt == null) {
            evt = data.evt;
          }
          let tmp15 = null;
          if (typeof evt === "string") {
            tmp15 = evt;
          }
          if (tmp === closure_3.Gateway) {
            if (typeof data.op !== "number") {
              let tmp37 = null;
              if (typeof str14 === "string") {
                tmp37 = null;
                if ("" !== str14.trim()) {
                  const _Number5 = Number;
                  const NumberResult = Number(str14);
                  const _Number6 = Number;
                  let tmp40 = null;
                  if (Number.isFinite(NumberResult)) {
                    tmp40 = NumberResult;
                  }
                  tmp37 = tmp40;
                }
              }
            } else {
              const _Number11 = Number;
              tmp37 = str14;
            }
            let tmp41 = null;
            if (null != tmp37) {
              const tmp44 = Opcode.Opcode[tmp37];
              let tmp45 = null;
              if (typeof tmp44 === "string") {
                tmp45 = tmp44;
              }
              tmp41 = tmp45;
            }
            if (null != tmp41) {
              let combined = tmp41;
              if ("DISPATCH" === tmp41) {
                combined = tmp41;
                if (null != tmp15) {
                  const _HermesInternal3 = HermesInternal;
                  combined = "" + tmp41 + "/" + tmp15;
                }
              }
              let tmp19 = combined;
            } else {
              if (typeof data.op !== "number") {
                let tmp46 = null;
                if (typeof str25 === "string") {
                  tmp46 = null;
                  if ("" !== str25.trim()) {
                    const _Number7 = Number;
                    const NumberResult1 = Number(str25);
                    const _Number8 = Number;
                    let tmp49 = null;
                    if (Number.isFinite(NumberResult1)) {
                      tmp49 = NumberResult1;
                    }
                    tmp46 = tmp49;
                  }
                }
              } else {
                const _Number12 = Number;
                tmp46 = str25;
              }
              if (null == tmp46) {
                tmp19 = tmp15;
              } else if (null != tmp15) {
                const _HermesInternal2 = HermesInternal;
                let combined1 = "" + tmp46 + "/" + tmp15;
              } else {
                const _String2 = String;
                combined1 = String(tmp46);
              }
            }
          } else if (tmp !== tmp16.RtcControl) {
            const cmd = data.cmd;
            let tmp17 = null;
            if (typeof cmd === "string") {
              tmp17 = cmd;
            }
            const evt2 = data.evt;
            let tmp18 = null;
            if (typeof evt2 === "string") {
              tmp18 = evt2;
            }
            tmp19 = tmp15;
            if (null != tmp17) {
              let combined2 = tmp17;
              if (null != tmp18) {
                const _HermesInternal = HermesInternal;
                combined2 = "" + tmp17 + "/" + tmp18;
              }
              tmp19 = combined2;
            }
          }
          if (typeof data.op !== "number") {
            let tmp22 = null;
            if (typeof str13 === "string") {
              tmp22 = null;
              if ("" !== str13.trim()) {
                const _Number = Number;
                const NumberResult2 = Number(str13);
                const _Number2 = Number;
                let tmp25 = null;
                if (Number.isFinite(NumberResult2)) {
                  tmp25 = NumberResult2;
                }
                tmp22 = tmp25;
              }
            }
          } else {
            const _Number9 = Number;
            tmp22 = str13;
          }
          let tmp26 = null;
          if (null != tmp22) {
            const tmp29 = noop.RTCSocketOpcode[tmp22];
            let tmp30 = null;
            if (typeof tmp29 === "string") {
              tmp30 = tmp29;
            }
            tmp26 = tmp30;
          }
          tmp19 = tmp26;
          if (null == tmp26) {
            if (typeof data.op !== "number") {
              let tmp31 = null;
              if (typeof str22 === "string") {
                tmp31 = null;
                if ("" !== str22.trim()) {
                  const _Number3 = Number;
                  const NumberResult3 = Number(str22);
                  const _Number4 = Number;
                  let tmp34 = null;
                  if (Number.isFinite(NumberResult3)) {
                    tmp34 = NumberResult3;
                  }
                  tmp31 = tmp34;
                }
              }
            } else {
              const _Number10 = Number;
              tmp31 = str22;
            }
            let StringResult = null;
            if (null != tmp31) {
              const _String = String;
              StringResult = String(tmp31);
            }
            tmp19 = StringResult;
          }
        }
      } else {
        if (null == data.cmd) {
          if (null == data.evt) {
            if (null != data.t) {
              let Gateway1 = closure_3.Gateway;
            } else {
              Gateway1 = null;
            }
          }
        }
        Gateway1 = closure_3.Rpc;
      }
    }
    return obj;
  }
};
const result = set.fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInAnalyticBuilder.tsx");

export const buildZoomedInAnalyticsEvent = function buildZoomedInAnalyticsEvent(key) {
  if (key.key in closure_4) {
    const tmp6 = tmp[key](key);
    let tmp7 = null;
    if (null != tmp6) {
      let obj = { key: null, props: null };
      obj[0] = key;
      obj[1] = tmp6;
      tmp7 = obj;
    }
    return tmp7;
  } else {
    if (key in closure_5) {
      const tmp4 = tmp2[key.key](key);
      let tmp5 = null;
      if (null != tmp4) {
        obj = { key: null, props: null };
        obj[0] = key2;
        obj[1] = tmp4;
        tmp5 = obj;
      }
      return tmp5;
    } else {
      return null;
    }
    tmp2 = closure_5;
  }
  tmp = closure_4;
};