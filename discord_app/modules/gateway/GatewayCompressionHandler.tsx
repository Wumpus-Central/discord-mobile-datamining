// === Module 13458: GatewayCompressionHandler ===

// Module 13458 (GatewayCompressionHandler)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ProcessArgs2 from "ProcessArgs" /* 6714 */;
import GatewayZstdUtils from "GatewayZstdUtils" /* 13459 */;
import react_native2 from "react-native" /* 13460 */;
import _mod13461 from "module_13461" /* 13461 */;
import size from "module_2" /* 2 */;

let obj;

const NativeModules = react_native.NativeModules;
const items = [];
class BaseGatewayCompressionHandler {
  constructor(_gatewayEncoding) {
    obj = Object.create(new.target.prototype);
    obj._onDataReady = null;
    obj._gatewayEncoding = _gatewayEncoding;
    return obj;
  }
  static canUse() {
    return false;
  }
  bindWebSocket() {

  }
  feed() {

  }
  dataReady(_onDataReady) {
    this._onDataReady = _onDataReady;
  }
}
const prototype = BaseGatewayCompressionHandler.prototype;
class tmp2 extends BaseGatewayCompressionHandler {
  constructor(arg0) {
    const tmp2 = new tmp(arg0, new.target, tmp, this);
    tmp2._decoder = null;
    const _gatewayEncoding = tmp2._gatewayEncoding;
    if (_gatewayEncoding.wantsString()) {
      const _TextDecoder = TextDecoder;
      const self = this;
      const self2 = this;
      const textDecoder = new TextDecoder("utf-8");
      tmp2._decoder = textDecoder;
    } else {
      tmp2._decoder = null;
    }
    obj = GatewayZstdUtils;
    tmp2._stream = obj.createZstdContextWeb();
    return tmp2;
  }
  static canUse() {
    return false;
  }
  getAlgorithm() {
    return "zstd-stream";
  }
  usesLegacyCompression() {
    return false;
  }
  feed(dataView) {
    const self = this;
    if (null == this._stream) {
      const _Error2 = Error;
      const self4 = this;
      const self5 = this;
      const error = new Error("Trying to decompress with zstd but did not initialize with it");
      throw error;
    } else {
      const _ArrayBuffer = ArrayBuffer;
      if (dataView instanceof ArrayBuffer) {
        const _stream = self._stream;
        const decompressResult = _stream.decompress(dataView);
        let decodeResult = decompressResult;
        if (null != self._decoder) {
          const _decoder = self._decoder;
          decodeResult = _decoder.decode(decompressResult);
        }
        if (null != self._onDataReady) {
          self._onDataReady(decodeResult);
        }
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        error1 = new Error("Expected array buffer, but got " + typeof dataView);
        throw error1;
      }
    }
  }
  close() {

  }
}
const prototype2 = tmp2.prototype;
let error1 = tmp2;
let arr = items.push(tmp2);
class tmp4 extends BaseGatewayCompressionHandler {
  constructor(arg0) {
    let _inflate;
    let handleFlushEnd;
    const tmp2 = new tmp(arg0, new.target, tmp, this);
    tmp2._pako = _mod13461;
    tmp2._usesZstd = false;
    tmp2._zstdDecoder = null;
    tmp2._zstdStream = null;
    const _gatewayEncoding = tmp2._gatewayEncoding;
    const Inflate = tmp2._pako.Inflate;
    let str = "";
    if (_gatewayEncoding.wantsString()) {
      str = "string";
    }
    obj = { chunkSize: 65536, to: str };
    const inflate = new Inflate(obj);
    tmp2._inflate = inflate;
    ({ handleFlushEnd, _inflate } = tmp2);
    _inflate.onEnd = handleFlushEnd.bind(tmp2);
    return tmp2;
  }
  static canUse() {
    return false;
  }
  getAlgorithm() {
    return "zlib-stream";
  }
  usesLegacyCompression() {
    return false;
  }
  feed(arg0) {
    const self = this;
    if (null == this._inflate) {
      const _Error3 = Error;
      const self8 = this;
      const self9 = this;
      const error = new Error("Trying to feed to closed compression adapter");
      throw error;
    } else if (null === self._onDataReady) {
      const _Error2 = Error;
      const self6 = this;
      const self7 = this;
      error1 = new Error("Cannot feed unless a data ready callback is registered.");
      throw error1;
    } else {
      const _ArrayBuffer = ArrayBuffer;
      if (arg0 instanceof ArrayBuffer) {
        const _DataView = DataView;
        const self4 = this;
        const self5 = this;
        const dataView = new DataView(arg0);
        const _inflate = self._inflate;
        let Z_SYNC_FLUSH = dataView.byteLength >= 4 && 65535 === dataView.getUint32(dataView.byteLength - 4, false);
        const push = _inflate.push;
        const tmp5 = dataView.byteLength >= 4 && 65535 === dataView.getUint32(dataView.byteLength - 4, false);
        if (Z_SYNC_FLUSH) {
          Z_SYNC_FLUSH = self._pako.Z_SYNC_FLUSH;
        }
        push(arg0, Z_SYNC_FLUSH);
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error2 = new Error("Expected array buffer, but got " + typeof arg0);
        throw error2;
      }
    }
  }
  close() {
    const self = this;
    if (null != this._inflate) {
      self._inflate.onEnd = null;
      self._inflate.chunks = [];
    }
    self._inflate = null;
  }
  handleFlushEnd(arg0) {
    const self = this;
    const _inflate = this._inflate;
    if (null != _inflate) {
      if (arg0 !== tmp.Z_OK) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self6 = this;
        const self7 = this;
        const error = new Error("zlib error, " + arg0 + ", " + _inflate.strm.msg);
        throw error;
      } else {
        let first;
        const chunks = _inflate.chunks;
        const _gatewayEncoding = self._gatewayEncoding;
        if (_gatewayEncoding.wantsString()) {
          let joined;
          if (chunks.length > 1) {
            joined = chunks.join("");
          } else {
            joined = chunks[0];
          }
          first = joined;
        } else if (chunks.length > 1) {
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (0 < chunks.length) {
            do {
              num3 = num3 + chunks[num2].length;
              num2 = num2 + 1;
              num4 = num3;
            } while (num2 < chunks.length);
          }
          const _Uint8Array = Uint8Array;
          const self4 = this;
          const self5 = this;
          const uint8Array = new Uint8Array(num4);
          let num5 = 0;
          let num6 = 0;
          first = uint8Array;
          if (0 < chunks.length) {
            do {
              let arr = chunks[num5];
              let result = uint8Array.set(arr, num6);
              num6 = num6 + arr.length;
              num5 = num5 + 1;
              first = uint8Array;
            } while (num5 < chunks.length);
          }
        } else {
          first = chunks[0];
        }
        chunks.length = 0;
        if (null != self._onDataReady) {
          self._onDataReady(first);
        }
      }
    } else {
      const self2 = this;
      const self3 = this;
      obj = new LoggerDefault("GatewayCompressionHandler");
      obj.error("flush end happened on closed compression adapter");
    }
  }
}
const prototype3 = tmp4.prototype;
items.push(tmp4);
class tmp6 extends BaseGatewayCompressionHandler {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._pako = _mod13461;
    return applyArgumentsResult;
  }
  static canUse() {
    return false;
  }
  getAlgorithm() {
    return null;
  }
  usesLegacyCompression() {
    return true;
  }
  feed(arg0) {
    const self = this;
    const _pako = this._pako;
    let wantsStringResult = arg0 instanceof ArrayBuffer;
    if (wantsStringResult) {
      const _gatewayEncoding = self._gatewayEncoding;
      wantsStringResult = _gatewayEncoding.wantsString();
    }
    let inflateResult = arg0;
    if (wantsStringResult) {
      inflateResult = _pako.inflate(arg0, { to: "string" });
    }
    if (null == self._onDataReady) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Cannot feed unless a data ready callback is registered.");
      throw error;
    } else {
      self._onDataReady(inflateResult);
    }
  }
  close() {

  }
}
const prototype4 = tmp6.prototype;
items.push(tmp6);
class tmp8 extends BaseGatewayCompressionHandler {
  constructor(arg0) {
    const tmp2 = new tmp(arg0, new.target, tmp);
    tmp2._socketId = null;
    return tmp2;
  }
  static canUse() {
    let tmp5;
    obj = PlatformUtils;
    if (obj.isAndroid()) {
      tmp5 = null != react_native2.default;
    } else {
      tmp5 = null != NativeModules.DCDCompressionManager;
    }
    return tmp5;
  }
  bindWebSocket(_socketId) {
    const self = this;
    this.close();
    this._socketId = _socketId._socketId;
    obj = GatewayZstdUtils;
    const supportsZstdResult = obj.supportsZstd();
    const obj2 = PlatformUtils;
    const isAndroidResult = obj2.isAndroid();
    if (supportsZstdResult) {
      if (isAndroidResult) {
        const _default2 = react_native2.default;
        if (_default2 != null) {
          const result = _default2.enableZstdStreamSupport(self._socketId);
        }
      } else {
        const DCDCompressionManager2 = NativeModules.DCDCompressionManager;
        const result1 = DCDCompressionManager2.enableZstdStreamSupport(self._socketId, 0);
      }
    } else if (isAndroidResult) {
      const _default = react_native2.default;
      if (_default != null) {
        const result2 = _default.enableZlibStreamSupport(self._socketId);
      }
    } else {
      const DCDCompressionManager = NativeModules.DCDCompressionManager;
      const result3 = DCDCompressionManager.enableZlibStreamSupport(self._socketId);
    }
  }
  getAlgorithm() {
    let str = "zlib-stream";
    obj = GatewayZstdUtils;
    if (obj.supportsZstd()) {
      str = "zstd-stream";
    }
    return str;
  }
  usesLegacyCompression() {
    return false;
  }
  feed(arg0) {
    const self = this;
    if (null == this._onDataReady) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Cannot feed unless a data ready callback is registered.");
      throw error;
    } else if (null !== arg0) {
      self._onDataReady(arg0);
    }
  }
  close() {
    const _socketId = this._socketId;
    this._socketId = null;
    if (null !== _socketId) {
      obj = PlatformUtils;
      if (obj.isAndroid()) {
        const _default = react_native2.default;
        if (_default != null) {
          const result = _default.disableZlibStreamSupport(_socketId);
        }
      } else {
        const DCDCompressionManager = NativeModules.DCDCompressionManager;
        const result1 = DCDCompressionManager.disableZlibStreamSupport(_socketId);
      }
    }
  }
}
const prototype5 = tmp8.prototype;
let c9 = tmp8;
items.push(tmp8);
class NullGatewayCompressionHandler extends BaseGatewayCompressionHandler {
  static canUse() {
    return true;
  }
  getAlgorithm() {
    return null;
  }
  usesLegacyCompression() {
    return false;
  }
  feed(arg0) {
    const self = this;
    if (null == this._onDataReady) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Cannot feed unless a data ready callback is registered.");
      throw error;
    } else {
      self._onDataReady(arg0);
    }
  }
  close() {

  }
}
const prototype6 = NullGatewayCompressionHandler.prototype;
items.push(NullGatewayCompressionHandler);
let result = size.fileFinishedImporting("modules/gateway/GatewayCompressionHandler.tsx");

export const getCompressionHandler = function getCompressionHandler(name) {
  const ProcessArgs = ProcessArgs2.ProcessArgs;
  if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
    const self4 = this;
    return new NullGatewayCompressionHandler(name);
  } else {
    for (const item10014 of items) {
      if (item10014.canUse()) {
        let self = this;
        let self2 = this;
        let item100141 = new item10014(name);
        obj.return();
        return item100141;
      }
    }
    const self3 = this;
    return new NullGatewayCompressionHandler(name);
  }
};