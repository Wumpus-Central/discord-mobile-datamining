// _runtime/10003_decodeUtf8.js
import NitroFetchHybrid from "10001_NitroFetchHybrid.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = arg1;
function decodeUtf8(uint8Array1) {
  const decoder = (function resolveTextDecoder() {
    if (undefined !== _TextDecoder1) {
      return _TextDecoder1;
    } else {
      try {
        const tmp2 = require("react-native-nitro-text-decoder");
        if (tmp2) {
          if (typeof tmp3.TextDecoder === "function") {
            const textDecoder = new tmp2.TextDecoder("utf-8", { fatal: true });
            _TextDecoder1 = textDecoder;
            return textDecoder;
          }
        }
        const _globalThis = globalThis;
        const _TextDecoder = TextDecoder;
        _TextDecoder1 = null;
        if (typeof _TextDecoder === "function") {
          _TextDecoder1 = new _TextDecoder("utf-8", { fatal: true });
        }
        return _TextDecoder1;
      } catch (err) {}
    }
  })();
  if (decoder) {
    try {
      return decoder.decode(uint8Array1);
    } catch (err) {
      return null;
    }
  } else {
    if (!c4) {
      c4 = true;
      const _console = console;
      console.warn(
        "[nitro-fetch] Reading a data: URL as text needs a TextDecoder. Install react-native-nitro-text-decoder or expose a global TextDecoder. The body is still available via response.arrayBuffer()/bytes().",
      );
    }
    return null;
  }
}
function decodeDataUrl(url) {
  let length2;
  const index = url.indexOf(",");
  if (index < 0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Failed to fetch: invalid data: URL");
    throw typeError;
  } else {
    const str4 = url.slice(5, index);
    const str5 = url.slice(index + 1);
    const isMatch = /;base64\s*$/i.test(str4);
    let str2 = str4;
    if (isMatch) {
      str2 = str4.replace(/;base64\s*$/i, "");
    }
    if (isMatch) {
      const _globalThis = globalThis;
      const _atob = atob;
      if (typeof _atob === "function") {
        const _atobResult = _atob(str5);
        const _Uint8Array = Uint8Array;
        const uint8Array = new Uint8Array(_atobResult.length);
        let num5 = 0;
        let tmp16 = uint8Array;
        if (0 < _atobResult.length) {
          do {
            uint8Array[num5] = _atobResult.charCodeAt(num5);
            num5 = num5 + 1;
            tmp16 = uint8Array;
            length2 = _atobResult.length;
          } while (num5 < length2);
        }
      } else {
        const replaced = str5.replace(/[^A-Za-z0-9+/]/g, "");
        const _Uint8Array2 = Uint8Array;
        const _Math = Math;
        const uint8Array1 = new Uint8Array(Math.floor((3 * replaced.length) / 4));
        let num = 0;
        let num2 = 0;
        let num4 = 0;
        let num3 = 0;
        tmp16 = uint8Array1;
        if (0 < replaced.length) {
          do {
            let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf;
            let tmp9 =
              (num4 << 6) | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(replaced[num]);
            let sum = num2 + 6;
            let sum1 = num3;
            let tmp14 = sum;
            if (8 <= sum) {
              let diff = sum - 8;
              sum1 = num3 + 1;
              uint8Array1[num3] = (tmp9 >> diff) & 255;
              tmp14 = diff;
            }
            num = num + 1;
            num2 = tmp14;
            num3 = sum1;
            num4 = tmp9;
            tmp16 = uint8Array1;
          } while (num < replaced.length);
        }
      }
      ({ byteLength, buffer } = tmp16);
      const tmp22 = decodeUtf8(tmp16);
      let length = byteLength;
      let tmp7 = buffer;
      if (null != tmp22) {
        length = byteLength;
        tmp7 = buffer;
        let tmp8 = tmp22;
      }
    } else {
      const _decodeURIComponent = decodeURIComponent;
      const decodeURIComponentResult = decodeURIComponent(str5);
      const _TextEncoder = TextEncoder;
      if (typeof TextEncoder !== "undefined") {
        const _TextEncoder2 = TextEncoder;
        const encoder = new TextEncoder();
        length = encoder.encode(decodeURIComponentResult).length;
      } else {
        length = decodeURIComponentResult.length;
      }
      tmp8 = decodeURIComponentResult;
    }
    const response = {
      url,
      status: 200,
      statusText: "OK",
      ok: true,
      redirected: false,
      headers: null,
      bodyString: null,
      bodyBytes: null,
    };
    const entry = { key: "Content-Type", value: str2.trim() || "text/plain;charset=US-ASCII" };
    items = [entry];
    const entry1 = { key: "Content-Length", value: null };
    const _String = String;
    entry1.value = String(length);
    items[1] = entry1;
    response.headers = items;
    response.bodyString = tmp8;
    response.bodyBytes = tmp7;
    return response;
  }
}
let closure_7 = async function _fetchLocalResource(arg0) {
  let url = arg0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          url = url.url;
          if (url.startsWith("data:")) {
            c1 = 3;
            const obj4 = { value: decodeDataUrl(url), done: true };
            return obj4;
          } else if (url.startsWith("blob:")) {
            const _TypeError = TypeError;
            const typeError = new TypeError(
              "nitro-fetch cannot read blob: URLs (the React Native blob registry is not reachable from native). Read blobs with the platform fetch/FileReader instead.",
            );
            throw typeError;
          } else {
            const ensureClientResult = NitroFetchHybrid.ensureClient();
            if (ensureClientResult) {
              if (typeof ensureClientResult.request === "function") {
                c1 = 3;
                const obj5 = { value: ensureClientResult.request(tmp17), done: true };
                return obj5;
              }
            }
            throw NitroFetchHybrid.clientUnavailableError();
          }
          tmp17 = url;
        }
      } catch (tmp12) {
        c1 = tmp;
        throw tmp12;
      }
    }
  })();
};
let c4 = false;

export function fetchLocalResource(arg0) {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
