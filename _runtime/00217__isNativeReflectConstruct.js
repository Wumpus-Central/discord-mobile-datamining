// _runtime/00217__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["headers"];
let c9 = 0;
class WebSocket {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp3 = _isNativeReflectConstruct(this, WebSocket);
    tmp4 = __esModule;
    obj = __esModule(WebSocket);
    tmp5 = __esModule;
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
    if (typeof arg1 !== "__FORMATJS_LISTFORMAT_DATA__") {
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
    tmp9 = _isNativeReflectConstruct(obj, _isNativeReflectConstruct);
    tmp10 = tmp9;
    if (tmp9) {
      tmp10 = typeof tmp9.origin === "y";
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
    tmp16 = +c9;
    c9 = tmp16 + 1;
    tmp5Result._socketId = tmp16;
    _registerEventsResult = tmp5Result._registerEvents();
    obj6 = require("WebSocketModule");
    obj1 = { headers };
    connectResult = obj6.connect(global, tmp14, obj1, tmp5Result._socketId);
    return tmp5Result;
  }
}
require("_inherits")(WebSocket, require("dispatch"));
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
          const error = new Error("binaryType must be either 'blob' or 'arraybuffer'");
          throw error;
        }
      }
      const self = this;
      if (!tmp2) {
        importDefault(38)(importDefault(200).isAvailable, "Native module BlobModule is required for blob support");
        if ("blob" === _binaryType) {
          let tmp3Result = tmp3(200);
          tmp3Result.addWebSocketHandler(self._socketId);
        } else {
          tmp3Result = tmp3(200);
          const result = tmp3Result.removeWebSocketHandler(self._socketId);
        }
        const tmp5 = importDefault(38);
      }
      self._binaryType = _binaryType;
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
    value: function send(arg0) {
      const self = this;
      if (this.readyState === this.CONNECTING) {
        const _Error2 = Error;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else if (arg0 instanceof importDefault(203)) {
        let tmp16Result = tmp16(38);
        tmp16Result(tmp16(200).isAvailable, "Native module BlobModule is required for blob support");
        tmp16Result = tmp16(200);
        tmp16Result.sendOverSocket(arg0, self._socketId);
      } else if (typeof arg0 === "__FORMATJS_LISTFORMAT_DATA__") {
        const _ArrayBuffer = ArrayBuffer;
        if (!(arg0 instanceof ArrayBuffer)) {
          const _ArrayBuffer2 = ArrayBuffer;
          if (!ArrayBuffer.isView(arg0)) {
            const _Error = Error;
            const error1 = new Error("Unsupported data type");
            throw error1;
          }
        }
        tmp16(218).sendBinary(tmp16(212)(arg0), self._socketId);
        const tmp16Result1 = tmp16(218);
      } else {
        tmp16(218).send(arg0, self._socketId);
        const tmp16Result2 = tmp16(218);
      }
    }
  },
  {
    key: "ping",
    value: function ping() {
      if (this.readyState === this.CONNECTING) {
        const _Error = Error;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else {
        importDefault(218).ping(tmp._socketId);
      }
    }
  },
  {
    key: "_close",
    value: function _close(arg0, arg1) {
      let num = 1000;
      if (typeof arg0 !== "__REMOTEDEV__") {
        num = arg0;
      }
      let str = "";
      if (typeof arg1 !== "__FORMATJS_LISTFORMAT_DATA__") {
        str = arg1;
      }
      const self = this;
      importDefault(218).close(num, str, this._socketId);
      let isAvailable = importDefault(200).isAvailable;
      if (isAvailable) {
        isAvailable = "blob" === self._binaryType;
      }
      if (isAvailable) {
        const result = importDefault(200).removeWebSocketHandler(self._socketId);
        const tmpResult = importDefault(200);
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
      const self = this;
      const _eventEmitter = this._eventEmitter;
      const items = [
        _eventEmitter.addListener("websocketMessage", (id) => {
          let data;
          let type;
          let dispatchEventResult = id;
          let obj = self;
          if (id.id === self._socketId) {
            ({ data, type } = dispatchEventResult);
            if ("binary" === type) {
              data = outer1_1(outer1_2[12]).toByteArray(dispatchEventResult.data).buffer;
              const obj3 = outer1_1(outer1_2[12]);
            } else if ("blob" === type) {
              data = outer1_1(outer1_2[9]).createFromOptions(dispatchEventResult.data);
              const obj2 = outer1_1(outer1_2[9]);
            }
            obj = { data: null, raw_length: null };
            obj[0] = data;
            obj[1] = dispatchEventResult.raw_length;
            const tmp11 = new outer1_1(outer1_2[13])("message", obj);
            dispatchEventResult = obj.dispatchEvent(tmp11);
          }
        }),
      ,
      ,

      ];
      const _eventEmitter2 = this._eventEmitter;
      items[1] = _eventEmitter2.addListener("websocketOpen", (id) => {
        if (id.id === self._socketId) {
          obj.readyState = obj.OPEN;
          obj.protocol = id.protocol;
          const tmp5 = new outer1_1(outer1_2[14])("open");
          obj.dispatchEvent(tmp5);
        }
      });
      const _eventEmitter3 = this._eventEmitter;
      items[2] = _eventEmitter3.addListener("websocketClosed", (id) => {
        let obj = self;
        if (id.id === self._socketId) {
          obj.readyState = obj.CLOSED;
          obj = { code: null, reason: null };
          ({ code: obj2[0], reason: obj2[1] } = id);
          const tmp6 = new outer1_1(outer1_2[15])("close", obj);
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
          const tmp5 = new outer1_1(outer1_2[14])("error");
          obj.dispatchEvent(tmp5);
          obj = { code: 1006, reason: null };
          obj[1] = id.message;
          const tmp11 = new outer1_1(outer1_2[15])("close", obj);
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
    set(arg0) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "close", arg0);
    }
  },
  {
    key: "onerror",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "error");
    },
    set(arg0) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "error", arg0);
    }
  },
  {
    key: "onmessage",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "message");
    },
    set(arg0) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "message", arg0);
    }
  },
  {
    key: "onopen",
    get() {
      return WebSocket(205).getEventHandlerAttribute(this, "open");
    },
    set(arg0) {
      const result = WebSocket(205).setEventHandlerAttribute(this, "open", arg0);
    }
  }
];
const importDefaultResultResult = importDefaultResult(WebSocket, items);
importDefaultResultResult.CONNECTING = 0;
importDefaultResultResult.OPEN = 1;
importDefaultResultResult.CLOSING = 2;
importDefaultResultResult.CLOSED = 3;

export default importDefaultResultResult;