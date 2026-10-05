// _runtime/01057_DEFAULT_BUFFER_SIZE.js
import _createClassDefault from "metro/00042__createClass.js";
import _mod693 from "metro/00693__.js";
import _mod877 from "metro/00877__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

function makeNativeTransport() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const tmp = new closure_3(obj);
  return tmp;
}
class NativeTransport {
  constructor() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    _classCallCheck(this, NativeTransport);
    let num = obj.bufferSize;
    const makePromiseBuffer = _mod693.makePromiseBuffer;
    if (!num) {
      num = 30;
    }
    this._buffer = makePromiseBuffer(num);
  }
}
const entry = {
  key: "send",
  value: function send(arg0) {
    let closure_0 = arg0;
    const _buffer = this._buffer;
    const addResult = _buffer.add(() => {
      const NATIVE = _mod877.NATIVE;
      return NATIVE.sendEnvelope(closure_0);
    });
    return addResult.then(() => ({}));
  },
};
const items = [
  entry,
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
const NativeTransport_export = tmp2;

export const DEFAULT_BUFFER_SIZE = 30;
export { NativeTransport_export as NativeTransport };
export { makeNativeTransport };
export const makeNativeTransportFactory = function makeNativeTransportFactory(enableNative) {
  let tmp = null;
  if (enableNative.enableNative) {
    const NATIVE = _mod877.NATIVE;
    tmp = null;
    if (NATIVE.isNativeAvailable()) {
      tmp = makeNativeTransport;
    }
  }
  return tmp;
};
