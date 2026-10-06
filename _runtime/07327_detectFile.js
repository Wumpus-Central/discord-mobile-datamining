// _runtime/07327_detectFile.js
import _mod7328 from "metro/07328__.js";
import _mod7329 from "metro/07329__.js";

let hasOwnProperty;

export const detectFile = function detectFile(uint8Array, chunkSize) {
  const tmp = chunkSize;
  if (tmp) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(chunkSize, "chunkSize")) {
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
        const self = this;
        const self2 = this;
        const rangeError = new RangeError("chunkSize must be bigger than zero");
        throw rangeError;
      }
    }
  }
  let num3;
  const getFileChunk = _mod7328.getFileChunk;
  if (null != chunkSize) {
    num3 = chunkSize.chunkSize;
  }
  if (!num3) {
    num3 = 64;
  }
  const fileChunk = getFileChunk(uint8Array, num3);
  if (0 !== fileChunk.length) {
    const items = [];
    const items1 = [];
    for (const key10027 in _mod7329.FileTypes) {
      let _Object4 = Object;
      let hasOwnProperty2 = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty2.call(_mod7329.FileTypes, key10027)) {
        continue;
      } else {
        let FileTypes = _mod7329.FileTypes;
        let signaturesByName = FileTypes.getSignaturesByName(key10027);
        let FileTypes2 = _mod7329.FileTypes;
        let detectbBySignaturesResult = FileTypes2.detectbBySignatures(fileChunk, signaturesByName);
        if (!detectbBySignaturesResult) {
          continue;
        } else {
          let FileTypes3 = _mod7329.FileTypes;
          let infoByName = FileTypes3.getInfoByName(key10027);
          let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = _mod7329.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
          if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(infoByName.extension)) {
            let arr = items1.push(infoByName.extension);
          }
          let obj = { extension: null, mimeType: null, description: null, signature: assign(merged, obj2) };
          ({ extension: obj.extension, mimeType: obj.mimeType, description: obj.description } = infoByName);
          let _Object2 = Object;
          let _Object3 = Object;
          let obj2 = { sequence: sequence.map((item) => item.toString(16)) };
          let sequence = detectbBySignaturesResult.sequence;
          let merged = Object.assign({}, detectbBySignaturesResult);
          let arr2 = items.push(obj);
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
      const FileTypes4 = _mod7329.FileTypes;
      const result = FileTypes4.detectTypeByAdditionalCheck(fileChunk, items);
      if (result) {
        return items.find((extension) => extension.extension === result);
      }
    }
  }
};
