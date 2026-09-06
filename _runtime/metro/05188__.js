// === Module 5188: ? ===

// Module 5188
import _mod5185 from "module_5185" /* 5185 */;
import _mod5186 from "module_5186" /* 5186 */;
import _mod5189 from "module_5189" /* 5189 */;
import is7Z from "is7Z" /* 5190 */;
import _mod5191 from "module_5191" /* 5191 */;
import _mod5192 from "module_5192" /* 5192 */;
import _mod5193 from "module_5193" /* 5193 */;

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
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
        }
      }
    };
  }
  let _Object2 = Object;
  exports.validateFileType = undefined;
  fn(_mod5189, exports);
  fn(is7Z, exports);
  fn(_mod5191, exports);
  fn(_mod5192, exports);
  fn(_mod5193, exports);
  exports.validateFileType = function validateFileType(fileChunk, arr, chunkSize) {
    let items = [];
    const items1 = [
      ...new Set(arr.map((item) => {
        const parts = item.split(".");
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
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      let FileTypes = _mod5186.FileTypes;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(item10023);
      } else {
        hasOwnPropertyResult = call(FileTypes, item10023);
      }
      if (hasOwnPropertyResult) {
        arr = items.push(item10023);
        continue;
      } else {
        let _TypeError = TypeError;
        let _HermesInternal = HermesInternal;
        let str2 = "` is not supported. Please make sure that `types` list conatins only supported files";
        let str3 = "Type `";
        let tmp8 = new.target;
        let tmp9 = new.target;
        let typeError = new TypeError("Type `" + item10023.toLowerCase() + "` is not supported. Please make sure that `types` list conatins only supported files");
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
        if (items.some((item) => "MP4" === item)) {
          items = ["M4V"];
        } else {
          items = items.some((item) => "AAC" === item) ? ["M4A"] : [];
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
      let tmp21 = require;
      let FileTypes2 = _mod5186.FileTypes;
      items2 = items2.concat(FileTypes2.getSignaturesByName(item10079));
      let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = _mod5186.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
      if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(item10079.toLowerCase())) {
        let FileTypes3 = tmp21(5186).FileTypes;
        arr = items3.push(FileTypes3.getInfoByName(item10079));
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
    fileChunk = _mod5185.getFileChunk(fileChunk, num2);
    const FileTypes4 = _mod5186.FileTypes;
    const detectSignatureResult = FileTypes4.detectSignature(fileChunk, items2);
    require = detectSignatureResult;
    if (detectSignatureResult) {
      if (items3.length > 0) {
        const found = items3.filter((signatures) => {
          signatures = signatures.signatures;
          return signatures.includes(detectSignatureResult);
        });
        if (found.length > 0) {
          const FileTypes5 = _mod5186.FileTypes;
          const result = FileTypes5.detectTypeByAdditionalCheck(fileChunk, found);
          dependencyMap = result;
          return result && combined.some((item) => item.toLowerCase() === result);
        }
      }
      return true;
    } else {
      return false;
    }
    const set = new Set(arr.map((item) => {
      const parts = item.split(".");
      const formatted = parts.join("").toUpperCase();
      let combined = formatted;
      if ("7Z" === formatted) {
        const _HermesInternal = HermesInternal;
        combined = "_" + formatted;
      }
      return combined;
    }));
  };
} else {
  let _Object = Object;
}