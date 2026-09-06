// discord_app/lib/websocketTelemetryHook.android.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/websocketTelemetryHook.android.tsx");

export const installWebsocketTelemetryHook = function installWebsocketTelemetryHook(arg0) {
  closure_0 = arg0;
  function handleMessage(arg0, str) {
    const obj = {};
    const tmp = (function sanitizeUrl(arg0) {
      try {
        const _URL = URL;
        const uRL = new URL(arg0);
        ({ hostname, pathname } = uRL);
        if (null != hostname) {
          if ("" !== tmp7) {
            if (null != pathname) {
              if ("" !== pathname) {
                if ("/" !== pathname) {
                  const _HermesInternal = HermesInternal;
                  let combined = "" + hostname + pathname;
                }
                return combined;
              }
            }
            combined = hostname;
          }
        }
        const first = arg0.split("?")[0];
        let tmp15 = null;
        if ("" !== first) {
          tmp15 = first;
        }
        return tmp15;
      } catch (err) {}
    })(arg0);
    if (null != tmp) {
      obj.url = tmp;
    }
    let flag = false;
    if (typeof str === "string") {
      if (str.length > 0) {
        if ("{" === str[0]) {
          try {
            const _JSON = JSON;
            const parsed = JSON.parse(str);
            let tmp5 = null != parsed;
            if (tmp5) {
              tmp5 = typeof tmp4 === "object";
            }
            if (tmp5) {
              if (null != tmp4.op) {
                obj.op = tmp4.op;
              }
              if (null != tmp4.s) {
                obj.s = tmp4.s;
              }
              if (null != tmp4.t) {
                obj.t = tmp4.t;
              }
              if (null != tmp4.type) {
                obj.type = tmp4.type;
              }
              if (null != tmp4.evt) {
                obj.evt = tmp4.evt;
              }
              if (null != tmp4.cmd) {
                obj.cmd = parsed.cmd;
              }
              flag = true;
            }
          } catch (err) {}
        }
      }
    }
    if (!flag) {
      flag = null == str;
    }
    if (!flag) {
      flag = typeof str === "string";
    }
    if (!flag) {
      obj.type = "binary";
    }
    try {
      closure_0(obj);
    } catch (err) {}
  }
  if (typeof globalThis !== "undefined") {
    let _globalThis = globalThis;
  } else {
    _globalThis = global;
    if (undefined === global) {
      let _window = window;
      _window = null;
      if (typeof window !== "undefined") {
        _window = window;
      }
      _globalThis = _window;
    }
  }
  let _WebSocket;
  if (_globalThis != null) {
    _WebSocket = _globalThis.WebSocket;
  }
  if (null != _WebSocket) {
    if (!_globalThis.__discordWebsocketTelemetryPatched) {
      _WebSocket = _globalThis.WebSocket;
      class PatchedWebSocket {
        constructor() {
          items = [...arguments];
          obj = WebSocket(...items);
          if (typeof items[0] === "string") {
            str = items[0];
          } else {
            str = obj.url;
            tmp = null;
            if (str == null) {
              str = "";
            }
          }
          c0 = str;
          if (typeof obj.addEventListener === "function") {
            str2 = "message";
            listener = obj.addEventListener("message", (event) => {
              let data;
              if (event != null) {
                data = event.data;
              }
              handleMessage(str, data);
            });
          }
          return obj;
        }
      }
      PatchedWebSocket.prototype = _WebSocket.prototype;
      const _Object = Object;
      const merged = Object.assign(PatchedWebSocket, _WebSocket);
      _globalThis.WebSocket = PatchedWebSocket;
      _globalThis.__discordWebsocketTelemetryPatched = true;
    }
  }
};
