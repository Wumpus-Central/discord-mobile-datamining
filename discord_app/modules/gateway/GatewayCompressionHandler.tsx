// discord_app/modules/gateway/GatewayCompressionHandler.tsx
import { NativeModules } from "get ActivityIndicator";
import { 12826__ } from "../../../_runtime/metro/12826__.js";
import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx";
import { set } from "../../utils/PlatformUtils.tsx";
import { get } from "../../utils/ProcessArgs.tsx";
import { timestamp } from "../debug/Logger.tsx";
import { supportsZstd } from "GatewayZstdUtils.native.tsx";

const items = [];
class BaseGatewayCompressionHandler {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj._onDataReady = null;
    obj._gatewayEncoding = global;
    return obj;
  }
}
const prototype = BaseGatewayCompressionHandler.prototype;
BaseGatewayCompressionHandler["canUse"] = function canUse() {
  return false;
};
prototype["bindWebSocket"] = function bindWebSocket() {

};
prototype["feed"] = function feed() {

};
prototype["dataReady"] = function dataReady(_onDataReady) {
  this._onDataReady = _onDataReady;
};
const fn = (arg0) => {
  tmp = new tmp(arg0, new.target, tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp._decoder = null;
  const _gatewayEncoding = tmp._gatewayEncoding;
  if (_gatewayEncoding.wantsString()) {
    const _TextDecoder = TextDecoder;
    const textDecoder = new TextDecoder("utf-8");
    tmp._decoder = textDecoder;
  } else {
    tmp._decoder = null;
  }
  tmp._stream = supportsZstd /* supportsZstd */.createZstdContextWeb();
  return tmp;
};
const prototype2 = fn.prototype;
class fn extends BaseGatewayCompressionHandler {
}
fn["canUse"] = function canUse() {
  return false;
};
prototype2["getAlgorithm"] = function getAlgorithm() {
  return "zstd-stream";
};
prototype2["usesLegacyCompression"] = function usesLegacyCompression() {
  return false;
};
prototype2["feed"] = function feed(dataView) {
  const self = this;
  if (null == this._stream) {
    const _Error2 = Error;
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
      const error1 = new Error("Expected array buffer, but got " + typeof dataView);
      throw error1;
    }
  }
};
prototype2["close"] = function close() {

};
items.push(fn);
const fn2 = (arg0) => {
  let _inflate;
  let handleFlushEnd;
  tmp = new tmp(arg0, new.target, tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp._pako = 12826__;
  tmp._usesZstd = false;
  tmp._zstdDecoder = null;
  tmp._zstdStream = null;
  const _gatewayEncoding = tmp._gatewayEncoding;
  let str = "";
  if (_gatewayEncoding.wantsString()) {
    str = "string";
  }
  const inflate = new tmp._pako.Inflate({ chunkSize: 65536, to: str });
  tmp._inflate = inflate;
  ({ handleFlushEnd, _inflate } = tmp);
  _inflate.onEnd = handleFlushEnd.bind(tmp);
  return tmp;
};
const prototype3 = fn2.prototype;
class fn2 extends BaseGatewayCompressionHandler {
}
fn2["canUse"] = function canUse() {
  return false;
};
prototype3["getAlgorithm"] = function getAlgorithm() {
  return "zlib-stream";
};
prototype3["usesLegacyCompression"] = function usesLegacyCompression() {
  return false;
};
prototype3["feed"] = function feed(buffer) {
  const self = this;
  if (null == this._inflate) {
    const _Error3 = Error;
    const error = new Error("Trying to feed to closed compression adapter");
    throw error;
  } else if (null === self._onDataReady) {
    const _Error2 = Error;
    const error1 = new Error("Cannot feed unless a data ready callback is registered.");
    throw error1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (buffer instanceof ArrayBuffer) {
      const _DataView = DataView;
      const dataView = new DataView(buffer);
      let tmp9 = dataView.byteLength >= 4;
      if (tmp9) {
        tmp9 = 65535 === dataView.getUint32(dataView.byteLength - 4, false);
      }
      const _inflate = self._inflate;
      let Z_SYNC_FLUSH = tmp9;
      if (Z_SYNC_FLUSH) {
        Z_SYNC_FLUSH = self._pako.Z_SYNC_FLUSH;
      }
      _inflate.push(buffer, Z_SYNC_FLUSH);
    } else {
      const _Error = Error;
      const error2 = new Error("Expected array buffer, but got " + typeof buffer);
      throw error2;
    }
  }
};
prototype3["close"] = function close() {
  const self = this;
  if (null != this._inflate) {
    self._inflate.onEnd = null;
    self._inflate.chunks = [];
  }
  self._inflate = null;
};
prototype3["handleFlushEnd"] = function handleFlushEnd(arg0) {
  const self = this;
  const _inflate = this._inflate;
  if (null != _inflate) {
    if (arg0 !== tmp.Z_OK) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("zlib error, " + arg0 + ", " + _inflate.strm.msg);
      throw error;
    } else {
      const chunks = _inflate.chunks;
      const _gatewayEncoding = self._gatewayEncoding;
      if (_gatewayEncoding.wantsString()) {
        if (length > 1) {
          let joined = chunks.join("");
        } else {
          joined = chunks[0];
        }
      } else {
        if (length > 1) {
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (0 < length) {
            do {
              num3 = num3 + chunks[num2].length;
              num2 = num2 + 1;
              num4 = num3;
            } while (num2 < length);
          }
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(num4);
          let num5 = 0;
          let num6 = 0;
          let first = uint8Array;
          if (0 < length) {
            do {
              let arr = chunks[num5];
              let result = uint8Array.set(arr, num6);
              num6 = num6 + arr.length;
              num5 = num5 + 1;
              first = uint8Array;
            } while (num5 < length);
          }
        } else {
          first = chunks[0];
        }
        chunks.length = 0;
        if (null != self._onDataReady) {
          self._onDataReady(first);
        }
      }
    }
  } else {
    const obj = new timestamp("GatewayCompressionHandler");
    obj.error("flush end happened on closed compression adapter");
  }
};
items.push(fn2);
const fn3 = () => {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult._pako = 12826__;
  return applyArgumentsResult;
};
const prototype4 = fn3.prototype;
class fn3 extends BaseGatewayCompressionHandler {
}
fn3["canUse"] = function canUse() {
  return false;
};
prototype4["getAlgorithm"] = function getAlgorithm() {
  return null;
};
prototype4["usesLegacyCompression"] = function usesLegacyCompression() {
  return true;
};
prototype4["feed"] = function feed(arg0) {
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
    const error = new Error("Cannot feed unless a data ready callback is registered.");
    throw error;
  } else {
    self._onDataReady(inflateResult);
  }
};
prototype4["close"] = function close() {

};
items.push(fn3);
const fn4 = (arg0) => {
  tmp = new tmp(arg0, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp._socketId = null;
  return tmp;
};
const prototype5 = fn4.prototype;
class fn4 extends BaseGatewayCompressionHandler {
}
fn4["canUse"] = function canUse() {
  if (obj.isAndroid()) {
    let tmp5 = null != enforcing /* enforcing */.default;
  } else {
    tmp5 = null != NativeModules.DCDCompressionManager;
  }
  return tmp5;
};
prototype5["bindWebSocket"] = function bindWebSocket(_socketId) {
  const self = this;
  this.close();
  this._socketId = _socketId._socketId;
  const obj = supportsZstd /* supportsZstd */;
  const supportsZstdResult = supportsZstd /* supportsZstd */.supportsZstd();
  const isAndroidResult = set /* set */.isAndroid();
  if (supportsZstdResult) {
    if (isAndroidResult) {
      const _default2 = tmp2(12825).default;
      if (_default2 != null) {
        const result = _default2.enableZstdStreamSupport(self._socketId);
      }
    } else {
      const DCDCompressionManager2 = NativeModules.DCDCompressionManager;
      const result1 = DCDCompressionManager2.enableZstdStreamSupport(self._socketId, 0);
    }
  } else if (isAndroidResult) {
    const _default = tmp2(12825).default;
    if (_default != null) {
      const result2 = _default.enableZlibStreamSupport(self._socketId);
    }
  } else {
    const DCDCompressionManager = NativeModules.DCDCompressionManager;
    const result3 = DCDCompressionManager.enableZlibStreamSupport(self._socketId);
  }
};
prototype5["getAlgorithm"] = function getAlgorithm() {
  let str = "zlib-stream";
  if (obj.supportsZstd()) {
    str = "zstd-stream";
  }
  return str;
};
prototype5["usesLegacyCompression"] = function usesLegacyCompression() {
  return false;
};
prototype5["feed"] = function feed(arg0) {
  const self = this;
  if (null == this._onDataReady) {
    const _Error = Error;
    const error = new Error("Cannot feed unless a data ready callback is registered.");
    throw error;
  } else if (null !== arg0) {
    self._onDataReady(arg0);
  }
};
prototype5["close"] = function close() {
  const _socketId = this._socketId;
  this._socketId = null;
  if (null !== _socketId) {
    if (obj.isAndroid()) {
      const _default = tmp(12825).default;
      if (_default != null) {
        const result = _default.disableZlibStreamSupport(_socketId);
      }
    } else {
      const DCDCompressionManager = NativeModules.DCDCompressionManager;
      const result1 = DCDCompressionManager.disableZlibStreamSupport(_socketId);
    }
    obj = set /* set */;
    tmp = require;
  }
};
items.push(fn4);
class NullGatewayCompressionHandler extends BaseGatewayCompressionHandler {
}
const prototype6 = NullGatewayCompressionHandler.prototype;
NullGatewayCompressionHandler["canUse"] = function canUse() {
  return true;
};
prototype6["getAlgorithm"] = function getAlgorithm() {
  return null;
};
prototype6["usesLegacyCompression"] = function usesLegacyCompression() {
  return false;
};
prototype6["feed"] = function feed(arg0) {
  const self = this;
  if (null == this._onDataReady) {
    const _Error = Error;
    const error = new Error("Cannot feed unless a data ready callback is registered.");
    throw error;
  } else {
    self._onDataReady(arg0);
  }
};
prototype6["close"] = function close() {

};
items.push(NullGatewayCompressionHandler);
let result = require("module_12826").fileFinishedImporting("modules/gateway/GatewayCompressionHandler.tsx");

export const getCompressionHandler = function getCompressionHandler(closure_10) {
  const ProcessArgs = get /* get */.ProcessArgs;
  if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
    return new NullGatewayCompressionHandler(closure_10);
  } else {
    for (const item10014 of items) {
      let tmp3 = item10014;
      if (item10014.canUse()) {
        let tmp4 = new.target;
        let tmp5 = new.target;
        let tmp6 = arg0;
        let item10014 = new item10014(arg0);
        let tmp8 = item10014;
        let tmp9 = obj;
        obj.return();
        return item10014;
      }
    }
    return new NullGatewayCompressionHandler(closure_10);
  }
};