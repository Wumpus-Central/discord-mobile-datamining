// _runtime/01181_makeNativeTransport.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";

const NativeTransport = arg1;
function makeNativeTransport() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  return new closure_3(obj);
}
class NativeTransport {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    tmp = closure_2(this, NativeTransport);
    obj2 = require("registerSpanErrorInstrumentation");
    num = obj.bufferSize;
    if (!num) {
      num = 30;
    }
    this._buffer = obj2.makePromiseBuffer(num);
    return;
  }
}
const items = [
  {
    key: "send",
    value: function send(arg0) {
      closure_0 = arg0;
      const _buffer = this._buffer;
      return _buffer
        .add(() => {
          const NATIVE = callback(closure_1_1[3]).NATIVE;
          return NATIVE.sendEnvelope(callback);
        })
        .then(() => ({}));
    },
  },
  {
    key: "flush",
    value: function flush(arg0) {
      const _buffer = this._buffer;
      return _buffer.drain(arg0);
    },
  },
];
const tmp2 = _createClassDefault(NativeTransport, items);
let closure_3 = tmp2;

export const DEFAULT_BUFFER_SIZE = 30;
export const NativeTransport = tmp2;
export { makeNativeTransport };
export const makeNativeTransportFactory = function makeNativeTransportFactory(enableNative) {
  let tmp = null;
  if (enableNative.enableNative) {
    const NATIVE = NativeTransport(1001).NATIVE;
    tmp = null;
    if (NATIVE.isNativeAvailable()) {
      tmp = makeNativeTransport;
    }
  }
  return tmp;
};
