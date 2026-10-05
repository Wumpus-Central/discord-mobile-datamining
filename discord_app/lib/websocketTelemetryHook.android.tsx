// === Module 18092: websocketTelemetryHook ===

// Module 18092 (websocketTelemetryHook)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/websocketTelemetryHook.android.tsx");

export const installWebsocketTelemetryHook = function installWebsocketTelemetryHook(arg0) {
  let _globalThis;
  let closure_0 = arg0;
  function handleMessage(arg0, str) {
    function sanitizeUrl(arg0) {
      let hostname;
      let pathname;
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(arg0);
        ({ hostname, pathname } = uRL);
        if (null != hostname) {
          if ("" !== tmp5) {
            if (null != pathname) {
              if ("" !== pathname) {
                let combined;
                if ("/" !== pathname) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + hostname + pathname;
                }
                return combined;
              }
            }
            combined = hostname;
          }
        }
        const first = arg0.split("?")[0];
        let tmp13 = null;
        if ("" !== first) {
          tmp13 = first;
        }
        return tmp13;
      } catch (err) {
      }
    }
    const obj = {};
    const tmp = sanitizeUrl(arg0);
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
              if (null != parsed.op) {
                obj.op = parsed.op;
              }
              if (null != parsed.s) {
                obj.s = parsed.s;
              }
              if (null != parsed.t) {
                obj.t = parsed.t;
              }
              let tmp13 = parsed;
              if (null != parsed.type) {
                obj.type = parsed.type;
              }
              if (null != parsed.evt) {
                obj.evt = parsed.evt;
              }
              if (null != parsed.cmd) {
                obj.cmd = parsed.cmd;
              }
              flag = true;
            }
          } catch (err) {
          }
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
    } catch (err) {
    }
  }
  if (typeof globalThis !== "undefined") {
    _globalThis = globalThis;
  } else {
    _globalThis = global;
    if (undefined === global) {
      const _window = window;
      let _window1 = null;
      if (typeof window !== "undefined") {
        _window1 = window;
      }
      _globalThis = _window1;
    }
  }
  let _WebSocket1;
  if (_globalThis != null) {
    _WebSocket1 = _globalThis.WebSocket;
  }
  if (null != _WebSocket1) {
    if (!_globalThis.__discordWebsocketTelemetryPatched) {
      const _WebSocket = _globalThis.WebSocket;
      class PatchedWebSocket {
        constructor() {
          let str;
          const items = [...arguments];
          const obj = _WebSocket(...items);
          if (typeof items[0] === "string") {
            str = items[0];
          } else {
            str = obj.url;
            if (str == null) {
              str = "";
            }
          }
          if (typeof obj.addEventListener === "function") {
            const listener = obj.addEventListener("message", (event) => {
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
      let flag = true;
      _globalThis.__discordWebsocketTelemetryPatched = true;
    }
  }
};