// _runtime/metro/05184__.js
import _mod5185 from "05185__.js";

const _mod5186 = tmp5(5186);
require = arg1;
const dependencyMap = arg6;

export const detectFile = function detectFile(uint8Array, chunkSize) {
  if (chunkSize) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("chunkSize");
    } else {
      hasOwnPropertyResult = call(chunkSize, "chunkSize");
    }
    if (hasOwnPropertyResult) {
      chunkSize = undefined;
      if (null != chunkSize) {
        chunkSize = chunkSize.chunkSize;
      }
      let num2 = 0;
      if (null !== chunkSize) {
        num2 = 0;
        if (undefined !== chunkSize) {
          num2 = chunkSize;
        }
      }
      if (num2 <= 0) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("chunkSize must be bigger than zero");
        throw rangeError;
      }
    }
  }
  let num3;
  if (null != chunkSize) {
    num3 = chunkSize.chunkSize;
  }
  if (!num3) {
    num3 = 64;
  }
  const fileChunk = _mod5185.getFileChunk(uint8Array, num3);
  if (0 !== fileChunk.length) {
    const items = [];
    const items1 = [];
    for (const key10027 in _mod5186.FileTypes) {
      let _Object4 = Object;
      let call2 = hasOwnProperty2.call;
      let tmp23 = require;
      let FileTypes5 = _mod5186.FileTypes;
      if (typeof call2 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2(key10027);
      } else {
        hasOwnProperty2Result = call2(FileTypes5, key10027);
      }
      if (!hasOwnProperty2Result) {
        continue;
      } else {
        let FileTypes = tmp23(5186).FileTypes;
        let signaturesByName = FileTypes.getSignaturesByName(key10027);
        let FileTypes2 = tmp23(5186).FileTypes;
        let detectbBySignaturesResult = FileTypes2.detectbBySignatures(fileChunk, signaturesByName);
        if (!detectbBySignaturesResult) {
          continue;
        } else {
          let FileTypes3 = tmp23(5186).FileTypes;
          let infoByName = FileTypes3.getInfoByName(key10027);
          let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = tmp23(5186).FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
          if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(infoByName.extension)) {
            let arr = items1.push(infoByName.extension);
          }
          let obj = { extension: null, mimeType: null, description: null, signature: null };
          ({ extension: obj.extension, mimeType: obj.mimeType, description: obj.description } = infoByName);
          let _Object2 = Object;
          let _Object3 = Object;
          obj = { sequence: null };
          let sequence = detectbBySignaturesResult.sequence;
          let merged = Object.assign({}, detectbBySignaturesResult);
          obj.sequence = sequence.map((item) => item.toString(16));
          obj.signature = Object.assign(merged, obj);
          arr = items.push(obj);
          continue;
        }
        continue;
      }
      continue;
    }
    if (0 !== items.length) {
      if (1 === items.length) {
        if (0 === items1.length) {
          return items[0];
        }
      }
      const FileTypes4 = _mod5186.FileTypes;
      const result = FileTypes4.detectTypeByAdditionalCheck(fileChunk, items);
      require = result;
      if (result) {
        return items.find((extension) => extension.extension === result);
      }
    }
  }
};
