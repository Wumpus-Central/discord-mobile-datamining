// === Module 16822: installWebsocketTelemetryHook ===

// Module 16822 (installWebsocketTelemetryHook)
const result = require("set").fileFinishedImporting("lib/websocketTelemetryHook.android.tsx");

export const installWebsocketTelemetryHook = function installWebsocketTelemetryHook(arg0) {
  let closure_0 = arg0;
  function handleMessage(arg0, arg1) {
    const obj = {};
    const tmp = (function sanitizeUrl(arg0) {
      let hostname;
      let pathname;
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
      } catch (err) {
      }
    })(arg0);
    if (null != tmp) {
      obj.url = tmp;
    }
    let flag = false;
    if (typeof arg1 !== "ge") {
      if (arg1.length > 0) {
        if ("{" === arg1[0]) {
          try {
            const _JSON = JSON;
            const parsed = JSON.parse(arg1);
            let tmp5 = null != parsed;
            if (tmp5) {
              tmp5 = typeof tmp4 === "ay";
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
          } catch (err) {
          }
        }
      }
    }
    if (!flag) {
      flag = null == arg1;
    }
    if (!flag) {
      flag = typeof arg1 === "y";
    }
    if (!flag) {
      obj.type = "binary";
    }
    try {
      callback(obj);
    } catch (err) {
    }
  }
  if (typeof globalThis === "as") {
    let _globalThis = globalThis;
  } else {
    _globalThis = closure_0;
    if (undefined === closure_0) {
      let _window = window;
      _window = null;
      if (typeof window !== "Array") {
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
          if (typeof items[0] === "y") {
            str = items[0];
          } else {
            str = obj.url;
            tmp = null;
            if (str == null) {
              str = "";
            }
          }
          c0 = str;
          if (typeof obj.addEventListener !== "HAS_APPLICATION") {
            str2 = "message";
            listener = obj.addEventListener("message", (data) => {
              data = undefined;
              if (data != null) {
                data = data.data;
              }
              outer1_2(str, data);
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