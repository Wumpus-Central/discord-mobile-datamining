// === Module 5213: ? ===

// Module 5213
import DataViewDefault from "DataView" /* 5214 */;

importDefault = arg2;
const dependencyMap = arg6;

export const getDataView = function getDataView(buffer, byteOffset, byteLength) {
  try {
    const _DataView = DataView;
    const dataView = new DataView(buffer, byteOffset, byteLength);
    return dataView;
  } catch (err) {
    const tmp19 = new DataViewDefault(tmp3, tmp2, tmp);
    return tmp19;
  }
};
export const getStringFromDataView = function getStringFromDataView(dataView, sum, length) {
  const items = [];
  if (0 < length) {
    let num2 = 0;
    if (sum < dataView.byteLength) {
      items.push(dataView.getUint8(sum + num2));
      sum = num2 + 1;
      while (sum < length) {
        num2 = sum;
        if (sum + sum >= dataView.byteLength) {
          break;
        }
      }
    }
  }
  const mapped = items.map((item) => String.fromCharCode(item));
  return mapped.join("");
};
export const getNullTerminatedStringFromDataView = function getNullTerminatedStringFromDataView(byteLength, sum13) {
  const items = [];
  let num = 0;
  if (sum13 < byteLength.byteLength) {
    const uint8 = byteLength.getUint8(sum13 + num);
    while (0 !== uint8) {
      let arr = items.push(uint8);
      let sum = num + 1;
      num = sum;
      if (sum13 + sum >= byteLength.byteLength) {
        break;
      }
    }
  }
  const mapped = items.map((item) => String.fromCharCode(item));
  return mapped.join("");
};
export const getUnicodeStringFromDataView = function getUnicodeStringFromDataView(byteLength, arg1, uint325) {
  const items = [];
  if (0 < uint325) {
    let num2 = 0;
    if (arg1 < byteLength.byteLength) {
      items.push(byteLength.getUint16(arg1 + num2));
      const sum = num2 + 2;
      while (sum < uint325) {
        num2 = sum;
        if (arg1 + sum >= byteLength.byteLength) {
          break;
        }
      }
    }
  }
  if (0 === items[items.length - 1]) {
    items.pop();
  }
  const mapped = items.map((item) => String.fromCharCode(item));
  return mapped.join("");
};
export const getPascalStringFromDataView = function getPascalStringFromDataView(getUint8, sum1) {
  const uint8 = getUint8.getUint8(sum1);
  const items = [uint8, ];
  const sum = sum1 + 1;
  const items1 = [];
  if (0 < uint8) {
    let num = 0;
    if (sum < getUint8.byteLength) {
      items1.push(getUint8.getUint8(sum + num));
      sum1 = num + 1;
      while (sum1 < uint8) {
        num = sum1;
        if (sum + sum1 >= getUint8.byteLength) {
          break;
        }
      }
    }
  }
  const mapped = items1.map((item) => String.fromCharCode(item));
  items[1] = mapped.join("");
  return items;
};
export const getStringValueFromArray = function getStringValueFromArray(value) {
  const mapped = value.map((item) => String.fromCharCode(item));
  return mapped.join("");
};
export const getCharacterArray = function getCharacterArray(str) {
  const parts = str.split("");
  return parts.map((item) => item.charCodeAt(0));
};
export const objectAssign = function objectAssign() {
  for (let num = 1; num < arguments.length; num = num + 1) {
    for (const key10010 in arguments[num]) {
      arguments[0][key10010] = arguments[num][key10010];
      continue;
    }
  }
  return arguments[0];
};
export const deferInit = function deferInit(items, base64, arg2) {
  closure_1 = base64;
  closure_2 = arg2;
  c3 = false;
  Object.defineProperty(items, base64, {
    get() {
      if (!c3) {
        c3 = true;
        const _Object = Object;
        const obj = { configurable: true, enumerable: true, value: closure_2.apply(items), writable: true };
        Object.defineProperty(items, closure_1, obj);
      }
      return items[closure_1];
    },
    configurable: true,
    enumerable: true
  });
};
export const getBase64Image = function getBase64Image(image) {
  let _btoa = globalThis;
  if (typeof btoa !== "undefined") {
    if (typeof image === "string") {
      _btoa = _btoa.btoa;
      let _btoaResult = _btoa(image);
    } else {
      const _Array = Array;
      const call = reduce.call;
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(image);
      const fn = (arg0, arg1) => arg0 + String.fromCharCode(arg1);
      if (typeof call === "unknown") {
        let reduced = reduce(fn, "");
      } else {
        reduced = call(uint8Array, fn, "");
      }
      _btoaResult = btoa(reduced);
    }
  } else {
    const _Buffer3 = Buffer;
    if (typeof Buffer !== "undefined") {
      const _Buffer4 = Buffer;
      if (undefined !== Buffer.from) {
        const _Buffer2 = Buffer;
        let str = Buffer.from(image).toString("base64");
        const str3 = Buffer.from(image);
      } else {
        const _Buffer = Buffer;
        str = new Buffer(image);
        str = str.toString("base64");
      }
    }
  }
};
export const dataUriToBuffer = function dataUriToBuffer(response) {
  const substr = response.substring(response.indexOf(",") + 1);
  if (-1 !== response.indexOf(";base64")) {
    const _atob = atob;
    if (typeof atob !== "undefined") {
      const _Uint8Array = Uint8Array;
      const _atob2 = atob;
      return Uint8Array.from(atob(substr), (str) => str.charCodeAt(0)).buffer;
    } else {
      const _Buffer7 = Buffer;
      if (typeof Buffer !== "undefined") {
        const _Buffer8 = Buffer;
        if (undefined !== Buffer.from) {
          const _Buffer5 = Buffer;
          let fromResult = Buffer.from(substr, "base64");
        } else {
          const _Buffer4 = Buffer;
          fromResult = new Buffer(substr, "base64");
        }
        return fromResult;
      }
    }
  } else {
    let from = globalThis;
    const _decodeURIComponent = decodeURIComponent;
    const decodeURIComponentResult = decodeURIComponent(substr);
    const _Buffer6 = Buffer;
    if (typeof Buffer !== "undefined") {
      const _Buffer = Buffer;
      if (undefined !== Buffer.from) {
        const _Buffer3 = from.Buffer;
        from = _Buffer3.from;
        let fromResult1 = from(decodeURIComponentResult);
      } else {
        const _Buffer2 = Buffer;
        fromResult1 = new Buffer(decodeURIComponentResult);
      }
    } else {
      const _Uint8Array2 = Uint8Array;
      return Uint8Array.from(decodeURIComponentResult, (str) => str.charCodeAt(0)).buffer;
    }
  }
};
export const padStart = function padStart(arg0, arg1, arg2) {
  const array = new Array(arg1 - arg0.length + 1);
  return array.join(arg2) + arg0;
};
export const parseFloatRadix = function parseFloatRadix(str, sum) {
  const parsed = parseInt(str.replace(".", ""), sum);
  return parsed / Math.pow(sum, str.split(".")[1] || "".length);
};
export const strRepeat = function strRepeat(_1, arg1) {
  const array = new Array(arg1 + 1);
  return array.join(_1);
};
export const COMPRESSION_METHOD_DEFLATE = 0;
export const decompress = function decompress(dataView, compressionMethod, arg2, dataview) {
  closure_0 = arg2;
  let str = dataview;
  if (dataview === undefined) {
    str = "string";
  }
  if (0 === compressionMethod) {
    if (typeof globalThis.DecompressionStream === "function") {
      const decompressionStream = new globalThis.DecompressionStream("deflate");
      const _Blob = Blob;
      const items = [dataView];
      const blob = new Blob(items);
      const pipeThroughResult = blob.stream().pipeThrough(decompressionStream);
      if ("dataview" === str) {
        const _Response2 = Response;
        const response = new Response(pipeThroughResult);
        let arrayBufferResult = response.arrayBuffer();
        let nextPromise = arrayBufferResult.then((result) => {
          const dataView = new DataView(result);
          return dataView;
        });
      } else {
        const _Response = Response;
        const response1 = new Response(pipeThroughResult);
        arrayBufferResult = response1.arrayBuffer();
        nextPromise = arrayBufferResult.then((result) => {
          const decoder = new TextDecoder(closure_0);
          return decoder.decode(result);
        });
      }
      return nextPromise;
    }
  }
  let rejectResult = dataView;
  if (undefined !== compressionMethod) {
    const _HermesInternal = HermesInternal;
    rejectResult = Promise.reject("Unknown compression method " + compressionMethod + ".");
  }
  return rejectResult;
};