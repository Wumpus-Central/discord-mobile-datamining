// _runtime/metro/07328__.js
function fetchFromObject(FileTypes, arr) {
  let tmp2;
  const index = arr.indexOf(".");
  if (index > -1) {
    tmp2 = fetchFromObject(FileTypes[arr.slice(arr, 0, index)], arr.slice(index + 1));
  } else {
    tmp2 = FileTypes[arr];
  }
  return tmp2;
}

export const getFileChunk = function getFileChunk(fileChunk) {
  let num = chunkSize;
  if (chunkSize === undefined) {
    num = 32;
  }
  let uint8Array = fileChunk;
  if (fileChunk instanceof ArrayBuffer) {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    let tmp = fileChunk;
    uint8Array = new Uint8Array(fileChunk);
  }
  if (!Array.isArray(fileChunk)) {
    const _ArrayBuffer = ArrayBuffer;
    if (!(fileChunk instanceof ArrayBuffer)) {
      const _Uint8Array2 = Uint8Array;
      if (!(fileChunk instanceof Uint8Array)) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self3 = this;
        const self4 = this;
        const typeError = new TypeError(
          "Expected the `file` argument to be of type `Array<number>`, `Uint8Array`, or `ArrayBuffer`, got `" +
            typeof fileChunk +
            "`",
        );
        throw typeError;
      }
    }
  }
  const arr = Array.from(uint8Array.slice(0, num));
  if (
    arr.every((item) => {
      let tmp = typeof item === "number";
      if (typeof item === "number") {
        const _isNaN = isNaN;
        tmp = !isNaN(item);
      }
      return tmp;
    })
  ) {
    return arr;
  } else {
    const _TypeError2 = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError1 = new TypeError("File content contains illegal values");
    throw typeError1;
  }
};
export { fetchFromObject };
export const findMatroskaDocTypeElements = function findMatroskaDocTypeElements(fileChunk) {
  const mapped = fileChunk.map((item) => String.fromCharCode(item));
  const joined = mapped.join("");
  let str = "webm";
  if (!joined.includes("webm")) {
    let str3;
    if (joined.includes("matroska")) {
      str3 = "mkv";
    }
    str = str3;
  }
  return str;
};
export const isftypStringIncluded = function isftypStringIncluded(fileChunk) {
  const items = [102, 116, 121, 112];
  let num = 0;
  if (0 < fileChunk.length - items.length) {
    while (true) {
      let num2 = 0;
      let flag = true;
      if (0 < items.length) {
        flag = false;
        while (fileChunk[num + num2] === items[num2]) {
          let sum = num2 + 1;
          num2 = sum;
          flag = true;
          if (sum >= items.length) {
            break;
          }
        }
      }
      if (flag) {
        break;
      } else {
        num = num + 1;
      }
    }
    return true;
  }
  return false;
};
export const isFlvStringIncluded = function isFlvStringIncluded(fileChunk) {
  const substr = fileChunk.slice(0, 3);
  const textDecoder = new TextDecoder();
  const decode = textDecoder.decode;
  const uint8Array = new Uint8Array(substr);
  const decodeResult = decode(uint8Array);
  return decodeResult.includes("FLV");
};
export const isFileContaineJfiforExifHeader = function isFileContaineJfiforExifHeader(arg0) {
  return 224 === tmp || 225 === tmp;
};
export const isAvifStringIncluded = function isAvifStringIncluded(fileChunk) {
  const substr = fileChunk.slice(4, 12);
  const mapped = substr.map((item) => String.fromCharCode(item));
  return "ftypavif" === mapped.join("");
};
export const isHeicSignatureIncluded = function isHeicSignatureIncluded(fileChunk) {
  const mapped = fileChunk.map((item) => String.fromCharCode(item));
  let closure_0 = mapped.join("");
  const items = ["ftypheic", "ftyphevc", "ftypmif1", "ftypmsf1"];
  return items.some((item) => closure_0.includes(item));
};
