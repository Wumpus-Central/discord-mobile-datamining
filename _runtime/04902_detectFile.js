// _runtime/04902_detectFile.js
import { getFileChunk } from "04903_getFileChunk.js";
import { 04904__ } from "metro/04904__.js";
let require = arg1;
const dependencyMap = arg6;
arg5.detectFile = function detectFile(uint8Array, chunkSize) {
  if (chunkSize) {
    const _Object = Object;
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
  const fileChunk = getFileChunk.getFileChunk(uint8Array, num3);
  if (0 !== fileChunk.length) {
    const items = [];
    const items1 = [];
    for (const key10027 in 04904__.FileTypes) {
      let tmp22 = key10027;
      let _Object4 = Object;
      let call2 = hasOwnProperty2.call;
      let tmp23 = require;
      let tmp24 = dependencyMap;
      let FileTypes5 = 04904__.FileTypes;
      if (typeof call2 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2(key10027);
      } else {
        hasOwnProperty2Result = call2(FileTypes5, key10027);
      }
      if (!hasOwnProperty2Result) {
        continue;
      } else {
        let FileTypes = tmp23(4904).FileTypes;
        let signaturesByName = FileTypes.getSignaturesByName(key10027);
        let FileTypes2 = tmp23(4904).FileTypes;
        let detectbBySignaturesResult = FileTypes2.detectbBySignatures(fileChunk, signaturesByName);
        if (!detectbBySignaturesResult) {
          continue;
        } else {
          let FileTypes3 = tmp23(4904).FileTypes;
          let infoByName = FileTypes3.getInfoByName(key10027);
          let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = tmp23(4904).FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
          if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(infoByName.extension)) {
            let arr = items1.push(infoByName.extension);
          }
          let obj = { extension: null, mimeType: null, description: null, signature: null };
          ({ extension: obj[0], mimeType: obj[1], description: obj[2] } = infoByName);
          let _Object2 = Object;
          let _Object3 = Object;
          obj = { sequence: null };
          let sequence = detectbBySignaturesResult.sequence;
          let merged = Object.assign({}, detectbBySignaturesResult);
          obj[0] = sequence.map((arg0) => arg0.toString(16));
          obj[3] = Object.assign(merged, obj);
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
      const FileTypes4 = 04904__.FileTypes;
      const result = FileTypes4.detectTypeByAdditionalCheck(fileChunk, items);
      require = result;
      if (result) {
        return items.find((extension) => extension.extension === closure_0);
      }
    }
  }
};