// === Module 1996: ZoomedInAnalyticBuilder ===

// Module 1996 (ZoomedInAnalyticBuilder)
import Constants from "Constants" /* 1085 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1363 */;
import GatewaySocketOpcode from "GatewaySocketOpcode" /* 1997 */;
import RTCControlSocket from "RTCControlSocket" /* 1998 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let closure_3 = { Gateway: "gateway", RtcControl: "rtc_control", RemoteAuth: "remote_auth", Spotify: "spotify", Rpc: "rpc", GameServerPing: "game_server_ping" };
let closure_4 = {
  [AnalyticEvents.DEVICE_EVENT]: (data) => {
    data = data.data;
    let tmp = null;
    if (null != data) {
      const tmp2 = globalThis;
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
        const found = entries.filter((item) => {
          let tmp;
          [, tmp] = item;
          return null != tmp;
        });
        let joined = null;
        if (0 !== found.length) {
          const mapped = found.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            return "" + tmp + "=" + tmp2;
          });
          joined = mapped.join(", ");
        }
        tmp = { action: tmp4, description: tmp5, metadata: joined };
        const obj = { action: tmp4, description: tmp5, metadata: joined };
      }
    }
    return tmp;
  },
  [AnalyticEvents.REACT_SOFT_EXCEPTION]: (data) => {
    let tmp4;
    let tmp5;
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
      const component = data.component;
      const obj = { error_message: tmp2, component: tmp4, stacktrace: tmp5 };
      tmp4 = null;
      if (typeof component === "string") {
        tmp4 = component;
      }
      const stacktrace = data.stacktrace;
      tmp5 = null;
      if (typeof stacktrace === "string") {
        tmp5 = stacktrace;
      }
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.NETWORK_CAPABILITIES_CHANGED]: (data) => {
    let tmp3;
    let tmp4;
    let tmp5;
    let vpn_active;
    data = data.data;
    let tmp = null;
    if (null != data) {
      const action = data.action;
      let tmp2 = null;
      if (typeof action === "string") {
        tmp2 = action;
      }
      const network_type = data.network_type;
      const obj = { action: tmp2, network_type: tmp3, upload_bandwidth: tmp4, download_bandwidth: tmp5, vpn_active };
      tmp3 = null;
      if (typeof network_type === "string") {
        tmp3 = network_type;
      }
      const upload_bandwidth = data.upload_bandwidth;
      tmp4 = null;
      if (typeof upload_bandwidth === "number") {
        const _Number = Number;
        tmp4 = null;
        if (Number.isFinite(upload_bandwidth)) {
          tmp4 = upload_bandwidth;
        }
      }
      const download_bandwidth = data.download_bandwidth;
      tmp5 = null;
      if (typeof download_bandwidth === "number") {
        const _Number2 = Number;
        tmp5 = null;
        if (Number.isFinite(download_bandwidth)) {
          tmp5 = download_bandwidth;
        }
      }
      vpn_active = null;
      if (typeof data.vpn_active === "boolean") {
        vpn_active = data.vpn_active;
      }
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.FOREGROUND_SERVICE]: (data) => {
    let guard_allowed;
    let tmp3;
    let tmp4;
    let tmp6;
    let tmp7;
    let tmp9;
    data = data.data;
    let tmp = null;
    if (null != data) {
      const service_name = data.service_name;
      let tmp2 = null;
      if (typeof service_name === "string") {
        tmp2 = service_name;
      }
      const action = data.action;
      const obj = { service_name: tmp2, action: tmp3, detail: tmp4, fgs_operation: tmp6, fgs_configuration_type: tmp7, guard_allowed, fgs_guard_reason: tmp9 };
      tmp3 = null;
      if (typeof action === "string") {
        tmp3 = action;
      }
      const detail = data.detail;
      tmp4 = null;
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
      const fgs_operation = data.fgs_operation;
      tmp6 = null;
      if (typeof fgs_operation === "string") {
        tmp6 = fgs_operation;
      }
      const fgs_configuration_type = data.fgs_configuration_type;
      tmp7 = null;
      if (typeof fgs_configuration_type === "string") {
        tmp7 = fgs_configuration_type;
      }
      guard_allowed = null;
      if (typeof data.guard_allowed === "boolean") {
        guard_allowed = data.guard_allowed;
      }
      const fgs_guard_reason = data.fgs_guard_reason;
      tmp9 = null;
      if (typeof fgs_guard_reason === "string") {
        tmp9 = fgs_guard_reason;
      }
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.APP_LIFECYCLE]: (data) => {
    let tmp4;
    let tmp5;
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
      const previous_state = data.previous_state;
      const obj = { state: tmp2, previous_state: tmp4, details: tmp5 };
      tmp4 = null;
      if (typeof previous_state === "string") {
        tmp4 = previous_state;
      }
      const details = data.details;
      tmp5 = null;
      if (typeof details === "string") {
        tmp5 = details;
      }
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.UI_LIFECYCLE]: (data) => {
    let tmp4;
    let tmp6;
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
      const stage = data.stage;
      const obj = { activity_name: tmp2, stage: tmp4, extra: tmp6 };
      tmp4 = null;
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
      const extra = data.extra;
      tmp6 = null;
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
      tmp = obj;
    }
    return tmp;
  }
};
let closure_5 = {
  [AnalyticEvents.TOUCH_EVENT]: (data) => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    data = data.data;
    let tmp = null;
    if (null != data) {
      const touch_action_type = data.touch_action_type;
      let tmp2 = null;
      if (typeof touch_action_type === "string") {
        tmp2 = touch_action_type;
      }
      const obj = ProcessUtilsDefault;
      let currentHermesInstrumentedStatsSummary = obj.getCurrentHermesInstrumentedStatsSummary();
      if (currentHermesInstrumentedStatsSummary == null) {
        currentHermesInstrumentedStatsSummary = null;
      }
      const client_timestamp_ms = data.client_timestamp_ms;
      const obj2 = { touch_action_type: tmp2, client_timestamp_ms: tmp6, screen_x: tmp7, screen_y: tmp8, view_x: tmp9, view_y: tmp10, total_memory_mb: tmp11, memory_breakdown: tmp12, hermes_instrumented_stats_summary: currentHermesInstrumentedStatsSummary, view_hierarchy: tmp13, gesture: tmp14, window_name: tmp15, hit_test_duration_us: tmp16, distance: tmp17, duration_ms: tmp18, velocity: tmp19, scale_factor: tmp20 };
      tmp6 = null;
      if (typeof client_timestamp_ms === "number") {
        const _Number = Number;
        tmp6 = null;
        if (Number.isFinite(client_timestamp_ms)) {
          tmp6 = client_timestamp_ms;
        }
      }
      const screen_x = data.screen_x;
      tmp7 = null;
      if (typeof screen_x === "number") {
        const _Number2 = Number;
        tmp7 = null;
        if (Number.isFinite(screen_x)) {
          tmp7 = screen_x;
        }
      }
      const screen_y = data.screen_y;
      tmp8 = null;
      if (typeof screen_y === "number") {
        const _Number3 = Number;
        tmp8 = null;
        if (Number.isFinite(screen_y)) {
          tmp8 = screen_y;
        }
      }
      const view_x = data.view_x;
      tmp9 = null;
      if (typeof view_x === "number") {
        const _Number4 = Number;
        tmp9 = null;
        if (Number.isFinite(view_x)) {
          tmp9 = view_x;
        }
      }
      const view_y = data.view_y;
      tmp10 = null;
      if (typeof view_y === "number") {
        const _Number5 = Number;
        tmp10 = null;
        if (Number.isFinite(view_y)) {
          tmp10 = view_y;
        }
      }
      const total_memory_mb = data.total_memory_mb;
      tmp11 = null;
      if (typeof total_memory_mb === "number") {
        const _Number6 = Number;
        tmp11 = null;
        if (Number.isFinite(total_memory_mb)) {
          tmp11 = total_memory_mb;
        }
      }
      const memory_breakdown = data.memory_breakdown;
      tmp12 = null;
      if (typeof memory_breakdown === "string") {
        tmp12 = memory_breakdown;
      }
      const view_hierarchy = data.view_hierarchy;
      tmp13 = null;
      if (typeof view_hierarchy === "string") {
        tmp13 = view_hierarchy;
      }
      const gesture = data.gesture;
      tmp14 = null;
      if (typeof gesture === "string") {
        tmp14 = gesture;
      }
      const window_name = data.window_name;
      tmp15 = null;
      if (typeof window_name === "string") {
        tmp15 = window_name;
      }
      const hit_test_duration_us = data.hit_test_duration_us;
      tmp16 = null;
      if (typeof hit_test_duration_us === "number") {
        const _Number7 = Number;
        tmp16 = null;
        if (Number.isFinite(hit_test_duration_us)) {
          tmp16 = hit_test_duration_us;
        }
      }
      const distance = data.distance;
      tmp17 = null;
      if (typeof distance === "number") {
        const _Number8 = Number;
        tmp17 = null;
        if (Number.isFinite(distance)) {
          tmp17 = distance;
        }
      }
      const duration_ms = data.duration_ms;
      tmp18 = null;
      if (typeof duration_ms === "number") {
        const _Number9 = Number;
        tmp18 = null;
        if (Number.isFinite(duration_ms)) {
          tmp18 = duration_ms;
        }
      }
      const velocity = data.velocity;
      tmp19 = null;
      if (typeof velocity === "number") {
        const _Number10 = Number;
        tmp19 = null;
        if (Number.isFinite(velocity)) {
          tmp19 = velocity;
        }
      }
      const scale_factor = data.scale_factor;
      tmp20 = null;
      if (typeof scale_factor === "number") {
        const _Number11 = Number;
        tmp20 = null;
        if (Number.isFinite(scale_factor)) {
          tmp20 = scale_factor;
        }
      }
      tmp = obj2;
    }
    return tmp;
  },
  [AnalyticEvents.HTTP_REQUEST]: (data) => {
    let tmp10;
    let tmp8;
    let tmp9;
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
        const request = { url: tmp2, method: tmp5, status_code: tmp8, duration_ms: tmp9, source: tmp10 };
        const status_code = data.status_code;
        tmp8 = null;
        if (typeof status_code === "number") {
          const _Number = Number;
          tmp8 = null;
          if (Number.isFinite(status_code)) {
            tmp8 = status_code;
          }
        }
        const duration_ms = data.duration_ms;
        tmp9 = null;
        if (typeof duration_ms === "number") {
          const _Number2 = Number;
          tmp9 = null;
          if (Number.isFinite(duration_ms)) {
            tmp9 = duration_ms;
          }
        }
        const source = data.source;
        tmp10 = null;
        if (typeof source === "string") {
          tmp10 = source;
        }
        tmp7 = request;
      }
      tmp = tmp7;
    }
    return tmp;
  },
  [AnalyticEvents.WEBSOCKET_MESSAGE_RECEIVED]: (data) => {
    let obj;
    data = data.data;
    if (null == data) {
      obj = { message_identity: "unknown", socket_kind: "Boolean" };
    } else {
      const url = data.url;
      let tmp58 = null;
      if (typeof url === "string") {
        tmp58 = url;
      }
      const socket_kind = data.socket_kind;
      let tmp = null;
      if (typeof socket_kind === "string") {
        tmp = socket_kind;
      }
      if (tmp == null) {
        let tmp10 = null;
        if (null != tmp58) {
          let Gateway;
          const formatted = tmp58.toLowerCase();
          if (formatted.includes("gateway")) {
            Gateway = closure_3.Gateway;
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
          tmp10 = Gateway;
        }
        tmp = tmp10;
      }
      if (tmp == null) {
        if (null == data.cmd) {
          let Gateway1;
          if (null == data.evt) {
            if (null != data.t) {
              Gateway1 = closure_3.Gateway;
            } else {
              Gateway1 = null;
            }
          }
          tmp = Gateway1;
        }
        Gateway1 = closure_3.Rpc;
      }
      const message_identity = data.message_identity;
      let str10 = null;
      if (typeof message_identity === "string") {
        str10 = message_identity;
      }
      if (str10 == null) {
        let tmp18;
        let evt = data.t;
        if (evt == null) {
          evt = data.type;
        }
        if (evt == null) {
          evt = data.evt;
        }
        let tmp14 = null;
        if (typeof evt === "string") {
          tmp14 = evt;
        }
        if (tmp === closure_3.Gateway) {
          let tmp36;
          if (typeof data.op !== "number") {
            tmp36 = null;
            if (typeof data.op === "string") {
              tmp36 = null;
              if ("" !== data.op.trim()) {
                const _Number5 = Number;
                const NumberResult = Number(data.op);
                const _Number6 = Number;
                let tmp39 = null;
                if (Number.isFinite(NumberResult)) {
                  tmp39 = NumberResult;
                }
                tmp36 = tmp39;
              }
            }
          } else {
            const _Number11 = Number;
            tmp36 = str14;
          }
          let tmp40 = null;
          if (null != tmp36) {
            const tmp43 = GatewaySocketOpcode.Opcode[tmp36];
            let tmp44 = null;
            if (typeof tmp43 === "string") {
              tmp44 = tmp43;
            }
            tmp40 = tmp44;
          }
          if (null != tmp40) {
            let combined = tmp40;
            if ("DISPATCH" === tmp40) {
              combined = tmp40;
              if (null != tmp14) {
                const _HermesInternal3 = HermesInternal;
                combined = "" + tmp40 + "/" + tmp14;
              }
            }
            tmp18 = combined;
          } else {
            let tmp45;
            if (typeof data.op !== "number") {
              tmp45 = null;
              if (typeof data.op === "string") {
                tmp45 = null;
                if ("" !== data.op.trim()) {
                  const _Number7 = Number;
                  const NumberResult1 = Number(data.op);
                  const _Number8 = Number;
                  let tmp48 = null;
                  if (Number.isFinite(NumberResult1)) {
                    tmp48 = NumberResult1;
                  }
                  tmp45 = tmp48;
                }
              }
            } else {
              const _Number12 = Number;
              tmp45 = str25;
            }
            let tmp49 = tmp14;
            if (null != tmp45) {
              let combined1;
              if (null != tmp14) {
                const _HermesInternal2 = HermesInternal;
                combined1 = "" + tmp45 + "/" + tmp14;
              } else {
                const _String2 = String;
                combined1 = String(tmp45);
              }
              tmp49 = combined1;
            }
            tmp18 = tmp49;
          }
        } else if (tmp === tmp15.RtcControl) {
          let tmp21;
          if (typeof data.op !== "number") {
            tmp21 = null;
            if (typeof data.op === "string") {
              tmp21 = null;
              if ("" !== data.op.trim()) {
                const _Number = Number;
                const NumberResult2 = Number(data.op);
                const _Number2 = Number;
                let tmp24 = null;
                if (Number.isFinite(NumberResult2)) {
                  tmp24 = NumberResult2;
                }
                tmp21 = tmp24;
              }
            }
          } else {
            const _Number9 = Number;
            tmp21 = str13;
          }
          let tmp25 = null;
          if (null != tmp21) {
            const tmp28 = RTCControlSocket.RTCSocketOpcode[tmp21];
            let tmp29 = null;
            if (typeof tmp28 === "string") {
              tmp29 = tmp28;
            }
            tmp25 = tmp29;
          }
          tmp18 = tmp25;
          if (null == tmp25) {
            let tmp30;
            if (typeof data.op !== "number") {
              tmp30 = null;
              if (typeof data.op === "string") {
                tmp30 = null;
                if ("" !== data.op.trim()) {
                  const _Number3 = Number;
                  const NumberResult3 = Number(data.op);
                  const _Number4 = Number;
                  let tmp33 = null;
                  if (Number.isFinite(NumberResult3)) {
                    tmp33 = NumberResult3;
                  }
                  tmp30 = tmp33;
                }
              }
            } else {
              const _Number10 = Number;
              tmp30 = str22;
            }
            let StringResult = null;
            if (null != tmp30) {
              const _String = String;
              StringResult = String(tmp30);
            }
            tmp18 = StringResult;
          }
        } else {
          const cmd = data.cmd;
          let tmp16 = null;
          if (typeof cmd === "string") {
            tmp16 = cmd;
          }
          const evt2 = data.evt;
          let tmp17 = null;
          if (typeof evt2 === "string") {
            tmp17 = evt2;
          }
          tmp18 = tmp14;
          if (null != tmp16) {
            let combined2 = tmp16;
            if (null != tmp17) {
              const _HermesInternal = HermesInternal;
              combined2 = "" + tmp16 + "/" + tmp17;
            }
            tmp18 = combined2;
          }
        }
        str10 = tmp18;
      }
      if (str10 == null) {
        const category = data.category;
        let tmp63 = null;
        if (typeof category === "string") {
          tmp63 = category;
        }
        const type = data.type;
        let tmp55 = null;
        if (typeof type === "string") {
          tmp55 = type;
        }
        const name = data.name;
        let tmp56 = null;
        if (typeof name === "string") {
          tmp56 = name;
        }
        if (null == tmp63) {
          let joined;
          if (null == tmp55) {
            joined = null;
          }
          str10 = joined;
        }
        const items = [tmp63, tmp55, tmp56];
        const found = items.filter((item) => null != item);
        joined = found.join("/");
      }
      if (str10 == null) {
        str10 = tmp58;
      }
      if (str10 == null) {
        str10 = "unknown";
      }
      obj = { message_identity: str10, socket_kind: tmp };
    }
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInAnalyticBuilder.tsx");

export const buildZoomedInAnalyticsEvent = function buildZoomedInAnalyticsEvent(key) {
  if (key.key.key in closure_4) {
    const tmp6 = closure_4[key.key](key.key);
    let tmp7 = null;
    if (null != tmp6) {
      tmp7 = { key: key.key, props: tmp6 };
      const obj2 = { key: key.key, props: tmp6 };
    }
    return tmp7;
  } else if (key.key in closure_5) {
    const tmp4 = closure_5[key.key.key](key.key);
    let tmp5 = null;
    if (null != tmp4) {
      tmp5 = { key: key.key.key, props: tmp4 };
      const obj = { key: key.key.key, props: tmp4 };
    }
    return tmp5;
  } else {
    return null;
  }
};