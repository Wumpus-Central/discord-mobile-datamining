// === Module 217: _isNativeReflectConstruct ===

// Module 217 (_isNativeReflectConstruct)
import _modDef38 from "module_38" /* 38 */;
import _inheritsDefault from "_inherits" /* 98 */;
import dispatchDefault from "dispatch" /* 132 */;
import EventDefault from "Event" /* 133 */;
import BlobManagerDefault from "BlobManager" /* 200 */;
import BlobDefault from "Blob" /* 203 */;
import byteLengthDefault from "byteLength" /* 206 */;
import NativeEventEmitterDefault from "NativeEventEmitter" /* 209 */;
import binaryToBase64Default from "binaryToBase64" /* 212 */;
import WebSocketModuleDefault from "WebSocketModule" /* 218 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 220 */;
import _isNativeReflectConstructDefault2 from "_isNativeReflectConstruct" /* 221 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

const WebSocket = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
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
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp3 = closure_5(this, WebSocket);
    tmp4 = closure_7;
    obj = closure_7(WebSocket);
    tmp5 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp4(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp5Result = tmp5(self, constructResult);
    tmp5Result.CONNECTING = 0;
    tmp5Result.OPEN = 1;
    tmp5Result.CLOSING = 2;
    tmp5Result.CLOSED = 3;
    tmp5Result.readyState = 0;
    tmp5Result.url = global;
    tmp8 = arg1;
    if (typeof arg1 === "string") {
      items = [];
      items[0] = arg1;
      tmp8 = items;
    }
    obj = importDefault;
    if (!importDefault) {
      obj = {};
    }
    headers = obj.headers;
    if (undefined === headers) {
      headers = {};
    }
    tmp9 = closure_4(obj, closure_3);
    tmp10 = tmp9;
    if (tmp9) {
      tmp10 = typeof tmp9.origin === "string";
    }
    if (tmp10) {
      tmp11 = globalThis;
      _console = console;
      str = "Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.";
      warnResult = console.warn("Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.");
      headers.origin = tmp9.origin;
      str2 = "origin";
      delete tmp2[tmp];
    }
    if (Object.keys(tmp9).length > 0) {
      _console2 = console;
      _Object = Object;
      keys = Object.keys(tmp9);
      str3 = "`, `";
      str4 = "Unrecognized WebSocket connection option(s) `";
      str5 = "`. Did you mean to put these under `headers`?";
      warnResult1 = console.warn(`Unrecognized WebSocket connection option(s) \`${obj5.join("`, `")}\`. Did you mean to put these under \`headers\`?`);
    }
    tmp14 = tmp8;
    if (!Array.isArray(tmp8)) {
      tmp14 = null;
    }
    tmp15 = new require("NativeEventEmitter")(null);
    tmp5Result._eventEmitter = tmp15;
    tmp16 = +closure_9;
    closure_9 = tmp16 + 1;
    tmp5Result._socketId = tmp16;
    _registerEventsResult = tmp5Result._registerEvents();
    obj6 = require("WebSocketModule");
    obj1 = { headers };
    connectResult = obj6.connect(global, tmp14, obj1, tmp5Result._socketId);
    return tmp5Result;
  }
}
_inheritsDefault(WebSocket, dispatchDefault);
let items = [
  {
    key: "binaryType",
    get() {
      return this._binaryType;
    },
    set(_binaryType) {
      if ("blob" !== _binaryType) {
        if ("arraybuffer" !== _binaryType) {
          const _Error = Error;
          error = new Error("binaryType must be either 'blob' or 'arraybuffer'");
          throw error;
        }
      }
      const self = this;
      if (!tmp2) {
        _modDef38(BlobManagerDefault.isAvailable, "Native module BlobModule is required for blob support");
        if ("blob" === _binaryType) {
          let tmp3Result = BlobManagerDefault;
          tmp3Result.addWebSocketHandler(self._socketId);
        } else {
          tmp3Result = BlobManagerDefault;
          const result = tmp3Result.removeWebSocketHandler(self._socketId);
        }
      }
      self._binaryType = _binaryType;
      tmp2 = "blob" !== this._binaryType && "blob" !== _binaryType;
    }
  },
  {
    key: "close",
    value: function close(arg0, arg1) {
      const self = this;
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
        error = new Error("INVALID_STATE_ERR");
        throw error;
      } else if (str instanceof BlobDefault) {
        let tmp16Result = _modDef38;
        tmp16Result(BlobManagerDefault.isAvailable, "Native module BlobModule is required for blob support");
        tmp16Result = BlobManagerDefault;
        tmp16Result.sendOverSocket(str, self._socketId);
      } else if (typeof str !== "string") {
        const _ArrayBuffer = ArrayBuffer;
        if (!(str instanceof ArrayBuffer)) {
          const _ArrayBuffer2 = ArrayBuffer;
          if (!ArrayBuffer.isView(str)) {
            const _Error = Error;
            const error1 = new Error("Unsupported data type");
            throw error1;
          }
        }
        WebSocketModuleDefault.sendBinary(binaryToBase64Default(str), self._socketId);
        const tmp16Result1 = WebSocketModuleDefault;
      } else {
        WebSocketModuleDefault.send(str, self._socketId);
        const tmp16Result2 = WebSocketModuleDefault;
      }
    }
  },
  {
    key: "ping",
    value: function ping() {
      if (this.readyState === this.CONNECTING) {
        const _Error = Error;
        error = new Error("INVALID_STATE_ERR");
        throw error;
      } else {
        WebSocketModuleDefault.ping(tmp._socketId);
      }
    }
  },
  {
    key: "_close",
    value: function _close(num, str) {
      num = 1000;
      str = "";
      const self = this;
      WebSocketModuleDefault.close(num, str, this._socketId);
      let isAvailable = BlobManagerDefault.isAvailable;
      if (isAvailable) {
        isAvailable = "blob" === self._binaryType;
      }
      if (isAvailable) {
        const result = BlobManagerDefault.removeWebSocketHandler(self._socketId);
        const tmpResult = BlobManagerDefault;
      }
    }
  },
  {
    key: "_unregisterEvents",
    value: function _unregisterEvents() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((item, index) => item.remove());
      this._subscriptions = [];
    }
  },
  {
    key: "_registerEvents",
    value: function _registerEvents() {
      const self = this;
      const _eventEmitter = this._eventEmitter;
      const items = [
        _eventEmitter.addListener("websocketMessage", (id) => {
          let dispatchEventResult = id;
          let obj = self;
          if (id.id === self._socketId) {
            ({ data, type } = dispatchEventResult);
            if ("binary" === type) {
              data = byteLengthDefault.toByteArray(dispatchEventResult.data).buffer;
            } else if ("blob" === type) {
              data = BlobManagerDefault.createFromOptions(dispatchEventResult.data);
            }
            obj = { data: null, raw_length: null };
            obj[0] = data;
            obj[1] = dispatchEventResult.raw_length;
            const tmp11 = new _isNativeReflectConstructDefault("message", obj);
            dispatchEventResult = obj.dispatchEvent(tmp11);
          }
        }),
      ,
      ,

      ];
      const _eventEmitter2 = this._eventEmitter;
      items[1] = _eventEmitter2.addListener("websocketOpen", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.OPEN;
          self.protocol = id.protocol;
          const tmp5 = new EventDefault("open");
          self.dispatchEvent(tmp5);
        }
      });
      const _eventEmitter3 = this._eventEmitter;
      items[2] = _eventEmitter3.addListener("websocketClosed", (id) => {
        let obj = self;
        if (id.id === self._socketId) {
          obj.readyState = obj.CLOSED;
          obj = { code: null, reason: null };
          ({ code: obj2[0], reason: obj2[1] } = id);
          const tmp6 = new _isNativeReflectConstructDefault2("close", obj);
          obj.dispatchEvent(tmp6);
          obj._unregisterEvents();
          obj.close();
        }
      });
      const _eventEmitter4 = this._eventEmitter;
      items[3] = _eventEmitter4.addListener("websocketFailed", (id) => {
        let obj = self;
        if (id.id === self._socketId) {
          obj.readyState = obj.CLOSED;
          const tmp5 = new EventDefault("error");
          obj.dispatchEvent(tmp5);
          obj = { code: 1006, reason: null };
          obj[1] = id.message;
          const tmp11 = new _isNativeReflectConstructDefault2("close", obj);
          obj.dispatchEvent(tmp11);
          obj._unregisterEvents();
          obj.close();
        }
      });
      this._subscriptions = items;
    }
  },
  {
    key: "onclose",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "close");
    },
    set(fn) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "close", fn);
    }
  },
  {
    key: "onerror",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "error", fn);
    }
  },
  {
    key: "onmessage",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "message");
    },
    set(fn) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "message", fn);
    }
  },
  {
    key: "onopen",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "open");
    },
    set(fn) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "open", fn);
    }
  }
];
const importDefaultResultResult = importDefaultResult(WebSocket, items);
importDefaultResultResult.CONNECTING = 0;
importDefaultResultResult.OPEN = 1;
importDefaultResultResult.CLOSING = 2;
importDefaultResultResult.CLOSED = 3;

export default importDefaultResultResult;