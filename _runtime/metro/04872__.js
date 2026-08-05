// _runtime/metro/04872__.js
import { getFileChunk } from "../04869_getFileChunk.js";
import { 04870__ } from "04870__.js";
const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp5 = key10007;
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp3 = self2;
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
          let tmp2 = hasOwnPropertyResult;
        }
      }
    };
  }
  let _Object2 = Object;
  exports.validateFileType = undefined;
  fn(require("isAAC"), exports);
  fn(require("is7Z"), exports);
  fn(require("isAVIF"), exports);
  fn(require("isBLEND"), exports);
  fn(require("isAVI"), exports);
  exports.validateFileType = function validateFileType(fileChunk, arr, chunkSize) {
    let items = [];
    const items1 = [
      ...new Set(arr.map((str) => {
        const parts = str.split(".");
        const formatted = parts.join("").toUpperCase();
        let combined = formatted;
        if ("7Z" === formatted) {
          const _HermesInternal = HermesInternal;
          combined = "_" + formatted;
        }
        return combined;
      }))
    ];
    for (const item10023 of items1) {
      let str = item10023;
      let _Object = Object;
      let call = hasOwnProperty.call;
      let tmp2 = require;
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = dependencyMap;
      let FileTypes = 04870__.FileTypes;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(item10023);
      } else {
        hasOwnPropertyResult = call(FileTypes, item10023);
      }
      if (hasOwnPropertyResult) {
        let tmp12 = item10023;
        arr = items.push(str);
        continue;
      } else {
        let _TypeError = TypeError;
        let tmp7 = item10023;
        let _HermesInternal = HermesInternal;
        let str2 = "` is not supported. Please make sure that `types` list conatins only supported files";
        let str3 = "Type `";
        let tmp8 = new.target;
        let tmp9 = new.target;
        let typeError = new TypeError("Type `" + str.toLowerCase() + "` is not supported. Please make sure that `types` list conatins only supported files");
        let tmp11 = typeError;
        throw typeError;
      }
    }
    if (chunkSize) {
      const _Object2 = Object;
      const call2 = hasOwnProperty2.call;
      if (typeof call2 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2("chunkSize");
      } else {
        hasOwnProperty2Result = call2(chunkSize, "chunkSize");
      }
      if (hasOwnProperty2Result) {
        chunkSize = undefined;
        if (null != chunkSize) {
          chunkSize = chunkSize.chunkSize;
        }
        let num = 0;
        if (null !== chunkSize) {
          num = 0;
          if (undefined !== chunkSize) {
            num = chunkSize;
          }
        }
        if (num <= 0) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("chunkSize must be bigger than zero");
          throw rangeError;
        }
      }
    }
    if (!chunkSize) {
      const arr3 = (function addSimilarTypes(items) {
        if (items.some((arg0) => "MP4" === arg0)) {
          items = ["M4V"];
        } else {
          items = items.some((arg0) => "AAC" === arg0) ? ["M4A"] : [];
        }
        return items;
      })(items);
      let combined = items;
      if (arr3.length > 0) {
        combined = items.concat(arr3);
      }
    } else {
      let excludeSimilarTypes;
      if (null != chunkSize) {
        excludeSimilarTypes = chunkSize.excludeSimilarTypes;
      }
      combined = items;
    }
    let items2 = [];
    const items3 = [];
    for (const item10079 of combined) {
      let tmp19 = item10079;
      let tmp20 = require;
      let tmp21 = require;
      let tmp22 = dependencyMap;
      let tmp23 = dependencyMap;
      let FileTypes2 = 04870__.FileTypes;
      let tmp24 = items2;
      items2 = items2.concat(FileTypes2.getSignaturesByName(item10079));
      let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = 04870__.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
      if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(item10079.toLowerCase())) {
        let tmp25 = tmp20;
        let tmp26 = tmp22;
        let FileTypes3 = tmp21(4870).FileTypes;
        let tmp27 = item10079;
        arr = items3.push(FileTypes3.getInfoByName(tmp19));
      }
      continue;
    }
    let num2;
    if (null != chunkSize) {
      num2 = chunkSize.chunkSize;
    }
    if (!num2) {
      num2 = 64;
    }
    fileChunk = getFileChunk.getFileChunk(fileChunk, num2);
    const FileTypes4 = 04870__.FileTypes;
    const detectSignatureResult = FileTypes4.detectSignature(fileChunk, items2);
    require = detectSignatureResult;
    if (detectSignatureResult) {
      if (items3.length > 0) {
        const found = items3.filter((signatures) => {
          signatures = signatures.signatures;
          return signatures.includes(closure_0);
        });
        if (found.length > 0) {
          const FileTypes5 = tmp29(4870).FileTypes;
          const result = FileTypes5.detectTypeByAdditionalCheck(fileChunk, found);
          const dependencyMap = result;
          return result && combined.some((str) => str.toLowerCase() === closure_1);
        }
      }
      return true;
    } else {
      return false;
    }
    const set = new Set(arr.map((str) => {
      const parts = str.split(".");
      const formatted = parts.join("").toUpperCase();
      let combined = formatted;
      if ("7Z" === formatted) {
        const _HermesInternal = HermesInternal;
        combined = "_" + formatted;
      }
      return combined;
    }));
    tmp29 = require;
    const tmp30 = require;
  };
} else {
  let _Object = Object;
}