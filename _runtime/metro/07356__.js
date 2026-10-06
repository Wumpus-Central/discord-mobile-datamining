// _runtime/metro/07356__.js
import _modDef7357 from "07357__.js";

const f94860 = (item) => String.fromCharCode(item);

export const getDataView = function getDataView(buffer, sum3, longAt) {
  try {
    const _DataView = DataView;
    const self = this;
    const self2 = this;
    const dataView = new DataView(buffer, sum3, longAt);
    return dataView;
  } catch (err) {
    const self3 = this;
    const self4 = this;
    const tmp12 = new _modDef7357(buffer, sum3, longAt);
    return tmp12;
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
  const mapped = items.map(f94860);
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
  const mapped = items.map(f94860);
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
  const mapped = items.map(f94860);
  return mapped.join("");
};
export const getPascalStringFromDataView = function getPascalStringFromDataView(getUint8, sum1) {
  const uint8 = getUint8.getUint8(sum1);
  const items = [uint8];
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
  const mapped = items1.map(f94860);
  items[1] = mapped.join("");
  return items;
};
export const getStringValueFromArray = function getStringValueFromArray(value) {
  const mapped = value.map(f94860);
  return mapped.join("");
};
export const getCharacterArray = function getCharacterArray(str) {
  const parts = str.split("");
  return parts.map((item) => item.charCodeAt(0));
};
export const objectAssign = function objectAssign() {
  let num;
  for (let num = 1; num < arguments.length; num = num + 1) {
    for (const key10010 in arguments[num]) {
      arguments[0][key10010] = arguments[num][key10010];
      continue;
    }
  }
  return arguments[0];
};
export const deferInit = function deferInit(items, base64, arg2) {
  let closure_1 = base64;
  let closure_2 = arg2;
  let c3 = false;
  let obj = {
    get() {
      const tmp = c3;
      if (!tmp) {
        c3 = true;
        const _Object = Object;
        const obj = { configurable: true, enumerable: true, value: closure_2.apply(items), writable: true };
        defineProperty(items, base64, obj);
      }
      return items[base64];
    },
    configurable: true,
    enumerable: true,
  };
  Object.defineProperty(items, base64, obj);
};
export const getBase64Image = function getBase64Image(image) {
  let tmp4;
  if (typeof btoa !== "undefined") {
    let btoaResult;
    if (typeof image === "string") {
      const _btoa = btoa;
      btoaResult = btoa(image);
    } else {
      const _Array = Array;
      const _Uint8Array = Uint8Array;
      const self3 = this;
      const self4 = this;
      const _btoa2 = btoa;
      const call = reduce.call;
      const uint8Array = new Uint8Array(image);
      btoaResult = _btoa2(call(uint8Array, (arg0, arg1) => arg0 + String.fromCharCode(arg1), ""));
    }
    tmp4 = btoaResult;
  } else {
    const _Buffer3 = Buffer;
    if (typeof Buffer !== "undefined") {
      let str1;
      const _Buffer4 = Buffer;
      if (undefined !== Buffer.from) {
        const _Buffer2 = Buffer;
        const str3 = Buffer.from(image);
        str1 = str3.toString("base64");
      } else {
        const _Buffer = Buffer;
        const self = this;
        const self2 = this;
        const str = new Buffer(image);
        str1 = str.toString("base64");
      }
      tmp4 = str1;
    }
  }
  return tmp4;
};
export const dataUriToBuffer = function dataUriToBuffer(result) {
  const substr = result.substring(result.indexOf(",") + 1);
  if (-1 !== result.indexOf(";base64")) {
    const _atob = atob;
    if (typeof atob !== "undefined") {
      const _Uint8Array = Uint8Array;
      const _atob2 = atob;
      return Uint8Array.from(atob(substr), (str) => str.charCodeAt(0)).buffer;
    } else {
      const _Buffer7 = Buffer;
      if (typeof Buffer !== "undefined") {
        let fromResult;
        const _Buffer8 = Buffer;
        if (undefined !== Buffer.from) {
          const _Buffer5 = Buffer;
          fromResult = Buffer.from(substr, "base64");
        } else {
          const _Buffer4 = Buffer;
          const self3 = this;
          const str = "base64";
          const self4 = this;
          fromResult = new Buffer(substr, "base64");
        }
        return fromResult;
      }
    }
  } else {
    let buffer;
    const _decodeURIComponent = decodeURIComponent;
    const decodeURIComponentResult = decodeURIComponent(substr);
    const _Buffer6 = Buffer;
    if (typeof Buffer !== "undefined") {
      let fromResult1;
      const _Buffer = Buffer;
      if (undefined !== Buffer.from) {
        const _Buffer3 = Buffer;
        fromResult1 = Buffer.from(decodeURIComponentResult);
      } else {
        const _Buffer2 = Buffer;
        const self = this;
        const self2 = this;
        fromResult1 = new Buffer(decodeURIComponentResult);
      }
      buffer = fromResult1;
    } else {
      const _Uint8Array2 = Uint8Array;
      buffer = Uint8Array.from(decodeURIComponentResult, (str) => str.charCodeAt(0)).buffer;
    }
    return buffer;
  }
};
export const padStart = function padStart(arg0, arg1, _0) {
  const array = new Array(arg1 - arg0.length + 1);
  return array.join(_0) + arg0;
};
export const parseFloatRadix = function parseFloatRadix(str, sum) {
  const parsed = parseInt(str.replace(".", ""), sum);
  const _Math = Math;
  const arr = str.split(".")[1] || "";
  return parsed / pow(sum, arr.length);
};
export const strRepeat = function strRepeat(_1, arg1) {
  const array = new Array(arg1 + 1);
  return array.join(_1);
};
export const COMPRESSION_METHOD_DEFLATE = 0;
export const decompress = function decompress(dataView, compressionMethod, arg2) {
  let closure_0 = arg2;
  let str = dataview;
  if (dataview === undefined) {
    str = "string";
  }
  if (0 === compressionMethod) {
    if (typeof globalThis.DecompressionStream === "function") {
      let nextPromise;
      const DecompressionStream2 = globalThis.DecompressionStream;
      const self = this;
      const self2 = this;
      const decompressionStream = new globalThis.DecompressionStream("deflate");
      const _Blob = Blob;
      const items = [dataView];
      const self3 = this;
      const self4 = this;
      const blob = new Blob(items);
      const streamResult = blob.stream();
      const pipeThroughResult = streamResult.pipeThrough(decompressionStream);
      if ("dataview" === str) {
        const _Response2 = Response;
        const self7 = this;
        const self8 = this;
        const response = new Response(pipeThroughResult);
        const arrayBufferResult = response.arrayBuffer();
        nextPromise = arrayBufferResult.then((result) => {
          const dataView = new DataView(result);
          return dataView;
        });
      } else {
        const _Response = Response;
        const self5 = this;
        const self6 = this;
        const response1 = new Response(pipeThroughResult);
        const arrayBufferResult2 = response1.arrayBuffer();
        nextPromise = arrayBufferResult2.then((result) => {
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
