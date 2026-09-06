// === Module 1046: ? ===

// Module 1046
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

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
    tmp = c2(this, NativeTransport);
    obj2 = closure_0(closure_1[2]);
    num = obj.bufferSize;
    if (!num) {
      num = 30;
    }
    this._buffer = obj2.makePromiseBuffer(num);
    return;
  }
}
const entry = {
  key: "send",
  value: function send(arg0) {
    closure_0 = arg0;
    const _buffer = this._buffer;
    return _buffer.add(() => {
      const NATIVE = NativeTransport(866).NATIVE;
      return NATIVE.sendEnvelope(closure_0);
    }).then(() => ({}));
  }
};
const items = [
  entry,
  {
    key: "flush",
    value: function flush(arg0) {
      const _buffer = this._buffer;
      return _buffer.drain(arg0);
    }
  }
];
const tmp2 = _createClassDefault(NativeTransport, items);
let closure_3 = tmp2;

export const DEFAULT_BUFFER_SIZE = 30;
export const NativeTransport = tmp2;
export { makeNativeTransport };
export const makeNativeTransportFactory = function makeNativeTransportFactory(enableNative) {
  let tmp = null;
  if (enableNative.enableNative) {
    const NATIVE = NativeTransport(866).NATIVE;
    tmp = null;
    if (NATIVE.isNativeAvailable()) {
      tmp = makeNativeTransport;
    }
  }
  return tmp;
};