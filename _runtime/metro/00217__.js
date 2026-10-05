// === Module 217: ? ===

// Module 217
import _modDef38 from "module_38" /* 38 */;
import _modDef132 from "module_132" /* 132 */;
import _modDef133 from "module_133" /* 133 */;
import _modDef200 from "module_200" /* 200 */;
import _modDef203 from "module_203" /* 203 */;
import byteLengthDefault from "byteLength" /* 206 */;
import _modDef209 from "module_209" /* 209 */;
import binaryToBase64Default from "binaryToBase64" /* 212 */;
import WebSocketModuleDefault from "WebSocketModule" /* 218 */;
import _modDef220 from "module_220" /* 220 */;
import _modDef221 from "module_221" /* 221 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["headers"];
let closure_9 = 0;
class WebSocket {
  constructor(url, str, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, WebSocket);
    const obj = _getPrototypeOf(WebSocket);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = metroRequire(self, constructResult);
    tmp3Result.CONNECTING = 0;
    tmp3Result.OPEN = 1;
    tmp3Result.CLOSING = 2;
    tmp3Result.CLOSED = 3;
    tmp3Result.readyState = 0;
    tmp3Result.url = url;
    let tmp6 = str;
    if (typeof str === "string") {
      const items = [str];
      tmp6 = items;
    }
    const tmp7 = arg2 || {};
    let headers = tmp7.headers;
    if (undefined === headers) {
      headers = {};
    }
    const tmp8 = _objectWithoutProperties(tmp7, closure_3);
    const tmp9 = tmp8 && typeof tmp8.origin === "string";
    if (tmp9) {
      const _console = console;
      console.warn("Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.");
      headers.origin = tmp8.origin;
      delete tmp8["origin"];
    }
    if (Object.keys(tmp8).length > 0) {
      const _console2 = console;
      const _Object = Object;
      const keys = Object.keys(tmp8);
      warn(`Unrecognized WebSocket connection option(s) \`${obj4.join("`, `")}\`. Did you mean to put these under \`headers\`?`);
    }
    let tmp13 = tmp6;
    if (!Array.isArray(tmp6)) {
      tmp13 = null;
    }
    tmp3Result._eventEmitter = new _modDef209(null);
    closure_9 = tmp15 + 1;
    tmp3Result._socketId = +closure_9;
    new _modDef209(null);
    tmp3Result._registerEvents();
    const obj2 = { headers };
    const obj5 = WebSocketModuleDefault;
    obj5.connect(url, tmp13, obj2, tmp3Result._socketId);
    return tmp3Result;
  }
}
_inherits(WebSocket, _modDef132);
let obj = {
  key: "binaryType",
  get() {
    return this._binaryType;
  },
  set(_binaryType) {
    if ("blob" !== _binaryType) {
      if ("arraybuffer" !== _binaryType) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("binaryType must be either 'blob' or 'arraybuffer'");
        throw error;
      }
    }
    const self = this;
    const tmp2 = "blob" !== this._binaryType && "blob" !== _binaryType;
    if (!tmp2) {
      const tmp5 = _modDef38;
      tmp5(_modDef200.isAvailable, "Native module BlobModule is required for blob support");
      if ("blob" === _binaryType) {
        const tmp3Result = _modDef200;
        tmp3Result.addWebSocketHandler(self._socketId);
      } else {
        const tmp3Result2 = _modDef200;
        const result = tmp3Result2.removeWebSocketHandler(self._socketId);
      }
    }
    self._binaryType = _binaryType;
  }
};
let items = [
  obj,
  {
    key: "close",
    value: function close(arg0, arg1) {
      const self = this;
      const tmp = this.readyState !== this.CLOSING && self.readyState !== self.CLOSED;
      if (tmp) {
        self.readyState = self.CLOSING;
        self._close(arg0, arg1);
      }
    }
  },
  {
    key: "send",
    value: function send(str) {
      const self = this;
      if (this.readyState === this.CONNECTING) {
        const _Error2 = Error;
        const self4 = this;
        const self5 = this;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else if (str instanceof _modDef203) {
        const tmp12Result = _modDef38;
        tmp12Result(_modDef200.isAvailable, "Native module BlobModule is required for blob support");
        const tmp12Result4 = _modDef200;
        tmp12Result4.sendOverSocket(str, self._socketId);
      } else if (typeof str !== "string") {
        const _ArrayBuffer = ArrayBuffer;
        if (!(str instanceof ArrayBuffer)) {
          const _ArrayBuffer2 = ArrayBuffer;
          if (!ArrayBuffer.isView(str)) {
            const _Error = Error;
            const self2 = this;
            const self3 = this;
            const error1 = new Error("Unsupported data type");
            throw error1;
          }
        }
        const tmp12Result5 = WebSocketModuleDefault;
        tmp12Result5.sendBinary(binaryToBase64Default(str), self._socketId);
      } else {
        const tmp12Result6 = WebSocketModuleDefault;
        tmp12Result6.send(str, self._socketId);
      }
    }
  },
  {
    key: "ping",
    value: function ping() {
      if (this.readyState === this.CONNECTING) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else {
        const obj = WebSocketModuleDefault;
        obj.ping(tmp._socketId);
      }
    }
  },
  {
    key: "_close",
    value: function _close(num, str) {
      const self = this;
      const obj = WebSocketModuleDefault;
      obj.close(1000, "", this._socketId);
      const isAvailable = _modDef200.isAvailable && "blob" === self._binaryType;
      if (isAvailable) {
        const tmpResult = _modDef200;
        const result = tmpResult.removeWebSocketHandler(self._socketId);
      }
    }
  },
  {
    key: "_unregisterEvents",
    value: function _unregisterEvents() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => remove.remove());
      this._subscriptions = [];
    }
  },
  {
    key: "_registerEvents",
    value: function _registerEvents() {
      let self = this;
      const _eventEmitter = this._eventEmitter;
      const items = [
        _eventEmitter.addListener("websocketMessage", function(id) {
          let data;
          let type;
          const tmp = self;
          if (id.id === self._socketId) {
            ({ data, type } = id);
            if ("binary" === type) {
              const obj2 = byteLengthDefault;
              data = obj2.toByteArray(id.data).buffer;
            } else if ("blob" === type) {
              const obj = _modDef200;
              data = obj.createFromOptions(id.data);
            }
            const dispatchEvent = tmp.dispatchEvent;
            self = this;
            const self2 = this;
            const obj3 = { data, raw_length: id.raw_length };
            const tmp9 = new _modDef220("message", obj3);
            dispatchEvent(tmp9);
          }
        }),
      ,
      ,

      ];
      const _eventEmitter2 = this._eventEmitter;
      items[1] = _eventEmitter2.addListener("websocketOpen", function(id) {
        if (id.id === self._socketId) {
          self.readyState = self.OPEN;
          self.protocol = id.protocol;
          const dispatchEvent = tmp.dispatchEvent;
          self = this;
          const self2 = this;
          const tmp4 = new _modDef133("open");
          dispatchEvent(tmp4);
        }
      });
      const _eventEmitter3 = this._eventEmitter;
      items[2] = _eventEmitter3.addListener("websocketClosed", function(id) {
        if (id.id === self._socketId) {
          self.readyState = self.CLOSED;
          const dispatchEvent = obj.dispatchEvent;
          const obj3 = { code: null, reason: null };
          ({ code: obj2.code, reason: obj2.reason } = id);
          self = this;
          const self2 = this;
          const tmp4 = new _modDef221("close", obj3);
          dispatchEvent(tmp4);
          self._unregisterEvents();
          self.close();
        }
      });
      const _eventEmitter4 = this._eventEmitter;
      items[3] = _eventEmitter4.addListener("websocketFailed", function(id) {
        if (id.id === self._socketId) {
          self.readyState = self.CLOSED;
          const dispatchEvent = obj.dispatchEvent;
          self = this;
          const self2 = this;
          const tmp3 = new _modDef133("error");
          dispatchEvent(tmp3);
          const dispatchEvent2 = obj.dispatchEvent;
          const self3 = this;
          const self4 = this;
          const obj2 = { code: 1006, reason: id.message };
          const tmp7 = new _modDef221("close", obj2);
          dispatchEvent2(tmp7);
          self._unregisterEvents();
          self.close();
        }
      });
      this._subscriptions = items;
    }
  },
  {
    key: "onclose",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "close");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "close", handleEvent);
    }
  },
  {
    key: "onerror",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "error", handleEvent);
    }
  },
  {
    key: "onmessage",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "message");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "message", handleEvent);
    }
  },
  {
    key: "onopen",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "open");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "open", handleEvent);
    }
  }
];
const importDefaultResultResult = _createClass(WebSocket, items);
importDefaultResultResult.CONNECTING = 0;
importDefaultResultResult.OPEN = 1;
importDefaultResultResult.CLOSING = 2;
importDefaultResultResult.CLOSED = 3;

export default importDefaultResultResult;