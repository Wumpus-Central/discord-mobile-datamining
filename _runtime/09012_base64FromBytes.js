// === Module 9012: base64FromBytes ===

// Module 9012 (base64FromBytes)
import _mod17 from "module_17" /* 17 */;
import BlobManager from "BlobManager" /* 200 */;
import _mod9011 from "module_9011" /* 9011 */;
import NitroFetchBlob2 from "NitroFetchBlob" /* 9013 */;

require = arg1;
const dependencyMap = arg6;
function base64FromBytes(uint8Array) {
  let str = "";
  let num = 0;
  let str2 = "";
  if (0 < uint8Array.length) {
    do {
      let num2 = uint8Array[num];
      if (num2 == null) {
        num2 = 0;
      }
      let sum = num + 1;
      let tmp4 = sum < uint8Array.length;
      let sum1 = num + 2;
      let tmp6 = sum1 < uint8Array.length;
      let num3 = 0;
      if (tmp4) {
        let num4 = uint8Array[sum];
        if (num4 == null) {
          num4 = 0;
        }
        num3 = num4;
      }
      let num5 = 0;
      if (tmp6) {
        let num6 = uint8Array[sum1];
        if (num6 == null) {
          num6 = 0;
        }
        num5 = num6;
      }
      let str3 = "=";
      let sum2 = str + dependencyMap[num2 >> 2] + dependencyMap[(3 & num2) << 4 | num3 >> 4];
      if (tmp4) {
        str3 = dependencyMap[(15 & num3) << 2 | num5 >> 6];
      }
      let str4 = "=";
      let sum3 = sum2 + str3;
      if (tmp6) {
        str4 = dependencyMap[63 & num5];
      }
      str = sum3 + str4;
      num = num + 3;
      str2 = str;
    } while (num < uint8Array.length);
  }
  return str2;
}
let c4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export { base64FromBytes };
export function bytesToBlob(_bodyBytes, blob) {
  if (0 === _bodyBytes.byteLength) {
    const _Blob2 = Blob;
    const obj3 = { type: blob };
    blob = new Blob([], obj3);
    return blob;
  } else {
    try {
      const tmp = (function blobManager() {
        if (undefined !== c2) {
          return c2;
        } else {
          try {
            const tmp3 = BlobManager;
            let _default;
            if (tmp3 != null) {
              _default = tmp3.default;
            }
            if (_default == null) {
              _default = tmp3;
            }
            if (_default == null) {
              _default = null;
            }
            c2 = _default;
            let tmp10 = c2;
            if (c2 == null) {
              tmp10 = null;
            }
            return tmp10;
          } catch (err) {
            c2 = null;
          }
        }
      })();
      const obj2 = (function nitroFetchBlob() {
        if (undefined !== c3) {
          return c3;
        } else {
          try {
            const NativeModules = _mod17.NativeModules;
            let NitroFetchBlob;
            if (NativeModules != null) {
              NitroFetchBlob = NativeModules.NitroFetchBlob;
            }
            if (NitroFetchBlob == null) {
              NitroFetchBlob = NitroFetchBlob2.default;
            }
            if (NitroFetchBlob == null) {
              NitroFetchBlob = null;
            }
            c3 = NitroFetchBlob;
            let tmp8 = c3;
            if (c3 == null) {
              tmp8 = null;
            }
            return tmp8;
          } catch (err) {
            c3 = null;
          }
        }
      })();
      let createFromOptions;
      if (tmp != null) {
        createFromOptions = tmp.createFromOptions;
      }
      if (typeof createFromOptions === "function") {
        let createBlobId;
        if (obj2 != null) {
          createBlobId = obj2.createBlobId;
        }
        if (typeof createBlobId === "function") {
          const _Uint8Array2 = Uint8Array;
          const uint8Array = new Uint8Array(_bodyBytes);
          const blobId = obj2.createBlobId(base64FromBytes(uint8Array));
          if (blobId) {
            const obj5 = { blobId, offset: 0, size: _bodyBytes.byteLength, type: blob };
            return tmp.createFromOptions(obj5);
          }
        }
      }
      const _Blob = Blob;
      const _Uint8Array = Uint8Array;
      const uint8Array1 = new Uint8Array(_bodyBytes);
      items = [_mod9011.utf8ToString(uint8Array1)];
      const obj6 = { type: blob };
      const blob1 = new Blob(items, obj6);
      return blob1;
    } catch (err) {
    }
  }
}